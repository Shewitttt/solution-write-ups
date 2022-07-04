'use strict';

/*
test inspired by the example given in class 'Quarter of the year'
test for push-to-new-array exercise
*/

function addArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    throw new Error("You done goof'd");
  }
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

describe("Array summation test.", () => {
  it("It should return [11, 42, 480] when [12, 0, -20] and [-1, 42, 500] are passed", () => {
    expect(addArrays([12, 0, -20], [-1, 42, 500])).toEqual([11, 42, 480]);
  });
  it("It should return ['JavaScript','is cool.'] when ['Java', 'is'] and ['Script', ' cool.'] are passed", () => {
    expect(addArrays(["Java", "is"], ["Script", " cool."])).toEqual([
      "JavaScript",
      "is cool.",
    ]);
  });
});


/* test for removing exclamation mark */


function removeExclamationMarks(s) {
  const result = Array.from(s).filter((element) => {
    return element !== '!';
  });
  return result.join('');
}

describe ("Excl mark removed from a word", () => {
  it ("removes ! from a word", () => {
    expect(removeExclamationMarks("Hello!")).toEqual("Hello")
  });
});

describe ("Excl mark removed from a sentence", () => {
  it ("removes ! from a word", () => {
    expect(removeExclamationMarks("Hello! there! ")).toEqual("Hello! there!")
  });
});


