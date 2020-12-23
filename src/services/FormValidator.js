class FormValidator {
  constructor(inputsValues) {
    this.errors = [];
    this.inputsValues = inputsValues;
  }

  validate() {
    this.clean();
    this.checkUrls();
    if (this.errors.length > 0) return;
  }

  checkUrls() {
    for (let [key, value] of this.inputsValues) {
      if (/url_/.test(key.toString())) {
        let regexToUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?|magnet:\?xt=urn:btih:/;
        if (!regexToUrl.test(value)) {
          this.errors.push({ nameInput: key, messageError: `Digite uma url válida` });
        }
      }
    }
  }

  clean() {
    for (let [key, value] of this.inputsValues) {
      if (!this.inputsValues.get(key)) {
        this.errors.push({ nameInput: key, messageError: `Preencha todos os campos` });
      }
    }
  }
}

export default FormValidator;
