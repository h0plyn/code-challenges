const myArray = ['Ricky Rhodes','green'];

const cutName = (name) => {
	return name.split(" ");	
};

const myInfo = {
	fullName: cutName(myArray[0]),
	favoriteColor: myArray[1],
	github: 'https://github.com/h0plyn'
};

console.log(myInfo)