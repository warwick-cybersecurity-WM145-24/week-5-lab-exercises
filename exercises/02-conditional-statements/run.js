/**
 * return true if even number
 * return false if and odd number
 */
isNumberEven = function (inputValue) { 
  /**
   * if the nyumber given has a remainder of zero when divided its an even number,
   * if it doesnt its odd
   *
   */
  if (inputValue %2 ==0) {
    return true;
  }
  else {
    return false;
  }
};

/**
 * return true if number is between 12 and 19
 * return true if number is 3333
 * return false if number is anything else
 */
complexIfStatements = function (inputValue) {
  if ((inputValue >= 12 && inputValue <= 19) || inputValue ===3333) {
    return true;
  } 
  else {
    return false;
  }
};

/**
 * if 0 is sent in, return Monday, 1=Tuesday ... 6=Sunday
 * if any other number is sent in throw an error
 * if anything other than a number is sent in, throw an error
 */


switchStatements = function (numberOfDayOfWeek) {
  let day;
  switch (numberOfDayOfWeek) {
    case 0:
      day = "Monday";
      break;
    case 1:
      day = "Tuesday";
      break;
    case 2:
      day = "Wednesday"
      break;
    case 3: 
      day = "Thursday" 
      break;
    case 4:
      day = "Friday"
      break;
    case 5:
      day = "Saturday"
      break;
    case 6:
      day = "Sunday"
      break;      
    default:
      if (numberOfDayOfWeek >6) throw new RangeError("Input day number is not between 0 and 6")
      if (typeof numberOfDayOfWeek !==  "number") throw new TypeError("Input day number is not a number between 0 and 6")
      throw new Error('Invalid day number');

  }

  return day;
};
module.exports = {
  isNumberEven,
  complexIfStatements,
  switchStatements
}
