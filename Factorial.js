function factorializeByLoop(num) {
    //define product variable to store total value
    //assign 1 to it since factorial multiplies decrementing till 1
    
    let product = 1;

    //i is set to 2, and is tested against the num input then incremented
    for (let i = 2; i <= num; i++) {

        //product is multiplied to the value of i and looped
      product *= i;
    }
    console.log(product) 
    //return product;
}

function factorialize(num) {
    /*
     *tets num if less than 0. and exits if else ( ? 1)
     *else (:) create a new array of num.
     *reduce() is an arrow function with 2 parameters 'product and array index' 
     *it returns (=>) multiplied product by array index
    */
    return num < 0 ? 1 :
      new Array(num)
        .fill(undefined)
        .reduce((product, _, index) => product * (index + 1), 1);

    //can also be written as
    //return num < 0 ? 1 : new Array(num).fill(undefined).reduce((product, _, index) => product * (index + 1), 1);
}

function factorializeByRecursion(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorializeByRecursion(num - 1);
    }
}

console.log(factorializeByRecursion(5))

