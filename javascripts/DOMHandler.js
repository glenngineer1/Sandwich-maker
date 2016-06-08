// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiment");
var vegetableChooser = document.getElementById("vegetable");
var finalOutput = document.getElementById("final");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var meatSelector = event.target;
  console.log("MC", meatSelector);

  // Determine the price of the topping chosen
  if(meatSelector.checked) {
    finalSandwichPrice += SandwichMaker.addMeat(meatSelector.value);
    console.log("MS", meatSelector.value);
  } else {
    finalSandwichPrice -= SandwichMaker.addMeat(meatSelector.value);
    console.log("US", meatSelector.value);
  }
  finalOutput.innerHTML = finalSandwichPrice.toFixed(2);
  console.log("FO", finalOutput.innerHTML);
  // Add the topping to the SandwichMaker to increase the total price
});
