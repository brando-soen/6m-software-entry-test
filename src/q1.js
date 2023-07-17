/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
  // Task 1: Add code here
  console.log("Original x value is "+ x)
  console.log("Original y value is "+ y)


 if (typeof x !== 'number' || typeof y !== 'number') {
      console.log("x and y must be a numeric.")
      return -1; 
    }
    console.log("Swapping...")
    temp = x
    x = y  
    y = temp

    console.log("x is now " + x)
    console.log("y is now " + y)
}

// Task 2: Add code here
swap(10,20)  // input x, y values here
swap(555,888)  // input x, y values here
swap('hola',777)  // input x, y values here

module.exports = swap;
