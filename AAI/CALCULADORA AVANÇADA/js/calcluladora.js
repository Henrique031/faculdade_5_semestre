let numeros = [0, 0]
let atual = 0
let operacao;
let result = 0
let cont = 0



const addDisplay1 = () => {
    document.getElementById('op1').innerText = parseFloat(numeros[0])
    document.getElementById('valor').value = ''

    if(atual == 1) {
        numeros[0] = parseFloat(eval(`${numeros[0]} ${operacao} ${numeros[1]}`))
        numeros[1] = 0
        document.getElementById('op1').innerText = parseFloat(numeros[0])
    }
    console.log(numeros)
}

const addDisplay2 = () => {
    document.getElementById('op2').innerHTML = operacao
}

const resultado = () => {
    document.getElementById('op1').innerText = numeros[1]
    document.getElementById('valor').value = ''
    numeros[0] = eval(`${numeros[0]} ${operacao} ${numeros[1]}`) 
    numeros[1] = 0
    result = numeros[0]
    console.log(result)
    atual = 0
}

const adicionarOperacao = (simbolo) => {
    
    numeros[atual] = parseFloat(document.getElementById('valor').value)
    operacao = simbolo
    addDisplay1()
    addDisplay2()
    atual = 1
    cont++
    console.log('Valor atual: ' + atual)
    console.log(`Contador: ${cont}`)

    
}

const calcular = () => {
    if (cont >= 2){
        document.getElementById('op1').innerText = parseFloat(numeros[0])
        document.getElementById('op2').innerText = ''
        console.log(numeros)
    } else {
        numeros[1] = parseFloat(document.getElementById('valor').value)
        resultado()
        document.getElementById('resultado').innerText = result
    }
    
}

const limpar = () => {
    numeros = [0, 0]
    atual = 0
    cont = 0
    result = 0
    operacao = null
    document.getElementById('op1').innerText = ''
    document.getElementById('op2').innerText = ''
    document.getElementById('valor').value = ''
}



const btnSomar = document.getElementById('somar');
btnSomar.addEventListener('click', () => {
  adicionarOperacao('+')
});

const btnSubtrair = document.getElementById('subtrair');
btnSubtrair.addEventListener('click', () => {
  adicionarOperacao('-')
});

const btnMultiplicar = document.getElementById('multiplicar');
btnMultiplicar.addEventListener('click', () => {
  adicionarOperacao('*')
});

const btnDividir = document.getElementById('dividir');
btnDividir.addEventListener('click', () => {
  adicionarOperacao('/')
});

const btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', () => {
  calcular()
});

const btnlimpar = document.getElementById('ce')
btnlimpar.addEventListener('click', () => {
    limpar()
})
