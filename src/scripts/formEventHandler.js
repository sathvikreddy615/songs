
const PostFormValue = require("./postFormValue"); // imports from postFormValue.js
const GetNewDataAndPrintCard = require("./getNewDataAndPrintCard"); // imports from getNewDataAndPrintCard.js

const FormEventHandler = Object.create({}, {
    saveButton: {
        value: () => {
            let saveBtn = document.querySelector("#saveBtn");
            saveBtn.addEventListener("click", PostFormValue.inputValue);
            saveBtn.addEventListener("click", GetNewDataAndPrintCard.getData);
        }
    }
})

module.exports = FormEventHandler; // exports to main.js
