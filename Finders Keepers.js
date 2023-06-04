function findElement(arr, func) {
    let num;
  
    for(let x = 0; x < arr.length; x++)
    {
      num = arr[x];
      if(func(num)){
        return num
      } 
    }
    return undefined;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))