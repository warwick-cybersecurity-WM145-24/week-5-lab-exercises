const assert = require("chai").assert;
const code = require("./run.js");

describe("Code works", () => {

  it("workingOldSchool works", () => {
    assert.equal(
      workingOldSchool(),
      "This is how students at Warwick used to do it"
    );
  });

  it("FancyInterpolation works", () => {
    assert.equal(
      workingWithFancyInterpolation(),
      "This is how we at Warwick do it now"
    );
  });
});
