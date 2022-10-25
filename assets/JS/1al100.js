function numeros(num){
    if(num > 100){
        return
    }
        console.log(num)
        return numeros(num+ 1)
    
}

numeros(1)
