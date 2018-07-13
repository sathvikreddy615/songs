
const UpdateEditedFormValue = require("./updateEditedFormValue");
const DeleteCardData = require("./deleteCardData");

const EditFormCreator = Object.create({}, {
    createEditForm: {
        value: (id, editName, editArtist, editAlbum) => {
            const editFormContainer = document.querySelector("#editFormContainer");
            editFormContainer.id = id;
            editFormContainer.setAttribute("classList", "disableEditForm")

            let editInputContainer = document.createElement("div");
            editInputContainer.id = "editInputContainer";

            let editSongEl = document.createElement("input");
            editSongEl.id = "editSongVal";
            editSongEl.type = "text";
            editSongEl.value = editName;

            let editArtistEl = document.createElement("input");
            editArtistEl.id = "editArtistVal";
            editArtistEl.type = "text";
            editArtistEl.value = editArtist;

            let editAlbumEl = document.createElement("input");
            editAlbumEl.id = "editAlbumVal";
            editAlbumEl.type = "text";
            editAlbumEl.value = editAlbum;

            editInputContainer.appendChild(editSongEl);
            editInputContainer.appendChild(editArtistEl);
            editInputContainer.appendChild(editAlbumEl);

            let updateBtn = document.createElement("button");
            updateBtn.id = "updateBtn";
            updateBtn.textContent = "Update";
            updateBtn.addEventListener("click", UpdateEditedFormValue.updateValue);

            let editDeleteBtn = document.createElement("button");
            editDeleteBtn.id = "editDeleteBtn";
            editDeleteBtn.textContent = "Delete";
            editDeleteBtn.addEventListener("click", DeleteCardData.deleteSongFromEditForm);

            editFormContainer.appendChild(editDeleteBtn);
            editFormContainer.appendChild(editInputContainer);
            editFormContainer.appendChild(updateBtn);
        }
    }
})

module.exports = EditFormCreator; // exports to getSongData.js
