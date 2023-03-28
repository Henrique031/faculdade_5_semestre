let numeros = [0, 0]
let displayValue = []
let atual = 0
let operacao
let result = 0
let cont = 0



const addDisplay1 = () => {
  document.getElementById('op1').innerText = parseFloat(numeros[0])
  document.getElementById('valor').value = ''

  if (atual == 1) {
    numeros[0] = parseFloat(eval(`${numeros[0]} ${operacao} ${numeros[1]}`))
    numeros[1] = 0
    document.getElementById('op1').innerText = parseFloat(numeros[0])
  }
  console.log(numeros)
}

const addDisplayOperacao = () => {
  if (cont == 1) {
    document.getElementById('op2').innerHTML = ''
  } else {
    document.getElementById('op2').innerHTML = operacao
  }
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
  console.log(simbolo)

  //transforma o input em uma str, para concatenar com a operação
  // displayValue[array] = toString(document.getElementById('valor').value)
  

  numeros[atual] = parseFloat(document.getElementById('valor').value) //setar o valor do input no indice 0
  operacao = simbolo // guardar simbolo de operação
  addDisplay1()
  addDisplayOperacao()
  atual = 1
  cont++
  console.log('Valor atual: ' + atual)
  console.log(`Contador: ${cont}`)


}

const calcular = () => {
  //input é uma string
  let input = document.getElementById('valor').value
  // console.log(typeof input) //string
  if (!isNaN(input)) 
    alert('Nenhum valor encontrado!')


  if (cont >= 2) {
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
  document.getElementById('op1').innerText = ''
  document.getElementById('op2').innerText = ''
  document.getElementById('valor').value = ''
}



const btnSomar = document.getElementById('somar')
btnSomar.addEventListener('click', () => {
  adicionarOperacao('+')
})

const btnSubtrair = document.getElementById('subtrair')
btnSubtrair.addEventListener('click', () => {
  adicionarOperacao('-')
})

const btnMultiplicar = document.getElementById('multiplicar')
btnMultiplicar.addEventListener('click', () => {
  adicionarOperacao('*')
})

const btnDividir = document.getElementById('dividir')
btnDividir.addEventListener('click', () => {
  adicionarOperacao('/')
})

const btnIgual = document.getElementById('calcular')
btnIgual.addEventListener('click', () => {
  calcular()
})

const btnlimpar = document.getElementById('ce')
btnlimpar.addEventListener('click', () => {
  limpar()
})
