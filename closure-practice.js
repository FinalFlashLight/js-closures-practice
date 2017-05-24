// 1. Outer and Inner

/*
The function below returns a function, which has access to the local variables in the outer.

Invoke the outerFunc and save the result (the inner function) to a variable called preserveScope.

Then invoke preserveScope and save the result to a variable called preservedScope.
*/


function outerFunc() {
  var scopeToSave = "Preserve This!"
  return function() {
    return scopeToSave;
  }
}
// Code here
var preserveScope = outerFunc();

var preservedScope = preserveScope();


// 2. Friend Greeter

/*
Create a  function called greeterMaker which takes in a friend's name and returns a function to greet the friend.

For example, the outer function, greeterMaker, return an inner function for each friend, like Dave. This inner function will output something like, "Hi Dave!"

To pass the test, you will need to invoke greeterMaker and save the result to the variable called friendGreeter.
*/

// Code here

function greeterMaker(name) {
  // Make this function return another function to greet that friend by name.
  var nam = name;
  return function() {
    return 'Hi ' + nam + "!";
  }

}

var friendGreeter = greeterMaker();



// 3. Track calls

/*
Create a function dateFuncCreator that returns a function, which returns the date and the number of times you have called the function. So that I can test it, assign the inner function, the one that returns the date and number of calls, to a variable called getDate.

Your return object should look like the following:

{date: Tue May 23 2017 22:31:45 GMT-0500 (Central Daylight Time), calls: 1}

*/

// Code here
function dateFuncCreator() {
  var count = 0;

  // Finish this function.
  return function() {
    ++count;
    return {
      date: new Date(),
      calls: count,
    }
  }

}

var getDate = dateFuncCreator();
console.log(getDate());
console.log(getDate());
console.log(getDate());
console.log(getDate());


// 4. Score Tracker

/* Create a function called scoreTrackerCreator that accepts a player's name and returns a function for an individual player. This player function, scoreTracker, accepts a number representing points scored in a game and returns the player's total points scored.
*/

function scoreTrackerCreator(name) {
  // Finish this function
  var nam = name;
  var points = 0;
  return function scoreTracker(score){
    points += score;
    return points;
  }
}

// 5. Family Plan Tracker

/*
Create a function called familyPlanTrackerCreator. This function accepts two arguments, an array of names and a number of total minutes.

Create a family object which includes a total property with a value equal to the total minutes passed in.

Add a property to the family object for each name in the names array. (The property name will be the name of the family member.) Assign each of these properties a value of 0 (because they haven't used any minutes yet.)

Return a function which accepts the name of a family member and the number of minutes used by that family member. Update the family object by adding the minutes to that family member's minutes used (the property of the family object with that member's name) and by subtracting the minutes used from the total minutes remaining (the total property of the family object).
*/

function familyPlanTrackerCreator(names, minutes) {
  // Finish this function
  var family = {
    total: minutes,
  }
  for(var i = 0; i < names.length; ++i){
    family[names[i]] = 0;
  }
  console.log("new family detected");
  console.log(family);
  return function(name, minUsed){
    family[name] += minUsed;
    family.total -= minUsed;
    return family;
  }
}
var weasleys = familyPlanTrackerCreator(['fred', 'george', ], 700);
weasleys('fred', 50);
console.log(weasleys('george', 25));



// 6. Factory Function

/*
Create a factory function called playerCreator. In the factory function, create a health variable with a value of 100 and a tools variable with a value of an empty array.

Return an object with five methods, getHealth, lowerHealth, getTools, addTool, and removeTool. These methods should return the values of the variables they are modifying or retrieving.

And lowerHealth should lower the health by one point on each call.
*/

function playerFactory() {
  var health = 100;
  var tools = [];
  return {
    getHealth: function() {
      return health;
    },
    lowerHealth: function() {
      health -= 1;
      return health;
    },
    getTools: function() {
      return tools;
    },
    addTool: function(tool) {
      tools.push(tool);
      return tools;
    },
    removeTool: function(tool) {
      var i = tools.indexOf(tool);
      tools.splice(i, 1);
      return tools;
    },
  }
}
// Code here
