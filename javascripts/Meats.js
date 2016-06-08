// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatTypes = {
    "none": 0,
    "turkey": 1.00,
    "ham": 0.75,
    "roast beef": 1.50,
    "salami": 1.25,
    "bacon": 1.10
  };

  // Augment the original object with another method
  maker.addMeat = function(meatChosen) {
    return meatTypes[meatChosen];
  };

  maker.getMeat = function() {
    return meatTypes;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
