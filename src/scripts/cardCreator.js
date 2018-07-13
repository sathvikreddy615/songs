// this file creates a card for data to be printed and handles click events

const GetSongData = require("./getSongData");
const RemovePurchasedSong = require("./removePurchasedSong");
const DeleteCardData = require("./deleteCardData"); // import from deleteCardData.js

const CardCreator = Object.create({}, {
    createCard: {
        value: (songId, songName, artistName, albumName) => {
            const cardContainer = document.querySelector("#cardContainer");

            const card = document.createElement("div");
            card.setAttribute("class", "card");
            card.id = songId;

            const songEl = document.createElement("a");
            songEl.id = "editBtn";
            songEl.textContent = songName;
            songEl.href = "#";
            songEl.setAttribute("class", "songName");
            songEl.addEventListener("click", GetSongData.getSongs);

            const artistEl = document.createElement("p");
            artistEl.textContent = artistName;
            artistEl.setAttribute("class", "artistName");

            const albumEl = document.createElement("p");
            albumEl.textContent = albumName;
            albumEl.setAttribute("class", "albumName");

            const checkBox = document.createElement("input");
            checkBox.setAttribute("class", "checkBox");
            checkBox.type = "checkbox";
            checkBox.addEventListener("click", RemovePurchasedSong.songPurchased);

            let deleteBtn = document.createElement("button");
            deleteBtn.id = "deleteBtn";
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", DeleteCardData.deleteSongFromCard);

            card.appendChild(songEl);
            card.appendChild(artistEl);
            card.appendChild(albumEl);
            card.appendChild(checkBox);
            card.appendChild(deleteBtn);

            cardContainer.appendChild(card);
        }
    }
})

module.exports = CardCreator; // exports to getNewDataAndPrintCard.js (uses data to print card) and cardEventHandler.js (gives access for editBtn)