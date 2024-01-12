console.log("script sendo executado")

const inputHomens = document.getElementById('Homens')
const inputMulheres = document.getElementById('Mulheres')
const inputCrianca = document.getElementById('Crianças')

const buttonAdicionarHomens = document.getElementById('event-group__adicionar-homens')
const buttonAdicionarMulheres = document.getElementById('event-group__adicionar-mulheres')
const buttonAdicionarCriancas = document.getElementById('event-group__adicionar_criancas')

const buttonSubtrairHomens = document.getElementById('event-group__subtrair-homens')
const buttonSubtrairMulheres = document.getElementById('event-group__subtrair-mulheres')
const buttonSubtrairCriancas = document.getElementById('event-group__subtrair-criancas')


console.log(inputCrianca)
console.log(buttonAdicionarCriancas)


const aumentarValorHomens = () =>{
    inputHomens.value = parseInt(inputHomens.value) + 5
}

const aumentarValorMulheres = () =>{
    inputMulheres.value = parseInt(inputMulheres.value) + 3
}

const aumentarValorCriancas = () =>{
    inputCrianca.value = parseInt(inputCrianca.value) + 1
}

const subtrairValorHomens = () =>{
    if(inputHomens.value >= 5){
        inputHomens.value = parseInt(inputHomens.value) - 5
    }
}

const subtrairValorMulheres = () =>{
    if(inputMulheres.value >= 3){
        inputMulheres.value = parseInt(inputMulheres.value) - 3
    }
}

const subtrairValorCrianca = () =>{
    if(inputCrianca.value >= 1){
        inputCrianca.value = parseInt(inputCrianca.value) - 1
    }
}


buttonAdicionarHomens.addEventListener('click', aumentarValorHomens)
buttonAdicionarMulheres.addEventListener('click', aumentarValorMulheres)
buttonAdicionarCriancas.addEventListener('click', aumentarValorCriancas)

buttonSubtrairHomens.addEventListener('click', subtrairValorHomens)
buttonSubtrairMulheres.addEventListener('click', subtrairValorMulheres)
buttonSubtrairCriancas.addEventListener('click', subtrairValorCrianca)
