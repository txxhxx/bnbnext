import { Strategy as KakaoStrategy } from "passport-kakao";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import jwt from "jsonwebtoken";

const kakao = new KakaoStrategy(
  {
    clientID: "e386b5f670b8ac0c48c7e7ed198f56bd",
    clientSecret: "nF7BDqHfltErGulENSOS4HyRSpimYqEn",
    callbackURL: "/kakao/callback",
  },
  async (_, __, profile, cb) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email: profile._json.kakao_account.email } });

    // kakao login
    if (user.provider.includes("kakao")) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      return cb(null, user, { token });
    }

    // Add kakao provider
    if (user) {
      user.provider.push("kakao");
      await userRepo.save(user).then((user) => {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        return cb(null, user, { token });
      });
    }

    // Create new user
    const newUser = new User();
    newUser.email = profile._json.kakao_account.email;
    newUser.nickname = profile._json.properties.nickname;
    newUser.provider = ["kakao"];

    try {
      await userRepo.save(newUser).then((user) => {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        return cb(null, user, { token });
      });
    } catch (err) {
      return cb(err, false);
    }
  }
);

export default kakao;
