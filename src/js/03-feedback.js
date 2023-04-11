import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('form');
const inputEmailEl = document.querySelector('input');
const textareaMassageEl = document.querySelector('textarea');

formEl.addEventListener('submit', onFortmSubmit);
inputEmailEl.addEventListener('input', throttle(onTextWithForm, 500));
textareaMassageEl.addEventListener('input', throttle(onTextWithForm, 500));

let formData = {
    email: "",
    message: "",
}

function onTextWithForm(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    inputEmailEl.value = formData.email;
    textareaMassageEl.value = formData.message;
} else {
    inputEmailEl.value = "";
    textareaMassageEl.value = "";
}

function onFortmSubmit(event) {
    event.preventDefault();

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    inputEmailEl.value = "";
    textareaMassageEl.value = "";


}