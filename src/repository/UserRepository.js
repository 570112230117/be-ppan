const { Client } = require("pg");
const dbconfig = require("../../config/dbconfig")["pg"];

const client = new Client(dbconfig);
client.connect();

exports.findAll = async () => {
  const queryString = `SELECT * FROM ppan_user`;

  return new Promise((res, rej) => {
    client.query(queryString, (err, resultdata) => {
      if (err) {
        // console.log(err.message);
        rej(err.message);
      } else {
        // console.log(resultdata);
        res(resultdata.rows);
      }
    });
  });
};


