const dong = '\ud83d\udd34';
const ka = '\ud83d\udd35';
const space = '\u3000';

const write = () => {
  /** @type {HTMLTextAreaElement} */
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const s = input.value;
  const nodes = convert(s);
  output.value = nodes;
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
  document.getElementById('copy-button').addEventListener('click', copyStr)
  document.getElementById('clear-button').addEventListener('click', clearStr)
});