function confirmEnding(str, target) {
    if(str.endsWith(target)){
      return true;
    } else {
      return false;
    }
  }
  console.log(confirmEnding("Bastian", "n"));