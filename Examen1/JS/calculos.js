/*
const capitalini = parseFloat(document.getElementById("capitalini"));
const tasa_interes = parseFloat(document.getElementById("tasa_interes"));
const años = parseFloat(document.getElementById("años"));
const calcular = document.getElementById("calcular");
const tabla = document.querySelector('#amortizacion tbody');

const tiempo = años * 12;
const tasa_porcentaje = tasa_interes / 100;
*/


//CALCULAR EL INTERÉS
/*function calculo_interes(){
    capitalini = document.getElementById("capitalini").value;
    tasa_interes = document.getElementById("tasa_interes").value;
    años = document.getElementById("años").value;

    tasa_porcentaje = tasa_interes / 100;
    tiempo = años * 12;

    var interes = capitalini(((1 + tasa_porcentaje) ** tiempo) - 1);
}


//CALCULAR EL CAPITAL FINAL
function capital_final(){

    //if(capitalini >= 1 && capitalini <= 1000000){

        var capitalini = document.getElementById("capitalini").value;
        var tasa_interes = document.getElementById("tasa_interes").value;
        var años = document.getElementById("años").value;

        var tasa_porcentaje = tasa_interes / 100;
        var capital_final = capitalini * ((1 + tasa_porcentaje) ** años);

        document.getElementById("capital_final").value = capital_final.toFixed(2);
    //}
    /*else{
        alert("Ingresa los datos en un intervalo de $1 a $1,000,000");
        examen.capitalini.focus();
        return false;
    }*/

function redondeo(n) {    
    return Math.round(n*100)/100;
}


//DESPLEGAR LA TABLA
function desplegar_tabla(){

    var capitalini = parseInt(document.getElementById("capitalini").value);
    var tasa_interes = parseInt(document.getElementById("tasa_interes").value);
	var años = parseInt(document.getElementById("años").value);

    tasa_porcentaje = tasa_interes / 100;
    tiempo = años * 12;

    var cuota = [capitalini * (tasa_porcentaje / 12) * (1 + tasa_porcentaje / 12) ** (años * 12)] / [(1 + tasa_porcentaje / 12) ** (años * 12) - 1];
	
	var table = document.getElementById("amortizacion");
	var rowCount  = 0;
	
	for (let j = 1; j <= tiempo; j++) {
		
		m_interes = capital_inicial * tasa_porcentaje / 12;
		abono_capital = cuota - m_interes;
		capi_final   = capital_inicial - abono_capital;
		
		rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		row.insertCell(0).innerHTML = j;
		row.insertCell(1).innerHTML = "$ "+ redondeo(cuota);
		row.insertCell(2).innerHTML = "$ "+ redondeo(m_interes);
		row.insertCell(3).innerHTML = "$ "+ redondeo(abono_capital);
		row.insertCell(4).innerHTML = "$ "+ redondeo(capital_inicial);
		row.insertCell(5).innerHTML = "$ "+ redondeo(capi_final);

		capital_inicial = capi_final;
	}
}


//VALIDACIÓN DE LOS CAMPOS
function validarn(e){

    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46";
    teclado_especial = false;
    
    for(var i in especiales){
        if(key == especiales[i]){
            teclado_especial = true;
        }    
    }

    if(numeros.indexOf(teclado) == -1 && !teclado_especial){
        return false;
    }   
}

