const { moveUp, moveDown, moveRight, moveLeft, sayHowAreYou, saySlither, sayRace } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write(moveUp);
  }

  if (key === 'a') {
    connection.write(moveLeft);
  }

  if (key === 's') {
    connection.write(moveDown);
  }

  if (key === 'd') {
    connection.write(moveRight);
  }

  if (key === '1') {
    connection.write(sayHowAreYou);
  }

  if (key === '2') {
    connection.write(saySlither);
  }

  if (key === '3') {
    connection.write(sayRace);
  }
};

module.exports = { setupInput };