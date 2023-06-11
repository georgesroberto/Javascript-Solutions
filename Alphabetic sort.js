function alphabeticalOrder(arr) {
  return arr.sort() || arr.sort(function(a,b){
    return a === b ? 0 : a < b ? 1 : -1
  });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));