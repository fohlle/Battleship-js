
const ship = (function(){

  const shipNames = {

  }

  function makeShip(length){
    let health = [];

    function addHealth(){
      for(let i = 0; i < length; i++){
        health.push("");
      }
    }
    addHealth();

    return{
      showHealth: function(){
        return health;
      },
      getHealth: function(){
        return health.length;
      },
      hit:function(where){
        health[where - 1] = "X";
      },
      sunk: function(){
       let result = health.every( (n) => {
         return n === "X";
       })
        return result
      }
    }    
  }
  

  return {
    makeShip
  }

})();


export { ship }

