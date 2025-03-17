import { usePottery } from "./PotteryCatalog.js"

export const potteryList = () => {
    const pottery = usePottery()
    let HTMLString = ""
    for (const item of pottery) {
        HTMLString += `
        <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${item.weight} grams and is ${item.height} cm in height
            </div>
            <div class="pottery__price">Price is $${item.price}</div>
        </section>`
    }
    return HTMLString
}