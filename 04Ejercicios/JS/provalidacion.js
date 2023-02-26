//PROBLEMA 1
function f_interes(){
    var valor = document.getElementById("cantidad").value;
    var meses = document.getElementById("meses").value;
    var int_meses = parseInt(meses);
    var int_valor = parseInt(valor);
    var interes = int_valor * 0.082 * int_meses;
    var total = int_valor + interes;
    document.getElementById("cantidadi").value = "$ " + total;
}

//PROBLEMA 2
function f_sueldo(){
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var n_ventas = parseInt(document.getElementById("ventas").value);
    var m_ventas = parseInt(document.getElementById("monto_ventas").value);
    var comision = 0;
    
    if(n_ventas >= 5){
        comision = m_ventas * 0.35;
    }

    var total = (sueldo + comision) * 0.88;
    document.getElementById("comision_total").value = "$ " + comision;
    document.getElementById("sueldo_total").value = "$ " + total;
}


//PROBLEMA3
function validar(formulario){

    //Validar nombre del producto
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
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

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

    var cadenaNombre = formulario.precio.value;

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
    
    //Validar marca del producto
    if(formulario.marca.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en campo marca");
        formulario.marca.focus();
        return false;
    }

    else if(formulario.marca.value.length >= 12){
        alert("Favor de ingresar menos de 12 caracteres en campo marca");
        formulario.marca.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaMarca = formulario.marca.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaMarca.length; i++){
        var caracteres = cadenaMarca.charAt(i);
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
        alert("Ingrese solo letras en el campo marca");
        formulario.marca.focus();
        return false;
    }

    var checarABC = "12345687890";

    var cadenaMarca = formulario.precio.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaMarca.length; i++){
        var caracteres = cadenaMarca.charAt(i);
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

    //Validar tipo de producto
    if(formulario.tipo.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en campo tipo");
        formulario.tipo.focus();
        return false;
    }

    else if(formulario.tipo.value.length >= 12){
        alert("Favor de ingresar menos de 12 caracteres en campo tipo");
        formulario.tipo.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaTipo = formulario.tipo.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaTipo.length; i++){
        var caracteres = cadenaTipo.charAt(i);
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
        alert("Ingrese solo letras en el campo tipo");
        formulario.tipo.focus();
        return false;
    }

    var checarABC = "12345687890";

    var cadenaTipo = formulario.precio.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaTipo.length; i++){
        var caracteres = cadenaTipo.charAt(i);
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

    //Validar precio del producto
    if(!todoesvalido){
        alert("Ingrese solo numeros en el campo precio");
        formulario.precio.focus();
        return false;
    }


    var precio = parseInt(formulario.precio.value);

    if((precio < 0) || (precio >= 999)){
        alert("Favor de ingresar un precio valido de entre 01 y 999 pesos");
        formulario.precio.focus();
        return false;
    }
}

function cantifinal(){
   //Operaciones respecto a los descuentos y final

   var valor = document.getElementById("precio").value;
   var tipo = document.getElementById("tipo").value;
   var resul = parseInt(valor);
   var papas = resul * 0.02;
   var pastel = resul * 0.1;
   var lacteo = resul * 0.075;

   if(tipo == "papas" || tipo == "PAPAS" || tipo == "Papas"){
       document.getElementById("cantidad").value = "$ " + (resul - papas);
   } else if(tipo == "pastelito" || tipo == "PASTELITO" || tipo == "Pastelito"){
    document.getElementById("cantidad").value = "$ " + (resul - pastel);
   }else if(tipo == "lacteo" || tipo == "LACTEO" || tipo == "Lacteo"
    || tipo == "lácteo" || tipo == "LÁCTEO" || tipo == "Lácteo"){
        document.getElementById("cantidad").value = "$ " + (resul - lacteo);
    }
}



//PROBLEMA 4
function f_califica(){
    var parcial1 = parseInt(document.getElementById("parcial1").value);
    var parcial2 = parseInt(document.getElementById("parcial2").value);
    var parcial3 = parseInt(document.getElementById("parcial3").value);
    var examen = parseInt(document.getElementById("examenfinal").value);
    var trabajo = parseInt(document.getElementById("trabajofinal").value);

	var calif_final = ((parcial1 + parcial2 + parcial3) / 3.0) * 0.55;
	calif_final = calif_final + (examen * 0.3);
	calif_final = calif_final + (trabajo * 0.15);
	
    document.getElementById("calif_final").value = calif_final;
}


//PROBLEMA 5
function f_porcentajes(){
    var hombres = parseInt(document.getElementById("hombres").value);
    var mujeres = parseInt(document.getElementById("mujeres").value);

    var p_hombres = 100 * hombres / (hombres + mujeres);
    var p_mujeres = 100 * mujeres / (hombres + mujeres);

    document.getElementById("por_hombre").value = p_hombres + "%";
    document.getElementById("por_mujer").value = p_mujeres + "%";

}