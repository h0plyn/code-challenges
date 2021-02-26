// O(n)t | O(n)s

function balancedBrackets(string) {
	const openers = '[{('
	const closers = ']})'
	let matching = {
		']': '[',
		'}': '{',
		')': '(',
	}

	let stack = []
	let idx = 0
	while (idx < string.length) {
		if (openers.includes(string[idx])) {
		  stack.push(string[idx])
		} else if (closers.includes(string[idx])){
			if (stack.length === 0) {
				return false
			}
			if (stack[stack.length - 1] === matching[string[idx]]) {
				stack.pop()
			} else {
				return false
			}
		}
		idx++
	}

	return stack.length === 0
}
