// Q1: Function This
// Testing variables, control flow, function composition
function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
        var x = key(iterable[i]);
        if (x >= key(maximum)) {
            maximum = iterable[i];
        }
    }
    // Implement a function which finds the maximum in a list after applying    // function `key` to each element
    // ex. max([3, 1, 2], (x) => x) = 3
    // ex. max([-1, -4, 4, 6], (x) => 1 / x) = 4     
    return maximum;
}

let lst = [1, -2, 3];
function integer(n) {
    return n;
}

// console.log(max(lst, integer));

// Q2: Flip It and Reverse It
// Testing anonymous (arrow) function and function composition
const reverser = (n) => {return -1 * n};// Given a list of real numbers, write an anonymous function that we can pass as the key to `max` to return the smallest element
// ex. max([1, -2, 3], reverser) = -2

console.log(max(lst, reverser));
// Q3: What is This?
// Testing knowledge of this, operators, and builtins
//
const thiser = {
    a: (Math.random() * 100),
    b: (Math.random() * 100),
    x: (Math.random() * 100),
    y: (Math.random() * 100),
    // distance: Math.sqrt(Math.pow(a - x), 2) + Math.pow((b - y), 2)
        // return the Euclidean distance between the point (a, b) and (x, y)
        // hint: Euclidean distance is given by sqrt((a - x)^2 + (b - y)^2)     
}

// Q4: Objects Gworl
// Testing Objects (JSON), Arrays, and Object Properties
function changer(object, key, value) {
    let prev = object[key]
    if (Array.isArray(prev)) {
        // what to do if value associated with key is an array
        prev.push(value);
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        // what to do if value is a JSON object
        prev[key] = value;
    } else {
        // what to do if neither
        prev = value;
    }
    return null
}

var objects = {
    "time": "essence",
    "arrays": [0, 1, 2, 3],
    "object": {
        "place": "warm",
        "fire": "cold",
        "bed": "room"
    }
}
changer(objects, "object", "pro", "value");
console.log(objects)

// Q5: Promises Promises
// Testing asynchronous, promises, 
async function promise_me() {
    const a = new Promise((resolve, reject) => {
        // use this line to print the first value
        console.log(1);
        // use this line to resolve the value that we will need later
        resolve(5);
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await 5;// how do we get the value that we saved earlier?
    console.log(five)
}
// promise_me(1)
promise_me();

