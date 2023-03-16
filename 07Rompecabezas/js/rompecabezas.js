/*
Primero tenemos que hacer un mapeo sobre las imágenes que se van a trabajar
para el rompecabezas, porque debemos saber donde está situada cada pieza y 
apartir de ello compararala con la imágen principal, si hacen match ganamos,
sino hay que seguir comparando el orden hasta que coincida
*/ 

var instrucciones = ["Utiliza las flechas de navegación para mover las piezas",
"Ordena las piezas hasta alcanzar el objetivo"];

//AQUÍ VAN LAS FLECHAS
var movimientos = [];

//VAMOS A CREAR LA MATRIZ PARA LAS POSICIONES DEL ROMPECABEZAS
var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var rompeCorrecto = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//TENEMOS QUE IDENTIFICAR DONDE ESTÁ EL PUNTO DE PARTIDA DE LA PIEZA VACÍA
var filaVacia = 2;
var columnaVacia = 2;

//NECESITO UNA FUNCIÓN PARA RECORRER EL ARREGLO PARA PASAR POR CADA ELEMENTO
function mostrarInstrucciones(instrucciones){
    for(var i = 0; i < instrucciones.length; i++){
        //OTRA FUNCIÓN QUE ENLISTE LA INSTRUCCIÓN
        mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");

    }
}

function mostrarInstruccionesEnLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    //AHORA AGREGAMOS li
    var li = document.createElement("li");
    //VAMOS A AGREGAR
    li.textContent = instruccion;
    ul.appendChild(li);
}

//VAMOS A CREAR UNA FUNCIÓN PARA CHECAR SI GANAMOS
function checarSiGane(){
    //TENGO QUE RECORRER LAS PIEZAS PARA VER SI COINCIDEN
    for(var i = 0; i < rompe.length; i++){
        for(var j = 0; j < rompe[i].length; j++){
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecto[i][j]){
                return false;
            }
        }
    }
    return true;
}

//UNA FUNCIÓN PARA MOSTRAR QUE SI GANÉ
function mostrarCartelganador(){
    if(checarSiGane()){
        alert("Siiiiuuuuuu a mimir._.");
    }
    return false;
}

/**
 * VAMOS A CREAR UNA FUNCIÓN QUE SE ENCARGUE DE PODER INTERCAMBIAR LAS POSICIONES 
 * DE LAS PIEZAS PORQUE DENTRO DEL ROMPECABEZAS NECESITAMOS MOVER:
 * arreglo[1][2] = arreglo[0][0]
 * arreglo[0][0] = arreglo[1][2]
 */

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    //MIS VARIABLES DE LAS POSICIONES
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];
    //INTERCAMBIO
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//TENEMOS QUE ACTUALIZAR LA PIEZA VACÍA PORQUE ESA ES LA QUE SE MUEVE
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//TENGO QUE VALIDAR SI LA POSICIÓN DENTRO DEL ROMPECABEZAS ES LA CORRECTA DE LA PIEZA
function posicionValida(fila, columna){
    return(fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

/**
 * AHORA VIENE LA PARTE DEL MOVIMIENTO DE LAS PIEZAS, A LO QUE EL HUECO ES LO QUE SE 
 * ESTARÁ MOVIENDO E INTERCAMBIANDO LAS POSICIONES PARA ELLO TENEMOS QUE SABER QUE 
 * TECLAS DE NAVEGACIÓN SE ESTÁN PRESIONANDO Y HACIA QUE DIRECCIÓN DEBE DE MOVERSE
 * DE AHÍ EL CÓDIGO ES: ARRIBA 38 ABAJO 40 IZQUIERDA 37 DERECHA 39
 */
function moverEnDireccion(direccion){
    var nuevaFilaVacia;
    var nuevaColumnaVacia;

    //SI SE MUEVE HACIA ABAJO
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaVacia = filaVacia + 1;
        nuevaColumnaVacia = columnaVacia;
    }
    //SI SE MUEVE HACIA ARRIBA
    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaVacia = filaVacia - 1;
        nuevaColumnaVacia = columnaVacia;
    }
    //SI SE MUEVE HACIA LA DERECHA
    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaVacia = filaVacia;
        nuevaColumnaVacia = columnaVacia + 1;
    }
    //SI SE MUEVE HACIA LA IZQUIERDA
    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaVacia = filaVacia;
        nuevaColumnaVacia = columnaVacia - 1;
    }
    
    //TENGO QUE CHECAR SI LA NUEVA POSICION ES VALIDA Y SINO INTERCAMBIARLA
    if(posicionValida(nuevaFilaVacia, nuevaColumnaVacia)){
        //INTERCAMBIO
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaVacia, nuevaColumnaVacia);
        //ACTUALIZAR LA POSICION
        actualizarPosicionVacia(nuevaFilaVacia, nuevaColumnaVacia);
        //AGREGAR EL ÚLTIMO MOVIMIENTO
        agregarUltimoMovimiento(direccion);
    }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    //PORQUE VAMOS A INTERCAMBIAR POSICIONES DE ACUERDO A LAS PIEZAS
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    //MANDO A LLAMAR A INTERCAMBIAR LAS POSISICONES DEL ROMPECABEZAS
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);

    //FALTA CREAR UNA FUNCIÓN QUE CAMBIE ÑLAS POSICIONES EN EL DOM
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
    //OBTENGO LOS ELEMENTOS DEL DOM
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    //CREO AL PADRE
    var padre = elementoPieza1.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);

}

//VAMOS A IDENTIFICAR LOS CODIGOS DE LA DIRECCION
var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

//VAMOS A ACTUALIZAR LOS MOVIMIENTOS
function actualizarUltimoMovimiento(direccion){
    //OBTENEMOS EL ELEMNTO DEL DOM
    var ultimoMov = document.getElementById('flecha');
    switch(direccion){
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigosDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case codigosDireccion.DERECHA:
            ultimoMov.textContent = '→';
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMov.textContent = '←';
            break;
    }
}

//VAMOS A MEZCLAR LAS PIEZAS
function mezclarPiezas(veces){
    if(veces <= 0){
        alert("Hola siiuuu");
        return;
    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];

    //VAMOS A METER EN UN RANDOM LAS DIRECCIONES
    var direccion = direcciones[Math.floor(Math.random) * direcciones.length];

    //MANDO A LLAMAR A MOVER EN DIRECCIÓN
    moverEnDireccion(direccion);

    //MANDO RETRASO
    setTimeout(function(){
        mezclarPiezas(veces - 1);
    }, 100);
}

//VAMOS A CREAR UNA EXTENSIÓN PARA SABER AHORA SI QUE TECLA ESTÁ PRESIONANDO EL JUGADOR
function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which == codigosDireccion.ABAJO || codigosDireccion.ARRIBA || codigosDireccion.DERECHA || codigosDireccion.IZQUIERDA){
            //COMO YA SE QUE TECLA MANDÓ A LLAMAR A MOVERDIRECCION
            moverEnDireccion(evento.which);
            //ACTUALIZO EL ULTIMO MOVIMIENTO
            actualizarUltimoMovimiento(evento.which);

            var gano = checarSiGane();

            if(gano){
                setTimeout(function(){
                    mostrarCartelganador();
                }, 500);
            }
            evento.preventDefault;
        }
    });
}

//FUNCION PARA INICIAR
function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

iniciar();
mostrarInstrucciones(instrucciones);