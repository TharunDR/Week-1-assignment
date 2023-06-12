/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};
  for(let i = 0; i< transactions.length ; i++) {
      let transaction = transactions[i];
      let category = transaction.category;
      let price = transaction.price;

      if(category in categoryTotals){
        categoryTotals[category] = categoryTotals[category] + price;
      } else {
        categoryTotals[category] = price;
      }
    } 
    let result = [];
    for(let category in categoryTotals){
      let entry = {}
      entry[category] = categoryTotals[category];
      result.push(entry)
    }
  return result;
}

let transactions = [
  { itemName: 'Bread', category: 'Dairy', price: 200, timestamp : new Date() },
  { itemName: 'Milk', category: 'Dairy', price: 60, timestamp : new Date() },
  { itemName: 'Snacks', category: 'Junk', price: 400, timestamp : new Date() },
  { itemName: 'Lays', category: 'Junk', price: 200, timestamp : new Date() }
];


let result = calculateTotalSpentByCategory(transactions);
console.log(result);
module.exports = calculateTotalSpentByCategory;
