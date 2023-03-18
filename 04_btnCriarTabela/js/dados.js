/* 
Objetivo: Manipular elementos HTM pelo JS
Autor: Marcel
Data: 08/03/2023
Version: 1.0
*/

let buttonTable = document.getElementById('table')


const createElements = () => {
    let userName = document.getElementById('name').value
    let userNumber = document.getElementById('telephone').value
    let div = document.getElementById('nameList')

    let ulNames = document.createElement('ul')
    let liNames = document.createElement('li')

    let itemName = document.createTextNode(`Name: ${userName}`)
    let itemNumber = document.createTextNode(`Number: ${userNumber}`)

    
    //AppendChild - Permite associar um elemento filho ao elemento pai //Append - Acrecentar //Child - Filho
    div.appendChild(ulNames)
    ulNames.appendChild(liNames)
    liNames.appendChild(itemName)
    liNames.appendChild(itemNumber)

}

const createTable = () => {
    let div = document.getElementById('nameList')

    let table = document.createElement('table')
    let row = document.createElement('tr')
    let columnName = document.createElement('td')
    let columnTelephone = document.createElement('td')

    let nameTitle = document.createTextNode('Name')
    let telephoneTitle = document.createTextNode('Telephone')

    div.appendChild(table)
    table.appendChild(row)
    row.appendChild(columnName)
    row.appendChild(columnTelephone)

    columnName.appendChild(`${nameTitle}`)
    columnTelephone.appendChild(`${telephoneTitle}`)

}




buttonTable.addEventListener('click', _ => createTable())