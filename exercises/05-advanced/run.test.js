const assert = require("chai").assert;
const { AssertionError } = require("chai");
const code = require("./run.js");

describe("Code works", () => {
  // Challenge 1.
  it("reverses the string 👍", () => {
    assert.equal(reverse("abc"), "cba");
  });

  it("reverses the string but different👍", () => {
    assert.equal(reverse("cba"), "abc");
  });

  // Challenge 2.
  it ("No duplicates", () => {
    assert.deepEqual(sortNoDupes([9, 8, 7, 6, 5, 4, 3, 1, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it ("With duplicates", () => {
    assert.deepEqual(sortNoDupes([4, 4, 4, 4, 4, 3, 3, 3, 3]), [3, 4]);
  });

  // Challenge 3.
  it ("Test case 1", () => {
    assert.equal(PMLength("Jane Smith", .1, 2, .9), 1315);
  });
  it ("Test case 2", () => {
    assert.equal(PMLength("Liz Truss", 1, 100, .7) , 5);
  });
  it ("Test case 3", () => {
    assert.equal(PMLength("Boris Johnson", .6, 5, .3), 1461);
  });
});


