
const $ = require("jquery");

const JSONMethods = Object.create({}, {
    getSongs: {
        value: () => {
            return $.ajax("http://localhost:3000/songs");
        }
    },
    postSongs: {
        value: (newSong, newArtist, newAlbum) => {
            return $.ajax({
                url: "http://localhost:3000/songs",
                method: "POST",
                data: {
                    song: newSong,
                    artist: newArtist,
                    album: newAlbum
                }
            })
        }
    },
    editSongs: {
        value: (id, editSong, editArtist, editAlbum) => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "PUT",
                data: {
                    song: editSong,
                    artist: editArtist,
                    album: editAlbum
                }
            })
        }
    },
    archiveSongs: {
        value: id => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "PATCH",
                data: {
                    purchased: true
                }
            })
        }
    },
    deleteSongs: {
        value: id => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = JSONMethods; // exports to postFormValue.js,
