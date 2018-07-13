
const GetEditedFormValue = require("./getEditedFormValue"); // imports from getEditedFOrmValue.js
const JSONMethods = require("./jsonMethods");

const UpdateEditedFormValue = Object.create({}, {
    updateValue: {
        value: () => {
            JSONMethods.getSongs()
                .then(data => {
                    data.forEach(i => {
                        if (i.id === 6) { // need to figure this out!!!!
                            let editFormData = GetEditedFormValue.getValue();
                            JSONMethods.editSongs(i.id, editFormData.editSongVal, editFormData.editArtistVal, editFormData.editAlbumVal)
                                .then(data => {
                                    console.log(data);
                                });
                        }
                    });
                })
        }
    }
})

module.exports = UpdateEditedFormValue; // exports to editFormrCreator.js
