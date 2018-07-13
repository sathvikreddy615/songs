// this file edits the songs and updates it in the database

const GetEditedFormValue = require("./getEditedFormValue"); // imports from getEditedFOrmValue.js
const JSONMethods = require("./jsonMethods");
const ClearDOM = require("./clearDOM");

const UpdateEditedFormValue = Object.create({}, {
    updateValue: {
        value: () => {
            let editFormId = event.target.parentNode.id;
            JSONMethods.getSongs()
                .then(data => {
                    data.forEach(i => {
                        if (i.id === +editFormId) {
                            let editFormData = GetEditedFormValue.getValue();

                            JSONMethods.editSongs(i.id, editFormData.editSongVal, editFormData.editArtistVal, editFormData.editAlbumVal)
                                .then(data => {
                                    console.log(data);
                                });
                        }
                    });
                })
                // ClearDOM
        }
    }
})

module.exports = UpdateEditedFormValue; // exports to editFormrCreator.js
