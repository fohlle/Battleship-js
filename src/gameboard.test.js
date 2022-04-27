
import { gameboard } from "./gameboard.js"

describe("testing the gameboard module", () => {

  let board = gameboard;

  test("it works", () => {

  })

  test("isEmpty returns true if empty", () => {
    expect(board.isEmpty("")).toEqual(true);
  })

  test("isEmpty returns false if not empty", () => {
    expect(board.isEmpty("S")).toEqual(false);
  })

  test("test array is empty returns true", () => {
    expect(board.arrayIsEmpty(["", "", "", ""])).toEqual(true);
  })

  test("test array is empty returns false", () => {
    expect(board.arrayIsEmpty(["", "", "S", ""])).toEqual(false);
  })




})