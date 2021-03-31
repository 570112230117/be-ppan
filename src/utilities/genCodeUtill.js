const { Client } = require("pg");
const dbconfig = require("../../config")["dbPG"];
const client = new Client(dbconfig);
client.connect();

exports.genCode = async (code) => {
  // B00000
  const queryString = "SELECT '"+code+"'||lpad(nextval('sequence_code')::text,2,'0') as code";

  return new Promise((res, rej) => {
    client.query(queryString, (err, resultdata) => {
      if (err) {
        rej(err.message);
      } else {
        res(resultdata.rows);
      }
    });
  });
};