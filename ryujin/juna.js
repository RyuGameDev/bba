//Pairingnya enc rek takut dijual murah sama anak jb😜

process.on("uncaughtException", console.error);
const { default: AiraConnect, useMultiFileAuthState, DisconnectReason, jidNormalizedUser, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay } = require("@adiwajshing/baileys")
const pino = require("pino");
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const chalk = require("chalk");
const FileType = require('file-type');
const path = require("path");
const fetch = require("node-fetch");
const axios = require("axios");
const readline = require("readline");
const PhoneNumber = require("awesome-phonenumber");
const {imageToWebp,videoToWebp,writeExifImg,writeExifVid} = require("./lib/exif");
const express = require("express");
const question = (text) => {
const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
return new Promise((resolve) => {
  rl.question(text, resolve);
});
};
let app = express();
const { createServer } = require("http");
let server = createServer(app);
let PORT = 3000 || 8000 || 8080;
const { isSetWelcome, getTextSetWelcome } = require("./lib/setwelcome");
const { isSetLeft, getTextSetLeft } = require("./lib/setleft");
let set_welcome_db = JSON.parse(fs.readFileSync("./database/set_welcome.json"));
let set_left_db = JSON.parse(fs.readFileSync("./database/set_left.json"));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let _welcome = JSON.parse(fs.readFileSync("./database/welcome.json"));
let _left = JSON.parse(fs.readFileSync("./database/left.json"));
let antidelete = JSON.parse(fs.readFileSync('./database/antidelete.json'));
let antionce = JSON.parse(fs.readFileSync("./database/antionce.json"));
const startAira = async () => {
global.db = JSON.parse(fs.readFileSync('./database/database.json'));
if (global.db) {
  global.db.data = {
    'sticker': {},
    'database': {},
    'game': {},
    'others': {},
    'users': {},
    'chats': {},
    'settings': {},
    'anonymous': {},
    ...(global.db.data || {})
  };
}
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': 'silent',
    'stream': "store"
  })
});
const {
  state: state,
  saveCreds: saveCreds
} = await useMultiFileAuthState('./' + setting.sessionName);
function nocache(module, cb = () => {}) {
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
const Aira = AiraConnect({
  'logger': pino({
    'level': "silent"
  }),
  'printQRInTerminal': false,
  'auth': state,
  'browser': ["Chrome (Linux)", '', '']
});
if (true && !Aira.authState.creds.registered) {
  const phoneNumber = await question("Masukan Nomer Yang Aktif Awali Dengan 62:\n");
  const code = await Aira.requestPairingCode(phoneNumber.trim());
  console.log("Pairing code: " + code);
}
require("./aira.ryujin.js");
nocache("./aira.ryujin.js", module => console.log(chalk.greenBright("[ UPDATED ]") + new Date() + chalk.cyanBright(" \"" + module + "\" Telah diupdate!")));
if (Aira.user && Aira.user.id) {
  Aira.user.jid = jidNormalizedUser(Aira.user.id);
}
Aira.ev.on("connection.update", async update => {
  const {
    connection: connection,
    lastDisconnect: lastDisconnect,
    qr: qr
  } = update;
  if (qr) {
    app.use(async (req, res) => {
      res.setHeader("content-type", "image/png");
      res.end(await toBuffer(qr));
    });
    app.use(express['static'](path.join(__dirname, "views")));
    server.listen(PORT, () => {
      console.log("App listened on port", PORT);
    });
  }
  if (connection === "close") {
    let reason = new Boom(lastDisconnect?.["error"])?.["output"]["statusCode"];
    if (reason === DisconnectReason.badSession) {
      console.log("Bad Session File, Please Delete Session and Scan Again");
      Aira.logout();
    } else {
      if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startAira();
      } else {
        if (reason === DisconnectReason.connectionLost) {
          console.log("Connection Lost from Server, reconnecting...");
          startAira();
        } else {
          if (reason === DisconnectReason.connectionReplaced) {
            console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
            Aira.logout();
          } else {
            if (reason === DisconnectReason.loggedOut) {
              console.log("Device Logged Out, Please Scan Again And Run.");
              Aira.logout();
            } else {
              if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                startAira();
              } else {
                if (reason === DisconnectReason.timedOut) {
                  console.log("junaection TimedOut, Reconnecting...");
                  startAira();
                } else {
                  Aira.end("Unknown DisconnectReason: " + reason + '|' + connection);
                }
              }
            }
          }
        }
      }
    }
  }
  if (update.connection == "open" || update.receivedPendingNotifications == 'true') {
    console.log("Connect, welcome owner!");
    console.log("Connected to = " + JSON.stringify(Aira.user, null, 2));
  }
});
store.bind(Aira.ev);
Aira.ev.on("call", async (celled) => {
  let koloi = setting.anticall;
  if (!koloi) {
    return;
  }
  console.log(celled);
  for (let kopel of celled) {
    if (kopel.isGroup == false) {
      if (kopel.status == 'offer') {
        let nomor = await Aira.sendTextWithMentions(kopel.from, '*' + Aira.user.name + "* tidak bisa menerima panggilan " + (kopel.isVideo ? 'video' : 'suara') + ". Maaf @" + kopel.from.split('@')[0x0] + " kamu akan diblokir. Silahkan hubungi Owner membuka blok !");
        Aira.sendContact(kopel.from, setting.ownerNumber.map(i => i.split('@')[0]), nomor);
        await sleep(8000);
        await Aira.updateBlockStatus(kopel.from, "block");
      }
    }
  }
});
Aira.ev.on('messages.upsert', async (chatUpdate) => {
  try {
    for (let mek of chatUpdate.messages) {
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!Aira['public'] && !mek.key.fromMe && chatUpdate.type === "notify") {
        return;
      }
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 0x10) {
        return;
      }
      const m = smsg(Aira, mek, store);
      require("./aira.ryujin")(Aira, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce);
    }
  } catch (err) {
    console.log(err);
  }
});
Aira.ev.on('group-participants.update', async (anu) => {
  const {
    welcome: welcome
  } = require("./lib/welcome");
  const iswel = _welcome.includes(anu.id);
  const isleft = _left.includes(anu.id);
  welcome(iswel, isleft, Aira, anu);
});
Aira.ev.on("message.delete", async (anu) => {
  const {
    aDelete: aDelete
  } = require("./lib/welcome");
  aDelete(setting, Aira, anu);
});
Aira.ev.on('viewOnceMessage', async (anu) => {
  const {
    oneTime: oneTime
  } = require("./lib/welcome");
  oneTime(setting, Aira, anu);
});
Aira.ev.process(async (events) => {
  if (events["presence.update"]) {
    await Aira.sendPresenceUpdate("available");
  }
  if (events['messages.upsert']) {
    const upsert = events['messages.upsert'];
    for (let msg of upsert.messages) {
      if (msg.key.remoteJid === "status@broadcast") {
        if (msg.message?.["protocolMessage"]) {
          return;
        }
        await delay(3000);
        await Aira.readMessages([msg.key]);
      }
    }
  }
  if (events["creds.update"]) {
    await saveCreds();
  }
});
Aira.decodeJid = (jid) => {
  if (!jid) return jid
  if (/:\d+@/gi.test(jid)) {
  let decode = jidDecode(jid) || {}
  return decode.user && decode.server && decode.user + '@' + decode.server || jid
  } else return jid
  }
  
  Aira.ev.on('contacts.update', update => {
  for (let contact of update) {
  let id = Aira.decodeJid(contact.id)
  if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
  }
  })
  Aira.sendStickerFromUrl = async(from, PATH, quoted, options = {}) => {
    let { writeExif } = require('./lib/sticker')
    let types = await Aira.getFile(PATH, true)
    let { filename, size, ext, mime, data } = types
    let type = '', mimetype = mime, pathFile = filename
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: options.packname ? options.packname : 'Airaa Bot', author: options.author ? options.author : '+6285727631507', categories: options.categories ? options.categories : [] })
    await fs.promises.unlink(filename)
    await Aira.sendMessage(from, {sticker: {url: pathFile}}, {quoted})
    return fs.promises.unlink(pathFile)
    }
    Aira.vidToSticker = async(jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
      let buffer
      if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options)
      } else {
      buffer = await videoToWebp(buff)
      }
      await Aira.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
      return buffer
      }
      
