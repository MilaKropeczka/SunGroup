const bar = document.querySelector(`i`);
const nav = document.querySelector(`nav .nav_mobile`);

const toggleMenu = () => {
	nav.classList.toggle('show');
	bar.classList.toggle(`fa-bars`);
	bar.classList.toggle(`fa-xmark`);
};

bar.addEventListener(`click`, toggleMenu);

// ==================================== Validation
const nameForm = document.querySelector(`#name`);
const surnameForm = document.querySelector(`#surname`);
const emailForm = document.querySelector(`#email`);
const numberForm = document.querySelector(`#number`);
const messageForm = document.querySelector(`#message`);
const checkBoxRule = document.querySelector(`#rule`);
const formBtn = document.querySelector(`#formBtn`);
const itemName = document.querySelector(`#itemName`);
const itemSurname = document.querySelector(`#itemSurname`);
const itemEmail = document.querySelector(`#itemEmail`);
const itemNumber = document.querySelector(`#itemNumber`);
const itemMessage = document.querySelector(`#itemMessage`);

const addClassName = () => {
	const reg = /[a-zA-Z'-'\s]*/;
	if (reg.test(itemName.value) && nameForm.value.length > 2) {
		nameForm.classList.remove(`error`);
		itemName.classList.remove(`visibility`);
		nameForm.classList.add(`success`);
	} else {
		nameForm.classList.remove(`success`);
		nameForm.classList.add(`error`);
		itemName.classList.add(`visibility`);
	}
};

const addClassSurname = () => {
	const reg = /[a-zA-Z'-'\s]*/;
	if (reg.test(surnameForm.value) && surnameForm.value.length > 2) {
		surnameForm.classList.remove(`error`);
		itemSurname.classList.remove(`visibility`);
		surnameForm.classList.add(`success`);
	} else {
		surnameForm.classList.remove(`success`);
		surnameForm.classList.add(`error`);
		itemSurname.classList.add(`visibility`);
	}
};

const addClassEmail = () => {
	const reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	if (reg.test(emailForm.value)) {
		emailForm.classList.remove(`error`);
		itemEmail.classList.remove(`visibility`);
		emailForm.classList.add(`success`);
	} else {
		emailForm.classList.remove(`success`);
		emailForm.classList.add(`error`);
		itemEmail.classList.add(`visibility`);
	}
};

const addClassNumber = () => {
	// const reg = /[0-9]/;
	const reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
	if (reg.test(numberForm.value)) {
		numberForm.classList.remove(`error`);
		itemNumber.classList.remove(`visibility`);
		numberForm.classList.add(`success`);
	} else {
		numberForm.classList.remove(`success`);
		numberForm.classList.add(`error`);
		itemNumber.classList.add(`visibility`);
	}
};
const addClassMessage = () => {
	if (messageForm.value.length > 30) {
		messageForm.classList.remove(`error`);
		itemMessage.classList.remove(`visibility`);
		messageForm.classList.add(`success`);
	} else {
		messageForm.classList.remove(`success`);
		messageForm.classList.add(`error`);
		itemMessage.classList.add(`visibility`);
	}
};

const checkCheckbox = () => {
	if (checkBoxRule.checked === true) {
	} else {
		checkBoxRule.classList.add(`errorCheckbox`);
	}
};

const checkInputs = () => {
	checkCheckbox();
	addClassName();
	addClassSurname();
	addClassEmail();
	addClassNumber();
	addClassMessage();
};

nameForm.addEventListener('keyup', addClassName);
nameForm.addEventListener('focus', addClassName);
surnameForm.addEventListener('keyup', addClassSurname);
surnameForm.addEventListener('focus', addClassSurname);
emailForm.addEventListener('keyup', addClassEmail);
emailForm.addEventListener('focus', addClassEmail);
numberForm.addEventListener('keyup', addClassNumber);
numberForm.addEventListener('focus', addClassNumber);
messageForm.addEventListener('keyup', addClassMessage);
messageForm.addEventListener('focus', addClassMessage);
formBtn.addEventListener(`click`, checkInputs);
