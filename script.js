const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
	const isOpen = nav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
	link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.accordion button').forEach((button) => {
	button.addEventListener('click', () => {
		const answer = button.nextElementSibling;
		const isOpen = answer.classList.toggle('open');
		button.setAttribute('aria-expanded', isOpen);
		button.querySelector('span').textContent = isOpen ? '−' : '+';
	});
});
