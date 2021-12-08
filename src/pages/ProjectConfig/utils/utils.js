//ProjectLog.js
export const checkForDuplicates = (string, array) => {
  let codeIsDuplicated = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      codeIsDuplicated = true;
      return codeIsDuplicated;
    }
  }
  return codeIsDuplicated;
};

//HotelProjectForm.js & ScheduleProjectForm.js
export const findSelectedOptions = (array, fullArray) => {
  //find the selected options in the array and return them
  let selectedOptionsFullObject = [];
  let flatArray = array.map((item) => item.value);
  fullArray.forEach((item) => {
    if (flatArray.includes(item.name)) {
      selectedOptionsFullObject.push(item);
    }
  });
  return selectedOptionsFullObject;
};

//ScheduleProjectForm.js
export const whichDay = (counter, daydifference) => {
  if (counter === 1) {
    return "Arrival Day";
  } else if (counter === daydifference) {
    return "Departure Day";
  } else {
    return "Day " + counter;
  }
};
