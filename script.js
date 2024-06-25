const lunchOptions = {
    entrees: [
        'Ham sandwich with cucumber and tomato',
        'Fried rice with corn',
        'Stir fried noodles with zucchini',
        'Eel cucumber sushi',
        'Chicken nuggets'
    ],
    sides: [
        'Apple slices',
        'Carrot sticks',
        'Orange segments',
        'Potato chips',
        'Grapes'
    ]
};

function pickLunch(child) {
    const entree = lunchOptions.entrees[Math.floor(Math.random() * lunchOptions.entrees.length)];
    const side = lunchOptions.sides[Math.floor(Math.random() * lunchOptions.sides.length)];
    document.getElementById(`${child}-entree`).textContent = `Entree: ${entree}`;
    document.getElementById(`${child}-side`).textContent = `Side: ${side}`;
}
