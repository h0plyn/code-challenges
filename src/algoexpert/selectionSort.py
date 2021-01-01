def selectionSort(array):
  startIdx = 0
  while startIdx < len(array) - 1:
    smallestNumIdx = startIdx
    for i in range(startIdx + 1, len(array)):
      if array[smallestNumIdx] > array[i]:
        smallestNumIdx = i
    array[startIdx], array[smallestNumIdx] = array[smallestNumIdx], array[startIdx]
    startIdx += 1
  return array
