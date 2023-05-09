
alert("Bienvenido a la pagina oficial del club Tigre")

let partidosCopa = "1. TIGRE vs Tolima $4000 \n 2. TIGRE vs P.Cabello $3500 \n 3. S.Paulo vs TIGRE $5000 \n 9. Terminar compra/Salir";
let nombreUser = prompt("Ingresá tu nombre");
const cantidadSocios = 5000
let numeroSocio = 1000
let itemsCompra = "";
let precioCompra = 0;

function sumarAlCarrrito(producto, precio) {
    alert(`Sumamos ${producto} a tu carrito`);
    itemsCompra += `${producto} x1 \n`;
    precioCompra += precio;
}

numeroSocio = parseInt(prompt("Decime tu numero de socio"))

if (cantidadSocios < numeroSocio){
    alert("El numero de socio no es valido")
}else if(cantidadSocios >= numeroSocio){
    alert ("Puedes sacar tu entrada")
}

//Prompt para saber la primera elección del usuario

eleccionPartido = parseInt(prompt(`${nombreUser} estos son los partidos de Copa que quedan por disputar. Ingresá el nro del partido deseado \n ${partidosCopa}`));

//Ciclo while para darle al usuario la posibilidad de elegir más de un partido
while (eleccionPartido !=9) {
    //Switch para sumar al carrito lo elegido
    switch (eleccionPartido){
        case 1:
            sumarAlCarrrito("TIGRE vs Tolima", 4000)
            break;
        case 2:
            sumarAlCarrrito("TIGRE vs P.Cabello", 3500)
            break;
        case 3:
            sumarAlCarrrito("S.Paulo vs TIGRE", 5000)
            break;
        default:
            alert("No tenemos el producto elegido")
    }
    
    //prompt para darle otra opcion al user, y en todo caso poder salir
    eleccionPartido = parseInt(prompt(`${nombreUser} Queres elegir algún otro partido? Estas son las opciones \n ${partidosCopa}`));
}
//Una vez salido del while, cerramos la compra
finalizaCompra()

//Funcion para analizar si llevó algún producto y, si llevó, si va a querrer recibirlo via mail
function finalizaCompra() {
    if (precioCompra !== 0) {
        let envio = prompt(`${nombreUser} el total de tu compra es de ${precioCompra}; vas a querer que tus entradas se te envien por email?`).toLowerCase()
        if ((envio == "si") || (envio == "sí")) { 
            let email = prompt("Pasanos tu correo")
            alert(`Perfecto, tus entradas te van a llegar a ${email}: \n${itemsCompra} \npor un total de $${precioCompra}. Muchas gracias.`)
        } else {
            alert(`Ok ${nombreUser}, te esperamos por a secretaria del Club para que con tu nro de socio retires tu entradas para: \n${itemsCompra} por un total de $${precioCompra}.`)
        }
    } else {
        alert("Esperemos pronto poder tener lo que buscas. Vamos TIGRE")
    }
}
