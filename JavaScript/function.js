// function : is a block of code to perform certain task

// function with no parameters
function hello() {
console.log('Hello world');
}

// function call
hello();
hello();
hello();

// function with parameters
function mern(html, css, js) {
    console.log(`you have to learn html ${html} then ${css} and ${js}`);
}
// value passed to function
mern('first', 'second', 'third');

// add
function add(a, b, c) {
    // when we declare variable inside function, we have to use return
    const sum = a + b + c;
    return sum;
}

console.log(add(10, 20, 30));