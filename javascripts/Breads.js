var SandwichMaker = (function(maker) {

  var breadTypes = {
    "white": 0.75,
    "wheat": 1.00,
    "rye": 1.25,
    "wrap": 1.00,
    "lettuce": 0.75
  };

  maker.addBread = function(breadChosen) {
    return breadTypes[breadChosen];
  };

    maker.getBread = function() {
    return breadTypes;
  }

  return maker;
})(SandwichMaker);
