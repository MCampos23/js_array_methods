const ventas = [
    { cliente: "Alice", total: 500, productos: [{ nombre: "Laptop", cantidad: 1, precio: 500 }, { nombre: "Phone", cantidad: 1, precio: 300 }] },
    { cliente: "Bob", total: 300, productos: [{ nombre: "Phone", cantidad: 1, precio: 300 }] },
    { cliente: "Alice", total: 200, productos: [{ nombre: "Tablet", cantidad: 2, precio: 100 }] },
    { cliente: "Charlie", total: 150, productos: [{ nombre: "Keyboard", cantidad: 3, precio: 50 }] }
  ];

  
// Obtén un array de clientes que hayan gastado más de 400 en total, pero sin incluir duplicados.
const bestClients = ventas.filter(venta => venta.total > 400)
.map(client => ({
  name: client.cliente,
  total: client.total,
  products: JSON.stringify(client.productos)
}))

console.log('full client: ', bestClients)

// Crea un array con los nombres de productos comprados por cada cliente (sin duplicados) y que contenga solo aquellos clientes que hayan comprado más de un producto.
const clientProducts = ventas.map(venta => ({
  cliente: venta.cliente,
  productos: venta.productos.map(product => product.nombre)
}))

console.log(clientProducts)