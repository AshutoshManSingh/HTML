// array is a collection of DataTransfer, [1, 2, 3, "hello"]

// array starts form index 0
const new_array = [1, 2, 3, 4];
console.log(new_array[0]);

// array of strings
const strings = ['hello', 'world'];
console.log(strings);

const intro = ['ashutosh', 'man', 'singh', 16];
console.log(`my name is ${intro[0]} and I am ${intro[1]} ${intro[2]} I am ${intro[3]}years old`);

const fruits = ['apple' , 'mango', 'banana'];
console.log(fruits);

// push: add new element to the end of the array
fruits.push("tomato");
console.log(fruits);

// unshift: add new element to the start of the array
fruits.unshift('orange');
console.log(fruits);


// pop : remove the last element from the array
fruits.pop();
console.log(fruits);

// shift : remove he first element from the array
fruits.shift();
console.log(fruits);

const array = [];
array.push(1,2,3);
console.log(array);
console.log(array[0] + array[1] + array[2]);