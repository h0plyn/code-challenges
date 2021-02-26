//Create a function that can turn Yen (Japanese dollar) to USD (American dollar).
//Each Yen to USD conversion is Yen / 107.5

function yenToUsd(yen){
	return  +(yen / 107.5).toFixed(2)
}

console.log(yenToUsd(1000)) //9.3

