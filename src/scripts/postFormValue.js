const GetFormValue = require("./getFormValue"); // imports from getFormValue.js
const JSONMethods = require("./jsonMethods");

const PostFormValue = Object.create({}, {
    inputValue: {
        value: () => {
            let formData = GetFormValue.inputValue(); // calls function and stores in variable

            JSONMethods.postSongs(formData.songVal, formData.artistVal, formData.albumVal)
                .then(data => {
                    console.log(data);
                })
        }
    }
})

module.exports = PostFormValue; // exports to formEventHandler.js
