const dong = '\ud83d\udd34';
const ka = '\ud83d\udd35';
const space = '\u3000';

const write = () => {
  /** @type {HTMLTextAreaElement} */
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const s = input.value;
  const notes = convert(s);
  output.value = notes;
};

const copyStr = () => {
  const output = document.getElementById('output');
  copy(output.value);
};

const clearStr = () => {
  const input = document.getElementById('input');
  input.value = '';
  write();
};

const incertNote = () => {
  const dongList = document.querySelectorAll('.dong');
  Array.from(dongList).forEach(e => { e.innerText = dong; });
  const kaList = document.querySelectorAll('.ka');
  Array.from(kaList).forEach(e => { e.innerText = ka; });
  const spaceList = document.querySelectorAll('.space');
  Array.from(spaceList).forEach(e => { e.innerText = space; });
};

/**
 * 
 * @param {string} s 
 * @returns {string} 
 */
const convert = s => {
  x = s.replace(/1/g, dong).replace(/d/g, dong)
  x = x.replace(/2/g, ka).replace(/k/g, ka)
  return x.replace(/0/g, space).replace(/ /g, space)
};

/**
 * 
 * @param {string} s 
 */
const copy = s => {
  navigator.clipboard.writeText(s).then(
    () => { alert('Copied!'); },
    () => { alert('コピーできませんでした…'); },
  );
};

// 読み込み完了時の処理
window.addEventListener('load', () => {
  document.getElementById('input').addEventListener('input', write);
  document.getElementById('copy-button').addEventListener('click', copyStr);
  document.getElementById('clear-button').addEventListener('click', clearStr);
  incertNote();
});