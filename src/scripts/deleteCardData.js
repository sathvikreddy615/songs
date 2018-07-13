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
            let editDeleteBtnParentId = event.target.parentNode.id;

            JSONMethods.getSongs(editDeleteBtnParentId)
                .then(data => {
                    data.forEach(i => {
                        if (i.id === +editDeleteBtnParentId) {
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
