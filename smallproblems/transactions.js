const transactionsFor = (itemId, list) => {
  return list.filter(entry => entry.id == itemId);
};

const isItemAvailable = (itemId, list) => {
  let transactions = transactionsFor(itemId, list);
  let quantity = transactions.reduce((sum, entry) => {
    if (entry.movement === 'in') {
      return sum + entry.quantity;
    } else {
      return sum - entry.quantity;
    }
  }, 0);
  return quantity > 0;
};

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true