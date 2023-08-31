const path = require("path");
const resolve = (pathname) => path.resolve(__dirname, pathname);
const CracoLessPlugin = require("craco-less");
module.exports = {
    // less
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],

    // webpack

    webpack: {
        alias: {
            "@": resolve("src"),
            components: resolve("src/components"),
            utils: resolve("src/utils"),
        },
    },
};
