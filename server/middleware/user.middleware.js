import {
  newUserSchema,
  loginSchema,
} from '../services/userValidation.service.js';
export function newUserValidation(req, res, next) {
  try {
    let { error } = newUserSchema.validate(req.body);
    if (error) {
      let errMsg = error.details[0].message;
      return res.status(403).send({
        message: 'userValidation: ' + errMsg,
      });
    }
    next();
  } catch (error) {
    return res.status(500).send({
      message: 'userValidation: ' + error.message,
    });
  }
}
export function loginValidation(req, res, next) {
  try {
    let { error } = loginSchema.validate(req.body);
    if (error) {
      let errMsg = error.details[0].message;
      return res.status(403).send({
        message: 'userValidation: ' + errMsg,
      });
    }
    next();
  } catch (error) {
    return res.status(500).send({
      message: 'userValidation: ' + error.message,
    });
  }
}
