const pessoas = document.getElementById("pessoas")
const dias = document.getElementById("dias")
const resultado = document.getElementById("resultado")

function calcular(){

    const funcionarios = parseInt(pessoas.value)
    const diasPrecisos = parseInt(dias.value)

    let valor = 0

    if(funcionarios <= 49){
        valor = 4.50
    }
    else if(funcionarios <= 99){
        valor = 4.10
    }
    else if(funcionarios <= 149){
        valor = 3.80
    }
    else{
        valor = 3.60
    }

    const total = funcionarios * diasPrecisos * valor

    resultado.value = total
}