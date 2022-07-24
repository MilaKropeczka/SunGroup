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

let errName = true;
let errSurname = true;
let errEmail = true;
let errNumber = true;
let errMessage = true;

const checkInputs = () => {
	switch (true) {
		case errName === false:
			console.log(`error name`);
			nameForm.classList.add(`error`);
			itemName.classList.add(`visibility`);
		case errSurname === false:
			console.log(`error surname`);
			surnameForm.classList.add(`error`);
			itemSurname.classList.add(`visibility`);
		case errEmail === true:
			console.log(`error email`);
			emailForm.classList.add(`error`);
			itemEmail.classList.add(`visibility`);
		case errNumber === true:
			console.log(`error number`);
			numberForm.classList.add(`error`);
			itemNumber.classList.add(`visibility`);
		case errMessage === true:
			console.log(`error message`);
			messageForm.classList.add(`error`);
			itemMessage.classList.add(`visibility`);
	}
};

class Check {
	constructor(reg) {
		this.reg = reg;
	}
	checkReg = (e) => {
		if (this.reg.test(e.target.value) && e.target.value.length > 2) {
			e.target.classList.remove(`error`);
			e.target.classList.add(`success`);
			switch (true) {
				case e.target.id === `name`:
					itemName.classList.remove(`visibility`);
					errName = false;
					break;
				case e.target.id === `surname`:
					itemSurname.classList.remove(`visibility`);
					errSurname = false;
					break;
				case e.target.id === `email`:
					itemEmail.classList.remove(`visibility`);
					errEmail = false;
					break;
				case e.target.id === `number`:
					itemNumber.classList.remove(`visibility`);
					errNumber = false;
					break;
				case e.target.id === `message`:
					itemMessage.classList.remove(`visibility`);
					errMessage = false;
					break;
				default:
					console.error(`err`);
					break;
			}
		} else {
			e.target.classList.remove(`success`);
			e.target.classList.add(`error`);
			switch (true) {
				case e.target.id === `name`:
					itemName.classList.add(`visibility`);
					errName = true;
					break;
				case e.target.id === `surname`:
					itemSurname.classList.add(`visibility`);
					errSurname = true;
					break;
				case e.target.id === `email`:
					itemEmail.classList.add(`visibility`);
					errEmail = true;
					break;
				case e.target.id === `number`:
					itemNumber.classList.add(`visibility`);
					errNumber = true;
					break;
				case e.target.id === `message`:
					itemMessage.classList.add(`visibility`);
					errMessage = true;
					break;
				default:
					console.error(`err`);
					break;
			}
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

document.querySelectorAll('form textarea input').forEach((i) => {
	// console.log(i);
	// i.addEventListener('click', (e) => {
	// 	console.log(e.target);
	// }
	// );
	console.log(i.value);
	if (i.value == ``) {
		i.classList.add(`error`);

		switch (true) {
			case i.id === `name`:
				itemName.classList.add(`visibility`);
				break;
			case i.id === `surname`:
				itemSurname.classList.add(`visibility`);
				break;
			case i.id === `email`:
				itemEmail.classList.add(`visibility`);
				break;
			case i.id === `number`:
				itemNumber.classList.add(`visibility`);
				break;
			case i.id === `message`:
				itemMessage.classList.add(`visibility`);
				break;
			default:
				console.error(`err`);
				break;
		}
	}
	// switch (true) {
	// 	case errName === false:
	// 		console.log(`error name`);
	// 		nameForm.classList.add(`error`);
	// 		itemName.classList.add(`visibility`);
	// }
});

const checkCheckbox = () => {
	if (checkBoxRule.checked === true) {
		checkBoxRule.classList.remove(`errorCheckbox`);
	} else {
		checkBoxRule.classList.add(`errorCheckbox`);
	}
};

// formBtn.addEventListener(`click`, checkInputs);
