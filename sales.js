const sales = [
    { id: 1, items: [{ name: "Laptop", price: 1200 }, { name: "Mouse", price: 25 }] },
    { id: 2, items: [{ name: "Phone", price: 700 }] },
    { id: 3, items: [{ name: "Tablet", price: 300 }, { name: "Keyboard", price: 50 }] },
    { id: 4, items: [{ name: "Monitor", price: 200 }] },
  ];

// Usando map y reduce, calcula el total de cada venta.
const totalPerSale = sales.map(sale => ({
    id: sale.id,
    items: sale.items,
    totalSale: sale.items.reduce((acc, val ) => acc + val.price, 0)
}));
console.log('Total per sale: ', totalPerSale);

// Usando filter, obtén las ventas cuyo total sea mayor a 1000.
const greaterSales = totalPerSale.filter(sale => sale.totalSale > 1000);
console.log('Greater sales: ', greaterSales);

// Usando reduce, calcula el total de todas las ventas de la tienda.
const totalSales = totalPerSale.reduce((acc, val) => acc + val.totalSale, 0);
console.log('Total Sales: ', totalSales);

// Usando find, busca la primera venta que contenga un producto llamado "Tablet".
const firstTabletSale = sales.find(sale => sale.items.find(item => item.name === 'Tablet'));
console.log('First Tablet', firstTabletSale);