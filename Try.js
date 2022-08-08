const fnError = () => {
	throw new Error("Siiuuuuuu")
}

try {
	fnError()
} catch(Error) {
	console.error(Error);
	console.log(Error.message)
}

console.log("Да");

const myArray = [1, 2, 3, 4, true];
console.log(myArray);

myArray.push("sheesh");
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift("lol")
console.log(myArray);

myArray.forEach((s) => console.log(s * 2))
const newArray = myArray.map((el) => el * 3)
console.log(myArray);
console.log(newArray);


const person = {
	age: 20,
	name: "Даун",
}

if (!person.name) {
	console.log("Имя не указано");
}

const month = 8;

switch (month) {
	case 6:
		console.log("Июнь");
		break;
	case 7:
		console.log("Июль");
		break;
	case 8:
		console.log("Август");
		break;
	default:
		console.log("Это не летний месяц");
}

let value = 11;
console.log(value >= 0 ? value : -value);

let i = 10;

do {
	console.log(i);
	i++
} while (i <5)

const myString = "Hey";

for (const letter of myString) {
	console.log(letter);
}


class Comment {
	constructor(text) {
		this.text = text
		this.vote = 0
	}

	upvote() {
		this.vote += 1
	}

	static linkComment(first, second) {
		return `${first} ${second}`
	}
}

const firstComment = new Comment("Лайтнига Макнига");
console.log (firstComment);

const secondComment = new Comment("2");
secondComment.upvote()
console.log(secondComment);

const thirdComment = new Comment("3");
thirdComment.upvote()
thirdComment.upvote()
console.log(thirdComment);
thirdComment.upvote()



/*const getData = (url) =>
	new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
		)

	getData("https://jsonplaceholder.typicode.com/todos")
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
*/


const timerPromise = async () =>
	new Promise((resolve, reject) =>
		setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
	console.log("timer starts")
	const startTime = performance.now()
	await timerPromise()
	const endTime = performance.now()
	console.log("timer ended", endTime - startTime)
}

asyncFn()
	/*
	.then(value => console.log(value))
	.catch(error => console.log(error.message))
	*/


const getDataAsync = async (url) => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

const url = "https://jsonplaceholder.typicode.com/todos"

/*
try {
	const asyncData = await getDataAsync(url)
	console.log(asyncData)
} catch (error)	 {
	console.log(error.message)
}
*/



/*===============================================================================================*/



const wrapper = document.querySelector(".wrapper");


const popup = document.querySelector(".popup");
const openPopup = document.getElementById("popup__open");
const closePopup = document.getElementsByClassName("popup__close")[0];


openPopup.addEventListener("click", function(e) {
	e.preventDefault();
	popup.classList.add("open");
});
closePopup.addEventListener("click", () => {
	popup.classList.remove("open");
	deleteErrorMessage();
});

function deleteErrorMessage() {
	let email_error_message = document.querySelector('.popup-form__error');
	if (email_error_message != null) {
		email_error_message.remove();
	}
}

const popupForm = document.forms.popup__form;
const popupFormInput = popupForm.email;
const popupFormPlaceholder = popupFormInput.placeholder;

popupFormInput.addEventListener("focus", function(e) {
	popupFormInput.placeholder = "";
});

popupFormInput.addEventListener("blur", function(e) {
	popupFormInput.placeholder = popupFormPlaceholder;
});

const popupFormNick = popupForm.nick;
const popupNickPlaceholder = popupFormNick.placeholder;

popupFormNick.addEventListener("focus", function(e) {
	popupFormNick.placeholder = "";
});

popupFormNick.addEventListener("blur", (e) => {
	popupFormNick.placeholder = popupNickPlaceholder;
});
popupForm.addEventListener("submit", function(event) {
	let email_error_message = document.querySelector('.popup-form__error');
	if (email_error_message != null) {
		email_error_message.remove();
	}

	if (!isValidEmail(popupFormInput)) {
		popupFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class = "popup-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

popupFormInput.addEventListener("focus", function(event) {
	if (popupFormInput.nextElementSibling) {
		popupFormInput.nextElementSibling.remove();
	}
});


function isValidEmail(input) {
	let is_error_email = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	return is_error_email === true ? false : true;
};



document.addEventListener("click", popup);


function popupClose(events) {
	if (!events.target(".popup__content")) {
		popup.classList.remove("open");
	}
}



const headerMenu = document.getElementById("contacts");

function scrollToContacts() {
	const contacts = document.querySelector(".network__list");
	contacts.scrollIntoView({
		block: "center",

		behavior: "smooth",
	});
}

headerMenu.addEventListener("click", scrollToContacts)

// Появление черного цвета при скроле
const header = document.querySelector(".header");
const container = document.querySelector("._container");

window.addEventListener("scroll", function(e) {
	container.style.cssText = `
		background-color: rgb(90, 218, 223);
		border-radius: 30px;
		transition-duration: 0.35s;
		transition-property: background-color;
	`
	if (window.pageYOffset == 0) {
		container.style.cssText = `
			background-color: none;
			transition-duration: 0.28s, 100s;
			transition-property: background-color, border-radius;
		`
	}
})

const logoImg = document.querySelector(".logo-info");

logoImg.addEventListener("click", function() {
	window.scrollTo({
		top: 0,
		left: 0,

		behavior: "smooth",
	});
})


const about = document.getElementById("about");

function scrollToAbout() {
	const aboutSus = document.querySelector(".aboutsus");
	aboutSus.scrollIntoView({
		block: "center",

		behavior: "smooth",
	});
}

about.addEventListener("click", scrollToAbout)


const amogusMusic = document.getElementById("amogus__music");
const amogusDivImg = document.querySelector(".about-img__photo");

amogusDivImg.addEventListener("click", function() {
	amogusMusic.volume = 0.15;
	if (amogusMusic.paused) {
		amogusMusic.play();
	}
	else {
		amogusMusic.pause();
	}
})

//==============================Анимация появления=================================================

const animItems = document.querySelectorAll("._anim-items");

if(animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add("_active");
			} else {
				if(!animItem.classList.contains("_anim-no-hide")) {
					animItem.classList.remove("_active");
				}
			}
		}
	}
	function offset(el) {
		var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	animOnScroll();
}