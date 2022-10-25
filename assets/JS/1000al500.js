function numeros (num){
    if(num == 500){
        return num
    }

console.log(num)
return numeros (num - 2)
}

console.log(numeros(1000))