var show = document.querySelector(".map__btn");
var popup = document.querySelector(".map__form");
var close = popup.querySelector(".map__close");
var first_name = popup.querySelector("[name=first_name]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("first_name");

show.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("map__form-show");
	if (storage) {
		first_name.value = storage;
		email.focus();
	} else {
		first_name.focus();	
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("map__form-show");
	popup.classList.remove("map__error");
});

popup.addEventListener("submit", function(event) {
	if (!first_name.value || !email.value) {
		event.preventDefault();
		popup.classList.add("map__error");
	} else {
		localStorage.setItem("first_name", first_name.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("map__form-show")) {
			popup.classList.remove("map__form-show");
		}
	}
});