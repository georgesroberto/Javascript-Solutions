function whatIsInAName(collection, source) {
  // What's in a name?
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    let found = true;
    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    if (found) arr.push(collection[i]);
  }
  return arr;
}

function whatsInAName(collection, source) {
  const souceKeys = Object.keys(source);
  return collection.filter(obj => souceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b));
}

function isInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection
    .filter(obj => sourceKeys
      .every(key => obj.hasOwnProperty(key) &&
        obj[key] === source[key]));
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Romeo" }));