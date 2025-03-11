import { BuyCheckout } from "./buyUtils.js"

let buy = document.querySelectorAll('.product button')
let buyContainer = document.querySelector('.buyContainer')
let close = document.querySelector('.close')

let checkout = new BuyCheckout(buyContainer)

buy.forEach((button) => {
  button.addEventListener('click', (event) => checkout.buyClick(event))
})

close.addEventListener('click', () => checkout.closeBuy())

// close.addEventListener('click', () => {buyContainer.classList.toggle('hide')})

// function calculation(valueProduct, installments) {
//    let valueInstallmensts = (valueProduct / installments).toFixed(2)

//    let monthsYear = [];
//    let date = new Date()

//    for(let i = 1; i <= installments; i++) {
//         let newDate = new Date(date)
//         newDate.setMonth(newDate.getMonth() + i);
//         let monthsYearString = newDate.toLocaleString("pt-BR", { day: "numeric", month: "long", year: "numeric" })
//         monthsYear.push(monthsYearString)
//    }

//     console.log(`O valor do produto é ${valueProduct}, pode ser parcelado em ${installments} de ${valueInstallmensts} nos meses ${monthsYear}`)
// }


// calculation(1000, 12)




