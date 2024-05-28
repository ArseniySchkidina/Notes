// 1. Сохранять в LocalStorage.
// переменные 
const form = document.querySelector("#form");
const addNote = document.querySelector("#add-note");
const allNotes = dataFromLocalStorage() || [];
const keyFromLocalStorage = "notes";
console.log(allNotes);

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
    };
    return newNote;
}

function pushNewNote(noteObj) {
    allNotes.push(noteObj);
}

function toJSONFormat(arrayNotes) {
    return JSON.stringify(arrayNotes);
}

function saveToLocalStorage(key, item) {
    localStorage.setItem(key, item);
}

function dataFromLocalStorage(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}


// события 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const processedText = preparationMeaning(addNote);
    const note = newNoteObject(processedText);
    pushNewNote(note);
    const dataNotes = toJSONFormat(allNotes); 
    saveToLocalStorage(keyFromLocalStorage, dataNotes);

})

// 1. Получить данные из local storage.
// 2. Переформатировать в JSON.
// 3. Рендерить заметки на странице.
// 4. 








