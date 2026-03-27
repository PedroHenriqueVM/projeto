const salario = document.getElementById("salario")
const horasNormais = document.getElementById("horasNormais")
const horasFimSemana = document.getElementById("horasFimSemana")

const valorExtras = document.getElementById("valorExtras")
const salarioAtual = document.getElementById("salarioAtual")
const resultado = document.getElementById("resultado")

function calcular(){

const salarioBruto = parseFloat(salario.value)
const horasNormaisTrabalhadas = parseFloat(horasNormais.value)
const horasFimSemanaTrabalhadas = parseFloat(horasFimSemana.value)

const valorHora = salarioBruto / 200

const extraNormal = valorHora * horasNormaisTrabalhadas
const extraFimSemana = (valorHora * 1.5) * horasFimSemanaTrabalhadas

const totalExtras = extraNormal + extraFimSemana

const novoSalario = salarioBruto + totalExtras

valorExtras.value = "R$ " + totalExtras
salarioAtual.value = "R$ " + salarioBruto
resultado.value = "R$ " + novoSalario

}