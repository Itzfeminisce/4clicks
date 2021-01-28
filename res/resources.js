const strings = require("./values/strings");
const colors = require("./values/colors");
const styles = require("./values/styles");


const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const fs = require("fs");





module.exports = {
    strings: strings,
    colors: colors,
    styles: styles,

    modules: {
        express: express,
        path: path,
        bodyParser: bodyParser,
        fs:fs
    }
}