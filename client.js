const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: LMI");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);

    // setInterval(() => {
    //   conn.write("Move: down");
    // }, 1500);

    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 2000);

    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 1000);
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('error', (err) => {
    console.error('Connection error:', err);
  });

  return conn;
};

module.exports = connect;