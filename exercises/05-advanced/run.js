reverse = function (inputString) {
  return inputString.split("").reverse().join("");
  };

sortNoDupes = function (arr) {
  let noDupes = [];
  arr.forEach(element => {
    if (noDupes.includes(element) == false){
      noDupes.push(element);
    };
  });
  noDupes.sort();
  return noDupes;
};

PMLength = function (name, GDPTank, ministersGone, random=-1) {
  if (random == -1) {
    random = Math.random();
  }

  GDPTank /= 100;
  GDPTank += .0000000001;

  switch (name) {
    case "Boris Johnson":
      console.log("Enjoy your cheese and wine on your Boris Bus!");

      random = 1; break;
    case "Liz Truss":
      console.log("Cheese boost acheived.");

      random = Math.random() * 42;
      GDPTank = 1;
      break;
    case "Donald Trump":
      console.log("Congrats, you nade the UK great again!");

      random = Math.random() * .5 + .5; break;
    case "Rishi Sunak":
      console.log("Economy moment");

      random = 1 / GDPTank; break;
  }

  let days = Math.round(random * 1461);
  if (GDPTank < .3) {
    ;
  } else if (GDPTank < .6) {
    days *= .7;
  } else if (GDPTank < .9) {
    days *= .3;
  } else {
    days = 5;
  }

  let years = days / 365;
  if (years < 1) {
    if (ministersGone >= 10) {
      days -= 50;
    }
  } else if (years < 2) {
    if (ministersGone < 5) {
      ;
    } else if (ministersGone < 8) {
      days -= 10;
    } else {
      days -= 30;
    }
  } else if (years < 3) {
    if (ministersGone > 6) {
      days -= 10;
    }
  } else {
    if (ministersGone > 8) {
      days -= 30;
    }
  }

  if (days < 5) {
    days = 5;
  }

  return days;
};
