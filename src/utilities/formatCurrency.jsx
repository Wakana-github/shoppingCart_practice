const CURRENCY_FROMATTER = new Intl.NumberFormat(undefined, {
    currency: "AUD",
    style: "currency",
})

export function formatCurrency(number){
    return CURRENCY_FROMATTER.format(number)
}