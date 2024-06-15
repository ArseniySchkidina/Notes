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
    const notesList = document.querySelector("#notesList");
    listNotes.forEach(note => {
        const newNote = 
        `
                                <li class="notes-list__item">
                            <textarea class="note" name="" id="" cols="30" rows="10">
                            ${note.text}
                            </textarea>
                            <ul class="list-controls-button">
                                <li class="list-controls-button__item">
                                    <button class="button-control">
                                        <svg>
                                            <use xlink:href="#redactive">
                                            </use>
                                        </svg>
                                    </button>
                                </li>
                                <li class="list-controls-button__item">
                                    <button class="button-control">
                                        <svg>
                                            <use xlink:href="#favourites"></use>
                                        </svg>
                                    </button>
                                </li>
                                <li class="list-controls-button__item">
                                    <button class="button-control">
                                        <svg>
                                            <use xlink:href="#trash"></use>
                                        </svg>
                                    </button>
                                </li>
                                <li class="list-controls-button__item">
                                    <button class="button-control">
                                        <svg>
                                            <use xlink:href="#arrow"></use>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </li>
        `;
        notesList.insertAdjacentHTML('afterbegin', newNote);
    });
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

// 1. Create отступ между notes.
// 2. Очищать инпут от текста.
