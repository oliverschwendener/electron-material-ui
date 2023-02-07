/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    appId: "com.electron.materialui",
    productName: "Electron Material UI",
    directories: {
        output: "dist",
        buildResources: "build_resources",
    },
    files: ["packages/**/dist/**"],
    extraMetadata: {
        version: process.env.VITE_APP_VERSION,
    },
    mac: {
        icon: "build_resources/icon.png",
        hardenedRuntime: true,
        gatekeeperAssess: false,
        target: [
            {
                target: "dmg",
                arch: "universal",
            },
            {
                target: "zip",
                arch: "universal",
            },
        ],
    },
    win: {
        icon: "build_resources/icon.ico",
        target: [
            {
                target: "msi",
            },
            {
                target: "nsis",
            },
            {
                target: "zip",
            },
        ],
    },
    linux: {
        category: "Utility",
        target: [
            {
                target: "AppImage",
            },
            {
                target: "deb",
            },
            {
                target: "zip",
            },
        ],
    },
};

module.exports = config;
