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

class Check {
	constructor(reg) {
		this.reg = reg;
	}
	checkReg = (e) => {
		if (this.reg.test(e.target.value) && e.target.value.length > 2) {
			e.target.classList.remove(`error`);
			e.target.classList.add(`success`);
			// itemName.classList.remove(`visibility`);
		} else {
			e.target.classList.remove(`success`);
			e.target.classList.add(`error`);
			// itemName.classList.add(`visibility`);
		}
	};
}
const nameReg = new Check(/[a-zA-Z'-'\s]*/);
const surnameReg = new Check(/[a-zA-Z'-'\s]*/);
const emailReg = new Check(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
const numberReg = new Check(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/);
const messageReg = new Check(/[a-zA-Z'-'\s]*/);

nameForm.addEventListener(`focus`, nameReg.checkReg);
nameForm.addEventListener(`keyup`, nameReg.checkReg);
surnameForm.addEventListener(`focus`, surnameReg.checkReg);
surnameForm.addEventListener(`keyup`, surnameReg.checkReg);
emailForm.addEventListener(`focus`, emailReg.checkReg);
emailForm.addEventListener(`keyup`, emailReg.checkReg);
numberForm.addEventListener(`focus`, numberReg.checkReg);
numberForm.addEventListener(`keyup`, numberReg.checkReg);
messageForm.addEventListener(`focus`, messageReg.checkReg);
messageForm.addEventListener(`keyup`, messageReg.checkReg);

const checkCheckbox = () => {
	if (checkBoxRule.checked === true) {
		checkBoxRule.classList.remove(`errorCheckbox`);
	} else {
		checkBoxRule.classList.add(`errorCheckbox`);
	}
};

const checkInputs = () => {
	checkCheckbox();
	nameReg.checkReg();
	surnameReg.checkReg();
	emailReg.checkReg();
	numberReg.checkReg();
	messageReg.checkReg();
};

formBtn.addEventListener(`click`, checkInputs);
