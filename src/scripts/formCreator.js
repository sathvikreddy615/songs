
const FormCreator = Object.create({}, {
    createForm: {
        value: () => {
            const formContainer = document.querySelector("#formContainer");

            let inputContainer = document.createElement("div");
            inputContainer.id = "inputContainer";

            let songEl = document.createElement("input");
            songEl.id = "songVal";
            songEl.type = "text";
            songEl.placeholder = "Song";

            let artistEl = document.createElement("input");
            artistEl.id = "artistVal";
            artistEl.type = "text";
            artistEl.placeholder = "Artist";

            let albumEl = document.createElement("input");
            albumEl.id = "albumVal";
            albumEl.type = "text";
            albumEl.placeholder = "Album";

            inputContainer.appendChild(songEl);
            inputContainer.appendChild(artistEl);
            inputContainer.appendChild(albumEl);

            let saveBtn = document.createElement("button");
            saveBtn.id = "saveBtn";
            saveBtn.textContent = "Save";

            formContainer.appendChild(inputContainer);
            formContainer.appendChild(saveBtn);
        }
    }
})

module.exports = FormCreator; // exports to getFormValue.js