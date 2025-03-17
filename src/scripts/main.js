import { makePottery } from "./PotteryWheel.js";
import {firePottery} from "./Kiln.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js";


// Make 5 pieces of pottery at the wheel
let pottery1 = makePottery("Mug", 3, 25)
let pottery2 = makePottery ("Plate", 1, 35)
let pottery3 = makePottery("Platter", 2, 60)
let pottery4 = makePottery("Vase", 7, 55)
let pottery5 = makePottery("Bowl", 4, 40)

// Fire each piece of pottery in the kiln
const fired1 = firePottery(pottery1, 2500)
const fired2 = firePottery(pottery2, 2000)
const fired3 = firePottery(pottery3, 3000)
const fired4 = firePottery(pottery4, 1800)
const fired5 = firePottery(pottery5, 1950)

// Determine which ones should be sold, and their price
toSellOrNotToSell(fired1)
toSellOrNotToSell(fired2)
toSellOrNotToSell(fired3)
toSellOrNotToSell(fired4)
toSellOrNotToSell(fired5)

// Invoke the component function that renders the HTML list
const displayPottery = document.getElementById("potteryList")
displayPottery.innerHTML = potteryList()
