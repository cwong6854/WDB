const num = 6;

const func = function(n) {
    return n * 1000;
}

console.log(func(6));

let ship = {
    window: 'tinted',
    material: 'wood',
    fuel_type: 'Supreme',
    mileage: 9000,
    sail (left, right) {
        if (left && !right) {
            console.log('Sail to the left!');
        } else if (right && !left) {
            console.log('Sail to the right!')
        } else {
            console.log('Keep going straight!')
        }
    }
}

console.log(ship.sail(true, true));

for (let types in ship) {
    console.log(types);
}

var states = ['SF', 'NY', 'WA', 'WYM', 'IL', 'TX']

for (let i = 0; i < states.length; i ++) {
    console.log(`I live in ${states[i]}`);
}

let light = true;

if (light) {
    console.log('Turn off the lights!');
} else {
    console.log('Turn on the lights!');
}


const minusTwo = (n) => {
    return n - 2;
}

let thirty = 30;

while (thirty > 0) {
    console.log(thirty);
    thirty = minusTwo(thirty);
}