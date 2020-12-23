def binarySearch(array, target):
    left = 0
	  right = len(array) - 1

	while left <= right:
		midpoint = (left + right) // 2
		potentialMatch = array[midpoint]
		if potentialMatch == target:
			return midpoint
		elif potentialMatch < target:
			left = midpoint + 1
		else:
			right = midpoint - 1

	return -1
