const popupEditForm = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const buttonCloseList = document.querySelectorAll('.popup__close-button');
const containerEditFormSubmit = document.querySelector('.popup__container_type_edit');
const popupAddForm = document.querySelector('.popup_type_add');
const cardAddButton = document.querySelector('.profile__add-button');
const containerAddFormSubmit = document.querySelector('.popup__container_type_add');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');
const userNameInput = popupEditForm.querySelector('.popup__item_type_name');
const userDescriptionInput = popupEditForm.querySelector('.popup__item_type_description');
const userPlaceInput = popupAddForm.querySelector('.popup__item_type_place');
const userLinkInput = popupAddForm.querySelector('.popup__item_type_link');
const cardsList = document.querySelector('.places');
const containerPopupPic = document.querySelector('.popup_type_pic');
const popupPic = containerPopupPic.querySelector('.popup__image');
const popupPicTitle = containerPopupPic.querySelector('.popup__pic-title');
const cardTemplate = document.querySelector('.places-template').content.querySelector('.places__item');

initialCards.forEach(function (el) {
  renderCard(el.name, el.link);
});

function saveProfileForm(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userDescription.textContent = userDescriptionInput.value;
  closePopup(popupEditForm);
}

function makeCard(name, link) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.places__title').textContent = name;
  newCard.querySelector('.places__image').src = link;
  newCard.querySelector('.places__image').alt = name;
  setCardActionsListeners(newCard, name, link);
  return newCard;
}

function renderCard(name, link) {
  newCard = makeCard(name, link);
  cardsList.prepend(newCard);
}

function addNewCard(evt) {
  evt.preventDefault();
  newCard = renderCard(userPlaceInput.value, userLinkInput.value);
  userPlaceInput.value = '';
  userLinkInput.value = '';
  closePopup(popupAddForm);
}

function removeCard(evt) {
  const newCard = evt.currentTarget.closest('.places__item');
  newCard.remove();
}

function setCardActionsListeners(newCard, name, link) {
  newCard
    .querySelector('.places__delete')
    .addEventListener('click', removeCard);

  newCard
    .querySelector('.places__like')
    .addEventListener('click', function (evt) {
      evt.target.classList.toggle('places__like_active');
    });

  newCard.querySelector('.places__image').addEventListener('click', () => {
    openPopup(containerPopupPic);
    popupPic.src = link;
    popupPicTitle.textContent = name;
    popupPicTitle.alt = name;
  });
}

function openPopup(elem) {
  elem.classList.add('popup_opened');
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', function () {
  openPopup(popupEditForm);
  userNameInput.value = userName.textContent;
  userDescriptionInput.value = userDescription.textContent;
});

containerEditFormSubmit.addEventListener('submit', saveProfileForm);
containerAddFormSubmit.addEventListener('submit', addNewCard);
cardAddButton.addEventListener('click', function () {
  openPopup(popupAddForm);
});

buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});
