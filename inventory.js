const inventory = [
    { id: 1, name: "Laptop", price: 1200, quantity: 10 }, // 12000
    { id: 2, name: "Phone", price: 700, quantity: 20 },  // 17500
    { id: 3, name: "Tablet", price: 300, quantity: 5 }, // 1500
    { id: 4, name: "Monitor", price: 200, quantity: 2 }, // 400
    { id: 5, name: "Keyboard", price: 50, quantity: 40 } // 2000
  ];
  
//   Tareas:

// Usando map, crea un array de strings que contenga el nombre de cada producto en mayúsculas.
const productNamesUpper = inventory.map(product => product.name.toUpperCase())
console.log(productNamesUpper);

// Usando filter, obtén un array de productos cuyo price sea mayor a 500.
const filteredExpensiveProducts = inventory.filter(product => product.price > 500)
console.log('Productos con un precio mayor a 500: ', filteredExpensiveProducts)

// Usando reduce, calcula el valor total del inventario (precio x cantidad de cada producto).
const totalValue = inventory.reduce((acc, val) => acc + (val.price * val.quantity), 0);
console.log('Total value: ', totalValue)

// Usando find, busca el primer producto cuyo quantity sea menor que 5.
const firstElementLowQuantity = inventory.find(product => product.quantity < 5);
console.log(firstElementLowQuantity)