import Stoned from "../stoned";
//import Daemon from "../daemon";
import Magician from "../magician";

test("Проверка дурмана", () => {
  const stoned = new Stoned("Arkadiy", "Daemon", 2);
  expect(stoned).toEqual({
    name: "Arkadiy", 
    level: 1, 
    health: 100,
    type: "Daemon",
    distance: 2
  });
});

test("Magician атакует 2-ую клетку без дурмана", () => {
  const magician = new Magician("Arkadiy", 2);
  magician.stoned = false;
  magician.attack = 10;
  expect(magician.attack).toBe(9);
});