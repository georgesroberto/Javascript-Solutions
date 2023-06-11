function sentensify(str) {
  //first convert string to array
  //split the array using regex
  //join the split array
  return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));