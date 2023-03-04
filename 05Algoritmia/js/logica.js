//PROBLEMA 1
function problema(){
    //primero necesitamos definir un alfabeto

    var alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    //VAMOS A OBTENER A NETRADA DE DATOS
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
    document.querySelector('.#p3-output').textContent = p3_respuesta;
}

//PROBLEMA 2


//PROBLEMA 3