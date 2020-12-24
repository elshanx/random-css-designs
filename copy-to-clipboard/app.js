const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.focus();
  text.select();
  document.execCommand('copy');
  const oldText = btn.innerHTML;
  btn.innerHTML = '<i class="fa fa-check"></i> copied';
  btn.classList.toggle('cursor-default');
  setTimeout(() => {
    btn.innerHTML = oldText;
    btn.classList.toggle('cursor-default');
  }, 2000);
});
