
//require("./settings")
const fs = require('fs')
const chalk = require('chalk')

const spin = require('spinnies')
const { color, bgcolor } = require("./color")
global.Jimp = require("jimp")

const spinner = { 
"interval": 500,
"frames": [
"🅘",
"🅡",
"🅕",
"🅐",
"🅝",
"🅑", 
"🅐", 
"🅢",
"🅔"
]}

let globalSpinner;

const getGlobalSpinner = (disableSpins = false) => {
if (!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
spins.add(id, {text: text})
}

const info = (id, text) => {
spins.update(id, {text: text})
}

const success = (id, text) => {
spins.succeed(id, {text: text})
}

const close = (id, text) => {
spins.fail(id, {text: text})
}

