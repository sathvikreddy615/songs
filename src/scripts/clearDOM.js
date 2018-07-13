// this file keeps DOM items from repeating or duplicating inside of a container (like magic!)

const clearDOM = (containerID) => {
    const container = document.querySelector(containerID);
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild)
    };
};

module.exports = clearDOM; // exports to getNewDataAndPrintCard.js and getSongData.js
