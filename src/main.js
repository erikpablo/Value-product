let buy = document.querySelectorAll('.product button')
let buyContainer = document.querySelector('.buyContainer')
let close = document.querySelector('.close')

function buyClick() {
  buyContainer.classList.remove('hide')
  buyContainer.style.animation = 'slideOn 0.5s ease-out'
  
}

function closeBuy () {
  buyContainer.style.animation = 'slideOff 0.5s ease-out' 

  buyContainer.addEventListener('animationend', () => {
    buyContainer.classList.add('hide'); 
  }, { once: true }); 
}



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





// biome-ignore lint/complexity/noForEach: <explanation>
buy.forEach(button => {
  button.addEventListener('click', buyClick);
})
close.addEventListener('click', closeBuy)