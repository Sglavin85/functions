// Chicken Monkey

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    
    if (currentNumber % 7 === 0 && currentNumber % 5 === 0)
        console.log("ChikenMonkey")
    else if (currentNumber % 7 === 0) {
        console.log("Monkey") // Only 2, 4, 6 will appear
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    } else {
        console.log(currentNumber)
    }
}

//  Take a Number - Battle of the bands

let bandNumber = 0;

const takeNumber = function (bandName) {
    bandNumber ++;
    return(`${bandNumber}. ${bandName}`);
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

// Cookout

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}



// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++) {
    grill(foods[i]);
}
console.log(cookedFood);


// Painter Practice

let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    paid: function () {
        let answer = prompt("How many hours did the painter work?")
        let hours = parseInt(answer);
        let math = hours * this.cost_per_hour;
        let pay = parseInt(math);

        if (pay = "NaN") {
        alert('I am sorry, you did not enter a number')
        }else{
        alert(`The painter made $${pay} for ${answer} hours of work`)
        }
    },
    addSupply: function () {
        let newTool = prompt('What new tool did the painter get?')
        this.tools.push(newTool)
    }
  }

  painter.paid();
  painter.addSupply();
  console.log(painter.tools);
  /*Add an action that the painter can perform.
  Have her take that action by execucting the method you created.
  BONUS: Add a method that allows us to add new tools for the painter.*/