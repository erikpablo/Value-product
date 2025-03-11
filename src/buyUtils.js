export class BuyCheckout {
    constructor(buyContainer) {
        this.buyContainer = buyContainer
        this.modalOpen = false
        this.option = document.querySelectorAll('.installments option')
    }

    buyClick(event) {
        if (this.modalOpen) {
            alert(
                'Produto já cadastrado! Feche a compra atual antes de adicionar outro produto'
            )
            return
        }

        this.buyContainer.classList.remove('hide')
        this.buyContainer.style.animation = 'slideOn 0.5s ease-out'

        this.modalOpen = true
        // const title = event.target.dataset.title
        // const price = event.target.dataset.price
        // const image = event.target.dataset.image
        const { title, price, image } = event.target.dataset

        this.dataBuy(title, price, image)

        this.valueProduct = parseFloat(price)

        this.installments(price)
    }

    installments(price) {

        this.option.forEach(option => {
            let optionValue = parseInt(option.value)
            let calculation = (price / optionValue).toFixed(2)

            option.textContent = `${optionValue}x sem juros de R$ ${calculation}`
        })
    }

    calculationBuy() {

        if(!this.valueProduct) {
            console.log("Nenhum produto selecionado")
            return;
        }
        
        let price = this.valueProduct
        let optionValue = parseInt(this.option.value) || 1;

        let valueInstallmensts = (price / optionValue).toFixed(2)
     
        let monthsYear = [];
        let date = new Date()
     
        for(let i = 1; i <= optionValue; i++) {
             let newDate = new Date(date)
             newDate.setMonth(newDate.getMonth() + i);
             let monthsYearString = newDate.toLocaleString("pt-BR", { month: "long", year: "numeric" })
             monthsYear.push(monthsYearString)
        }

        let buyConfirmProduct = document.querySelector('.buyConfirmProduct p')
     
        buyConfirmProduct.textContent = `O valor do produto é ${price}, pode ser parcelado em ${optionValue} de ${valueInstallmensts} nos meses ${monthsYear}`
     }
     

    dataBuy(title, price, image) {
        const nameProduct = document.querySelector('.nameProduct')
        const img = document.querySelector('.buyProduct img')
        const valueProduct = document.querySelector('.valueProduct')

        nameProduct.textContent = title
        img.src = image
        valueProduct.textContent = `R$ ${price}`
    }

    closeBuy() {
        this.buyContainer.style.animation = 'slideOff 0.5s ease-out'

        this.buyContainer.addEventListener(
            'animationend',
            () => {
                this.buyContainer.classList.add('hide')
                this.modalOpen = false
            },
            { once: true }
        )
    }
}
