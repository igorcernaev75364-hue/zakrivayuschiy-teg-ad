/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');
const saveButton = document.querySelector('.save-container__btn-show-modal');
const dialog = document.querySelector('.dialog-window');
const dialogCloseButton = document.querySelector('.dialog-container__btn-ok');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function stopButtonAction(event) {
  event.preventDefault();
  event.stopPropagation();
}

function openDialog(event) {
  stopButtonAction(event);

  if (!dialog.open) {
    try {
      dialog.showModal();
    } catch {
      dialog.setAttribute('open', '');
    }
  }
}

function closeDialog(event) {
  stopButtonAction(event);

  try {
    dialog.close();
  } catch {
    dialog.removeAttribute('open');
  }
}

saveButton.addEventListener('click', openDialog);
dialogCloseButton.addEventListener('click', closeDialog);

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}
