const assert = require("chai").assert;
const code = require("./run.js");

describe("Code works", () => {
  it("isNumberEven works", () => {
    assert.isTrue(isNumberEven(22));
    assert.isFalse(isNumberEven(33));
  });

  it("complexIfStatements works", () => {
    assert.isTrue(complexIfStatements(13));
    assert.isTrue(complexIfStatements(3333));
    assert.isFalse(complexIfStatements(2));
    assert.isFalse(complexIfStatements(333333));
  });

  it("switchStatements works", () => {
    assert.equal(code.switchStatements(0), "Monday");
    assert.equal(code.switchStatements(1), "Tuesday");
    assert.equal(code.switchStatements(2), "Wednesday");
    assert.equal(code.switchStatements(3), "Thursday");
    assert.equal(code.switchStatements(5), "Friday");
    assert.equal(code.switchStatements(6), "Saturday");
    assert.equal(code.switchStatements(7), "Sunday");
  });

  it("switchStatements throws on Wonky looking data", () => {
    assert.throws(
      () => {
        code.switchStatements("potatoes");
      },
      TypeError,
      "Input day number is not a number between 0 and 6"
    );
  });

  it("switchStatements throws on bigass numbers", () => {
    assert.throws(
      () => {
        code.switchStatements(33);
      },
      RangeError,
      "Input day number is not between 0 and 6"
    );
  });

});
