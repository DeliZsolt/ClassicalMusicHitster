import tracks from "./tracks.js";

const input = document.getElementById("trackNumber");
const searchButton = document.getElementById("searchButton");
const playButton = document.getElementById("playButton");

const result = document.getElementById("result");
const error = document.getElementById("error");

const title = document.getElementById("title");
const composer = document.getElementById("composer");
const artist = document.getElementById("artist");
const year = document.getElementById("year");

let currentTrack = null;

function showError(message) {

    error.textContent = message;
    error.classList.remove("hidden");

    result.classList.add("hidden");

}

function hideError() {

    error.textContent = "";
    error.classList.add("hidden");

}

function searchTrack() {

    hideError();

    const id = Number(input.value);

    if (!Number.isInteger(id) || id < 1 || id > tracks.length) {

        showError(`Adj meg egy számot 1 és ${tracks.length} között!`);

        return;

    }

    const track = tracks.find(t => t.id === id);

    if (!track) {

        showError("Nem található.");

        return;

    }

    currentTrack = track;

    title.textContent = track.title;
    composer.textContent = track.composer;
    artist.textContent = track.artist;
    year.textContent = track.year;

    result.classList.remove("hidden");

}

function openAppleMusic() {

    if (!currentTrack) return;

    window.location.href = currentTrack.appleMusicUrl;

}

searchButton.addEventListener("click", searchTrack);

playButton.addEventListener("click", openAppleMusic);

input.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        searchTrack();

    }

});

window.addEventListener("load", () => {

    input.focus();

});