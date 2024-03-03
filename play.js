const connect = require("./client");
const setupInput = require("./input");
const handleUserInput = require("./input");

console.log("Connecting ...");

connect();
setupInput();
handleUserInput();