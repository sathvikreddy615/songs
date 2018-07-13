// file that marks purchased songs as "true" in database
// file gets virtually removed from DOM in getNewDataAndPrintCard.js with conditional statement

JSONMethods = require("./jsonMethods");

const RemovePurchasedSong = Object.create({}, {
    songPurchased: {
        value: () => {
            console.log("checkbox works")
            let checkBoxClass = event.target.className;
            if (checkBoxClass === "checkBox") {
                let purchasedID = event.target.parentNode.id;
                JSONMethods.archiveSongs(purchasedID);
            }
        }
    }
})

module.exports = RemovePurchasedSong; // exports to cardCreator.js