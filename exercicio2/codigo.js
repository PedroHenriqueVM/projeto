const salario = document.getElementById("salario")

const percentual = document.getElementById("percentual")
const aumento = document.getElementById("aumento")
const resultado = document.getElementById("resultado")

function calcular(){

const salarioAtual = parseFloat(salario.value)

let porcentagem = 0

if(salarioAtual <= 1200){
porcentagem = 16
}

else if(salarioAtual <= 2100){
porcentagem = 13
}

else if(salarioAtual <= 3000){
porcentagem = 10
}

else{
porcentagem = 5
}

const valorAumento = salarioAtual * (porcentagem / 100)
const novoSalario = salarioAtual + valorAumento

percentual.value = porcentagem + "%"
aumento.value = "R$ " + valorAumento.toFixed(2)
resultado.value = "R$ " + novoSalario.toFixed(2)

}