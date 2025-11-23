const recipes = {
    creamers: [
        {
            name: "Cinnamon Brown Sugar",
            badge: "Robert's Favorite",
            thumb: "./optimized/cinnamon-brown-sugar-thumb.webp",
            image: "./optimized/cinnamon-brown-sugar-large.webp",
            description: "Rich and creamy with warm spice notes.",
            time: "10 min",
            difficulty: "Easy",
            ingredients: [
                "1 can (14oz) sweetened condensed milk",
                "1 cup half and half",
                "1/2 cup brown sugar",
                "2 tablespoons cane sugar",
                "1 cup heavy cream",
                "2 teaspoons ground cinnamon",
                "Pinch of salt"
            ],
            instructions: [
                "Combine cream, sugars, cinnamon, and salt in saucepan",
                "Heat until sugar dissolves (5 min)",
                "Cool for 5 minutes",
                "Mix condensed milk with half and half",
                "Add cinnamon mixture and stir",
                "Store in fridge up to 2 weeks"
            ]
        },
        {
            name: "Pure Vanilla",
            badge: "Cleanest Recipe",
            thumb: "./optimized/vanilla-bean-thumb.webp",
            image: "./optimized/vanilla-bean-large.webp",
            description: "Beautifully simple. Three ingredients, infinite satisfaction.",
            time: "5 min",
            difficulty: "Easiest",
            ingredients: [
                "1 can (14oz) sweetened condensed milk",
                "1.5 cups half and half",
                "2 tablespoons pure vanilla extract"
            ],
            instructions: [
                "Mix condensed milk with half and half",
                "Add vanilla extract",
                "Shake well",
                "Store in fridge up to 2 weeks"
            ]
        },
        {
            name: "Maple Glazed Donut",
            badge: "Sweet Indulgence",
            thumb: "./optimized/maple-cinnamon-thumb.webp",
            image: "./optimized/maple-cinnamon-large.webp",
            description: "Like dunking a glazed donut in your coffee.",
            time: "10 min",
            difficulty: "Easy",
            ingredients: [
                "1 can (14oz) sweetened condensed milk",
                "1.5 cups heavy cream",
                "3/4 cup whole milk",
                "1/3 cup pure maple syrup",
                "2 teaspoons vanilla extract",
                "1 teaspoon cinnamon",
                "2 tablespoons melted butter"
            ],
            instructions: [
                "Mix condensed milk, cream, and milk",
                "Add maple syrup, vanilla, cinnamon",
                "Whisk in cooled melted butter",
                "Shake well to combine",
                "Store in fridge up to 2 weeks"
            ]
        },
        {
            name: "Caramel Apple Crisp",
            badge: "Fall Favorite",
            thumb: "./optimized/honey-lavender-thumb.webp",
            image: "./optimized/honey-lavender-large.webp",
            description: "Liquid apple pie with caramel notes.",
            time: "20 min",
            difficulty: "Medium",
            ingredients: [
                "1 can (14oz) dulce de leche",
                "1.5 cups half and half",
                "1 cup apple cider",
                "1/2 teaspoon cinnamon",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Reduce apple cider by half (15 min)",
                "Cool slightly",
                "Mix dulce de leche with half and half",
                "Add reduced cider and vanilla",
                "Shake well",
                "Store in fridge up to 2 weeks"
            ]
        },
        {
            name: "Pumpkin Spice",
            badge: "Fall Favorite",
            description: "Warm autumn spices in every sip.",
            time: "15 min",
            difficulty: "Easy",
            thumb: "./optimized/pumpkin-spice-thumb.webp",
            image: "./optimized/pumpkin-spice-large.webp",
            ingredients: [
                "1 can (14oz) sweetened condensed milk",
                "1 cup half and half", 
                "2 teaspoons vanilla extract",
                "1 teaspoon cinnamon",
                "1/2 teaspoon nutmeg",
                "1/4 teaspoon ground ginger",
                "1/8 teaspoon ground cloves"
            ],
            instructions: [
                "Mix all spices in small bowl",
                "Combine milk and half and half",
                "Add vanilla and spice mixture", 
                "Whisk until smooth",
                "Store in fridge up to 2 weeks"
            ]
        },
        {
            name: "Coconut Vanilla",
            badge: "Tropical Twist",
            description: "Creamy coconut with pure vanilla notes.",
            time: "10 min",
            difficulty: "Easy",
            thumb: "./optimized/cinnamon-cold-foam-thumb.webp",
            image: "./optimized/cinnamon-cold-foam-large.webp",
            ingredients: [
                "1 can (14oz) coconut milk",
                "1/2 cup half and half",
                "1/3 cup maple syrup",
                "2 teaspoons vanilla extract",
                "Pinch of sea salt"
            ],
            instructions: [
                "Shake coconut milk well",
                "Mix with half and half",
                "Add maple syrup and vanilla",
                "Add pinch of salt",
                "Whisk until smooth",
                "Store in fridge up to 1 week"
            ]
        }
    ],
    syrups: [
        {
            name: "Brown Sugar Simple Syrup",
            badge: "Best for Iced",
            thumb: "./optimized/simple-syrup-thumb.webp",
            image: "./optimized/simple-syrup-large.webp",
            description: "Perfect for cold brew.",
            time: "15 min",
            difficulty: "Easy",
            ingredients: [
                "1 cup water",
                "1 cup dark brown sugar",
                "1-2 tablespoons maple syrup",
                "1 teaspoon vanilla extract",
                "Pinch of salt"
            ],
            instructions: [
                "Combine water, sugar, maple syrup, salt",
                "Heat until dissolved (10-15 min)",
                "Cool and add vanilla",
                "Store in fridge up to 4 weeks"
            ]
        },
        {
            name: "Vanilla Simple Syrup",
            badge: "Most Versatile",
            thumb: "./optimized/vanilla-bean-thumb.webp",
            image: "./optimized/vanilla-bean-large.webp",
            description: "Clean and classic.",
            time: "10 min",
            difficulty: "Easiest",
            ingredients: [
                "1 cup water",
                "1 cup sugar",
                "2 tablespoons vanilla extract"
            ],
            instructions: [
                "Heat water and sugar until dissolved",
                "Cool and add vanilla",
                "Store in fridge up to 4 weeks"
            ]
        }
    ],
    coldcoffee: [
        {
            name: "Blueberry Iced Coffee",
            badge: "Summer Special",
            description: "Fresh blueberry flavor with smooth coffee.",
            time: "15 min",
            difficulty: "Easy",
            thumb: "./optimized/cold-brew-thumb.webp",
            image: "./optimized/cold-brew-large.webp",
            ingredients: [
                "1 cup strong cold brew coffee",
                "1/2 cup fresh blueberries",
                "2-3 tablespoons honey or maple syrup",
                "1/4 cup milk of choice", 
                "Ice cubes",
                "Extra blueberries for garnish"
            ],
            instructions: [
                "Muddle blueberries with sweetener",
                "Strain to get blueberry syrup", 
                "Fill glass with ice",
                "Add cold brew and blueberry syrup",
                "Top with milk",
                "Garnish with fresh blueberries"
            ]
        },
        {
            name: "Vanilla Cold Brew Concentrate",
            badge: "Make Ahead",
            description: "Perfect base for iced coffee drinks.",
            time: "12 hours",
            difficulty: "Easy",
            thumb: "./optimized/cold-brew-thumb.webp",
            image: "./optimized/cold-brew-large.webp",
            ingredients: [
                "1 cup coarse ground coffee",
                "4 cups cold water",
                "2 teaspoons vanilla extract",
                "1 tablespoon brown sugar (optional)"
            ],
            instructions: [
                "Mix coffee grounds and water",
                "Steep 12-24 hours at room temp", 
                "Strain through fine mesh",
                "Add vanilla and sugar",
                "Store in fridge up to 2 weeks",
                "Dilute 1:1 with water or milk"
            ]
        },
        {
            name: "Coconut Iced Latte",
            badge: "Tropical Vibes",
            description: "Creamy coconut meets rich espresso.",
            time: "5 min",
            difficulty: "Easy",
            thumb: "./optimized/iced-vanilla-latte-thumb.webp",
            image: "./optimized/iced-vanilla-latte-large.webp",
            ingredients: [
                "2 shots espresso or 1/2 cup strong coffee",
                "1/2 cup coconut milk",
                "2 tablespoons coconut cream",
                "1 tablespoon maple syrup",
                "Ice cubes",
                "Toasted coconut flakes"
            ],
            instructions: [
                "Brew espresso and let cool",
                "Mix coconut milk and cream",
                "Add maple syrup to taste",
                "Fill glass with ice", 
                "Pour coffee over ice",
                "Top with coconut mixture and flakes"
            ]
        }
    ]
};

