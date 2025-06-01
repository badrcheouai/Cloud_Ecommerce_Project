const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {
    status: "",
    message: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  };
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      username: "Username is required.",
    };
  } else if (!Validator.isAlphanumeric(data.username)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      username: "Username is invalid.",
    };
  } else if (!Validator.isLowercase(data.username)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      username: "Username must be lowercase only.",
    };
  }

  if (Validator.isEmpty(data.email)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      email: "Email is required.",
    };
  } else if (!Validator.isEmail(data.email)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      email: "Email is invalid.",
    };
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      phoneNumber: "PhoneNumber is required.",
    };
  } else if (!Validator.isMobilePhone(data.phoneNumber)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      phoneNumber: "PhoneNumber is invalid.",
    };
  }

  if (Validator.isEmpty(data.password)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      password: "Password is required.",
    };
  } else if (
    !Validator.isLength(data.password, {
      min: 8,
      max: 30,
    })
  ) {
    (errors.status = 401),
      (errors.message = {
        ...errors.message,
        password:
          "Password must be at least 8 characters either under 30 characters.",
      });
  }
  return {
    errors,
    isValid: isEmpty(errors.status),
  };
};
