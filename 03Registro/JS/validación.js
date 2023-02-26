/*
JavaScript es un lenguaje
que posee un paradigma orientado a objetos, funciones
y eventos.
Por tal motivo presenta una particularidad que es:

NO TIPADO
No existe int, float, straing, ni char, ni nada :((

Todo es var -> variable

De acuerdo al estándar ES6 se manejan 3 tipos de variable

VAR es una variable global
LET es una variable del tipo "Protected"
CONST es un valor constante
*/

function validar(formulario){

    //Validar nombre
        if(formulario.nombre.value.length <= 3){
            alert("Favor de ingresar más de 3 caracteres en campo nombre");
            formulario.nombre.focus();
            return false;
        }
    
        else if(formulario.nombre.value.length >= 12){
            alert("Favor de ingresar menos de 12 caracteres en campo nombre");
            formulario.nombre.focus();
            return false;
        }
    
        var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
        + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    
        var cadenaNombre = formulario.nombre.value;
    
        var todoesvalido = true;
    
        for(var i = 0; i < cadenaNombre.length; i++){
            var caracteres = cadenaNombre.charAt(i);
            for(var j = 0; j < checarABC.length; j++){
                if(caracteres == checarABC.charAt(j)){
                    break;
                }
            }
            if(j == checarABC.length){
                todoesvalido = false;
                break;
            }
        }
    
        if(!todoesvalido){
            alert("Ingrese solo letras en el campo nombre");
            formulario.nombre.focus();
            return false;
        }
    
        var checarABC = "12345687890";
    
        var cadenaNombre = formulario.edad.value;
    
        var todoesvalido = true;
    
        for(var i = 0; i < cadenaNombre.length; i++){
            var caracteres = cadenaNombre.charAt(i);
            for(var j = 0; j < checarABC.length; j++){
                if(caracteres == checarABC.charAt(j)){
                    break;
                }
            }
            if(j == checarABC.length){
                todoesvalido = false;
                break;
            }
        }
    
    //Validar edad    
        if(!todoesvalido){
            alert("Ingrese solo numeros en el campo edad");
            formulario.edad.focus();
            return false;
        }
    
    
        var edad = parseInt(formulario.edad.value);
    
        if((edad < 0) || (edad >= 99)){
            alert("Favor de ingresar una edad valida de entre 01 y 99 años");
            formulario.edad.focus();
            return false;
        }
    
     //Validar fecha nacimiento
        var fecha = new Date(formulario.fecha.value);
    
        var hoy = new Date();
        var mes = fecha.getMonth()+1;
        var dia = fecha.getDate();
    
        if(fecha > hoy){
            alert("No se puede poner una fecha que no ha pasado");
            formulario.fecha.focus();
            return false;
        }
    
        if((dia<1) || (dia>31)){
            alert("El día ingresado no existe, prueba en un rango de 1-31")
            formulario.fecha.focus();
            return false;
        }
    
        if((mes == 2) && (dia > 29)){
            alert("Febrero solo cuenta con 29 dias, prueba en un rango de 1-29")
            formulario.fecha.focus();
            return false;
        }
    
        var fechaInicio = hoy.getTime();
        var fechaFin = fecha.getTime();
        let dife = fechaInicio - fechaFin;
        var difeanios = dife / (1000*60*60*24*365);
        difeanios= Math.trunc(difeanios);
    
        if(difeanios != edad){
            alert("Tu edad no corresponde con tu fecha de nacimiento");
            formulario.fecha.focus();
            return false;
        }
    
    //Validar correo
        //es obtener el campo de correo
    
        var email = formulario.correo.value;
    
        //vamos a crear una expresión regular
    
        var prueba = "/([Aa-Zz]+[0-9]+\.){10}\@([Aa-Zz]+[0-9]+){8}\.([Aa-Zz]+[0-9]+){3}/g";
    
         alert("Email " + (prueba.test(email) ? " " : "no ") + "valido");
    
         return prueba.test;
    }