import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const generateToken = (number) => {
  const token = nanoid(number);
  return String(token);
};

const inputNumber = document.getElementById('length');
const generateButton = document.getElementById('generate');
const resultArea = document.getElementById('result');
const copyButton = document.getElementById('copy');
const copySuccess = document.getElementById('copy-success');

generateButton.addEventListener('click', () => {
  resultArea.innerHTML = generateToken(inputNumber.value);
});

copyButton.addEventListener('click', () => {
  copy(resultArea.innerHTML);
  copySuccess.innerHTML = 'Copied!';
  setTimeout(() => {
    copySuccess.innerHTML = '';
  }, 4000);
});
