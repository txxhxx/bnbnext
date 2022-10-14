import express from "express";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome");
});

// Kakao Strategy
router.get(
  "/kakao",
  passport.authenticate("kakao", {
    scope: ["profile_nickname", "account_email"],
  })
);

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/" }),
  (req, res) => {
    res.json(req.authInfo).redirect("/welcome");
  }
);

// Local Strategy
router.post("/register", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local-register", (err, user, info) => {
    if (err) return res.status(401).json(err);

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({ token });
  })(req, res, next);
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) {
      return res.status(401).json(err);
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({ token });
  })(req, res, next);
});

export default router;
