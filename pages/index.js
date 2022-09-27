//@ts-check

// Popup редактирования имени и информации о себе

const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('#openPopup');
const closePopupButton = document.querySelector('#closePopup');

function openPopup() {
  popup?.classList.add('popup_opened');
}

function closePopup() {
  popup?.classList.remove('popup_opened');
}

openPopupButton?.addEventListener('click', function () {
  openPopup();
});

closePopupButton?.addEventListener('click', function () {
  closePopup();
});

// Редактирование имени и информации о себе

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#popup__name');
const occupationInput = document.querySelector('#popup__description');

function formSubmitHandler(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector('#popup__name');
  const occupationInput = document.querySelector('#popup__description');

  const profileName = document.querySelector('.profile__title');
  const profileOccupation = document.querySelector('.profile__subtitle');

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

// Массив для карточек

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const placesCard = document.querySelector('.places').content;

function initialCardsALL(placeName, placeLink) {
  const placeCard = document.querySelector('.place').cloneNode(true);

  placeCard.querySelector('.place__title').textContent = placeName;
  placeCard.querySelector('.place__image').src = placeLink;

  places.prepend(placeCard);
}


