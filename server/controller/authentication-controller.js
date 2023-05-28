import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import bcrypt from 'bcrypt';

import User from '../models/User.js';
import encrypt from '../encrypt.js';
import SendMail from '../services/send-mail.js';
import TokenService from '../services/token-service.js';
import ApiError from '../exceptions/api-error.js';
import UserDto from '../dtos/user-dto.js';


class Authorization {
  async authRegister(req, res, next) {
    try {
      const { login, password, email } = req.body;
      const id = uuidv4();
      const link = uuidv4();
      const sendMassege = new SendMail();
      const enpryptPassword = await encrypt(password);
      await User.saveUser({
        id,
        email,
        login,
        password: enpryptPassword,
        link,
        active: false,
      });
      sendMassege.send(email, { link }, 'activate').then(() => {
        res.json({ massage: 'Confirm mail' });
      });
    } catch (err) {
      next(err);
    }
  }

  async authLogin(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const { login, password } = req.body;
      const userData = await User.initUser('login', login);
      const isValid = await bcrypt.compare(password, userData.password);
      if (!isValid) {
        next(ApiError.IncorrectData('Username or password is incorrect'));
      }
      if (!userData.active) {
        next(ApiError.ActiveEmail('inactive email!'));
      }
      const userDto = new UserDto(userData);

      const { accessToken, refreshToken } = TokenService.generateTokens({
        ...userDto,
      });

      res.cookie('refreshToken', refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200);
      res.json({
        massage: 'You authorization, welcome!',
        accessToken,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  async authLogout(req, res, next) {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(401).end('GG');
    }
    try {
      const token = req.headers.authorization?.split(' ')[1];
      TokenService.validateAccessToken(token);
      res.clearCookie('refreshToken');
      res.status(200);
      res.send('Ok');
    } catch (err) {
      res.clearCookie('refreshToken');
      next(err);
    }
  }

  async authSendPasswordReset(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(ApiError.BadRequest('Bad request', errors.array()));
      }
      const { email } = req.body;
      const sendMassage = new SendMail();
      const user = await User.initUser('email', email);
      const link = uuidv4();
      await User.setLink(user.id, link);
      sendMassage.send(email, { link }, 'reset').then(() => {
        res.json({ massage: 'Send massage reset' });
      });
    } catch (err) {
      next(err);
    }
  }
  async authPasswordReset(req, res, next) {
    try {
      const errors = validationResult(req);
      const { resetPassword, resetConfirmPassword } = req.body;
      if (resetPassword !== resetConfirmPassword) {
        errors.errors.push({
          value: 'password',
          msg: 'Passwords do not match',
          param: 'password',
          location: 'body',
        });
      }
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const { link } = req.params;
      const enpryptPassword = await encrypt(resetPassword);
      const user = await User.initUser('event_link', link);
      await User.resetPassword(user.id, enpryptPassword);
      await User.deleteLink(user.id);
      res.json({ massage: 'password reset' });
    } catch (err) {
      next(err);
    }
  }
  async authActiveEmail(req, res, next) {
    try {
      const { link } = req.params;
      const user = await User.initUser('event_link', link);
      if (user.active) {
        next(ApiError.ActiveEmail('You have already activated your email'));
        return;
      }
      if (!(Date.now() - new Date(user.created_at).getTime() < 8356586)) {
        next(ApiError.TokenKiller());
        return;
      }
      await User.setActive(user.id);
      await User.deleteLink(user.id);
      res.json({
        massage: 'gmail active, thanks for creating account',
      });
    } catch (err) {
      next(err);
    }
  }
  async refreshToken(req, res, next) {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      next(ApiError.UnauthorizedError());
      return;
    }
    try {
      const tokenData = TokenService.validateRefreshToken(refreshToken);
      const userDto = new UserDto(tokenData);
      const newTokens = TokenService.generateTokens({ ...userDto });
      res.cookie('refreshToken', newTokens.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200);
      res.json({ accessToken: newTokens.accessToken });
    } catch (err) {
      res.clearCookie('refreshToken');
      next(err);
    }
  }
}

export default new Authorization();
