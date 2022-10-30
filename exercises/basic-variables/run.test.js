const assert = require("chai").assert;
const code = require("./run.js");

describe("Code works", () => {
  it("workingWithIntegers Works", () => {
    assert.strictEqual(code.workingWithIntegers(), 42);
  });

  it("workingWithStrings works", () => {
    assert.strictEqual(code.workingWithStrings(), "I love potatoes");
  });

  it("workingWithIntArrays works", () => {
    assert.deepEqual(
      code.workingWithIntArrays(),
      [1, 2, 34, 55, 666, 123412415]
    );
  });
  it("workingWithMixedArrays works", () => {
    assert.deepEqual(code.workingWithMixedArrays(), [
      1,
      2,
      123412415,
      "cabbages",
      34,
      55,
      666
    ]);
  });
  it("workingWithObjects works", () => {
    assert.deepEqual(code.workingWithObjects(), {
      greeting: "Hello",
      age: 20,
      city: "Liverpool"
    });
  });
});
