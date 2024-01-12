console.log("script sendo executado")

const inputHomens = document.getElementById('Homens')
const inputMulheres = document.getElementById('Mulheres')
const inputCrianca = document.getElementById('Crianças')
const inputTotal = document.getElementById('TotalInput')

const buttonAdicionarHomens = document.getElementById('event-group__adicionar-homens')
const buttonAdicionarMulheres = document.getElementById('event-group__adicionar-mulheres')
const buttonAdicionarCriancas = document.getElementById('event-group__adicionar_criancas')

const buttonSubtrairHomens = document.getElementById('event-group__subtrair-homens')
const buttonSubtrairMulheres = document.getElementById('event-group__subtrair-mulheres')
const buttonSubtrairCriancas = document.getElementById('event-group__subtrair-criancas')

const buttonCalcular = document.getElementById('event-group__calcular')

console.log(buttonCalcular)
console.log(inputTotal)
console.log(inputTotal.value)



const aumentarValorHomens = () =>{
    inputHomens.value = parseInt(inputHomens.value) + 1
}

const aumentarValorMulheres = () =>{
    inputMulheres.value = parseInt(inputMulheres.value) + 1
}

const aumentarValorCriancas = () =>{
    inputCrianca.value = parseInt(inputCrianca.value) + 1
}

const subtrairValorHomens = () =>{
    if(inputHomens.value >= 1){
        inputHomens.value = parseInt(inputHomens.value) - 1
    }
}

const subtrairValorMulheres = () =>{
    if(inputMulheres.value >= 1){
        inputMulheres.value = parseInt(inputMulheres.value) - 1
    }
}

const subtrairValorCrianca = () =>{
    if(inputCrianca.value >= 1){
        inputCrianca.value = parseInt(inputCrianca.value) - 1
    }
}

const calcularTotal = () =>{
    if(parseInt(inputTotal.value )> 0){
        inputTotal.value = 0
    }
    inputTotal.value = parseInt(inputTotal.value) + parseInt(inputCrianca.value) + parseInt(inputMulheres.value) + parseInt(inputHomens.value)

}

buttonAdicionarHomens.addEventListener('click', aumentarValorHomens)
buttonAdicionarMulheres.addEventListener('click', aumentarValorMulheres)
buttonAdicionarCriancas.addEventListener('click', aumentarValorCriancas)

buttonSubtrairHomens.addEventListener('click', subtrairValorHomens)
buttonSubtrairMulheres.addEventListener('click', subtrairValorMulheres)
buttonSubtrairCriancas.addEventListener('click', subtrairValorCrianca)

buttonCalcular.addEventListener('click', calcularTotal)
