import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};