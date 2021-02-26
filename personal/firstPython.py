# First time using Python

fruits = ['apple', 'banana', 'blueberry']
concatfruit = ''

for fruit in fruits:
  print(fruit)
  concatfruit += fruit

print(concatfruit.upper())


msg = "hello world"
msg = msg.split()

print(msg)

addInt = 1 + 1
addString = '1' + '1'
# addIntString = 1 + '1'

print(addInt)
print(addString)
# print(addIntString)

a_long_string = '''this is a long
string that is going to span
multiple lines'''
print(a_long_string)

my_string = 'I like Python!'
print(my_string[0:-4])

my_dog = 'Newfoundland'
dog_owner = 'I have a really nice %s' % my_dog
print(dog_owner)
