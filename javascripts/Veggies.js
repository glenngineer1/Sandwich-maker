var SandwichMaker = (function(maker) {

  var veggieTypes = {
    "lettuce": 0.50,
    "tomato": 0.75,
    "onion": 0.50,
    "pickle": 0.85,
    "banana peppers": 1.25,
  };

  maker.addVeggies = function(veggiesChosen) {
    return veggieTypes[veggiesChosen];
  }

    maker.getVeggies = function() {
    return veggieTypes;
  }

  return maker;
})(SandwichMaker);
