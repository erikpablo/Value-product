let buyValue = document.querySelector('.products p').innerHTML

export class BuyCheckout {
    constructor(buyContainer) {
        this.buyContainer = buyContainer
    }

    buyClick() {
        this.buyContainer.classList.remove('hide')
        this.buyContainer.style.animation = 'slideOn 0.5s ease-out'
        console.log(buyValue)
    }

    closeBuy() {
        this.buyContainer.style.animation = 'slideOff 0.5s ease-out'

        this.buyContainer.addEventListener(
            'animationend',
            () => {
                this.buyContainer.classList.add('hide')
            },
            { once: true }
        )
    }
}

