/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let listofobjects = [];
  let objcatag = {};

  for (let transaction of transactions) {
    let catag = transaction.category;
    let price = transaction.price;

    if (objcatag[catag]) {
      objcatag[catag] += price;
    } else {
      objcatag[catag] = price;
    }
  }

  for (let key in objcatag) {
    listofobjects.push({ "category": key, "totalSpent": objcatag[key] });
  }

  return listofobjects;
}

module.exports = calculateTotalSpentByCategory;
