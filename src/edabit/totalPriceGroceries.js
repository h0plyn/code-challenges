// Create a function that takes an array of objects (groceries) which calculates the total 
// price and returns it as a number. A grocery object has a product, a quantity and a price, 
// for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

function getTotalPrice(groceries) {
    let amountArr = [];
    groceries.forEach(item => {
        amountArr.push(item.price * item.quantity)
    })
    return Number(amountArr.reduce((a,b) => a+b).toFixed(1))
}
