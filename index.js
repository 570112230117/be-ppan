const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const passport = require('passport');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Import passport
require('./config/passport');

// Routes
app.use('/auth', require('./src/auth'))
app.use("/ppan/api", passport.authenticate('jwt', {session: false}), require("./src/routes"));
app.use("/ppan", express.static(__dirname));

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
