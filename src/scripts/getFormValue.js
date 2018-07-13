
const FormCreator = require("./formCreator"); // imports from formCreator.js

FormCreator.createForm();

const GetFormValue = Object.create({}, {
    inputValue: {
        value: () => {
            let songVal = document.querySelector("#songVal").value;
            let artistVal = document.querySelector("#artistVal").value;
            let albumVal = document.querySelector("#albumVal").value;

            const newObject = {
                songVal,
                artistVal,
                albumVal
            }
            return newObject
        }
    }
})

module.exports = GetFormValue; // exports to postFormValue.js
