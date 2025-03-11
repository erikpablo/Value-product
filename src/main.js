import { BuyCheckout } from "./buyUtils.js"

let buy = document.querySelectorAll('.product button')
let buyContainer = document.querySelector('.buyContainer')
let close = document.querySelector('.close')
let buyConfirm = document.querySelector('.btnBuy')

let checkout = new BuyCheckout(buyContainer)

buy.forEach((button) => {
  button.addEventListener('click', (event) => checkout.buyClick(event))
})

buyConfirm.addEventListener('click', () => checkout.calculationBuy())

close.addEventListener('click', () => checkout.closeBuy())






