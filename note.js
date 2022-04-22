console.log('Welcom');
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();
})
//function to show notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` 
        <div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body" >
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
        </div>`;



    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `Nothing to show! "Add a Note" section above to add notes. `;
    }
}
//function to delete notes
function deleteNote(index) {
    console.log(`I'm deleted`, index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
//search function
let searchtxt = document.getElementById('searchtxt');
searchtxt.addEventListener("input", function () {
    let inputVal = searchtxt.value;
    let noteCard = document.getElementsByClassName('card');

    Array.from(noteCard).forEach(element => {
        let cardtxt = document.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.getElementsByClassName.display = "block";
        }
        else {
            element.getElementsByClassName.display = "block";
        }
    })
})