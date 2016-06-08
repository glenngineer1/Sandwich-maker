var SandwichMaker = (function(maker) {

  var cheeseTypes = {
    "none": 0,
    "provolone": 1.00,
    "swiss": 1.25,
    "mozzarella": 1.50,
    "gouda": 2.00
  };

  maker.addCheese = function(cheeseChosen) {
    return cheeseTypes[cheeseChosen];
  };

    maker.getCheese = function() {
    return cheeseTypes;
  }

  return maker;
})(SandwichMaker);
