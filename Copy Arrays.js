function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // initialize a variable with the "arr" array
    let obj = [...arr]
    //add it to the new array num times
    newArr.push(obj)
    // Decrement num
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

function spreadOut() {
  let fragment = ['to', 'code'];
  //spread operator add the arr /fragment/ at desired position of an existing array /sentence/
  let sentence = ['Learning',...fragment,'is', 'fun' ]; // Change this line
  return sentence;
}

console.log(spreadOut());
