const text = document.querySelector('#text');
const h4 = document.querySelector('h4');
const bgInput = document.querySelector('#bgInput');
const brInput = document.querySelector('#brInput');
const color = document.querySelector('#color');
const fontSizes = document.querySelector('#fontSize');
const form = document.querySelector('form');
const styledContent = document.querySelector('#styledContent');
const reset = document.querySelector('input[type=button]');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   styleChange();
});

function styleChange() {
   const bgValue = bgInput.value;
   const brValue = brInput.value;
   const colorValue = color.value;
   const fontSizeValue = fontSizes.value;

   styledContent.style.background = bgValue;
   styledContent.style.borderRadius = brValue;
   styledContent.style.color = colorValue;
   styledContent.style.fontSize = fontSizeValue;
}

text.addEventListener('input', () => {
   textChange();
});

function textChange() {
   h4.textContent = text.value;
}

reset.addEventListener('click', (e) => {
   e.preventDefault();
   text.value = '';
   bgInput.value = '';
   brInput.value = '';
   color.value = '';
   fontSizes.value = '';
   styleChange();
   textChange();
});
