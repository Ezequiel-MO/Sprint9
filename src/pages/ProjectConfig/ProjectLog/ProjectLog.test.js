import { checkForDuplicates } from "../utils/utils";

describe("checks if the string is already contained in the array", () => {
  test("if the string is already contained in the array, returns true", () => {
    const array = ["a", "b", "c"];
    const string = "a";
    const result = checkForDuplicates(string, array);
    expect(result).toBe(true);
  });

  test("if the string is not contained in the array, returns false", () => {
    const array = ["a", "b", "c"];
    const string = "d";
    const result = checkForDuplicates(string, array);
    expect(result).toBe(false);
  });
});
