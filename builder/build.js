import readline from "readline";
import { buildAppleMusic } from "./appleMusic.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("");
console.log("🎼 Hitster Builder");
console.log("---------------------------");
console.log("");

rl.question("Apple Music playlist URL: ", async (playlistUrl) => {

    try {

        console.log("");
        console.log("Playlist feldolgozása...");
        console.log("");

        await buildAppleMusic(playlistUrl);

        console.log("");
        console.log("✅ Kész!");
        console.log("");

    } catch (err) {

        console.error("");
        console.error("❌ Hiba:");
        console.error(err.message);

    }

    rl.close();

});