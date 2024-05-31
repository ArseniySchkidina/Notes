// переменные 
const form = document.querySelector("#form");
const addNote = document.querySelector("#add-note");
const keyFromLocalStorage = "notes";
const allNotes = dataFromLocalStorage(keyFromLocalStorage) || [];

if(allNotes.length > 0){
    renderNotes(allNotes);
}

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

function renderNotes(listNotes) {
    console.log(listNotes);
}

// события 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const processedText = preparationMeaning(addNote);
    const note = newNoteObject(processedText);
    pushNewNote(note);
    const dataNotes = toJSONFormat(allNotes); 
    saveToLocalStorage(keyFromLocalStorage, dataNotes);
    renderNotes(allNotes);
})

// 1. Проверить массив на пустоту.
// 2. If  массив !== пустой, запустить рендер заметок.





