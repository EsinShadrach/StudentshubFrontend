// varables block
const items = document.querySelectorAll(".nav-link");
const mobile_nav_event = document.querySelectorAll(".nav-link-mobile");
const tab_nav_event = document.querySelectorAll(".tab-nav-event");
const click_and_show = document.querySelector(".close-and-show");
const tab_sidebar = document.querySelector(".priss");

click_and_show.addEventListener("click", () => {
	click_and_show.classList.toggle("close-and-show_active");
	click_and_show.classList.toggle("bi-arrow-right-square-fill");
	tab_sidebar.classList.toggle("priss_close");
});

for (let i = 0; i < mobile_nav_event.length; i++) {
	mobile_nav_event[i].addEventListener("click", mobile_select);
}
// select block
function mobile_select() {
	mobile_deselect(this);
	this.classList.add("nav-link-mobile-active");
}

// End select block
// mobile_deselecting block
function mobile_deselect(c) {
	for (let i = 0; i < mobile_nav_event.length; i++) {
		if (mobile_nav_event[i] != c) {
			mobile_nav_event[i].classList.remove("nav-link-mobile-active");
		}
	}
}

// end variables block
/* ----------------- */
// click-event block
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", select);
}
// select block
function select() {
	deselect(this);
	this.classList.add("active");
	this.classList.remove("num");
}

// End select block
// Deselecting block
function deselect(c) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] != c) {
			items[i].classList.remove("active");
		}
	}
}
// End deselecting block
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// nav-mobile-active
