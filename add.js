// Create a new JavaScript file named arrayMethodsActivity.js

// Task 1: Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const joinedArray = arr1.concat(arr2);
console.log("Joined array:", joinedArray);

// Task 2: Use push() to add an element to the fruits array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits array after adding Kiwi:", fruits);

// Task 3: Use unshift() to add elements to the beginning of the array
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after adding 4 and 5 to the beginning:", array1);

// Task 4: Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits array after removing the last element:", fruits);

// Task 5: Use shift() to remove the first element from the array
const array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after removing the first element:", array2);

// Task 6: Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Fruits array sorted alphabetically:", fruits);

// Task 7: Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits array:", slicedFruits);

// Task 8: Use splice() to insert and remove elements in the months array
const months = ["January", "February", "March", "April"];
months.splice(1, 2, "May", "June");
console.log("Months array after inserting and removing elements:", months);
