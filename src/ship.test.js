
import { ship } from "./ship";

test("length", () =>{
  expect(ship.makeShip(4).getHealth()).toEqual(4);
})

test("false", () => {
  expect(ship.makeShip(3).sunk()).toBe(false);
})

test("hit", () => {
  const testShip = ship.makeShip(4);
  testShip.hit();
  let health = testShip.showHealth();
  expect(health).toEqual(3);
})

test("sunk", () => {
  const testShip = ship.makeShip(2);
  testShip.hit();
  testShip.hit();
  expect(testShip.sunk()).toBe(true);
})