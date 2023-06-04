function upperCAse(ucStr){
  return ucStr.toUpperCase;
}

function lowerCAse(lcStr){
  return lcStr.toLowerCase;
}

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(upperCAse("roberto georges"));

console.log(lowerCAse("hElLo WorLD"));

console.log(titleCAse("roberto georges"));