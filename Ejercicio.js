
// Devuelve true si el num es Natural
// Usa Recursividad
    function esNatural(num) {

        if(num<0){
            return false;
       // else 
         //           }
    }
    }


// Aquellos colores negros cambiar su palabra a Black
// Devuelve el arreglo
function Colores(colores) {
    var pal="Black";

    for (var i=0;i<colores.length;i++){

        if (colores[i]=="Negros"){ 
            colores[i]=pal;
        }
    }
    return colores;
}
var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo', 'Negros', 'Verde']
console.log(Colores(colores));


// Del resultado de la funcion Colores() filtra aquellos colores llamados Black
// ejemplo ---> ['Blanco', 'Rojo', 'Amarillo', 'Verde']

var colores1=Colores(colores);
function Filtrado(colores1) {

    var cont=0;
    var idx = colores1.indexOf('Black');
    while (idx != -1) {
        cont=cont+1;
        idx = colores1.indexOf('Black', idx + 1);
    }

   var long=colores1.length - cont;
    var col=[];

        for (var i=0;i<colores1.length;){
            for (var j=0;j<long;){
    
            if(colores1[i]=='Black'){
                col[j]=colores1[i+1];
                i=i+2;
                j=j+1;
            }else{
                col[j]=colores1[i];
                i=i+1;
                j=j+1;
            }
        }
    }
    return col;
}
console.log(Filtrado(colores1));

////manera mas sencilla
function Filtrado(colores1) {
    return colores1.filter(color => color!=="Black")
}
console.log(Filtrado(colores1))


// Filtrar aquellas personas que sean menores de edad, siendo mayor de edad a partir de los 18 años
// Mostrar arreglo

function Filtrar(personas) {

    const mayores = personas.filter(pers=> pers.edad>18)
    return mayores;
}

const personas = [
    { nombre: 'Carlos', edad: 20},
    { nombre: 'Esteban', edad: 15},
    { nombre: 'Franco', edad: 12},
    { nombre: 'Estela', edad: 19},
    { nombre: 'Juan', edad: 10},
    { nombre: 'Mirtha', edad: 17}
];

console.log(Filtrar(personas));



