import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
} from 'creditcard.js';
import ApiError from '../exceptions/api-error.js';

export default async (req, _res, next) => {
  try {
    const { cardNumber, CVV, date } = req.body;
    const [month, year] = date.split('/');
    const validResult = {
      isValidCard: isValid(cardNumber),
      isValidDateCard: isExpirationDateValid(month, year),
      isValidCVVCodeCard: isSecurityCodeValid(cardNumber, CVV),
    };
    if (!validResult.isValidCard) {
      throw ApiError.BadRequest('Invalid number card');
    }
    if (!validResult.isValidDateCard) {
      throw ApiError.BadRequest('Invalid date card');
    }
    if (!validResult.isValidCVVCodeCard) {
      throw ApiError.BadRequest('Is not valid for this credit card type');
    }
    next();
  } catch (err) {
    next(err);
  }
};
