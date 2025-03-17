let sellPottery = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6 && !potteryObj.cracked) {
        potteryObj.price = 40
        sellPottery.push(potteryObj)
    }
    else if (potteryObj.weight < 6 && !potteryObj.cracked) {
        sellPottery.push(potteryObj)
    }

return potteryObj
}

export const usePottery = () => {
    return structuredClone(sellPottery)
}