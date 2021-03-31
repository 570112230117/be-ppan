const passport = require("passport"),
  passportJWT = require("passport-jwt"),
  ExtractJWT = passportJWT.ExtractJwt,
  JWTStrategy = passportJWT.Strategy,
  LocalStrategy = require("passport-local").Strategy,
  crypto = require("crypto"),
  userService = require("../src/services/UserService");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, cb) => {
      var promise = Promise.resolve(userService.findByEmail(email));
      promise.then(function (val) {
        // console.log(val);
        var login_attempt_hashed = hashFile(password);
        // console.log(login_attempt_hashed);
        // console.log("encode : " + login_attempt_hashed);
        var existing_hashed_password = val[0].password;
        // console.log("db : " + val[0].email);
        // console.log("db : " + val[0].password);
        const user = {
          id: val[0].user_id,
          sub: val[0].email,
          email: val[0].email,
        };
        if (
          email !== val[0].email ||
          login_attempt_hashed !== existing_hashed_password
        ) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        return cb(null, user, { message: "Logged In Successfully" });
      });
    }
  )
);

function hashFile(attachment) {
  return crypto.createHash("md5").update(attachment).digest("hex");
}

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "PP-AN",
    },
    (jwtPayload, cb) => {
      console.log("JWTStrategy");
      console.log(jwtPayload);
      var promise = Promise.resolve(userService.findByEmail(jwtPayload.email));
      promise.then(function (val) {
        try {
          // find the user in db if needed
          if (
            jwtPayload &&
            jwtPayload.id === val[0].user_id &&
            jwtPayload.email === val[0].email
          ) {
            return cb(null, val[0]);
          } else {
            return cb(null, false);
          }
        } catch (error) {
          return cb(error, false);
        }
      });
    }
  )
);
