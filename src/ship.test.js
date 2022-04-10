
import { ship } from "./ship";

test("length", () =>{
  expect(ship.makeShip(4).getHealth()).toEqual(4);
})

test("false", () => {
  expect(ship.makeShip(3).sunk()).toBe(false);
})

test("hit", () => {
  const testShip = ship.makeShip(4);
  testShip.hit(4);
  let health = testShip.showHealth();
  expect(health[3]).toEqual("X");
})

test("sunk", () => {
  const testShip = ship.makeShip(2);
  testShip.hit(1);
  testShip.hit(2);
  expect(testShip.sunk()).toBe(true);
})