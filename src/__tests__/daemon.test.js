import Daemon from "../daemon";

test("Daemon", () => {
  const daemon = new Daemon("Arkadiy");
  expect(daemon).toEqual({
    name: "Arkadiy", 
    level: 1, 
    health: 100, 
    _attack: 10, 
    defence: 40, 
    type: "Daemon"
  });
});