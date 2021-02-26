def getNthFib(n):
  fibs = [0, 1]
  counter = 3

  while counter <= n:
    nextFib = fibs[0] + fibs[1]
    fibs[0] = fibs[1]
    fibs[1] = nextFib
    counter += 1

  return fibs[1] if n > 1 else fibs[0]

print(getNthFib(6))

