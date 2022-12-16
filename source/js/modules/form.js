const formElements = document.querySelectorAll('form');


const toggleError = (element, condition) => {
  if (condition) {
    element.classList.remove('error');
    return true;
  }

  element.classList.add('error');
  return false;
};


const validateEmailField = (fieldElement) => {
  const fieldValue = fieldElement.value.trim();
  const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return EMAIL_REGEXP.test(fieldValue);
};


const validateNameField = (fieldElement) => {
  const fieldValue = fieldElement.value.trim();
  const letters = /^[А-Яа-яA-Za-z\s\-]+$/;
  const condition = (fieldValue.match(letters) && fieldValue.length >= 0);

  return toggleError(fieldElement, condition);
};


const validatePhoneField = (fieldElement) => {
  const letters = /[А-Яа-яA-Za-z]/;
  const fieldValue = fieldElement.value.trim();
  const condition = !fieldValue.match(letters) && (fieldValue.length > 0);

  return toggleError(fieldElement, condition);
};


const validateAgreementCheckbox = (checkboxElement) => {
  const isChecked = checkboxElement.checked;

  return toggleError(checkboxElement, isChecked);
};


const onFormSubmit = (e) => {
  e.preventDefault();

  const target = e.target;
  const nameFieldElement = target.querySelector('input[name="name"]');
  const phoneFieldElement = target.querySelector('input[name="phone"]');
  const emailFieldElement = target.querySelector('input[name="email"]');
  const agreementCheckboxElement = target.querySelector('input[name="agreement"]');

  if (validateNameField(nameFieldElement)
    && validatePhoneField(phoneFieldElement)
    && validateEmailField(emailFieldElement)
    && validateAgreementCheckbox(agreementCheckboxElement)) {
    target.submit();
  }
};


const setForm = (formElement) => {
  formElement.addEventListener('submit', onFormSubmit);
};


const initForms = () => {
  if (formElements && formElements.length > 0) {
    formElements.forEach((element) => {
      setForm(element);
    });
  }
};

export {initForms};
