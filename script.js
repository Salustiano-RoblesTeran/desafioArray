
let listaSuper = [];

let listaProducto = '';

do {
    listaProducto = prompt("Ingrese un nuevo producto(presione NO para salir): ");
    if (listaProducto !== 'NO') {
        listaSuper.push(listaProducto);
    }
} while(listaProducto !== 'NO');


for (let i = 0; i < listaSuper.length; i++) {
    console.log(listaSuper[i]);
}
