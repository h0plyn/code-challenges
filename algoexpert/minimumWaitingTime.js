// O(nlogn)t | O(1)s
// O(nlogn) because we know that is the fastest our sort method can run
function minimumWaitingTime(queries) {
	queries.sort((a,b) => a - b)

	let waitingTime = 0
	for (let i = 0; i < queries.length; i++)  {
		const queriesLeft = queries.length - (i + 1)
		waitingTime += queriesLeft * queries[i]
	}
	return waitingTime
}

// Naive solution
// O(n)t | O(n)s
function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b)
	let totalWaitingTime = [0]
	for (let i = 1; i < queries.length; i++) {
		let currWaitingTime = 0
		for (let j = 0; j < i; j ++) {
			let prevQuery = queries[j]
			currWaitingTime += prevQuery
		}
		totalWaitingTime.push(currWaitingTime)
	}

	return totalWaitingTime.reduce((a,b) => a+b);
}
