import fs from "fs";
import path from "path";

const FILES = [
    "index.html",
    "app.js",
    "style.css",
    "manifest.json"
];

export async function exportPWA() {

    console.log("");
    console.log("PWA export...");

    fs.mkdirSync("docs", { recursive: true });

    for (const file of FILES) {

        const source = path.join("templates", file);
        const target = path.join("docs", file);

        if (!fs.existsSync(source)) {
            throw new Error(`Hiányzik: templates/${file}`);
        }

        fs.copyFileSync(source, target);

        console.log(`✓ ${file}`);

    }

    console.log("");
    console.log("PWA export kész.");

}