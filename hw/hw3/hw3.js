// Q1: Function This
// Testing variables, control flow, function composition
function max(iterable, key) {
    var maximum = -Infinity;
    for (var i in iterable) {
        var x = key(iterable[i]);
        if (x >= maximum) {
            maximum = iterable[i];
        }
    }
    // Implement a function which finds the maximum in a list after applying    // function `key` to each element
    // ex. max([3, 1, 2], (x) => x) = 3
    // ex. max([-1, -4, 4, 6], (x) => 1 / x) = 4     
    return maximum;
}

let lst = [3, 2, 1];
function integer(n) {
    return n;
}

console.log(max(lst, integer));

// Q2: Flip It and Reverse It
// Testing anonymous (arrow) function and function composition
const reverser = (n) => {return -1 * 100/n};// Given a list of real numbers, write an anonymous function that we can pass as the key to `max` to return the smallest element
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
    distance: Math.sqrt(Math.pow(a - x), 2) + Math.pow((b - y), 2)
        // return the Euclidean distance between the point (a, b) and (x, y)
        // hint: Euclidean distance is given by sqrt((a - x)^2 + (b - y)^2)     
}

// Q4: Objects Gworl
// Testing Objects (JSON), Arrays, and Object Properties
function changer(object, key, value) {
    let prev = object[key]
    if (Array.isArray(prev)) {
        // what to do if value associated with key is an array
        
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        // what to do if value is a JSON object
    } else {
        // what to do if neither
    }
    return null
}

// Q5: Promises Promises
// Testing asynchronous, promises, 
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        // use this line to print the first value
        // use this line to resolve the value that we will need later
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = // how do we get the value that we saved earlier?
    console.log(five)
    return five
}

promise_me()