var SandwichMaker = (function(maker) {

  var condimentTypes = {
    "mayo": 0.75,
    "mustard": 0.75,
    "pesto": 1.50,
    "oil": 0.50,
    "vinegar": 0.50,
    "salt": 0.25,
    "pepper": 0.25,
    "hot pepper relish": 1.25
  };

  maker.addCondiments = function(condimentsChosen) {
    return condimentTypes[condimentsChosen];
  }

  maker.getCondiments = function() {
    return condimentTypes;
  }

  return maker;
})(SandwichMaker);
