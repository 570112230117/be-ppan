const express = require("express");
const app = express();
const bodyParser = require('body-parser')
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/ppan/api", require("./src/routes"));
app.use("/ppan", express.static(__dirname));

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
