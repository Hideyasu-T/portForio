const btn = document.getElementById('btn1');
const btn2Text = document.getElementsByClassName('btn1-text');

btn.addEventListener('click', () => {
  // ボタンクリックでhiddenクラスを付け外しする
  for (let i = 0; i < btn2Text.length; i++) {
    btn2Text[i].classList.toggle('hidden');}
});