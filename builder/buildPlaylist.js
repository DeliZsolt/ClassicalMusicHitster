import fs from "fs";

export async function buildPlaylist(playlistUrl) {

    const playlist = {
        title: "Classical Music Hitster",
        playlistUrl
    };

    const text =
`const playlist = ${JSON.stringify(playlist, null, 4)};

export default playlist;
`;

    fs.writeFileSync(
        "docs/playlist.js",
        text,
        "utf8"
    );

    console.log("✅ docs/playlist.js elkészült.");

}