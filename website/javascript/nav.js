const navSlide = () => {
	const bars = document.querySelector('.bars');
	const nav = document.querySelector('.sidenav');

	bars.addEventListener('click',() =>{
		nav.classList.toggle('sidenav-active');
	}); 
}

navSlide();