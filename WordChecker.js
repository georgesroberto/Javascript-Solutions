function quickCheck(arr, elem) {
  // Use of indexOf() to serach for a word in an array
  let test = arr.indexOf(elem)
  if ( test >= 0){
    return true;
  } else {
    return false;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
