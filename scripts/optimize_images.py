#!/usr/bin/env python3
from PIL import Image
from pathlib import Path
import sys

# Configuration
SRC_DIR = Path(r"C:\Users\rbout\coffee-cafe-images")
OUT_DIR = SRC_DIR / 'optimized'
FORMATS = ('.jpg', '.jpeg', '.png', '.webp')
# sizes = name: max_width
SIZES = {'large': 1200, 'thumb': 600}
JPG_QUALITY = 85
WEBP_QUALITY = 80

OUT_DIR.mkdir(exist_ok=True)

def process_image(p: Path):
    name = p.stem
    try:
        im = Image.open(p)
    except Exception as e:
        print(f"Skipping {p.name}: open error: {e}")
        return

    # convert to RGB for JPG (handle alpha)
    if im.mode in ('RGBA', 'LA'):
        bg = Image.new('RGB', im.size, (255,255,255))
        bg.paste(im, mask=im.split()[-1])
        base = bg
    else:
        base = im.convert('RGB')

    for label, max_w in SIZES.items():
        # calculate new size preserving aspect
        w, h = base.size
        if w <= max_w:
            resized = base.copy()
        else:
            new_h = int(max_w * h / w)
            resized = base.resize((max_w, new_h), Image.LANCZOS)

        out_jpg = OUT_DIR / f"{name}-{label}.jpg"
        out_webp = OUT_DIR / f"{name}-{label}.webp"

        try:
            resized.save(out_jpg, format='JPEG', quality=JPG_QUALITY, optimize=True)
            resized.save(out_webp, format='WEBP', quality=WEBP_QUALITY, method=6)
            print(f"Wrote: {out_jpg.name} ({resized.size}), {out_webp.name}")
        except Exception as e:
            print(f"Failed saving {name}-{label}: {e}")

if __name__ == '__main__':
    # allow optional path arg
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else SRC_DIR
    if not src.exists():
        print(f"Source path {src} does not exist")
        sys.exit(1)

    files = [p for p in src.iterdir() if p.suffix.lower() in FORMATS and p.is_file()]
    if not files:
        print("No images found to process in", src)
        sys.exit(0)

    for p in files:
        process_image(p)

    print('Done.')
