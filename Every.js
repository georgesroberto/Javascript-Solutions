//Returns true if all conditions are met and false if not
function checkPositive(arr) {
  return arr.every(function(real){
    return real > 0;
  });
}
console.log(checkPositive([1, 2, 3, -4, 5]));//returns false since -4 isn't greater than 0

//Kinda opposite of every is some
function checkPositive(arr) {
  // Only change code below this line
  return arr.some(function(value){
    return value > 0
  })
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));//outputs true since there is a positive integer in the given array


//Bonus point is the curry method
function add(x){
    return function(y){
      return function(z){
        return x + y + z
      }
    }
}

console.log(add(10)(20)(30));
