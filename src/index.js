
import "./style.css"

import { gameboard } from "./gameboard.js"

//import { ship } from "./ship.js"

console.log("battle ship")

let array = gameboard.getBoard();

console.log(array);

gameboard.placeShip(["0", "0"], 9, "V")

console.table(gameboard.getBoard())

