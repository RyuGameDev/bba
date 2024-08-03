const fs = require('fs')
const { TelegraPh } = require('./uploader')
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./myfunc')
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
const welcome2 = setting.auto_welcomeMsg
const leave2 = setting.auto_leaveMsg
const {
	delay,
	proto,
	jidDecode,
	jidNormalizedUser,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	downloadContentFromMessage,
} = require('@adiwajshing/baileys')
const moment = require('moment-timezone')

module.exports.welcome = async(iswel, isleft, Aira, anu) =>{
	try {
            const metadata = await Aira.groupMetadata(anu.id)
            const participants = anu.participants
            const memeg = metadata.participants.length;
  	        const groupName = metadata.subject
  		      const groupDesc = metadata.desc
  		      
            for (let num of participants) {
  		      const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(anu.id ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': ``, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': setting.pathimg, thumbnail: setting.pathimg,sendEphemeral: true}}}
                try {
                    pp_user = await Aira.profilePictureUrl(num, 'image')
                } catch {
                    pp_user = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }

                try {
                    ppgroup = await Aira.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
                if (anu.action == 'add' && (iswel || setting.auto_welcomeMsg)) {
                	console.log(anu)
                if (isSetWelcome(anu.id, set_welcome_db)) {               	
                var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db)
                var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                Aira.sendMessage(anu.id, { image: { url: pp_user }, mentions: [num], caption: `${full_pesan}` })
                } else {
    let ran4 = getRandom('.jpeg')
    let ran5 = getRandom('.jpeg')
    const imageBuffer = await getBuffer(pp_user)
    const imageBuffer2 = await getBuffer(ppgroup)
    fs.writeFileSync(ran4, Buffer.from(imageBuffer))
    fs.writeFileSync(ran5, Buffer.from(imageBuffer2))
    let pp_user2 = await TelegraPh(ran4)
    let ppgroup2 = await TelegraPh(ran5)
    fs.unlinkSync (ran4)
    fs.unlinkSync (ran5)
    //var wc = await getBuffer(`https://telegra.ph/file/eaf642e46f00344e93a2c.png`)
    //let wc = await getBuffer(`https://api.akuari.my.id/canvas/welcome?name=${num.split('@')[0]}&gcname=${groupName}&ppgc=${ppgroup2}&member=${memeg}&pp=${pp_user2}&bg=https://i.ibb.co/tYgwwT2/images-2.jpg`)
                	 Aira.sendMessage(anu.id, {image: {url:`https://widipe.com/welcome?name=${num.split('@')[0]}&gcname=${groupName}&ppgc=${ppgroup2}&member=${memeg}&pp=${pp_user2}&bg=https://i.ibb.co/tYgwwT2/images-2.jpg`}, caption: `〢━━━━『Welcome』━━━〢\n*Welcome Kak @${num.split("@")[0]} Di Group ${groupName}*\n\nKini Member Bertambah Jadi: ${memeg}\n*Deskripsi Group:*\n${groupDesc}`, mentions: [num]}, {quoted:fkontaku})
                }
                } else if (anu.action == 'remove' && (isleft || setting.auto_leaveMsg)) {
                	console.log(anu)
                	if (isSetLeft(anu.id, set_left_db)) {            	
                        var get_teks_left = await getTextSetLeft(anu.id, set_left_db)
                        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                      Aira.sendMessage(anu.id, { image: { url: pp_user }, mentions: [num], caption: `${full_pesan}` })
                       } else {
    let ran4 = getRandom('.jpeg')
    let ran5 = getRandom('.jpeg')
    const imageBuffer = await getBuffer(pp_user)
    const imageBuffer2 = await getBuffer(ppgroup)
    fs.writeFileSync(ran4, Buffer.from(imageBuffer))
    fs.writeFileSync(ran5, Buffer.from(imageBuffer2))
    let pp_user2 = await TelegraPh(ran4)
    let ppgroup2 = await TelegraPh(ran5)
    fs.unlinkSync (ran4)
    fs.unlinkSync (ran5)
  // var lf = await getBuffer(`https://telegra.ph/file/a0a6f7bc72d1a6be0fa48.png`) 
   //let lf = await getBuffer(`https://api.akuari.my.id/canvas/goodbye?name=${num.split('@')[0]}&gcname=${groupName}&ppgc=${ppgroup2}&member=${memeg}&pp=${pp_user2}&bg=https://i.ibb.co/tYgwwT2/images-2.jpg`) 
 Aira.sendMessage(anu.id, {image: {url: `https://widipe.com/goodbye?name=${num.split('@')[0]}&gcname=${groupName}&ppgc=${ppgroup2}&member=${memeg}&pp=${pp_user2}&bg=https://i.ibb.co/tYgwwT2/images-2.jpg`}, caption: `〢━━━━『Leave』━━━━〢\n \nBye Kak 👋
                       	
*"Karna Setiap Ucapan Selamat Datang Akan Selalu Diakhiri Dengan Ucapan Selamat Tinggal"*

Terima Kasih Kak @${num.split("@")[0]} Sampai Bertemu Kembali Di Group ${groupName}\n\n Kini Member Berkurang Menjadi: ${memeg}`, mentions: [num]}, {quoted:fkontaku})
                        } 
                } else if (anu.action == 'promote') {
                  Aira.sendMessage(anu.id, {text: `@${num.split('@')[0]} Telah Dipromote Sebagai Admin`,mentions: [num]}, {quoted: fkontaku})
                } else if (anu.action == 'demote') {
                    Aira.sendMessage(anu.id, {text: `@${num.split('@')[0]} Telah Didemote Sebagai Member Biasa`,mentions: [num]}, {quoted: fkontaku})
              }
}
        } catch (err) {
            console.log(err)
            }
	}

	module.exports.aDelete = async (setting, Aira, m) => {
	  if(setting.antiDelete){
	try {
		const dataChat = global.dbc
		const mess = dataChat.find((a) => a.id == m.id);
		const mek = mess.m;
    //console.log(mek)
		const participant = mek.key.remoteJid.endsWith("@g.us") ? mek.key.participant : mek.key.remoteJid;
		console.log(participant)
		const froms = mek.key.remoteJid;
		await Aira.sendMessage(
			froms, {
				text: `「 *ANTI DELETE MESSAGE* 」
    
📛 *Name* : ${mek.pushName? mek.pushName:'Tanpa Nama'}
👤 *User* : @${mek.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB 
✍️ *MessageType* : ${mek.mtype}
    `,
				mentions: [participant],
			}, {
				quoted: mek
			}
		);

		await Aira.copyNForward(froms, mek, true);
  	await delay(4000)
		let messek = dataChat.find((a) => a.id == m.id);
		for (let [i, te] of dataChat.entries()) {
			if (te.id === m.id) {
				dataChat.splice(i, 1); // Tim is now removed from "users"
		}
		}

	} catch (err) {
	  console.log(err)
	}
	  }
	}

module.exports.oneTime = async (setting,Aira,m) => {
  if(setting.antiViewOnce){
  			try {
let teks = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${m.pushName? m.pushName:'Tanpa nama'}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB  
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await Aira.sendTextWithMentions(m.chat, teks, m)
  await delay(500)

  m.copyNForward(m.chat, true, {
  readViewOnce: true,
    quoted: m
  })

			} catch (err) {
				console.log(err)
			}
  }
}
