import Character from "../character";

test("instance of the class Character", () => {
  const daemon = new Character("Arkadiy", "Daemon");
  expect(daemon).toEqual({
    health: 100, 
    level: 1, 
    type: "Daemon", 
    name: "Arkadiy",
  });
});
  
test("throws on name", () => {
  expect(() => new Character("A", "Daemon")).toThrow("Имя должно содержать от 2 до 10 символов!");
  expect(() => new Character("Appolinariy", "Daemon")).toThrow("Имя должно содержать от 2 до 10 символов!");
});
  
test("throws on type", () => {
  expect(() => new Character("Arkadiy", "Ork")).toThrow("Неверный тип!");
});