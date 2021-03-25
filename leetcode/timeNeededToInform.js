/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

var numOfMinutes = function (n, headID, managers, informTime) {
  let adjList = managers.map(() => []); // fill adj list with buckets for each employee

  for (let employee = 0; employee < n; employee++) {
    // fill adj list to make connections between managers and employees
    // the employee is represented by the current array idx
    // their manager is represented by the value in the managers array
    const manager = managers[employee]; // map the manager variable to each employee
    if (manager === -1) continue; // if they don't have a manager, continue

    adjList[manager].push(employee); // push each managers employee into the adj list
  }

  return dfs(headID, adjList, informTime);
};

function dfs(currentId, adjList, informTime) {
  // Base case; we hit the lowest subordinate
  if (adjList[currentId].length === 0) {
    return 0;
  }

  let max = 0;
  const subordinates = adjList[currentId]; // get subordinates of current manager
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime)); // dfs through subordinates returning the max time it takes to inform their subordinates
  }

  return max + informTime[currentId]; // return the max plus the time it takes the current manager to inform their subordinates
}
