const assert = require("chai").assert;
const code = require("./run.js");

describe("Code works", () => {
  it("forLoops work for different arrays of numbers", () => {
    assert.equal(code.forLoops([1, 2, 3, 4]), 10);
    assert.equal(code.forLoops([1, 2, 3, 4, 5]), 15);
    assert.equal(code.forLoops([10, 100, 1000]), 1110);
    assert.equal(code.forLoops([10, 20, 30, 40, 50]), 150);
    assert.equal(code.forLoops([10000, 1]), 10001);
  });

  it("usingArrayReduce work for different arrays of numbers", () => {
    assert.equal(code.usingArrayReduce([1, 2, 3, 4]), 10);
    assert.equal(code.usingArrayReduce([1, 2, 3, 4, 5]), 15);
    assert.equal(code.usingArrayReduce([10, 100, 1000]), 1110);
    assert.equal(code.usingArrayReduce([10, 20, 30, 40, 50]), 150);
    assert.equal(code.usingArrayReduce([10000, 1]), 10001);
  });


});
