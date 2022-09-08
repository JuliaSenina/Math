import Magician from "../Magician";

test("Daemon", () => {
  const magician = new Magician("Arkadiy");
  expect(magician).toEqual({
    name: "Arkadiy", 
    level: 1, 
    health: 100, 
    _attack: 10, 
    defence: 40, 
    type: "Magician"
  });
});