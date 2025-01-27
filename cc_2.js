let products = [`Backpack`, `Headphones`, `Microphone`, `Laptop`, `Charger`]
products.push(`NoteBook`)
console.log(products)
products.pop()
console.log(products)

let scores = [89, 91, 73, 64, 99]
scores[1] = 95
let total = 0;
scores.forEach(function(score){total += score;})
let average = total/ scores.length;
console.log(scores)
console.log(average)


let employee = {
    name : `Alex johnson`,
    age: 24,
    department: `Nurse`,
    isActive: true
}

employee.department = `medical`
employee.position = `doctor`
console.log(employee)

let customers = [
    { name: `Dennis rynolds`,
    email: `dreynolds@gmail.com`,
    purchaseAmount: 2000}
]
customers.push({name: `Charlie day`, email: `daycharlie@gmail.com`, purchaseAmount: 4000 })
console.log(customers)

let order = {
    orderId: `U73536`, 
    customerName: `Mac Donald`,
    amount: 347,
     calculateTax:function(amount, taxRate)
    {return amount * taxRate;}

};
const totalAmount = 347;
const taxRate = 0.10;
const tax = order.calculateTax(totalAmount, taxRate);
console.log(`Tax: $${tax}`);

