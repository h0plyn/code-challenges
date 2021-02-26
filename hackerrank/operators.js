function solve(meal_cost, tip_percent, tax_percent) {
    let total = meal_cost;

    tip_percent /= 100;
    tax_percent /= 100;

    total += meal_cost * tip_percent;
    total += meal_cost * tax_percent
    
    console.log(Math.round(total))
}
