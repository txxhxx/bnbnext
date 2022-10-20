import { Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";

export const generateToken = (payload: any, options?: SignOptions) => {
  const jwtOptions: SignOptions = {
    issuer: "buyandbelieve.com",
    expiresIn: "7d",
    ...options,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);
};

export const setTokenCookie = (
  res: Response,
  tokens: { accessToken: string; refreshToken: string }
) => {
  res.cookie("access_token", tokens.accessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });

  res.cookie("refresh_token", tokens.refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
};
