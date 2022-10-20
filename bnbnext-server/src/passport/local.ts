import { Strategy as LocalStrategy } from "passport-local";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const local = new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async (email, password, cb) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email } });

    if (!user) {
      return cb({ message: "Incorrect username or password." }, false);
    }

    const result = await user.verifyPassword(password);

    if (!result) {
      return cb({ message: "Incorrect username or password" }, false);
    }

    return cb(null, user);
  }
);

export const register = new LocalStrategy(
  { usernameField: "email", passwordField: "password", passReqToCallback: true },
  async (req, email, password, cb) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email } });

    if (user) {
      return cb(null, null, { message: "Already Exists." });
    }

    // create new user
    const newUser = new User();
    newUser.email = email;
    newUser.nickname = req.body.nickname;
    await newUser.setPassword(password);

    await userRepo.save(newUser);
    await cb(null, newUser);
  }
);
