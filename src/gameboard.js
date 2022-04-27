

let gameboard = (function (){
  
  const playerB = makeBoard();
  const enemyB = makeBoard();

  function makeBoard(){
  
    let _board = 
    [
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]

    let _shipCoordinates = {};

    function getIndex(xy){
      const node = xy.split(",");
      return _board[node[0]][node[1]];
    }

    function getBoard(){
      return _board;
    }

    function isEmpty(xy){
      if(xy === ""){
        return true
      }
      return false;    
    }

    function arrayIsEmpty(array){
      return array.every( n => n === "" );
    }

    function placeShip(xy, length, axis, name){
      let x = parseInt(xy[0]);
      let y = parseInt(xy[1]);
      let xyArray = [];
      for(let i = 0; i < length; i++){
        _board[x][y] = name;
        xyArray.push([x,y]);
        if(axis === "X"){
          y += 1;
        }else{
          x += 1;
        }
      }
      _shipCoordinates[name] = xyArray;
    }

    function getStartingArray(xy, length, axis){
      let testArray = [];
      let x = parseInt(xy[0]);
      let y = parseInt(xy[1]);
      for(let i = 0; i < length; i++){
        testArray.push(_board[x][y]);
        if(axis === "X"){
          y += 1;
        }else{
          x += 1;
        }
        
      }
      return testArray;
    }

    function lengthIsValid(start, length, axis){
      let sum1 = parseInt(start[0]) + length;
      let sum2 = parseInt(start[1]) + length;
      if(sum1 > 10 && axis === "Y"){ return false}
      if(sum2 > 10 && axis === "X"){ return false}
      return true;
    }


    function shipIsValid(start, length, axis, name){
      let xy = start.split(",")
      if(!lengthIsValid(xy, length, axis)){ 
        console.log(Error(`Length invalid ${length}`));
        return
      };
      let validateArray = getStartingArray(xy, length, axis);
      if(arrayIsEmpty(validateArray)){
        console.log("yay");
        placeShip(xy, length, axis, name)
      }else{
        console.log("error");
        return;
      }
    }


    function receiveAttack(xy){
      let co = xy.split("");
      let x = co[0];
      let y = co[1];
      if(isEmpty(_board[x][y])){
        console.log("miss");
        _board[x][y] = "X";
      }else{
        console.log("hit");
        _board[x][y] = "X";
      }
    }  

    return {
      getBoard,
      isEmpty,
      shipIsValid,
      arrayIsEmpty,
      getStartingArray,
      placeShip,
      lengthIsValid,
      getIndex
    }
  }


  return{
    makeBoard,
    playerB,
    enemyB
  }
})();

export { gameboard }