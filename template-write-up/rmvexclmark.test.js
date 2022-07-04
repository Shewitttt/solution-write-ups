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
  it ("removes ! from a sentence", () => {
    expect(removeExclamationMarks("Hello! there!")).toEqual("Hello there")
  });
});