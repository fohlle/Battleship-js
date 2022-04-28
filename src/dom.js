import { gameboard } from "./gameboard.js"
import { player_c } from "./player.js"

const makeDom = (function(){


  const player = document.querySelector(".player");
  const enemy = document.querySelector(".enemy");

  const playerBoard = gameboard.playerB;
  const enemyBoard = gameboard.enemyB;

  const playerOne = player_c.playerOne;
  const enemyOne = player_c.ai;

  let enemyTurn = false;

  function getElements(){
    return{
      player,
      enemy
    }
  }

  function createE(){
    const div = document.createElement("div");
    return{
      div
    }
  }

  function makeBoards(){
    createBoard(player);
    createBoard(enemy);
    addEnemyEvent();
  }

  function addEnemyEvent(){
    const children = [...enemy.childNodes]
    children.forEach( n => {
      n.addEventListener("click", (e) => {
        let node = e.target;
        hitOrMiss(node, enemyBoard, enemyOne);
        if(gameOver()){
          return;
        }
        if(enemyTurn === true){
          enemyAttack();
          enemyTurn = false;
        }
      })
    });
  }

  function enemyAttack(){
    console.log("Enemy attack");
    const attack = enemyOne.aiAttack();
    let node = document.querySelector(`.player div[data-id='${attack}']`);
    if(node.innerText === "X"){
      console.log("do again")
      enemyAttack();
    }
    console.log(node.innerText);
    hitOrMiss(node, playerBoard, playerOne);
  }

  function hitOrMiss(node, board, player){
    //const board = enemyBoard.getBoard();
    const target = board.getIndex(node.dataset.id)
      if(node.innerText === "X"){
        return false;
      }
      if(target === ""){
        node.innerText = "X";
        enemyTurn = true;
        return true;
      }else{
        node.innerText = "X";
        node.style.backgroundColor = "Black";
        shipIsHit(target, player);
        enemyTurn = true;
        gameOver();
        return true;
      }
  }

  function gameOver(){
    let over = false;
    if(enemyOne.allSunk()){
      console.log("Game Over Player Won");
      over = true;
    }
    if(playerOne.allSunk()){
      console.log("Game Over Enemy Won");
      over = true;
    }
    return over;
  }

  function shipIsHit(shipName, player){
    const ships = player.getShips()[`${shipName}`];
    ships.hit();
  }

  function createBoard(container){
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        const div = createE().div
        div.setAttribute("data-id",`${i},${j}`);
        container.appendChild(div);
      }
    }
  }


  function updatePlayerBoard(board){
    const player_children = [...player.childNodes]
    //let hi = document.querySelector(`.player div[data-id='${xy}']`);
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(board[i][j] !== ""){
          updateSquare([i,j], "player");
        }
      }
    }

  }
  function updateEnemyBoard(board){
    const player_children = [...player.childNodes]
    //let hi = document.querySelector(`.player div[data-id='${xy}']`);
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(board[i][j] !== ""){
          updateSquare([i,j], "enemy");
        }
      }
    }

  }

  function updateSquare(xy, string){
    const player_children = [...player.childNodes]
    xy = xy.toString();
    let node = document.querySelector(`.${string} div[data-id='${xy}']`);
    if(string === "player"){
      //node.style.backgroundColor = "red";
    }
    node.style.backgroundColor = "red";
  }

  function updateOnHit(xy){
    xy = xy.toString();
    let node = document.querySelector(`.player div[data-id='${xy}']`);
    node.innerText = "X";
  }


  
  return{
    getElements,
    updatePlayerBoard,
    updateEnemyBoard,
    makeBoards,
  }
})();



export { makeDom }