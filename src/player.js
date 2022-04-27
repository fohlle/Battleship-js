
import { ship } from "./ship.js";

const player_c = (function(){

  const playerOne = makePlayer("Player 1");
  const ai = makePlayer("Enemy");

  function makePlayer(name){

    let Playername = name;

    const carrier = ship.makeShip(5, "carrier");
    const battleship = ship.makeShip(4, "battleship");
    const destroyer = ship.makeShip(3, "destroyer");
    const submarine = ship.makeShip(3, "submarine");
    const patrolboat = ship.makeShip(2, "patrolboat");

    return{
      getShips: function(){
        return{
          carrier,
          battleship,
          destroyer,
          submarine,
          patrolboat
        }
      },
      allSunk: function(){
        return [
          carrier,
          battleship,
          destroyer,
          submarine,
          patrolboat
        ].every( n => {
          return n.sunk() === true;
        });
      },
      getName: function(){
        return Playername;
      },
      attack: function(xy){
        xy = "X";
      }
    }
  }

  function aiAttack(){
   let attack = Math.floor(Math.random() * 10);
   return [attack, attack];
  }

  return{
    makePlayer,
    playerOne,
    ai
  }
  
}());

export { player_c }