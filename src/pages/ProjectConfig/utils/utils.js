//ProjectLog.js
export const checkForDuplicates = (string, array) => {
  let codeIsDuplicated = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === string.toLowerCase()) {
      codeIsDuplicated = true;
      return codeIsDuplicated;
    }
  }
  return codeIsDuplicated;
};

//HotelProjectForm.js & ScheduleProjectForm.js
export const findSelectedOptions = (array, fullArray) => {
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

//useTransferOptions.js

export const findUniqueCitiesinDB = (array) => {
  return [...new Set(array.map((item) => item.city))];
};

export const findUniqueVendorsPerCity = (array, city) => {
  const filteredVendors = array.filter((item) => item.city === city);
  return [...new Set(filteredVendors.map((item) => item.company))];
};

export const findUniqueCapacitiesPerVendor = (array, vendor) => {
  const filteredCapacities = array.filter((item) => item.company === vendor);
  return [...new Set(filteredCapacities.map((item) => item.vehicleCapacity))];
};
