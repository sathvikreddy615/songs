const JSONMethods = require("./jsonMethods");

const DeleteCardData = Object.create({}, {
    deleteSongFromCard: {
        value: () => {
            let deleteBtnParentId = event.target.parentNode.id;

            JSONMethods.deleteSongs(deleteBtnParentId)
                .then(deleted => {
                    console.log(deleted);
                })
        }
    },
    deleteSongFromEditForm: {
        value: () => {
            JSONMethods.getSongs()
                .then(data => {
                    data.forEach(i => {
                        if (i.id === 2) { // need to figure this out!!!!
                            JSONMethods.deleteSongs(i.id)
                            .then(deleted => {
                                console.log(deleted);
                            })
                        }
                    });
                })
        }
    }
})

module.exports = DeleteCardData; // export to cardCreator.js and editFormCreator.js
