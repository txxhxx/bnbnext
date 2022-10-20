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

export const decodeToken = async (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded as any);
    });
  });
};

export const setTokenCookie = (
  res: Response,
  tokens: { accessToken: string; refreshToken: string }
) => {
  res.cookie("access_token", tokens.accessToken, {
    httpOnly: false,
    maxAge: 1000 * 60 * 60,
  });

  res.cookie("refresh_token", tokens.refreshToken, {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
};
