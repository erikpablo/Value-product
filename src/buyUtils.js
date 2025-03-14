export class BuyCheckout {
    constructor(buyContainer) {
        this.buyContainer = buyContainer
        this.modalOpen = false
        this.option = document.querySelectorAll('.installments option')
        this.purchaseMade = document.querySelector('.buyConfirmProduct')
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
        let name = document.querySelector('.datesProduct input').value
        
        if(!name) {
            alert('Por gentileza, confirme o nome')
            return
        }

        if (!this.verifyPurchase()) {
            return;
        }
        
        let price = this.valueProduct

        let select = document.querySelector('.installments');
        let optionValue = parseInt(select.value)

        let valueInstallmensts = (price / optionValue).toFixed(2)
     
        let monthsYear = [];
        let date = new Date()
     
        for(let i = 1; i <= optionValue; i++) {
             let newDate = new Date(date)
             newDate.setMonth(newDate.getMonth() + i);
             let monthsYearString = newDate.toLocaleString("pt-BR", { month: "long", year: "numeric" })
             monthsYear.push(monthsYearString)
        }


        this.purchaseMade.innerHTML = `
            <span>${name}, sua compra foi aprovada!</span>
            <p>O valor da compra foi de <strong>R$ ${price}</strong>.</p> <br>
            <p>Parcelado em <strong>${optionValue}x de R$ ${valueInstallmensts}</strong>.</p> <br>
            <p>Os valores serão cobrados nos meses: <br> <strong>${monthsYear.join(", ")}</strong>.</p>
        `;
        
     }  
     
    verifyPurchase() {
        if (!confirm('Você confirma essa compra?')) {
            return false;
        }
    
        if (!this.valueProduct) {
            console.log("Nenhum produto selecionado");
            return false;
        }
    
        return true;
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
        this.purchaseMade.textContent = ''
        document.querySelector('.datesProduct input').value = ""
        document.querySelector('.installments').value = ""
    }
}
