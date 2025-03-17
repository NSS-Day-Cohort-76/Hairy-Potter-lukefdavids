export const firePottery = (potteryObj, firingTemp) => {
    potteryObj.fired = true

    if (firingTemp > 2200) {
        potteryObj.cracked = true
    }
    else if (firingTemp <= 2200) {
        potteryObj.cracked = false
    }
return potteryObj
}