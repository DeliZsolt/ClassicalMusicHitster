import fs from "fs";

export async function buildVersion() {

    const now = new Date();

    const build =
        now.getFullYear() + "." +
        String(now.getMonth() + 1).padStart(2, "0") + "." +
        String(now.getDate()).padStart(2, "0") + "-" +
        String(now.getHours()).padStart(2, "0") +
        String(now.getMinutes()).padStart(2, "0");

    const version = {
        build,
        timestamp: Date.now()
    };

    const text =
`const version = ${JSON.stringify(version, null, 4)};

export default version;
`;

    fs.writeFileSync(
        "docs/version.js",
        text,
        "utf8"
    );

    console.log("✅ docs/version.js elkészült.");

}