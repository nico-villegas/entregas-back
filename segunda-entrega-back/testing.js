const ProductManager = require('./ProductManager.js');

// Crear una instancia de ProductManager
const manager = new ProductManager('products.json');

// Obtener los productos (se debe devolver un arreglo vacio [])
console.log("Obtener los produtos: ",manager.getProducts());

// Se agrega un producto
const product = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
};
manager.addProduct(product);

// Se obtienen los productos nuevamente y se debe mostrar el producto agregado anteriormente
console.log("Productos cargados: ",manager.getProducts());

// Obtener un producto por su ID (especifica un ID válido para tu caso)
const productId = 1;
const foundProduct = manager.getProductById(productId);
console.log("Producto por ID: ",foundProduct);

// Actualizar un producto (especifica un ID válido y los campos a actualizar)
const updatedFields = { price: 500 };
manager.updateProduct(productId, updatedFields);

// Eliminar un producto (especifica un ID válido)
manager.deleteProduct(productId);
console.log("Obtener los produtos nuevamente: ",manager.getProducts());