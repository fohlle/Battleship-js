import { gameboard } from "./gameboard.js"
import { player_c } from "./player.js"

const makeDom = (function(){


  const player = document.querySelector(".player");
  const enemy = document.querySelector(".enemy");

  const playerBoard = gameboard.playerB;
  const enemyBoard = gameboard.enemyB;

  const playerOne = player_c.playerOne;
  const enemyOne = player_c.ai;

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
        hitOrMiss(node);
      })
    });
  }

  function hitOrMiss(node){
    const board = enemyBoard.getBoard();
    const target = enemyBoard.getIndex(node.dataset.id)
    if(node.innerText === "X"){
      console.log("Already taken");
      return;
    }
    if(target === ""){
      node.innerText = "X";
    }else{
      node.innerText = "X";
      node.style.backgroundColor = "Black";
      shipIsHit(target);
      gameOver();
    }
  }

  function gameOver(){
    console.log(enemyOne.allSunk());
  }

  function shipIsHit(shipName){
    const ships = enemyOne.getShips()[`${shipName}`];
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