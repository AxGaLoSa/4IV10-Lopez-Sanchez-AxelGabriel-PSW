//PROBLEMA 1
function problema1(){
    var valores = document.getElementById("p1-input").value;
    var split = valores.split('').reserve;
    var resultado = '';

    split.forEach(function(palabras, i){
        if(i != 0 || i != split.length) resultado += '';
        resultado += palabras;
    });

    document.querySelector('#p1-output').textContent = resultado;
}

//PROBLEMA 2
function problema2(){
    //PARA VALORES DE X
    var x1 = document.querySelector('#p2-x1').value;
    var x2 = document.querySelector('#p2-x2').value;
    var x3 = document.querySelector('#p2-x3').value;
    var x4 = document.querySelector('#p2-x4').value;
    var x5 = document.querySelector('#p2-x5').value;

    //PARA VALORES DE Y
    var y1 = document.querySelector('#p2-y1').value;
    var y2 = document.querySelector('#p2-y2').value;
    var y3 = document.querySelector('#p2-y3').value;
    var y4 = document.querySelector('#p2-y4').value;
    var y5 = document.querySelector('#p2-y4').value;

    var vec_x = [x1, x2, x3, x4, x5];
    var vec_y = [y1, y2, y3, y4, y5];

    vec_x = vec_x.sort(function(vec_x,vec_y){
        return vec_y - vec_x;
    });

    vec_y = vec_y.sort(function(vec_x,vec_y){
        return vec_y - vec_x;
    });

    vec_y = vec_y.reverse();
    var resultado = 0;
    for(var i = 0; i < vec_x.length; i++){
        resultado += vec_x[i] * vec_y[i];
    }

    document.querySelector('#p2-output').textContent = 'El producto escalar mínimo es de: ' + resultado;

}

//PROBLEMA 3
function problema3(){
    //primero necesitamos definir un alfabeto

    var alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    //VAMOS A OBTENER A ENTRADA DE DATOS
    var p3_input = document.querySelector ('#p3-input').value;

    //LO QUE NECESITAMOS ES SEPARAR TODO POR COMAS
    var p3_palabras = p3_input.split(',');

    //NECESITAMOS UNA FUNCIÓN QUE SE ENCARGUE DE RECUPERAR CADA PALABRA
    //TENGO QUE ELIMINAR LOS ESPACIOS
    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/\s/g, '').toUppercase();
    });

    //CALCULAR LOS CARACTERES ÚNICOS
    var p3_res = '';
    
    //UNA FUNCIÓN QUE SE ENCARGUE DE CALCULAR QUE CONTIENE EL ARREGLO Y SEPARAR CADA CARACTER Y CONTARLO
    p3_palabras.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //DEBO ITERAR EL ALFABETO
        alfabeto.forEach(function(letra, j){
            //ITERO CADA PALABRA
            palabra_array.forEach(function(letras_palabras, k){
                //COMPROBAR QUE LA LETRA ESTÉ DENTRO DEL ALFABETO
                if(letras_palabras == letra){
                    //SI LA LETRA NO LA HEMOS CONTADO LA AGREGAMOS A UN ARRAY PARA CONTAR LAS LETRAS ÚNICAS
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    };
                };
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;
}
