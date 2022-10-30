workingOldSchool = function () {
  const yourUniversity = "Warwick";
  return "This is how students at used to do it";
};

workingWithFancyInterpolation = function () {
  const yourUniversity = "Warwick";
  /* eslint-disable quotes */
  return `This is how we at do it now`;
};

module.exports = {
  workingOldSchool,
  workingWithFancyInterpolation
};
