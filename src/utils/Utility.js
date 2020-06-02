export default class Utility {
  static isValidField = (term) => {
    let length = term.trim().length;
    return length > 0 ? true : false;
  };

  static isEmailValid = (term) => {
    const expression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let isValid = expression.test(String(term).tolowercase());
    return;
  };
}
