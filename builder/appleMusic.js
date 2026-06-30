import { readPlaylist } from "./readPlaylist.js";
import { buildTracks } from "./buildTracks.js";
import { buildPlaylist } from "./buildPlaylist.js";
import { exportPWA } from "./exportPWA.js";

export async function buildAppleMusic(playlistUrl) {

    const { responses } = readPlaylist();

    const tracks = await buildTracks(responses);

    await buildPlaylist(
        responses,
        playlistUrl,
        tracks.length
    );

    await exportPWA();

}