let Gondola=[]
class Producto{

    constructor(nombre,categoria,precio){
        this.nombre=nombre,
        this.categoria=categoria,
        this.precio=parseInt(precio);
    }
}
const addGondola=(product)=>{
    Gondola.push(product)
}
const leche=new Producto('Leche La Serenisima','lacteos','1000');
const yerba=new Producto('yerba Playadito','almacen','750');
addGondola(leche);
addGondola(yerba);
const msgPpal=
`1 - Agregar Producto
 2 - Visualizar Gondola
 3 - Salir
`
let nombre=prompt('Bienvenido al sistema de log in, especifique su nombre:');
const intento = (a) =>'Ingrese Contraseña, intento '+ (a+1) + " de 3";
let logged=false;
let password='Acceso';
for (let i=0; i<3; i++){
    let InputPass=(prompt(intento(i)));
    if(InputPass===password){
        logged=true;
        break;
    }
}
switch (logged){
    case true:
        const ahora=Date.now();
        const finDto= new Date(2023,9,31);
        let diferencia=Math.floor((finDto-ahora)/(1000*60*60*24));
        alert(
            `Acceso concedido. Bienvenido ${nombre}  a la plataforma.
            Recordá que tenés ${diferencia} días hasta el fin de la promoción (31/10).
        `);
        MenuPrincipal();
function MenuPrincipal(){
let menuppal=parseInt(prompt(msgPpal));
switch(menuppal){
    case 1:
        AgregarProducto();
        break;
    case 2:
        PrintGondola();
        break;
}
}

addGondola(leche);
addGondola(yerba);
console.log(Gondola);

function AgregarProducto(){
    let nombre='';
    let categoria='';
    let precio='';
    //let nombre=prompt("ingrese el nombre del producto");
    const IngresoNombre=()=>{
        let name=prompt("ingrese el nombre del producto");
        if (name===''){
            IngresoNombre();
        }
        nombre=name;
    };
    const IngresoCategoria=()=>{
        let category=prompt(
            `
            1 - Lacteos
            2 - Panificados
            3 - Bebidas
            4 - Comestibles
            5- Limpieza
            `);
            switch(parseInt(category)){
                case 1:
                    categoria="Lacteos";
                    break;
                case 2:
                    categoria="Panificados";
                    break;
                case 3:
                    categoria="Bebidas";
                    break;
                case 4:
                    categoria="Comestibles";
                    break;
                case 5:
                    categoria="Limpieza";
                    break;
            }
    };
    const IngresoPrecio=()=>{
        let price=prompt("ingrese el precio del producto");
        if (price===''){
            IngresoPrecio();
        }
        precio=parseInt(price);
    };
    IngresoNombre();
    IngresoCategoria();
    IngresoPrecio();
    const product=new Producto(nombre,categoria,precio);
    addGondola(product);
    PrintGondola();
}

function    PrintGondola(){
let msgGondola=`Este es el detalle de la Gondola: \n`
for(let producto of Gondola){
    msgGondola+=`${producto.nombre} (${producto.categoria}) -- $ ${producto.precio} \n`
}
msgGondola+=` 1 - VOLVER`;
do{
inputMenu=prompt(msgGondola);
}while (inputMenu!= "1")
MenuPrincipal();
}
        break;
    case false:
        alert('Acceso denegado. Intente nuevamente en 24 hs.');
        break;
}


