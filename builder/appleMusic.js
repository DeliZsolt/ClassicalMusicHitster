import { buildTracks } from "./buildTracks.js";
import { exportPWA } from "./exportPWA.js";

export async function buildAppleMusic() {

    await buildTracks();

    await exportPWA();

}