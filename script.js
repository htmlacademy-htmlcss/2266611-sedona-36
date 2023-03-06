let modal = document.querySelector('.modal-container');
let modalOpen = document.querySelector('.modal-open');
let modalClose = document.querySelector('.modal-close');
let tagBody = document.querySelector('.page-body');

modalOpen.onclick = function (e) {
    e.preventDefault();
    modal.classList.add('modal-active');
    tagBody.classList.add('hidden');
};

modalClose.onclick = function (e) {
    e.preventDefault();
    modal.classList.remove('modal-active');
    tagBody.classList.remove('hidden');
};

modal.onmousedown = function (e) {
  let target = e.target;
  let modalContent = modal.getElementsByClassName('modal-search')[0];
  if (e.target.closest('.' + modalContent.className) === null) {
    this.classList.remove('modal-active');
    tagBody.classList.remove('hidden');
  }
};
