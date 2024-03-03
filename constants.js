const IP = "localhost";
const PORT = 50541;
let player = process.argv[2] || "???";
const moveUp = "Move: up";
const moveDown = "Move: down";
const moveLeft = "Move: left";
const moveRight = "Move: right";
const sayHowAreYou = "Say: How are you?";
const saySlither = "Say: Time to slither!";
const sayRace = "Say: Let's race!";

module.exports = {
  IP,
  PORT,
  player,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  sayHowAreYou,
  saySlither,
  sayRace,
};