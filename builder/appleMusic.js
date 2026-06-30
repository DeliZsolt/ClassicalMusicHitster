import { buildTracks } from "./buildTracks.js";
import { buildPlaylist } from "./buildPlaylist.js";
import { exportPWA } from "./exportPWA.js";

export async function buildAppleMusic(playlistUrl) {

    await buildTracks();

    await buildPlaylist(playlistUrl);

    await exportPWA();

}