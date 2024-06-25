const lunchOptions = {
    entrees: [
        '🥪 Ham and cheese sandwich',
        '🍕 Mini pizza',
        '🌮 Soft taco',
        '🍗 Chicken nuggets',
        '🍝 Mac and cheese',
        '🥘 Veggie fried rice',
        '🍣 California roll sushi',
        '🥙 Turkey wrap',
        '🥗 Caesar salad',
        '🍔 Slider burger',
        '🌭 Mini hot dog',
        '🥟 Dumplings',
        '🍜 Chicken noodle soup',
        '🥐 Grilled cheese sandwich',
        '🥚 Hard-boiled eggs',
        '🍖 BBQ chicken strips',
        '🥯 Bagel with cream cheese',
        '🌯 Bean and cheese burrito',
        '🥠 Veggie spring rolls',
        '🍲 Alphabet soup',
        '🥫 Spaghetti-Os',
        '🥞 Mini pancakes',
        '🧆 Falafel bites',
        '🥪 Peanut butter and jelly sandwich',
        '🍳 Mini quiche'
    ],
    sides: [
        '🍎 Apple slices',
        '🥕 Baby carrots',
        '🍇 Grapes',
        '🥒 Cucumber sticks',
        '🍓 Strawberries',
        '🥨 Pretzels',
        '🧀 Cheese cubes',
        '🍿 Popcorn',
        '🥜 Mixed nuts',
        '🍊 Mandarin oranges',
        '🥑 Guacamole with chips',
        '🍌 Banana',
        '🥦 Broccoli florets',
        '🍉 Watermelon cubes',
        '🥔 Potato chips',
        '🍍 Pineapple chunks',
        '🥗 Side salad',
        '🍠 Sweet potato fries',
        '🥐 Croissant',
        '🍈 Honeydew melon balls',
        '🥖 Breadsticks',
        '🍅 Cherry tomatoes',
        '🥭 Mango slices',
        '🥛 Yogurt cup',
        '🍪 Chocolate chip cookie'
    ]
};

function pickLunch(child) {
    const entree = lunchOptions.entrees[Math.floor(Math.random() * lunchOptions.entrees.length)];
    const side = lunchOptions.sides[Math.floor(Math.random() * lunchOptions.sides.length)];
    
    const entreeElement = document.getElementById(`${child}-entree`);
    const sideElement = document.getElementById(`${child}-side`);
    
    entreeElement.style.animation = 'none';
    sideElement.style.animation = 'none';
    
    setTimeout(() => {
        entreeElement.textContent = `Entree: ${entree}`;
        sideElement.textContent = `Side: ${side}`;
        entreeElement.style.animation = 'popIn 0.5s ease';
        sideElement.style.animation = 'popIn 0.5s ease 0.2s';
    }, 10);
}
