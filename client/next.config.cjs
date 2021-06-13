const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([ withSass, withImages, withFonts, withCSS], {
    assetPrefix: "",
});