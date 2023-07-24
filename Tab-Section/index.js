const contentEl = document.querySelectorAll('.content');
const buttonEl = document.querySelector('.btn');
const buttons = document.querySelectorAll('button');

buttonEl.addEventListener('click', (e) => {
  id = e.target.dataset.id;
  if (id) {
    buttons.forEach((button) => {
      button.classList.remove('live');
    });
    e.target.classList.add('live');
    contentEl.forEach((content) => {
      content.classList.remove('live');
    });
    const element = document.getElementById(id);
    element.classList.add('live');
  }

})