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

function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
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

//PAPAS = 2%, PASTELITO = 10%, LACTEO = 7.5%
//PROBLEMA3
function f_producto(){
    var nombre = document.getElementById("nombre").value;
    var marca = document.getElementById("marca").value;
    var tipo = document.getElementById("tipo").value;
    var precio = parseInt(document.getElementById("precio").value);
    preciof = 0

    if(tipo == "Papas" || "papas" || "PAPAS"){
        descuento = (precio  * 0.02);
        preciof = precio - descuento;
    }

    if(tipo == "Pastelito" || "pastelito" || "PASTELITO"){
        descuento = (precio  * 0.10);
        preciof = precio - descuento;
    }

    if(tipo == "Lacteo" || "lacteo" || "LACTEO"){
        descuento = (precio  * 0.075);
        preciof = precio - descuento;
    }

    document.getElementById("total").value = "$ " + preciof;
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


//PROBLEMA 6
function f_edad(){
    var nacimiento = new Date(document.getElementById("nacimiento").value + "T00:00");
    var hoy = new Date();

    var edad = Math.trunc((hoy - nacimiento) / (1000 * 60 * 60 * 24 * 365));

    document.getElementById("edad").value = edad + " años";
}


//PROBLEMA 7
function f_dos_num(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = 0;

    if(num1 == num2){
    resultado = num1 * num2;
    }
    if(num1 > num2){
    resultado = num1 ** num2;
    }
    if(num1 < num2 && num2 != 0){
    resultado = num1 / num2;
    }

    document.getElementById("resultado").value = resultado;
}


//PROBLEMA 8
function f_tres_numeros(){

    const tres = [];
    tres[0] = parseInt(document.getElementById("numero1").value);
	tres[1] = parseInt(document.getElementById("numero2").value);
	tres[2] = parseInt(document.getElementById("numero3").value);
	
    document.getElementById("mayor").value = Math.max.apply(null, tres);
}


//PROBLEMA 9
function horas_extras(){

    var horas_totales = parseInt(document.getElementById("horas_totales").value);
    var costo_hora = parseInt(document.getElementById("costo_hora").value);
	var horas_41_a_48 = 0;
	var horas_49_y_mas = 0;
	
	if (horas_totales > 40 ) { 
		horas_41_a_48 = horas_totales -40;
		
		if (horas_41_a_48 > 8) {
			horas_49_y_mas = horas_41_a_48 - 8;
			horas_41_a_48 = 8;
		}
	}
	
	tot_extra = (horas_41_a_48 * 2 * costo_hora) + (horas_49_y_mas * 3 * costo_hora) ;
	
    document.getElementById("monto_extra").value = tot_extra;
}


//PROBLEMA 10
function f_utilidades(){

    var antiguedad = parseInt(document.getElementById("antiguo").value);
    var sueldo = parseInt(document.getElementById("sueldo_mes").value);
	var porcentaje = 0;

	switch(antiguedad) {
		case 0: porcentaje = 5;
		break;
		case 1: porcentaje = 7;
		break;
		case 2: porcentaje = 10;
		break;
		case 3: porcentaje = 15;
		break;
		default: porcentaje = 20;
	}
	var utilidad = sueldo * (porcentaje/100);
	
    document.getElementById("utilidades").value = "$ "+ utilidad;
}



//FUNCIONES DE BORRAR DATOS
function borrard(){
    document.getElementById("problema1").reset();
    document.getElementById("problema2").reset();
    document.getElementById("problema3").reset();
    document.getElementById("problema4").reset();
    document.getElementById("problema5").reset();
    document.getElementById("problema6").reset();
    document.getElementById("problema7").reset();
    document.getElementById("problema8").reset();
    document.getElementById("problema9").reset();
    document.getElementById("problema10").reset();
}