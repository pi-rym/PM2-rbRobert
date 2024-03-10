//const CarritoCompra = require("../index");
/* const {CarritoCompra, Producto, crearProducto} = require("../index");

const mockObtenerDatos = jest.fn(() => {
    return [
        {nombreProducto: "Televisor", marca: "Samsumg", precio: 1800},
        {nombreProducto: "Laptop", marca: "Samsumg", precio: 2500},
        {nombreProducto: "Lavadora", marca: "General Electric", precio: 2000},
    ];
});

describe("En la clase Productos", () => {

    it("Debera devolverme la lista de Productos", () => {
        
        mockObtenerDatos.foreach( (producto) => {
            const {nombreProducto, marca, precio} = producto;
            //const carritoCompra = new CarritoCompra();
            crearProducto(nombreProducto, marca, precio, new CarritoCompra());
            console.log(producto);
        });
        console.log(mockObtenerDatos);
        expect(mockObtenerDatos).toEqual(CarritoCompra.productos);
    });

    xit("Debe calcular el total en una factura con varios items", () => {
        expect(calcularTotal([
            {name: "Producto A", price: 10, quantity: 2},
            {name: "Producto B", price: 20, quantity: 3},
            {name: "Producto C", price: 30, quantity: 4},
        ])).toEqual(200);  
    });

    xit("Debe arrojar un error 'factura invalida' en caso de recibir un arreglo vacio", () => {
        expect(() => calcularTotal([])).toThrowError("Factura Invalida");
    })

}); */

const {CarritoCompra, Producto, crearProducto} = require("../index");

describe('CarritoCompra', () => {
    // let carritoCompras;

    // beforeEach(() => {
    //     carritoCompras = new CarritoCompra();
    // });

    it('debería agregar productos correctamente', () => {
        const producto1 = new Producto(1, 'Producto 1', 'Marca 1', 10);
        const producto2 = new Producto(2, 'Producto 2', 'Marca 2', 20);

        carritoCompras.agregarProducto(producto1);
        carritoCompras.agregarProducto(producto2);

        expect(carritoCompras.productos.length).toBe(2);
    });

    it('debería calcular el total correctamente', () => {
        const producto1 = new Producto(1, 'Producto 1', 'Marca 1', 10);
        const producto2 = new Producto(2, 'Producto 2', 'Marca 2', 20);

        carritoCompras.agregarProducto(producto1);
        carritoCompras.agregarProducto(producto2);

        expect(carritoCompras.calcularTotal()).toBe(30);
    });

    it('debería aplicar el descuento correctamente', () => {
        const producto1 = new Producto(1, 'Producto 1', 'Marca 1', 10);
        const producto2 = new Producto(2, 'Producto 2', 'Marca 2', 20);

        carritoCompras.agregarProducto(producto1);
        carritoCompras.agregarProducto(producto2);

        expect(carritoCompras.aplicarDescuento(10)).toBe(27); // 10% de descuento sobre 30 es 27
    });
});


describe('crearProducto', () => {
    it('debería crear un producto y agregarlo al carrito', () => {
        crearProducto('Nuevo Producto', 'Nueva Marca', 15);
        expect(carrito.productos.length).toBe(1);
        expect(carrito.productos[0].nombreProducto).toBe('Nuevo Producto');
    });
});