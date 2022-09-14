// https://www.omnicalculator.com/conversion/ml-to-cups

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cupRadio = document.getElementById('cupRadio');
const mlRadio = document.getElementById('mlRadio');

let cup;
let ml = v; 

// labels of the inpust
const variable = document.getElementById('variable');

cupRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

mlRadio.addEventListener('click', function() {
  variable.textContent = 'Cup';
  cup = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cupRadio.checked)
    result.textContent = `Cup = ${computecup().toFixed(5)}`;

  else if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;
})

// calculation

function computecup() {
  return Number(ml.value) / 237;
}

function computeml() {
  return Number(cup.value) * 237;
}