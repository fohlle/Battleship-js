

let gameboard = (function (){
  
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

  function placeShip(xy, length, axis){
    let x = parseInt(xy[0]);
    let y = parseInt(xy[1]);
    for(let i = 0; i < length; i++){
      _board[x][y] = "S";
      if(axis === "H"){
        y += 1;
      }else{
        x += 1;
      }
      
    }
  }

  function getStartingArray(xy, length, axis){
    let testArray = [];
    let x = parseInt(xy[0]);
    let y = parseInt(xy[1]);
    for(let i = 0; i < length; i++){
      testArray.push(_board[x][y]);
      if(axis === "H"){
        y += 1;
      }else{
        x += 1;
      }
      
    }
    return testArray;
  }


  function shipIsValid(start, length, axis){
    let xy = start.split("")
    let validateArray = getStartingArray(xy, length, axis);
    if(arrayIsEmpty(validateArray)){
      console.log("yay");
    }else{
      console.log("error");
    }
    

    return _board[xy[0]][xy[1]];
  }

  return {
    getBoard,
    isEmpty,
    shipIsValid,
    arrayIsEmpty,
    getStartingArray,
    placeShip
  }
})();

export { gameboard }