/*Aira.sendImageAsSticker = async (_0x21adf6, _0x7183, _0x3a05bc, _0x5c5056 = {}) => {
  let _0x158b3e = Buffer.isBuffer(_0x7183) ? _0x7183 : /^data:.*?\/.*?;base64,/i.test(_0x7183) ? Buffer.from(_0x7183.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x7183) ? await await getBuffer(_0x7183) : fs.existsSync(_0x7183) ? fs.readFileSync(_0x7183) : Buffer.alloc(0x0);
  let _0x2bf3ff;
  if (_0x5c5056 && (_0x5c5056.packname || _0x5c5056.author)) {
    _0x2bf3ff = await writeExifImg(_0x158b3e, _0x5c5056);
  } else {
    _0x2bf3ff = await imageToWebp(_0x158b3e);
  }
  await Aira.sendMessage(_0x21adf6, {
    'sticker': {
      'url': _0x2bf3ff
    },
    ..._0x5c5056
  }, {
    'quoted': _0x3a05bc
  });
  return _0x2bf3ff;
};*/
Aira.getName = (jid, withoutContact = false) => {
  id = Aira.decodeJid(jid)
  withoutContact = Aira.withoutContact || withoutContact 
  let v
  if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
  v = store.contacts[id] || {}
  if (!(v.name || v.subject)) v = Aira.groupMetadata(id) || {}
  resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
  })
  else v = id === '0@s.whatsapp.net' ? {
  id,
  name: 'WhatsApp'
  } : id === Aira.decodeJid(Aira.user.id) ?
  Aira.user :
  (store.contacts[id] || {})
  return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
  }
  
  Aira.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    let list = []
    for (let i of kon) {
    list.push({
    displayName: await Aira.getName(i + '@s.whatsapp.net'),
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Aira.getName(i + '@s.whatsapp.net')}\nFN:${await Aira.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:ryudev.id@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://ryudev-id.netlify.app\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Aku Jawa;;;;\nitem4.X-ABLabel:100% Jawir Asemli\nEND:VCARD`
    })
    }
    Aira.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
  }
  
