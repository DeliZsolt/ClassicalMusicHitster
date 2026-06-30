import fs from "fs";

export async function buildTracks(responses) {

    console.log("tracks.js készítése...");

    const map = new Map();

    for (const response of responses) {

        if (!response.json) continue;

        if (!Array.isArray(response.json.data)) continue;

        for (const item of response.json.data) {

            // Playlist első válasza
            if (
                item.type === "playlists" &&
                item.relationships?.tracks?.data
            ) {

                for (const song of item.relationships.tracks.data) {

                    if (song.type !== "songs") continue;

                    if (!map.has(song.id)) {
                        map.set(song.id, song);
                    }

                }

            }

            // Offset=100 válaszok
            if (item.type === "songs") {

                if (!map.has(item.id)) {
                    map.set(item.id, item);
                }

            }

        }

    }

    const songs = [...map.values()];

    console.log(`${songs.length} track megtalálva.`);

    const tracks = songs.map((song, index) => {

        const a = song.attributes;

        return {
    id: index + 1,
    title: a.name,
    artist: a.artistName,
    composer: a.composerName ?? "",
    year: a.releaseDate
        ? a.releaseDate.substring(0,4)
        : "",
    album: a.albumName,

    artwork:
        a.artwork?.url
            ?.replace("{w}", "600")
            ?.replace("{h}", "600") ?? "",

    appleMusicUrl: `https://music.apple.com/hu/song/${song.id}`
};

    });

    fs.mkdirSync("docs", { recursive: true });

    const text =
`const tracks = ${JSON.stringify(tracks, null, 4)};

export default tracks;
`;

        fs.writeFileSync(
        "docs/tracks.js",
        text,
        "utf8"
    );

    console.log("");
    console.log("✅ docs/tracks.js elkészült.");

    return tracks;

}