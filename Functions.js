/*
write a code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newList = [...arr]
  newList.push(bookName)
  return newList; 
}

function remove(arr,bookName) {
  return arr.filter(book => book !== bookName)
}

console.log(add(bookList,"A Brief History of Time"))//outputs ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae","A Brief History of Time"]
console.log(remove(bookList,"A Brief History of Time"))//outputs bookList
