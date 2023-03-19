import Validator from "validatorjs";

const loginRules = {
  mobno: "required|min:10",
};
const loginRules2 = {
  otp: "required|min:6|max:6",
};

// Single validation
export const loginMobNoSingleFieldValidation = ({ key, value }) => {
  const validationResponse = { isValid: true };
  if (loginRules[key]) {
    const validation = new Validator(
      { [key]: value },
      { [key]: loginRules[key] }
    );
    validationResponse.isValid = validation.passes();
    if (!validationResponse.isValid) {
      validationResponse.errors = validation.errors.all();
    }
  }
  return validationResponse;
};

export const loginOtpSingleFieldValidation = ({ key, value }) => {
  const validationResponse = { isValid: true };
  if (loginRules2[key]) {
    const validation = new Validator(
      { [key]: value },
      { [key]: loginRules2[key] }
    );
    validationResponse.isValid = validation.passes();
    if (!validationResponse.isValid) {
      validationResponse.errors = validation.errors.all();
    }
  }
  return validationResponse;
};

// All validation
export const loginMobNoAllFieldValidation = (data) => {
  const validation = new Validator(data, loginRules);
  const validationResponse = { isValid: validation.passes() };
  if (!validationResponse.isValid) {
    validationResponse.error = validation.errors.all();
  }
  return validationResponse;
};
