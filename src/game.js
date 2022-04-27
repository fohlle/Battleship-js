
import { player_c } from "./player.js";
import { ship } from "./ship.js";
import { gameboard } from "./gameboard";
import { makeDom } from "./dom.js";

const game = (function(){

 // const playerOne = player.makePlayer("Player 1");
 // const enemy = player.makePlayer("Enemy");
  const playerOne = player_c.playerOne;
  const enemy = player_c.ai;
  const playerBoard = gameboard.playerB;
  const enemyBoard = gameboard.enemyB;
  const renderDom = makeDom;

  function getGameBoards(){
    return {
      playerBoard, enemyBoard
    };
  }

  function placeAllPlayerShips(){
    const playerShips = playerOne.getShips();
    playerBoard.shipIsValid("0,0", playerShips.carrier.getHealth(), "Y", playerShips.carrier.getName());
    playerBoard.shipIsValid("9,0", playerShips.battleship.getHealth(), "X", playerShips.battleship.getName());
    playerBoard.shipIsValid("4,6", playerShips.destroyer.getHealth(), "Y", playerShips.destroyer.getName());
    playerBoard.shipIsValid("2,9", playerShips.submarine.getHealth(), "Y", playerShips.submarine.getName());
    playerBoard.shipIsValid("1,5", playerShips.patrolboat.getHealth(), "X", playerShips.patrolboat.getName());
  }

  function placeAllEnemyShips(){
    const playerShips = enemy.getShips();
    enemyBoard.shipIsValid("0,0", playerShips.carrier.getHealth(), "X", playerShips.carrier.getName());
    enemyBoard.shipIsValid("9,0", playerShips.battleship.getHealth(), "X", playerShips.battleship.getName());
    enemyBoard.shipIsValid("4,6", playerShips.destroyer.getHealth(), "Y", playerShips.destroyer.getName());
    enemyBoard.shipIsValid("2,9", playerShips.submarine.getHealth(), "Y", playerShips.submarine.getName());
    enemyBoard.shipIsValid("1,5", playerShips.patrolboat.getHealth(), "X", playerShips.patrolboat.getName());
  }

  function play(){
    renderDom.makeBoards();
    placeAllPlayerShips();
    placeAllEnemyShips();
    makeDom.updateEnemyBoard(enemyBoard.getBoard());
    makeDom.updatePlayerBoard(playerBoard.getBoard());

  }

  

  return{
    play,
    getGameBoards
  }

})();

export { game }