const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('input', () => {
      let value = input.value;
      let validatedValue = value.replace(/[a-zA-Z]/gi, '');
      input.value = validatedValue;
    });

    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
