const process = require ('process')

const entradaOperacion = process.argv[2].toLowerCase();
const entradaMonto = +process.argv[3];
const entradaNombreUsuario = process.argv[4];

const miCuenta = {
    nombre: "Ezequiel",
    dinero: 100000,
    numeroCuenta: '3'

}

const usuarioDisponibles = [ const usuariosDisponibles = [
    {
      nombre: "Alberto",
      dinero: 0,
      numeroCuenta: "1",
    },
    {
      nombre: "Cristian",
      dinero: 0,
      numeroCuenta: "2",
    },
    {
      nombre: "Maximiliano",
      dinero: 0,
      numeroCuenta: "4",
    },
    {
      nombre: "Fabian",
      dinero: 0,
      numeroCuenta: "5",
    },
    {
      nombre: "Gustavo",
      dinero: 300,
      numeroCuenta: "9",
    },
  ];

];
 
function esUnaAccionValida(){

}

function operacionEgreso(miUsuario, monto) {
miUsuario.dinero = miUsuario.dinero - monto;
}

function operacionIngreso(miUsuario, monto) {
    miUsuario.dinero = miUsuario.dinero + monto;
    }

function usuarioDestino(entradaUsuarioDestino, usuarioDisponibles){
    const
}    

//funcion madre
    function cajeroAutomatico(usuarioActual, monto, operacion){

   if (esUnaOperacionValida(operacion)){

    if (operacion === "extraccion" || operacion == "extraer"){
        operacionEgreso(usuarioActual, monto)
    }

   }else{
       return "La operacion ingresada es invalida"
   }
    }
    
    cajeroAutomatico(miCuenta)