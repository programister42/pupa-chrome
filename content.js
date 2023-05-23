const popup = document.createElement('div');
popup.id = 'pupa-and-lupa_popup';

popup.textContent = 'open in pupa';

popup.style.border = '1px solid gray';
popup.style.borderRadius = '16px';
popup.style.padding = ' 8px 16px';
popup.style.fontFamily = 'monospace';
popup.style.fontSize = '16px';
popup.style.color = 'gray';
popup.style.backgroundColor = 'white';
popup.style.position = 'fixed';
popup.style.zIndex = '9999';
popup.style.display = 'none';
popup.style.cursor = 'pointer';

let selectedText = '';

popup.addEventListener('click', () => {
  const appUrl = `https://pupa-and-lupa.web.app/home/${encodeURI(selectedText)}`;
  window.open(appUrl, '_blank');

  popup.style.display = 'none';
});

document.body.appendChild(popup);

document.addEventListener('mousedown', (e) => {
  if (e.target !== popup) {
    popup.style.display = 'none';
  }
});

document.addEventListener('mouseup', (e) => {
  const selection = window.getSelection().toString().trim();

  if (selection) {
    selectedText = selection;

    const rect = document.body.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    popup.style.top = `${y - popup.offsetHeight - 5}px`;
    popup.style.left = `${x + 5}px`;

    popup.style.display = 'block';
  }
});
