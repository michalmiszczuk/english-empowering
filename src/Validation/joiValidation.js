const Joi = require("joi");

export function validateTime(inputHour, inputMinutes) {
  const hoursSchema = Joi.object({
    inputHour: Joi.number().min(1).max(24).required().label("Godzina"),
  });

  const minutesSchema = Joi.object({
    inputMinutes: Joi.number().min(0).max(60).required().label("Minuty"),
  });

  const hoursError = hoursSchema.validate({inputHour});
  const minutesError = minutesSchema.validate({inputMinutes});
  return [hoursError, minutesError];
}

export function validateLogin(email, password) {
  const emailSchema = Joi.object({
    email: Joi.string()
      .email({tlds: {allow: false}})
      .required()
      .label("Email"),
  });

  const passwordSchema = Joi.object({
    password: Joi.string().min(3).max(28).required().label("Hasło"),
  });

  const emailError = emailSchema.validate({email});
  const passwordError = passwordSchema.validate({password});
  return [emailError, passwordError];
}

export function validateRegister(email, phone, firstName, secondName, password) {
  const emailSchema = Joi.object({
    email: Joi.string()
      .email({tlds: {allow: false}})
      .required()
      .label("Email"),
  });
  const phoneSchema = Joi.object({
    phone: Joi.string().min(9).max(9).required().label("Telefon"),
  });
  const firstNameSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required().label("Imię"),
  });
  const secondNameSchema = Joi.object({
    secondName: Joi.string().min(3).max(30).required().label("Nazwisko"),
  });
  const passwordSchema = Joi.object({
    password: Joi.string().min(3).max(28).required().label("Hasło"),
  });

  const emailError = emailSchema.validate({email});
  const phoneError = phoneSchema.validate({phone});
  const firstNameError = firstNameSchema.validate({firstName});
  const secondNameError = secondNameSchema.validate({secondName});
  const passwordError = passwordSchema.validate({password});

  return [emailError, phoneError, firstNameError, secondNameError, passwordError];
}
