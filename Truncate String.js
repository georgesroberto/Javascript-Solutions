function truncateString(str, num) {
    if (num < str.length)
    {
      let dent = str.slice(0, num)  
      return dent + "...";
    } else {
      return str
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));