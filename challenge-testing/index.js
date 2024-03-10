// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

class Producto {
    constructor(id, nombreProducto, marca, precio) {
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.marca = marca;
        this.precio = precio;
    }
}

class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    aplicarDescuento(porcentaje) {
        return this.calcularTotal() - ((porcentaje / 100) * this.calcularTotal());
    }
}

const carritoCompra = new CarritoCompra();
carritoCompra.productos;

let contador = 1; // Variable para controlar el ID único de los productos

// function crearProducto(nombre, marca, precio) {
//     const producto = new Producto(contador++, nombre, marca, precio);
//     carritoCompra.agregarProducto(producto);
// }

// Crear algunos productos y agregarlos al carrito
// crearProducto("Televisor", "Samsumg", 1600);
// crearProducto("Laptop", "Dell", 3000);
// crearProducto("Lavadora", "General Electric", 2000); 

/* let producto = new Producto(contador++, 'Televisor', 'Samsumg', 1600);
carritoCompra.agregarProducto(producto);
producto = new Producto(contador++, 'Laptop', 'Dell', 3000);
carritoCompra.agregarProducto(producto);
producto = new Producto(contador++, 'Lavadora', 'General Electric', 2000);
carritoCompra.agregarProducto(producto);

console.log("Productos en el carrito:", carritoCompra.productos);
console.log("Total antes del descuento:", carritoCompra.calcularTotal());
console.log("Total después del descuento (10%):", carritoCompra.aplicarDescuento(10)); */

module.exports = CarritoCompra;


// calcularTotal(){
//     const total = 0;
// /*         for (const item of this.array) {
//         total += item.precio; // total = total + item.precio;
//     } */
//     this.array.map( (item) => {
//         total += item.precio; // total = total + item.precio;
//     });
//     return total;
// }