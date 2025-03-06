let value = prompt('Qual o valor do produto?')
let xInstallments = prompt('Deseja parcelar em quantas vezes? ')

function calculation(valueProduct, installments) {
    let monthsYear = []
    let date = new Date()
    const installmentsValue = (valueProduct / installments).toFixed(2)

    for (let index = 1; index <= installments; index++) {
        let newDate = new Date(date)
        newDate.setMonth(newDate.getMonth() + index)
        let nameMonths = newDate.toLocaleString('pt-BR', {
            month: 'long',
            year: 'numeric',
        })

        monthsYear.push(nameMonths)
    }

    console.log(`O valor do produtor é R$ ${valueProduct}. `)
    console.log(
        `Parcelando em ${installments}x, ficará R$ ${installmentsValue}, os pagamentos serão nos meses: ${monthsYear}`
    )
}

calculation(value, xInstallments)
