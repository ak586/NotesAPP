const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main");
// eventlistner on add button
addBtn.addEventListener(
    'click',
    function () {
        addNote();
    }
)
// function for saving nodes
const saveNotes = () => {

    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    // console.log(notes);

    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

    if (data.length == 0) {
        localStorage.removeItem("notes")
    }
    else {
        // saving data in local storage so that our data is not last
        localStorage.setItem("notes", JSON.stringify(data))
    }
}




const addNote = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
</div>
<textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener(
        'click',
        function () {
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        'click',
        function () {
            saveNotes();
        }
    )
    main.appendChild(note);
    note.querySelector("textarea").addEventListener('focus',
        function () {
            saveNotes();
        })
}

// self calling function
// this function will keep all load all previously saved data
(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes == null) {
            localStorage.removeItem("notes");
            // if there are no textareas left then there will be 
            // one textarea created on refreshing the page
            addNote();
        }
        else {
            lsnotes.forEach(
                (lsnote) => {

                    addNote(lsnote);

                }

            )
        }

    }
)()