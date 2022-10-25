const notas = [6, 8, 9, 2, 5, 10];

function sumar(notas) {
    let suma = 0;
    for (let number of notas) {
        suma = number + suma;
    }
    return suma
}

function prom(notas) {
    
    let notasCantidad = notas.length;
    let suma_notas = sumar(notas); 
    const promedio = suma_notas / notasCantidad;
    
    return promedio;
}  
    
console.log(prom(notas));


// const notas = [6, 8, 9, 2, 5, 3]
// let counter = 0
// let promedio = 0

// function suma (notas){
//     for(number of notas){
//         counter = number + counter
//     }

//     promedio = counter / notas.length

//     console.log(promedio)
//     return promedio;
// }

// suma(notas)