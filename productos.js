document.addEventListener("DOMContentLoaded", function() {}


    // Cargar productos y precios desde el archivo JSON
    ,fetch ('../json/productos.json')
        .then(response => response.json())
        .then(data => {
            const listaPerros = document.getElementById('listaPerros');

            data.forEach(id => {
                const idContainer = document.createElement('div');
                idContainer.innerHTML = `<h2>${id.tipo}</h2>`;
                
                id.productos.forEach(producto => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('producto');

                    // Agregar la imagen al producto
                    const img = document.createElement('img');
                    img.src = producto.img; // Ruta de la imagen
                    img.alt = `${producto.marca} - ${producto.modelo}`;
                    listItem.appendChild(img);

                    // Agregar el texto del producto
                    const textoProducto = document.createElement('span');
                    textoProducto.textContent = `${producto.marca} - ${producto.modelo} - $${producto.precio}`;
                    listItem.appendChild(textoProducto);

                    listItem.onclick = () => agregarAlCarrito(producto);

                    idContainer.appendChild(listItem);
                });
        })      
        ;

function agregarAlCarrito(producto) {
    const cantidad = prompt(`Ingrese la cantidad de "${producto.marca} - ${producto.modelo}" que desea comprar:`);
    if (cantidad && !isNaN(cantidad) && parseInt(cantidad) > 0) {
        for (let i = 0; i < parseInt(cantidad); i++) {
            carrito.push(producto);
        }
        mostrarCarrito();
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista antes de volver a mostrarla

    let total = 0;

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.marca} - ${producto.modelo}`;
        listaCarrito.appendChild(listItem);
        total += producto.precio;
    });

    totalCarrito.textContent = total;}}))
