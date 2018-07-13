// this file populates the input fields with data for user to edit

const EditFormCreator = require("./editFormCreator"); // import from editformCreator.js
const JSONMethods = require("./jsonMethods");
const clearDOM = require("./clearDOM");

const GetSongData = Object.create({}, {
    getSongs: {
        value: () => {
            clearDOM("#editFormContainer");

            let cardID = event.target.parentNode.id;

            JSONMethods.getSongs()
                .then(data => {
                    data.forEach(i => {
                        console.log("third - ", typeof parseInt(cardID)); // typeof checks what type of value is being returned (ie. if its a value or string)
                        if (i.id === +cardID) { // by defaut, JSON returns all data as a string. the plus symbol converts the variable from a string to an integer. you can also use parseInt(cardID)
                            EditFormCreator.createEditForm(i.id, i.song, i.artist, i.album);
                        }
                    });
                })
        }
    }
})

module.exports = GetSongData; // exports to cardCreator.js
