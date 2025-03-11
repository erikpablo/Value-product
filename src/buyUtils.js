export class BuyCheckout {
    constructor(buyContainer) {
        this.buyContainer = buyContainer
        this.modalOpen = false
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
