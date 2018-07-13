
const GetEditedFormValue = Object.create({}, {
    getValue: {
        value: () => {
            let editSongVal = document.querySelector("#editSongVal").value;
            let editArtistVal = document.querySelector("#editArtistVal").value;
            let editAlbumVal = document.querySelector("#editAlbumVal").value;

            const newObject = {
                editSongVal,
                editArtistVal,
                editAlbumVal
            }

            return newObject;
        }
    }
})

module.exports = GetEditedFormValue; // exports to updateEditedFormValue.js
