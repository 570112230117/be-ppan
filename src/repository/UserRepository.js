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

exports.findByEmail = async (email) => {
  const queryString = 'select * from ppan_user where email = \'' + email + "' ";

  return new Promise((res, rej) => {
    // console.log(queryString);
    client.query(queryString, (err, resultdata) => {
      if (err) {
        rej(err.message);
      } else {
        res(resultdata.rows);
      }
    });
  });
};
