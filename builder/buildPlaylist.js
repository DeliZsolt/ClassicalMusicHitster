import fs from "fs";

export async function buildPlaylist(responses, playlistUrl, trackCount) {

    let title = "Hitster";
    let artwork = "";

    for (const response of responses) {

        if (!response.json?.data) continue;

        for (const item of response.json.data) {

            if (item.type !== "playlists") continue;

            title = item.attributes?.name ?? "Hitster";

            artwork =
                item.attributes?.artwork?.url
                    ?.replace("{w}", "600")
                    ?.replace("{h}", "600") ?? "";

            

            break;

        }

    }

    const playlist = {
        title,
        playlistUrl,
        artwork,
        trackCount
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