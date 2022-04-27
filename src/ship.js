
const ship = (function(){

  const shipNames = {
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five"
  }

  function makeShip(length, name){
    // let health = [];
    let health = length;
    //let name = shipNames[length];
    let shipName = name;
    /*
    function addHealth(){
      for(let i = 0; i < length; i++){
        health.push("");
      }
    }
    addHealth();
    */

    return{
      getName: function(){
        return shipName;
      },
      showHealth: function(){
        return health;
      },
      getHealth: function(){
        return health;
      },
      hit:function(){
        health -= 1;
        console.log(shipName + " " + "Got hit " + " " + health + " left");
      },
      sunk: function(){
       if(health > 0){
         return false;
       }
       return true;
      }
    }    
  }
  

  return {
    makeShip
  }

})();


export { ship }

