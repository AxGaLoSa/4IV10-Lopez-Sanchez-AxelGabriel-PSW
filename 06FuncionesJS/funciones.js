/*
Las variables que se ocupan dentro de JavaScript son 3:

var--> Que actualmente está en sustitucion.

Let--> es una variable protegida porque soki funciona dento de una funcion o método declarado en un fragmento de código.

const--> La cual es el valor constante  en tosdo el documentyo y no puede cambiar su estado.
*/ 


let x = "x";

if(true){
    //declaramos una constante
    const x = "y";
    console.log(x);
}



//Diferencia entre una función y una función flecha
//Por ejemplo sumar dos números

function sumarFuncionNormal(n1, n2){
    return n1+n2;
}

console.log(`La suma de (3, 4): ${sumarFuncionNormal(3, 4)}`);

/*La comilla alrevés se ocupa para cuando queremos modificar el comportamiento de un HTML 
o queremos incrustar en JS código de HTML

Una función flecha tiene como estructura:
"cadena" -> id, clase, name, atributo

Pude ser reconocida por una clase, atributo, etc, en HTML.

*/

const sumarFuncionFlecha = (n1, n2) => n1 + n2;
console.log(`La suma de (5, 6): ${sumarFuncionFlecha(5, 6)}`);

const  razasDePerros = [
    "Gran Danes",
    "Pastor Alemán",
    "Chihuahua",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
];

//Con un for normal 
for(let indice = 0; indice < razasDePerros.length; indice ++){
    console.log(razasDePerros[indice]);
}

for(const raza of razasDePerros){
    console.log(raza);
}

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

//forEach es poder iterar sobre elementos del arreglo que no devuelven nada}

razasDePerros.forEach((raza, indice, aregloOriginal) => {
    console.log(raza);
})

//método find
//método indexof
//método map
//método sort.....

