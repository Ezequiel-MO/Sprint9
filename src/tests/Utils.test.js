import {
  checkForDuplicates,
  findSelectedOptions,
  whichDay,
} from "../pages/ProjectConfig/utils/utils";

describe("checkForDuplicates", () => {
  it("should return true if string is contained in the array, not case sensitive", () => {
    const string = "Test";
    const array = ["test", "test2"];
    const result = checkForDuplicates(string, array);
    expect(result).toBe(true);
  });
  it("should return false if string is not contained in the array", () => {
    const string = "test";
    const array = ["test2", "test3"];
    const result = checkForDuplicates(string, array);
    expect(result).toBe(false);
  });
});

describe("findSelectedOptions", () => {
  it("should return an array of objects that match the selected options", () => {
    const array = [
      { value: "Restaurant El Glop", label: "Restaurant El Glop" },
      { value: "Restaurant El Arenal", label: "Restaurant El Arenal" },
    ];
    const fullArray = [
      { name: "Restaurant El Glop", city: "Barcelona", price: 45 },
      { name: "Restaurant El Arenal", city: "Barcelona2", price: 35 },
      { name: "Restaurat la Pepica", city: "Madrid", price: 38 },
    ];
    const result = findSelectedOptions(array, fullArray);
    expect(result).toEqual([
      { name: "Restaurant El Glop", city: "Barcelona", price: 45 },
      { name: "Restaurant El Arenal", city: "Barcelona2", price: 35 },
    ]);
  });
});

describe("whichDay", () => {
  it("should return Arrival Day if counter is 1", () => {
    const counter = 1;
    const daydifference = 5;
    const result = whichDay(counter, daydifference);
    expect(result).toBe("Arrival Day");
  });
  it("should return Departure Day if counter is daydifference", () => {
    const counter = 5;
    const daydifference = 5;
    const result = whichDay(counter, daydifference);
    expect(result).toBe("Departure Day");
  });
  it("should return Day counter if counter is not 1 or daydifference", () => {
    const counter = 3;
    const daydifference = 5;
    const result = whichDay(counter, daydifference);
    expect(result).toBe("Day 3");
  });
});
