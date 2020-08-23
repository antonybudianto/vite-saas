function toast(text) {
  const div = document.createElement('div');
  div.className = 'toastr-child';
  div.innerText = text;
  document.getElementById('toastr').appendChild(div);
  setTimeout(() => {
    div.classList.add('closing');
    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 5000);
  return div;
}

export function info(text) {
  const div = toast(text);
  div.classList.add('info');
}
