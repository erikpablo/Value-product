function calculation(valueProduct, installments) {
    const monthsYear = []
    const date = new Date()
    const installmentsValue = (valueProduct / installments).toFixed(2)

    for (let index = 1; index <= installments; index++) {
        const newDate = new Date(date)
        newDate.setMonth(newDate.getMonth() + index)
        const nameMonths = newDate.toLocaleString('pt-BR', {
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
