import express from "express";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { generateToken, setTokenCookie } from "../lib/token";

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
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

// Local Strategy
router.post("/register", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local-register", (err, user, info) => {
    if (info) {
      res.status(401).json({ error: info });
    } else {
      const tokens = user.generateUserToken({ id: user.id });
      setTokenCookie(res, tokens);
      res.sendStatus(200);
    }
  })(req, res, next);
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local-login", async (err, user, info) => {
    if (err) {
      return res.status(401).json(err);
    }

    const tokens = await user.generateUserToken();
    setTokenCookie(res, tokens);

    res.sendStatus(200);
  })(req, res, next);
});

export default router;
