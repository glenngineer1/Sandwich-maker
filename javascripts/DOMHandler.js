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

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var breadSelector = event.target;
  // console.log("Bread Chosen", breadSelector);

  // Determine the price of the topping chosen
  if(breadSelector.checked) {
    // SandwichMaker is the global variable; addBread is the property that we added in the Bread.js file; breadSelector is the event that was targeted in the DOM; value is linking to the index.html which is whatever bread we've selected; that value is then passed in (breadChosen) to the function maker.addBread in the Bread.js file ; which is then immediately returned with the value, which is (price), of what breadType we've selected and it's price is then shown in the DOM
    finalSandwichPrice += SandwichMaker.addBread(breadSelector.value);
    // console.log("Bread Selected", breadSelector.value);
  } else {
    finalSandwichPrice -= SandwichMaker.addBread(breadSelector.value);
    // console.log("Bread unselected", breadSelector.value);
  }
  finalOutput.innerHTML = finalSandwichPrice.toFixed(2);
  // console.log("Final Output", finalOutput.innerHTML);
  // Add the topping to the SandwichMaker to increase the total price
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var meatSelector = event.target;
  // console.log("MC", meatSelector);

  // Determine the price of the topping chosen
  if(meatSelector.checked) {
    finalSandwichPrice += SandwichMaker.addMeat(meatSelector.value);
    // console.log("Meat Selected", meatSelector.value);
  } else {
    finalSandwichPrice -= SandwichMaker.addMeat(meatSelector.value);
    // console.log("Meat unselected", meatSelector.value);
  }
  finalOutput.innerHTML = finalSandwichPrice.toFixed(2);
  // console.log("Final Output", finalOutput.innerHTML);
  // Add the topping to the SandwichMaker to increase the total price
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var cheeseSelector = event.target;
  // console.log("Cheese Chosen", cheeseSelector);

  // Determine the price of the topping chosen
  if(cheeseSelector.checked) {
    finalSandwichPrice += SandwichMaker.addCheese(cheeseSelector.value);
    // console.log("Cheese Selected", cheeseSelector.value);
  } else {
    finalSandwichPrice -= SandwichMaker.addCheese(cheeseSelector.value);
    // console.log("Cheese unselected", cheeseSelector.value);
  }
  finalOutput.innerHTML = finalSandwichPrice.toFixed(2);
  // console.log("Final Output", finalOutput.innerHTML);
  // Add the topping to the SandwichMaker to increase the total price
});

condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var condimentSelector = event.target;
  // console.log("Condiment Chosen", condimentSelector);

  // Determine the price of the topping chosen
  if(condimentSelector.checked) {
    finalSandwichPrice += SandwichMaker.addCondiments(condimentSelector.value);
    // console.log("Condiment Selected", condimentSelector.value);
  } else {
    finalSandwichPrice -= SandwichMaker.addCondiments(condimentSelector.value);
    // console.log("Condiment unselected", condimentSelector.value);
  }
  finalOutput.innerHTML = finalSandwichPrice.toFixed(2);
  // console.log("Final Output", finalOutput.innerHTML);
  // Add the topping to the SandwichMaker to increase the total price
});

vegetableChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var veggieSelector = event.target;
  // console.log("Vegetables Chosen", veggieSelector);

  // Determine the price of the topping chosen
  if(veggieSelector.checked) {
    finalSandwichPrice += SandwichMaker.addVeggies(veggieSelector.value);
    // console.log("Veggies Selected", veggieSelector.value);
  } else {
    finalSandwichPrice -= SandwichMaker.addVeggies(veggieSelector.value);
    // console.log("Veggies unselected", veggieSelector.value);
  }
  finalOutput.innerHTML = finalSandwichPrice.toFixed(2);
  // console.log("Final Output", finalOutput.innerHTML);
  // Add the topping to the SandwichMaker to increase the total price
});


