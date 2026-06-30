import fs from "fs";
import path from "path";

export function readPlaylist() {

    const jsonPath = path.resolve("networkResponses.json");

    if (!fs.existsSync(jsonPath)) {
        throw new Error("Nem találom a networkResponses.json fájlt.");
    }

    const responses = JSON.parse(
        fs.readFileSync(jsonPath, "utf8")
    );

    let playlist = null;

    for (const response of responses) {

        if (!response.json?.data) continue;

        for (const item of response.json.data) {

            if (item.type === "playlists") {

                playlist = item;

                break;

            }

        }

        if (playlist) break;

    }

    if (!playlist) {
        throw new Error("Nem találom a playlist adatait.");
    }

    return {
        responses,
        playlist
    };

}