// Write a function that searches an array of names (unsorted) for the name "Bob" and 
// returns the location in the array. If Bob is not in the array, return -1.

function findBob(names) {
	return names.indexOf("Bob")
};

findBob(["Jimmy", "Layla", "Mandy"]); //-1
findBob(["Bob", "Nathan", "Hayden"]); //0
findBob(["Garry", "Maria", "Bethany", "Bob", "Pauline"]); //3
