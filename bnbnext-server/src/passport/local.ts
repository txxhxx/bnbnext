import { Strategy as LocalStrategy } from "passport-local";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const register = new LocalStrategy(
  { passReqToCallback: true, usernameField: "email" },
  async (req, email, password, cb) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email } });

    if (user) {
      cb(null, false, { message: "Already exists." });
    }

    const newUser = new User();
    newUser.email = req.body.email;
    newUser.nickname = req.body.nickname;
    newUser.password = req.body.password;

    try {
      userRepo.save(newUser).then((user) => {
        cb(null, user);
      });
    } catch (err) {
      cb(null, false, { message: err });
    }
  }
);

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
