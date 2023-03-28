/* 
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação ii!" no final.
Exemplos:
cumprimentar ( "Leonardo") // retornará "Olá, Leonardo!
cumprimentar ( "Maria") // retornará "Olá, Maria!"
*/

const nomes = (nomes) => {
    console.log(`Olá, ${nomes}!`)
}

nomes('Henrique')
// output: Olá, Henrique!

/* 
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos .com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converter IdadeEmAnosparaDias(25) // retornará 9125
converter IdadeEmAnosparaDias(70) // retornará 25550
*/

const idade = (idade) => {
    let dias = 0
    for (let i = 1; i <= idade; i++) {
        dias += 365
    }
    return dias
}

console.log(`Dias: ${idade(25)}`) //output: Dias: 9125

/* 
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSa1ario(150, 40.5) // retornará "Salário igual a R$ 6075"
*/

const getSalario = (sal, horaTrabalhadas) => {
    
}