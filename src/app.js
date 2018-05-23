const NumberFormView = require('./views/number_form_view');
const Number = require('./models/number.js');
const FactView = require('./views/fact_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const factForm = document.querySelector('#number-fact')
  const factView = new FactView(factForm);
  factView.bindEvents();

  const number = new Number();
  number.bindEvents();

  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

});
