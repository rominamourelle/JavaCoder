   
let carrito = [];
let precios = {};

function agregarAlCarrito(producto) {
    const cantidad = prompt(`Ingrese la cantidad de "${producto}" que desea comprar:`);
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
        listItem.textContent = producto;
        listaCarrito.appendChild(listItem);
        total += precios[producto];
    });

    totalCarrito.textContent = total;
}