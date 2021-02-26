# O(log(n))t | O(log(n))s
def findClosestValueInBst(tree, target):
   return bstHelper(tree, target, tree.value)

def bstHelper(tree, target, closest):
	if tree is None:
		return closest

	if abs(target - closest) > abs(tree.value - target):
		closest = tree.value

	if target < tree.value:
		return bstHelper(tree.left, target, closest)
	elif target > tree.value:
		return bstHelper(tree.right, target, closest)
	else:
		return closest
