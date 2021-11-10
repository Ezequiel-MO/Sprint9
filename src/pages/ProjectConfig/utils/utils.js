//ProjectLog.js
export const checkForDuplicates = (string, array) => {
  const duplicateArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      duplicateArr.push(string);
    }
  }
  const codeIsDuplicated = duplicateArr.length > 1;
  const codeIsUnique = duplicateArr.length === 1;
  const codeIsNew = duplicateArr.length === 0;
  return { codeIsDuplicated, codeIsUnique, codeIsNew };
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
