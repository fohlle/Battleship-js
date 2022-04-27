/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });


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

  let _shipCoordinates = {};

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
    for(let i = 0; i <= length; i++){
      _board[x][y] = name;
      xyArray.push([x,y]);
      if(axis === "H"){
        y += 1;
      }else{
        x += 1;
      }
    }
    console.log(xyArray)
    _shipCoordinates[name] = xyArray;
    console.log(_shipCoordinates)
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

  function lengthIsValid(start, length, axis){
    let sum1 = parseInt(start[0]) + parseInt(length);
    let sum2 = parseInt(start[1]) + parseInt(length);
    console.log(sum1 + " " + sum2)
    if(sum1 > 9 && axis === "V"){ return false}
    if(sum2 > 9 && axis === "H"){ return false}
    return true;
  }


  function shipIsValid(start, length, axis, name){
    let xy = start.split("")
    if(!lengthIsValid(xy)){ 
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
    lengthIsValid
  }
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5cbmxldCBnYW1lYm9hcmQgPSAoZnVuY3Rpb24gKCl7XG4gIFxuICBsZXQgX2JvYXJkID0gXG4gIFtcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gIF1cblxuICBsZXQgX3NoaXBDb29yZGluYXRlcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCl7XG4gICAgcmV0dXJuIF9ib2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRW1wdHkoeHkpe1xuICAgIGlmKHh5ID09PSBcIlwiKXtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH1cblxuICBmdW5jdGlvbiBhcnJheUlzRW1wdHkoYXJyYXkpe1xuICAgIHJldHVybiBhcnJheS5ldmVyeSggbiA9PiBuID09PSBcIlwiICk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoeHksIGxlbmd0aCwgYXhpcywgbmFtZSl7XG4gICAgbGV0IHggPSBwYXJzZUludCh4eVswXSk7XG4gICAgbGV0IHkgPSBwYXJzZUludCh4eVsxXSk7XG4gICAgbGV0IHh5QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKXtcbiAgICAgIF9ib2FyZFt4XVt5XSA9IG5hbWU7XG4gICAgICB4eUFycmF5LnB1c2goW3gseV0pO1xuICAgICAgaWYoYXhpcyA9PT0gXCJIXCIpe1xuICAgICAgICB5ICs9IDE7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgeCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh4eUFycmF5KVxuICAgIF9zaGlwQ29vcmRpbmF0ZXNbbmFtZV0gPSB4eUFycmF5O1xuICAgIGNvbnNvbGUubG9nKF9zaGlwQ29vcmRpbmF0ZXMpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdGFydGluZ0FycmF5KHh5LCBsZW5ndGgsIGF4aXMpe1xuICAgIGxldCB0ZXN0QXJyYXkgPSBbXTtcbiAgICBsZXQgeCA9IHBhcnNlSW50KHh5WzBdKTtcbiAgICBsZXQgeSA9IHBhcnNlSW50KHh5WzFdKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgdGVzdEFycmF5LnB1c2goX2JvYXJkW3hdW3ldKTtcbiAgICAgIGlmKGF4aXMgPT09IFwiSFwiKXtcbiAgICAgICAgeSArPSAxO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHggKz0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gdGVzdEFycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVuZ3RoSXNWYWxpZChzdGFydCwgbGVuZ3RoLCBheGlzKXtcbiAgICBsZXQgc3VtMSA9IHBhcnNlSW50KHN0YXJ0WzBdKSArIHBhcnNlSW50KGxlbmd0aCk7XG4gICAgbGV0IHN1bTIgPSBwYXJzZUludChzdGFydFsxXSkgKyBwYXJzZUludChsZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHN1bTEgKyBcIiBcIiArIHN1bTIpXG4gICAgaWYoc3VtMSA+IDkgJiYgYXhpcyA9PT0gXCJWXCIpeyByZXR1cm4gZmFsc2V9XG4gICAgaWYoc3VtMiA+IDkgJiYgYXhpcyA9PT0gXCJIXCIpeyByZXR1cm4gZmFsc2V9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHNoaXBJc1ZhbGlkKHN0YXJ0LCBsZW5ndGgsIGF4aXMsIG5hbWUpe1xuICAgIGxldCB4eSA9IHN0YXJ0LnNwbGl0KFwiXCIpXG4gICAgaWYoIWxlbmd0aElzVmFsaWQoeHkpKXsgXG4gICAgICBjb25zb2xlLmxvZyhFcnJvcihgTGVuZ3RoIGludmFsaWQgJHtsZW5ndGh9YCkpO1xuICAgICAgcmV0dXJuXG4gICAgfTtcbiAgICBsZXQgdmFsaWRhdGVBcnJheSA9IGdldFN0YXJ0aW5nQXJyYXkoeHksIGxlbmd0aCwgYXhpcyk7XG4gICAgaWYoYXJyYXlJc0VtcHR5KHZhbGlkYXRlQXJyYXkpKXtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5XCIpO1xuICAgICAgcGxhY2VTaGlwKHh5LCBsZW5ndGgsIGF4aXMsIG5hbWUpXG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFxuICB9XG5cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHh5KXtcbiAgICBsZXQgY28gPSB4eS5zcGxpdChcIlwiKTtcbiAgICBsZXQgeCA9IGNvWzBdO1xuICAgIGxldCB5ID0gY29bMV07XG4gICAgaWYoaXNFbXB0eShfYm9hcmRbeF1beV0pKXtcbiAgICAgIGNvbnNvbGUubG9nKFwibWlzc1wiKTtcbiAgICAgIF9ib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCJoaXRcIik7XG4gICAgICBfYm9hcmRbeF1beV0gPSBcIlhcIjtcbiAgICB9XG4gIH0gIFxuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRCb2FyZCxcbiAgICBpc0VtcHR5LFxuICAgIHNoaXBJc1ZhbGlkLFxuICAgIGFycmF5SXNFbXB0eSxcbiAgICBnZXRTdGFydGluZ0FycmF5LFxuICAgIHBsYWNlU2hpcCxcbiAgICBsZW5ndGhJc1ZhbGlkXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9