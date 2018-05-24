const PubSub = require('../helpers/pub_sub.js')

const FactView = function(view){
  this.view = view;

}

FactView.prototype.setupListener = function () {
  PubSub.subscribe('Number:number-info',(evt)=>{
    this.render(evt.detail);
    // console.log(evt.detail)
  })
};

FactView.prototype.render = function (numberFact) {
  this.view.innerHTML ='';

  const number = document.createElement('h3');
  number.textContent = `Number: ${numberFact.number}`;

  const text = document.createElement('h3');
  text.textContent = `Fact: ${numberFact.text}`


  this.view.appendChild(number);
  this.view.appendChild(text);
};


FactView.prototype.bindEvents = function () {
  this.setupListener();
};


module.exports = FactView;
