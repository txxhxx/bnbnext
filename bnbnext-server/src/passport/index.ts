import passport from "passport";

import { local, register } from "./local";
import kakao from "./kakao";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use("kakao", kakao);
passport.use("local-register", register);
passport.use("local-login", local);

export default passport;
