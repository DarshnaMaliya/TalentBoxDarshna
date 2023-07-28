const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: 599103622643-op2ci781ubcil6s1rmja1mmis6nge755.apps.googleusercontent.com,
      clientSecret: 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,
      callbackURL: "/auth/google/callback", 
      scope: ["profile","email"],
    },
    (Token, profile, callback) => {
      callback(null, profile);
    }
  )
);