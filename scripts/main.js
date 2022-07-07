const bar = document.querySelector(`i`);
const nav = document.querySelector(`nav .nav_mobile`);

const toggleMenu = () => {
	nav.classList.toggle('show');
};

bar.addEventListener(`click`, toggleMenu);
