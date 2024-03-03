const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: LMI");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('error', (err) => {
    console.error('Connection error:', err);
  });

  return conn;
};

module.exports = { connect };