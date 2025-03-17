import { makePottery } from "./PotteryWheel.js";
import {firePottery} from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let pottery1 = makePottery("mug", 3, 25)
let pottery2 = makePottery ("plate", 1, 35)
let pottery3 = makePottery("platter", 2, 60)
let pottery4 = makePottery("vase", 7, 55)
let pottery5 = makePottery("bowl", 4, 40)

const fired1 = firePottery(pottery1, 2500)
const fired2 = firePottery(pottery2, 2000)
const fired3 = firePottery(pottery3, 3000)
const fired4 = firePottery(pottery4, 1800)
const fired5 = firePottery(pottery5, 1950)

console.log(fired1)
// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

