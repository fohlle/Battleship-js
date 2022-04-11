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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuXG5sZXQgZ2FtZWJvYXJkID0gKGZ1bmN0aW9uICgpe1xuICBcbiAgbGV0IF9ib2FyZCA9IFxuICBbXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICBdXG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKXtcbiAgICByZXR1cm4gX2JvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbXB0eSh4eSl7XG4gICAgaWYoeHkgPT09IFwiXCIpe1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlOyAgICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycmF5SXNFbXB0eShhcnJheSl7XG4gICAgcmV0dXJuIGFycmF5LmV2ZXJ5KCBuID0+IG4gPT09IFwiXCIgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcCh4eSwgbGVuZ3RoLCBheGlzKXtcbiAgICBsZXQgeCA9IHBhcnNlSW50KHh5WzBdKTtcbiAgICBsZXQgeSA9IHBhcnNlSW50KHh5WzFdKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgX2JvYXJkW3hdW3ldID0gXCJTXCI7XG4gICAgICBpZihheGlzID09PSBcIkhcIil7XG4gICAgICAgIHkgKz0gMTtcbiAgICAgIH1lbHNle1xuICAgICAgICB4ICs9IDE7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdGFydGluZ0FycmF5KHh5LCBsZW5ndGgsIGF4aXMpe1xuICAgIGxldCB0ZXN0QXJyYXkgPSBbXTtcbiAgICBsZXQgeCA9IHBhcnNlSW50KHh5WzBdKTtcbiAgICBsZXQgeSA9IHBhcnNlSW50KHh5WzFdKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgdGVzdEFycmF5LnB1c2goX2JvYXJkW3hdW3ldKTtcbiAgICAgIGlmKGF4aXMgPT09IFwiSFwiKXtcbiAgICAgICAgeSArPSAxO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHggKz0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gdGVzdEFycmF5O1xuICB9XG5cblxuICBmdW5jdGlvbiBzaGlwSXNWYWxpZChzdGFydCwgbGVuZ3RoLCBheGlzKXtcbiAgICBsZXQgeHkgPSBzdGFydC5zcGxpdChcIlwiKVxuICAgIGxldCB2YWxpZGF0ZUFycmF5ID0gZ2V0U3RhcnRpbmdBcnJheSh4eSwgbGVuZ3RoLCBheGlzKTtcbiAgICBpZihhcnJheUlzRW1wdHkodmFsaWRhdGVBcnJheSkpe1xuICAgICAgY29uc29sZS5sb2coXCJ5YXlcIik7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiBfYm9hcmRbeHlbMF1dW3h5WzFdXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgaXNFbXB0eSxcbiAgICBzaGlwSXNWYWxpZCxcbiAgICBhcnJheUlzRW1wdHksXG4gICAgZ2V0U3RhcnRpbmdBcnJheSxcbiAgICBwbGFjZVNoaXBcbiAgfVxufSkoKTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=