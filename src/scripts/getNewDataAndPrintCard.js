const JSONMethods = require("./jsonMethods");
const clearDOM = require("./clearDOM");

const GetNewDataAndPrintCard = Object.create({}, {
    getData: {
        value: () => {
            clearDOM("#cardContainer");
            const CardCreator = require("./cardCreator");
            JSONMethods.getSongs()
                .then(data => {
                    console.log(data);
                    for (let i in data) {
                        if (data[i].purchased !== "true") { // checks if song has been marked as true
                            CardCreator.createCard(data[i].id, data[i].song, data[i].artist, data[i].album);
                        }
                    }
                })
        }
    }
})

module.exports = GetNewDataAndPrintCard; // exports to formEventHandler.js (prints immediately to DOM) and main.js (keeps cards on DOM)