let currentTab = 'creamers';

function switchTab(type) {
    currentTab = type;
    document.querySelectorAll('.tab').forEach(tab => {
        const tabText = tab.textContent.toLowerCase().replace(/\s+/g, '');
        tab.classList.toggle('active', tabText === type);
    });
    renderRecipes();
}

function renderRecipes() {
    const grid = document.getElementById('recipes-grid');
    grid.innerHTML = recipes[currentTab].map((r, i) => `
        <div class="recipe-card" onclick="openModal(${i})">
            ${r.thumb || r.image ? `<img class="recipe-image" src="${r.thumb || r.image}" alt="${r.name}">` : ''}
            <div class="recipe-content">
                <span class="recipe-badge">${r.badge}</span>
                <h3 class="recipe-name">${r.name}</h3>
                <p class="recipe-description">${r.description}</p>
                <div class="recipe-meta">
                    <span>⏱ ${r.time}</span>
                    <span>📊 ${r.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openModal(index) {
    const recipe = recipes[currentTab][index];
    const modalImage = document.getElementById('modal-image');
    modalImage.src = recipe.image || '';
    modalImage.alt = recipe.name || '';
    document.getElementById('modal-body').innerHTML = `
        <h2>${recipe.name}</h2>
        <div class="detail-grid">
            <div class="detail-section">
                <h3>Ingredients</h3>
                ${recipe.ingredients.map(i => `
                    <div class="ingredient-item">
                        <span>✓</span><span>${i}</span>
                    </div>
                `).join('')}
            </div>
            <div class="detail-section">
                <h3>Instructions</h3>
                ${recipe.instructions.map((s, i) => `
                    <div class="step-item">
                        <span>${i+1}.</span><span>${s}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

renderRecipes();
