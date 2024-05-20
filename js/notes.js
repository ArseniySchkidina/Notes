// 1. Сохранять в LocalStorage.
// переменные 
const form = document.querySelector("#form");
const addNote = document.querySelector("#add-note");
const allNotes = [];

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

// события 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const processedText = preparationMeaning(addNote);
    const note = newNoteObject(processedText);
    pushNewNote(note);
    console.log(allNotes);
})










