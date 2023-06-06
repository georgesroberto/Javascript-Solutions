function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['Alien', 'line']))//outputs true
console.log(mutation(['hello', 'hey']))//outputs false(misses y )

function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort()
      .indexOf(num)
}

console.log(getIndexToIns([40, 60], 50));

function chunkArrayInGroups(arr, size) {
    //.push() is used to add an item to an array
    //.slice() is used to separate an array
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

console.log(chunkArrayInGroups(['a','b','c','d'],2))