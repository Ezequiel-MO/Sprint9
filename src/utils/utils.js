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
