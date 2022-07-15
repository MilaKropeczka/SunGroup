const bar = document.querySelector(`i`);
const nav = document.querySelector(`nav .nav_mobile`);

const toggleMenu = () => {
	nav.classList.toggle('show');
};

bar.addEventListener(`click`, toggleMenu);

// ==================================== Validation

const nameForm = document.querySelector(`#name`);

nameForm.addEventListener('keydown', () => {
	const reg = /[a-zA-Z'-'\s]*/;
	if (reg.test(emailForm.value)) {
		nameForm.classList.remove(`error`);
		nameForm.classList.add(`success`);
	} else {
		nameForm.classList.remove(`success`);
		nameForm.classList.add(`error`);
	}
});

const surnameForm = document.querySelector(`#surname`);

surnameForm.addEventListener('keydown', () => {
	const reg = /[a-zA-Z'-'\s]*/;
	if (reg.test(surnameForm.value)) {
		surnameForm.classList.remove(`error`);
		surnameForm.classList.add(`success`);
	} else {
		surnameForm.classList.remove(`success`);
		surnameForm.classList.add(`error`);
	}
});

const emailForm = document.querySelector(`#email`);

emailForm.addEventListener('keydown', () => {
	const reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	if (reg.test(emailForm.value)) {
		emailForm.classList.remove(`error`);
		emailForm.classList.add(`success`);
	} else {
		emailForm.classList.remove(`success`);
		emailForm.classList.add(`error`);
	}
});

const numberForm = document.querySelector(`#number`);

numberForm.addEventListener('keydown', () => {
	const reg = /(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}/;
	if (reg.test(numberForm.value)) {
		numberForm.classList.remove(`error`);
		numberForm.classList.add(`success`);
	} else {
		numberForm.classList.remove(`success`);
		numberForm.classList.add(`error`);
	}
});
const messageForm = document.querySelector(`#message`);

messageForm.addEventListener('keydown', () => {
	if (messageForm.value.length > 30) {
		messageForm.classList.remove(`error`);
		messageForm.classList.add(`success`);
	} else {
		messageForm.classList.remove(`success`);
		messageForm.classList.add(`error`);
	}
});
const checkBoxRule = document.querySelector(`#rule`);

const formBtn = document.querySelector(`#formBtn`);
formBtn.addEventListener(`click`, (e) => {
	if (checkBoxRule.checked === true) {
		console.log(`wyslij`);
	} else {
		e.preventDefault();
		checkBoxRule.classList.add(`errorCheckbox`);
	}
});