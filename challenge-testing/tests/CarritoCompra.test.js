const CarritoCompra  = require('../index');

//agregar producto al Carrito
const agregarCarrito = new CarritoCompra();
agregarCarrito.agregarProducto = jest.fn();

agregarCarrito.agregarProducto({ nombre: 'Laptop', precio: 4000 });
agregarCarrito.agregarProducto({ nombre: 'Lavadora', precio: 2300 });

describe('Agregar al Carrito de Compra', () => {
    it('debería agregar laptop', () => {
        expect(agregarCarrito.agregarProducto).toHaveBeenCalledWith({ nombre: 'Laptop', precio: 4000 });
    });

    it('debería agregar lavadora', () => {
        expect(agregarCarrito.agregarProducto).toHaveBeenCalledWith({ nombre: 'Lavadora', precio: 2300 });
    });
});


//calcular el total
const calcularCarrito = new CarritoCompra();
//CalcularCarrito.agregarProductos = jest.fn();

calcularCarrito.agregarProducto({ nombre: 'Laptop', precio: 4000 });
calcularCarrito.agregarProducto({ nombre: 'Lavadora', precio: 2300 });
calcularCarrito.agregarProducto({ nombre: 'Television', precio: 1800 });

describe('calcular total Carrito de Compra', () => {
    it('debería calcular el total correctamente', () => {
        expect(calcularCarrito.calcularTotal()).toBe(8100);
    });
});


//aplicando el descuento
const calcularDescuento = new CarritoCompra();
//CalcularDescuento.agregarProductos = jest.fn();

calcularDescuento.agregarProducto({ nombre: 'Laptop', precio: 4000 });
calcularDescuento.agregarProducto({ nombre: 'Lavadora', precio: 2300 });
calcularDescuento.agregarProducto({ nombre: 'Television', precio: 1800 });
calcularDescuento.calcularTotal();
calcularDescuento.aplicarDescuento(10);

describe('calcular descuento del Carrito de Compra', () => {
    it('debería calcular el descuento total correctamente', () => {
        expect(calcularDescuento.aplicarDescuento(10)).toBe(7290);
    });
});

// devolver la lista de productos
const listaProductos = new CarritoCompra();

listaProductos.agregarProducto({ producto: 'Producto 1', marca: 'Marca 1', precio: 10 });
listaProductos.agregarProducto({ producto: 'Producto 2', marca: 'Marca 2', precio: 20 });
listaProductos.agregarProducto({ producto: 'Producto 3', marca: 'Marca 3', precio: 30 });

describe('devuelve la lista de productos', () => {
    it('debería devolver la lista de productos', () => {
        expect(listaProductos.productos).toEqual([
            {producto: 'Producto 1', marca: 'Marca 1', precio: 10},
            {producto: 'Producto 2', marca: 'Marca 2', precio: 20},
            {producto: 'Producto 3', marca: 'Marca 3', precio: 30}
        ]);
        console.log(listaProductos.productos);
    });
});

