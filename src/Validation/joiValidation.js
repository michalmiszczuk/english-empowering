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
      .message("Email musi być właściwym adresem e-mail.")
      .required()
      .label("Email"),
  });

  const passwordSchema = Joi.object({
    password: Joi.string()
      .min(3)
      .message("Hasło musi mieć przynajmniej 3 znaki")
      .max(28)
      .message("Hasło może mieć maksimum 28 znaków.")
      .required()
      .label("Hasło"),
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
    phone: Joi.string()
      .min(9)
      .message("Nr telefonu musi zawierać 9 cyfr.")
      .max(9)
      .message("Nr telefonu musi zawierać 9 cyfr.")
      .required()
      .label("Telefon"),
  });
  const firstNameSchema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .message("Imię musi zawierać co najmniej 3 znaki.")
      .max(30)
      .message("Imię może zawierać maksymalnie 30 znaków.")
      .required()
      .label("Imię"),
  });
  const secondNameSchema = Joi.object({
    secondName: Joi.string()
      .min(3)
      .message("Nazwisko musi zawierać co najmniej 3 znaki.")
      .max(30)
      .message("Nazwisko może zawierać maksymalnie 30 znaków.")
      .required()
      .label("Nazwisko"),
  });
  const passwordSchema = Joi.object({
    password: Joi.string()
      .min(3)
      .message("Hasło musi mieć przynajmniej 3 znaki")
      .max(28)
      .message("Hasło może mieć maksimum 28 znaków.")
      .required()
      .label("Hasło"),
  });

  const emailError = emailSchema.validate({email});
  const phoneError = phoneSchema.validate({phone});
  const firstNameError = firstNameSchema.validate({firstName});
  const secondNameError = secondNameSchema.validate({secondName});
  const passwordError = passwordSchema.validate({password});

  return [emailError, phoneError, firstNameError, secondNameError, passwordError];
}
