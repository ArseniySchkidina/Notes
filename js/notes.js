// 1. Создать массив, где будут хранится все заметки!
// 2. Обьект в новой заметке сохранять в массив всех заметок.
// 2.1. Обьект заметки превратить в JSON-строку.
// 2.2. Сохранить заметку в локальное хранилище (localStorage);

// переменные 
const form = document.querySelector("#form");
const addNote = document.querySelector("#add-note");


// функции
function preparationMeaning(inputElement) {
    const trimmedValue = inputElement.value.trim();
    // в случае бага улучшить проверку инпута
    if (trimmedValue.length > 0) {
        return trimmedValue;
    }
}

function newNoteObject(text) {
    const newNote = {
            text: text,
            favourite: false, 
            id: null,
        }
}
// события 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const processedText = preparationMeaning(addNote);
})