Aira.setStatus = _0x8cffe8 => {
  Aira.query({
    'tag': 'iq',
    'attrs': {
      'to': "@s.whatsapp.net",
      'type': "set",
      'xmlns': "status"
    },
    'content': [{
      'tag': "status",
      'attrs': {},
      'content': Buffer.from(_0x8cffe8, 'utf-8')
    }]
  });
  return _0x8cffe8;
};
Aira.prefa = "apasih";
Aira['public'] = true;
Aira.serializeM = _0x5bee72 => smsg(Aira, _0x5bee72, store);
Aira.reSize = async (_0x1f47db, _0xf511ba, _0x2276c3) => {
  let _0x4f0585 = require("jimp");
  var _0x502704 = await _0x4f0585.read(_0x1f47db);
  var _0x3494d9 = await _0x502704.resize(_0xf511ba, _0x2276c3).getBufferAsync(_0x4f0585.MIME_JPEG);
  return _0x3494d9;
};
Aira.sendButLoc = async (_0x24ad93, _0x12f920 = '', _0x31aa84 = '', _0x3ef84f, _0x453b8c = [], _0x20997f = [], _0x60a4f9 = {}) => {
  let _0x384a8e = await Aira.reSize(_0x3ef84f, 0x12c, 0x96);
  const _0x5b9816 = {
    'location': {
      'jpegThumbnail': _0x384a8e
    },
    'caption': _0x12f920,
    'footer': _0x31aa84,
    'buttons': _0x453b8c,
    'headerType': "LOCATION"
  };
  Aira.sendMessage(_0x24ad93, _0x5b9816, _0x60a4f9);
};
Aira.send5ButLoc = async (_0x394abe, _0x3d99c9 = '', _0x43fc73 = '', _0x4c52cd, _0x3e35fb = [], _0x54332b = {}) => {
  let _0x25cf9f = await Aira.reSize(_0x4c52cd, 0x12c, 0x96);
  Aira.sendMessage(_0x394abe, {
    'location': {
      'jpegThumbnail': _0x25cf9f
    },
    'caption': _0x3d99c9,
    'footer': _0x43fc73,
    'templateButtons': _0x3e35fb,
    ..._0x54332b
  });
};
Aira.send5ButImg = async (_0x4b1cdb, _0x32cf71 = '', _0x3ca396 = '', _0x499a2a, _0x2bb82d = [], _0x1501b9, _0x185c83 = {}) => {
  Aira.sendMessage(_0x4b1cdb, {
    'image': _0x499a2a,
    'caption': _0x32cf71,
    'footer': _0x3ca396,
    'viewOnce': true,
    'templateButtons': _0x2bb82d,
    'mentions': _0x1501b9 ? _0x1501b9 : [],
    ..._0x185c83
  });
};
Aira.sendButImage = async (_0x4dd21b, _0x555391, _0x3f8000 = [], _0x3f1a85 = '', _0x2eba27 = '', _0x4796da = [], _0x5d6bdb) => {
  let _0x2b454f = await getBuffer(_0x555391);
  const _0xeaa8bd = {
    'image': _0x2b454f,
    'caption': _0x3f1a85,
    'footer': _0x2eba27,
    'buttons': _0x3f8000,
    'headerType': "IMAGE",
    'mentions': _0x4796da
  };
  Aira.sendMessage(_0x4dd21b, _0xeaa8bd, _0x5d6bdb);
};
Aira.sendButMessage = async (_0x5c8df6, _0xfde286 = '', _0x1eb896 = '', _0x1b322c = [], _0x32ff06 = {}) => {
  const _0x26e035 = {
    'text': _0xfde286,
    'footer': _0x1eb896,
    'buttons': _0x1b322c,
    'headerType': 0x1
  };
  Aira.sendMessage(_0x5c8df6, _0x26e035, _0x32ff06);
};
Aira.sendFile = async (_0x5bc95c, _0x5a7362, _0x1ff1ea = '', _0x1fdca5 = '', _0x5886d4, _0x2aea94 = false, _0x4dffb1 = {}) => {
  let _0x116477 = await Aira.getFile(_0x5a7362, true);
  let {
    res: _0x4626ca,
    data: _0x22e765,
    filename: _0x28672e
  } = _0x116477;
  if (_0x4626ca && _0x4626ca.status !== 0xc8 || _0x22e765.length <= 0x10000) {
    try {
      throw {
        'json': JSON.parse(_0x22e765.toString())
      };
    } catch (_0x22763e) {
      if (_0x22763e.json) {
        throw _0x22763e.json;
      }
    }
  }
  let _0x3c234e = {
    'filename': _0x1ff1ea
  };
  if (_0x5886d4) {
    _0x3c234e.quoted = _0x5886d4;
  }
  if (!_0x116477) {
    _0x4dffb1.asDocument = true;
  }
  let _0x51c1a2 = '';
  let _0x45f342 = _0x116477.mime;
  let _0x1614d7;
  if (/webp/.test(_0x116477.mime) || /image/.test(_0x116477.mime) && _0x4dffb1.asSticker) {
    _0x51c1a2 = "sticker";
  } else {
    if (/image/.test(_0x116477.mime) || /webp/.test(_0x116477.mime) && _0x4dffb1.asImage) {
      _0x51c1a2 = "image";
    } else {
      if (/video/.test(_0x116477.mime)) {
        _0x51c1a2 = "video";
      } else {
        if (/audio/.test(_0x116477.mime)) {
          _0x1614d7 = await toAudio(_0x22e765, _0x116477.ext);
          _0x22e765 = _0x1614d7.data;
          _0x28672e = _0x1614d7.filename;
          _0x51c1a2 = "audio";
          _0x45f342 = "audio/ogg; codecs=opus";
        } else {
          _0x51c1a2 = "document";
        }
      }
    }
  }
  if (_0x4dffb1.asDocument) {
    _0x51c1a2 = "document";
  }
  delete _0x4dffb1.asSticker;
  delete _0x4dffb1.asLocation;
  delete _0x4dffb1.asVideo;
  delete _0x4dffb1.asDocument;
  delete _0x4dffb1.asImage;
  let _0xa83f51 = {
    ..._0x4dffb1,
    'caption': _0x1fdca5,
    'ptt': _0x2aea94,
    [_0x51c1a2]: {
      'url': _0x28672e
    },
    'mimetype': _0x45f342,
    'fileName': _0x1ff1ea || _0x28672e.split('/').pop()
  };
  let _0x1375db;
  try {
    _0x1375db = await Aira.sendMessage(_0x5bc95c, _0xa83f51, {
      ..._0x3c234e,
      ..._0x4dffb1
    });
  } catch (_0x4e96d0) {
    _0x1375db = null;
  } finally {
    if (!_0x1375db) {
      _0x1375db = await Aira.sendMessage(_0x5bc95c, {
        ..._0xa83f51,
        [_0x51c1a2]: _0x22e765
      }, {
        ..._0x3c234e,
        ..._0x4dffb1
      });
    }
    _0x22e765 = null;
    return _0x1375db;
  }
};
Aira.sendFileUrl = async (_0x4c5f96, _0x25badc, _0x1ff0d9, _0x1a4873, _0x598269 = {}) => {
  let _0x295dc5 = '';
  let _0x1fcc94 = await axios.head(_0x25badc);
  _0x295dc5 = _0x1fcc94.headers["content-type"];
  if (_0x295dc5.split('/')[0x1] === "gif") {
    return Aira.sendMessage(_0x4c5f96, {
      'video': await getBuffer(_0x25badc),
      'caption': _0x1ff0d9,
      'gifPlayback': true,
      ..._0x598269
    }, {
      'quoted': _0x1a4873,
      ..._0x598269
    });
  }
  if (_0x295dc5 === "application/pdf") {
    return Aira.sendMessage(_0x4c5f96, {
      'document': await getBuffer(_0x25badc),
      'mimetype': "application/pdf",
      'caption': _0x1ff0d9,
      ..._0x598269
    }, {
      'quoted': _0x1a4873,
      ..._0x598269
    });
  }
  if (_0x295dc5.split('/')[0x0] === "image") {
    return Aira.sendMessage(_0x4c5f96, {
      'image': await getBuffer(_0x25badc),
      'caption': _0x1ff0d9,
      ..._0x598269
    }, {
      'quoted': _0x1a4873,
      ..._0x598269
    });
  }
  if (_0x295dc5.split('/')[0x0] === "video") {
    return Aira.sendMessage(_0x4c5f96, {
      'video': await getBuffer(_0x25badc),
      'caption': _0x1ff0d9,
      'mimetype': "video/mp4",
      ..._0x598269
    }, {
      'quoted': _0x1a4873,
      ..._0x598269
    });
  }
  if (_0x295dc5.split('/')[0x0] === "audio") {
    return Aira.sendMessage(_0x4c5f96, {
      'audio': await getBuffer(_0x25badc),
      'caption': _0x1ff0d9,
      'mimetype': "audio/mpeg",
      ..._0x598269
    }, {
      'quoted': _0x1a4873,
      ..._0x598269
    });
  }
};
Aira.sendTextWithMentions = async (_0x3d1976, _0x2daa0f, _0x4ad4db, _0x5aaaf1 = {}) => Aira.sendMessage(_0x3d1976, {
  'text': _0x2daa0f,
  'mentions': [..._0x2daa0f.matchAll(/@(\d{0,16})/g)].map(_0x4d8222 => _0x4d8222[0x1] + "@s.whatsapp.net"),
  ..._0x5aaaf1
}, {
  'quoted': _0x4ad4db
});
Aira.getFile = async (_0x1ddda7, _0x2bd26f) => {
  let _0x33fe88;
  let _0x40c301;
  let _0x23528b = Buffer.isBuffer(_0x1ddda7) ? _0x1ddda7 : /^data:.*?\/.*?;base64,/i.test(_0x1ddda7) ? Buffer.from(_0x1ddda7.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x1ddda7) ? await (_0x33fe88 = await fetch(_0x1ddda7)).buffer() : fs.existsSync(_0x1ddda7) ? (_0x40c301 = _0x1ddda7, fs.readFileSync(_0x1ddda7)) : typeof _0x1ddda7 === "string" ? _0x1ddda7 : Buffer.alloc(0x0);
  if (!Buffer.isBuffer(_0x23528b)) {
    throw new TypeError("Result is not a buffer");
  }
  let _0x82acf9 = (await FileType.fromBuffer(_0x23528b)) || {
    'mime': 'application/octet-stream',
    'ext': ".bin"
  };
  if (_0x23528b && _0x2bd26f && !_0x40c301) {
    _0x40c301 = path.join(__dirname, "./sticker/" + new Date() * 0x1 + '.' + _0x82acf9.ext);
    await fs.promises.writeFile(_0x40c301, _0x23528b);
  }
  return {
    'res': _0x33fe88,
    'filename': _0x40c301,
    ..._0x82acf9,
    'data': _0x23528b
  };
};
Aira.sendStickerFromUrl = async (_0x4c3eee, _0xd1a583, _0x24a866, _0xc8c291 = {}) => {
  let {
    writeExif: _0x5edf24
  } = require("./lib/sticker");
  let _0x18ade9 = _0x3ec02c;
  let _0x8bf7b8 = {
    'mimetype': _0x51ecf4,
    'data': _0x253b82
  };
  _0x18ade9 = await _0x5edf24(_0x8bf7b8, {
    'packname': _0xc8c291.packname ? _0xc8c291.packname : "Junaa Bot",
    'author': _0xc8c291.author ? _0xc8c291.author : "+6285727631507",
    'categories': _0xc8c291.categories ? _0xc8c291.categories : []
  });
  await fs.promises.unlink(_0x3ec02c);
  await Aira.sendMessage(_0x4c3eee, {
    'sticker': {
      'url': _0x18ade9
    }
  }, {
    'quoted': _0x24a866
  });
  return fs.promises.unlink(_0x18ade9);
};
Aira.imgToSticker = async (_0x375281, _0x22cbc0, _0x59cc00, _0x260983 = {}) => {
  let _0x326169 = Buffer.isBuffer(_0x22cbc0) ? _0x22cbc0 : /^data:.*?\/.*?;base64,/i.test(_0x22cbc0) ? Buffer.from(_0x22cbc0.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x22cbc0) ? await await fetchBuffer(_0x22cbc0) : fs.existsSync(_0x22cbc0) ? fs.readFileSync(_0x22cbc0) : Buffer.alloc(0x0);
  let _0x14f173;
  if (_0x260983 && (_0x260983.packname || _0x260983.author)) {
    _0x14f173 = await writeExifImg(_0x326169, _0x260983);
  } else {
    _0x14f173 = await imageToWebp(_0x326169);
  }
  await Aira.sendMessage(_0x375281, {
    'sticker': {
      'url': _0x14f173
    },
    ..._0x260983
  }, {
    'quoted': _0x59cc00
  });
  return _0x14f173;
};
Aira.vidToSticker = async (_0x19365c, _0xd9a258, _0x3fd681, _0x28fc04 = {}) => {
  let _0x5c0df4 = Buffer.isBuffer(_0xd9a258) ? _0xd9a258 : /^data:.*?\/.*?;base64,/i.test(_0xd9a258) ? Buffer.from(_0xd9a258.split`,`[0x1], "base64") : /^https?:\/\//.test(_0xd9a258) ? await await fetchBuffer(_0xd9a258) : fs.existsSync(_0xd9a258) ? fs.readFileSync(_0xd9a258) : Buffer.alloc(0x0);
  let _0x42298a;
  if (_0x28fc04 && (_0x28fc04.packname || _0x28fc04.author)) {
    _0x42298a = await writeExifVid(_0x5c0df4, _0x28fc04);
  } else {
    _0x42298a = await videoToWebp(_0x5c0df4);
  }
  await Aira.sendMessage(_0x19365c, {
    'sticker': {
      'url': _0x42298a
    },
    ..._0x28fc04
  }, {
    'quoted': _0x3fd681
  });
  return _0x42298a;
};
Aira.sendImage = async (_0x446f59, _0x37d22d, _0x146789 = '', _0x3e93f7 = '', _0x46c3e1) => {
  let _0x43b6a5 = Buffer.isBuffer(_0x37d22d) ? _0x37d22d : /^data:.*?\/.*?;base64,/i.test(_0x37d22d) ? Buffer.from(_0x37d22d.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x37d22d) ? await (await fetch(_0x37d22d)).buffer() : fs.existsSync(_0x37d22d) ? fs.readFileSync(_0x37d22d) : Buffer.alloc(0x0);
  return await Aira.sendMessage(_0x446f59, {
    'image': _0x43b6a5,
    'caption': _0x146789,
    ..._0x46c3e1
  }, {
    'quoted': _0x3e93f7
  });
};
Aira.downloadAndSaveMediaMessage = async (_0x1bef8c, _0x5d4be1, _0x308dd8 = true) => {
  let _0x1db038 = _0x1bef8c.msg ? _0x1bef8c.msg : _0x1bef8c;
  let _0x54bab7 = (_0x1bef8c.msg || _0x1bef8c).mimetype || '';
  let _0x4dc3ff = _0x1bef8c.mtype ? _0x1bef8c.mtype.replace(/Message/gi, '') : _0x54bab7.split('/')[0x0];
  const _0x8acdd5 = await downloadContentFromMessage(_0x1db038, _0x4dc3ff);
  let _0xeaa67c = Buffer.from([]);
  for await (const _0x5ea0d9 of _0x8acdd5) {
    _0xeaa67c = Buffer.concat([_0xeaa67c, _0x5ea0d9]);
  }
  let _0x1af2c1 = await FileType.fromBuffer(_0xeaa67c);
  let _0x1a468a = _0x308dd8 ? "./sticker/" + _0x5d4be1 + '.' + _0x1af2c1.ext : './sticker/' + _0x5d4be1;
  await fs.writeFileSync(_0x1a468a, _0xeaa67c);
  return _0x1a468a;
};
Aira.downloadMediaMessage = async _0x1addaa => {
  let _0x1c5629 = (_0x1addaa.msg || _0x1addaa).mimetype || '';
  let _0x56bdb1 = _0x1addaa.mtype ? _0x1addaa.mtype.replace(/Message/gi, '') : _0x1c5629.split('/')[0x0];
  const _0x253cf0 = await downloadContentFromMessage(_0x1addaa, _0x56bdb1);
  let _0xb7c72b = Buffer.from([]);
  for await (const _0x3b27c4 of _0x253cf0) {
    _0xb7c72b = Buffer.concat([_0xb7c72b, _0x3b27c4]);
  }
  return _0xb7c72b;
};
Aira.sendAudio = async (_0x811a6d, _0x3281c5, _0x5bb2ba = '', _0x327c0c = false, _0x2d750e) => {
  let _0x39efb9 = Buffer.isBuffer(_0x3281c5) ? _0x3281c5 : /^data:.*?\/.*?;base64,/i.test(_0x3281c5) ? Buffer.from(_0x3281c5.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x3281c5) ? await (await fetch(_0x3281c5)).buffer() : fs.existsSync(_0x3281c5) ? fs.readFileSync(_0x3281c5) : Buffer.alloc(0x0);
  return await Aira.sendMessage(_0x811a6d, {
    'audio': _0x39efb9,
    'ptt': _0x327c0c,
    ..._0x2d750e
  }, {
    'quoted': _0x5bb2ba
  });
};
Aira.sendVideo = async (_0x542aa2, _0xa8b0aa, _0x43a7cf = false, _0xce621f = '', _0x3642cd = '', _0x509b0a) => {
  let _0x179a96 = Buffer.isBuffer(_0xa8b0aa) ? _0xa8b0aa : /^data:.*?\/.*?;base64,/i.test(_0xa8b0aa) ? Buffer.from(_0xa8b0aa.split`,`[0x1], "base64") : /^https?:\/\//.test(_0xa8b0aa) ? await (await fetch(_0xa8b0aa)).buffer() : fs.existsSync(_0xa8b0aa) ? fs.readFileSync(_0xa8b0aa) : Buffer.alloc(0x0);
  return await Aira.sendMessage(_0x542aa2, {
    'video': _0x179a96,
    'caption': _0xce621f,
    'gifPlayback': _0x43a7cf,
    ..._0x509b0a
  }, {
    'quoted': _0x3642cd
  });
};
Aira.sendMedia = async (_0x5adaac, _0x18bf92, _0x112962 = '', _0x4abcf2 = '', _0x4870f1 = '', _0x18e96b = {}) => {
  if (_0x2b758 && _0x2b758.status !== 0xc8 || file.length <= 0x10000) {
    try {
      throw {
        'json': JSON.parse(file.toString())
      };
    } catch (_0x23a14d) {
      if (_0x23a14d.json) {
        throw _0x23a14d.json;
      }
    }
  }
  let _0x5788c0 = '';
  let _0x34c413 = _0x40aed0;
  let _0x1a9c5d = _0x7bfc0c;
  if (_0x18e96b.asDocument) {
    _0x5788c0 = "document";
  }
  if (_0x18e96b.asSticker || /webp/.test(_0x40aed0)) {
    let _0x541450 = {
      'mimetype': _0x40aed0,
      'data': _0x114b3a
    };
    _0x1a9c5d = await writeExif(_0x541450, {
      'packname': _0x18e96b.packname ? _0x18e96b.packname : global.packname,
      'author': _0x18e96b.author ? _0x18e96b.author : global.author,
      'categories': _0x18e96b.categories ? _0x18e96b.categories : []
    });
    await fs.promises.unlink(_0x7bfc0c);
    _0x5788c0 = 'sticker';
    _0x34c413 = "image/webp";
  } else {
    if (/image/.test(_0x40aed0)) {
      _0x5788c0 = "image";
    } else {
      if (/video/.test(_0x40aed0)) {
        _0x5788c0 = 'video';
      } else {
        if (/audio/.test(_0x40aed0)) {
          _0x5788c0 = "audio";
        } else {
          _0x5788c0 = "document";
        }
      }
    }
  }
  await Aira.sendMessage(_0x5adaac, {
    [_0x5788c0]: {
      'url': _0x1a9c5d
    },
    'caption': _0x4abcf2,
    'mimetype': _0x34c413,
    'fileName': _0x112962,
    ..._0x18e96b
  }, {
    'quoted': _0x4870f1,
    ..._0x18e96b
  });
  return fs.promises.unlink(_0x1a9c5d);
};
Aira.copyNForward = async (_0x1569de, _0x292a16, _0x383cf5 = false, _0x38851b = {}) => {
  let _0x3d3970;
  if (_0x38851b.readViewOnce) {
    _0x292a16.message = _0x292a16.message && _0x292a16.message.ephemeralMessage && _0x292a16.message.ephemeralMessage.message ? _0x292a16.message.ephemeralMessage.message : _0x292a16.message || undefined;
    _0x3d3970 = Object.keys(_0x292a16.message.viewOnceMessage.message)[0x0];
    delete (_0x292a16.message && _0x292a16.message.ignore ? _0x292a16.message.ignore : _0x292a16.message || undefined);
    delete _0x292a16.message.viewOnceMessage.message[_0x3d3970].viewOnce;
    _0x292a16.message = {
      ..._0x292a16.message.viewOnceMessage.message
    };
  }
  let _0x393efe = Object.keys(_0x292a16.message)[0x0];
  let _0x3a4c15 = await generateForwardMessageContent(_0x292a16, _0x383cf5);
  let _0x1b8861 = Object.keys(_0x3a4c15)[0x0];
  let _0x590484 = {};
  if (_0x393efe != 'conversation') {
    _0x590484 = _0x292a16.message[_0x393efe].contextInfo;
  }
  _0x3a4c15[_0x1b8861].contextInfo = {
    ..._0x590484,
    ..._0x3a4c15[_0x1b8861].contextInfo
  };
  const _0x30555e = await generateWAMessageFromContent(_0x1569de, _0x3a4c15, _0x38851b ? {
    ..._0x3a4c15[_0x1b8861],
    ..._0x38851b,
    ...(_0x38851b.contextInfo ? {
      'contextInfo': {
        ..._0x3a4c15[_0x1b8861].contextInfo,
        ..._0x38851b.contextInfo
      }
    } : {})
  } : {});
  await Aira.relayMessage(_0x1569de, _0x30555e.message, {
    'messageId': _0x30555e.key.id
  });
  return _0x30555e;
};
Aira.sendButtonText = (_0x9c0b3d, _0x2afe79 = [], _0x59a948, _0x49c796, _0x442de8 = '', _0x238e64 = {}) => {
  let _0x20937f = {
    'text': _0x59a948,
    'footer': _0x49c796,
    'buttons': _0x2afe79,
    'headerType': 0x2,
    ..._0x238e64
  };
  Aira.sendMessage(_0x9c0b3d, _0x20937f, {
    'quoted': _0x442de8,
    ..._0x238e64
  });
};
Aira.send1ButMes = (_0x4429f6, _0x59bd7b = '', _0x1c0f1e = '', _0x18f5f5 = '', _0x4b7124 = '', _0x5e1bbb, _0x2fbf35) => {
  let _0x2d754e = [{
    'buttonId': _0x18f5f5,
    'buttonText': {
      'displayText': _0x4b7124
    },
    'type': 0x1
  }];
  let _0x46d34f = {
    'text': _0x59bd7b,
    'buttons': _0x2d754e,
    'footer': _0x1c0f1e,
    'mentions': _0x2fbf35 ? _0x2fbf35 : []
  };
  Aira.sendMessage(_0x4429f6, _0x46d34f, {
    'quoted': _0x5e1bbb
  });
};
Aira.send2ButMes = (_0x5c8bb6, _0x2056e4 = '', _0x5f395f = '', _0x26edd4 = '', _0x1969e9 = '', _0x551200 = '', _0x22f6ba = '', _0x19e097, _0xbf55c) => {
  let _0x462259 = [{
    'buttonId': _0x26edd4,
    'buttonText': {
      'displayText': _0x1969e9
    },
    'type': 0x1
  }, {
    'buttonId': _0x551200,
    'buttonText': {
      'displayText': _0x22f6ba
    },
    'type': 0x1
  }];
  let _0x4ba1ef = {
    'text': _0x2056e4,
    'buttons': _0x462259,
    'footer': _0x5f395f,
    'mentions': _0xbf55c ? _0xbf55c : []
  };
  Aira.sendMessage(_0x5c8bb6, _0x4ba1ef, {
    'quoted': _0x19e097
  });
};
Aira.sendText = (_0x5150f6, _0x4c80f6, _0x696878 = '', _0x230b87) => Aira.sendMessage(_0x5150f6, {
  'text': _0x4c80f6,
  ..._0x230b87
}, {
  'quoted': _0x696878,
  ..._0x230b87
});
Aira.cMod = (_0x421344, _0x3ffe33, _0x87a38f = '', _0x6f1ed8 = Aira.user.id, _0x2bad5c = {}) => {
  let _0x5e269e = Object.keys(_0x3ffe33.message)[0x0];
  let _0x1517d4 = _0x5e269e === "ephemeralMessage";
  if (_0x1517d4) {
    _0x5e269e = Object.keys(_0x3ffe33.message.ephemeralMessage.message)[0x0];
  }
  let _0x2777e5 = _0x1517d4 ? _0x3ffe33.message.ephemeralMessage.message : _0x3ffe33.message;
  let _0x48b7e4 = _0x2777e5[_0x5e269e];
  if (typeof _0x48b7e4 === "string") {
    _0x2777e5[_0x5e269e] = _0x87a38f || _0x48b7e4;
  } else {
    if (_0x48b7e4.caption) {
      _0x48b7e4.caption = _0x87a38f || _0x48b7e4.caption;
    } else {
      if (_0x48b7e4.text) {
        _0x48b7e4.text = _0x87a38f || _0x48b7e4.text;
      }
    }
  }
  if (typeof _0x48b7e4 !== "string") {
    _0x2777e5[_0x5e269e] = {
      ..._0x48b7e4,
      ..._0x2bad5c
    };
  }
  if (_0x3ffe33.key.participant) {
    _0x6f1ed8 = _0x3ffe33.key.participant = _0x6f1ed8 || _0x3ffe33.key.participant;
  } else {
    if (_0x3ffe33.key.participant) {
      _0x6f1ed8 = _0x3ffe33.key.participant = _0x6f1ed8 || _0x3ffe33.key.participant;
    }
  }
  if (_0x3ffe33.key.remoteJid.includes("@s.whatsapp.net")) {
    _0x6f1ed8 = _0x6f1ed8 || _0x3ffe33.key.remoteJid;
  } else {
    if (_0x3ffe33.key.remoteJid.includes('@broadcast')) {
      _0x6f1ed8 = _0x6f1ed8 || _0x3ffe33.key.remoteJid;
    }
  }
  _0x3ffe33.key.remoteJid = _0x421344;
  _0x3ffe33.key.fromMe = _0x6f1ed8 === Aira.user.id;
  return proto.WebMessageInfo.fromObject(_0x3ffe33);
};
return Aira;
};
startAira();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright("Update " + __filename));
delete require.cache[file];
require(file);
});