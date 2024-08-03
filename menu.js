const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("./lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┣━━━━『 *MAIN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}simplemenu
┣» ${prefix}infobot
┣» ${prefix}donate
┣» ${prefix}dashboard
┣» ${prefix}owner
┣» ${prefix}totalfitur
┣» ${prefix}cekdrive
┣» ${prefix}cekbandwidth
┣» ${prefix}cekpremium
┣» ${prefix}listpremium
┣» ${prefix}listsewa
┣» ${prefix}speed
┣» ${prefix}ping
┣» ${prefix}runtime
┣» ${prefix}listbahasa
┃${petik}
┣━━━━『 *CONVERTER & Ai MENU* 』━━━━◧
┃${petik}
┣» ${prefix}toanime
┣» ${prefix}tozombie
┣» ${prefix}toqr
┣» ${prefix}differentme
┣» ${prefix}differentme2
┣» ${prefix}diffusion
┣» ${prefix}txt2img
┣» ${prefix}aiscene
┣» ${prefix}remini
┣» ${prefix}hdr
┣» ${prefix}nobg
┣» ${prefix}removebg
┣» ${prefix}resize
┣» ${prefix}setfps
┣» ${prefix}ssweb
┣» ${prefix}ssweb2
┣» ${prefix}gimage
┣» ${prefix}shortlink
┣» ${prefix}sticker
┣» ${prefix}stickerwm
┣» ${prefix}smeme
┣» ${prefix}toimg
┣» ${prefix}tourl
┣» ${prefix}tovideo
┣» ${prefix}tomp3
┣» ${prefix}toaudio
┣» ${prefix}tovn
┣» ${prefix}toptv
┣» ${prefix}readvo
┣» ${prefix}ttp
┣» ${prefix}attp
┣» ${prefix}qc
┣» ${prefix}emojimix
┣» ${prefix}ai
┣» ${prefix}aiimg
┣» ${prefix}aidraw
┣» ${prefix}simi
┣» ${prefix}scantext
┣» ${prefix}scanai
┣» ${prefix}shortlink
┣» ${prefix}ocr
┣» ${prefix}ocrai
┣» ${prefix}nuliskiri
┣» ${prefix}nuliskanan
┣» ${prefix}foliokiri
┣» ${prefix}foliokanan
┣» ${prefix}say
┣» ${prefix}translate
┃${petik}
┣━━━━『 *ANONYMOUS MENU* 』━━━━◧
┃${petik}
┣» ${prefix}anonymouschat
┣» ${prefix}start
┣» ${prefix}next
┣» ${prefix}stop
┣» ${prefix}sendprofile
┣» ${prefix}menfess
┣» ${prefix}confess
┣» ${prefix}terimamenfess
┣» ${prefix}tolakmenfess
┣» ${prefix}stopmenfess
┃${petik}
┣━━━━『 *STORE MENU* 』━━━━◧
┃${petik}
┣» ${prefix}list
┣» ${prefix}addlist
┣» ${prefix}dellist
┣» ${prefix}update
┣» ${prefix}jeda
┣» ${prefix}tambah
┣» ${prefix}kurang
┣» ${prefix}kali
┣» ${prefix}bagi
┣» ${prefix}delsetdone
┣» ${prefix}changedone
┣» ${prefix}setdone
┣» ${prefix}delsetproses
┣» ${prefix}changeproses
┣» ${prefix}setproses
┣» proses < reply chat >
┣» done < reply chat >
┃${petik}
┣━━━━『 *PANEL MENU* 』━━━━◧
┃${petik}
┣» ${prefix}panel
┣» ${prefix}listusr
┣» ${prefix}listsrv
┣» ${prefix}addusr
┣» ${prefix}delusr
┣» ${prefix}addsrv
┣» ${prefix}delsrv
┣» ${prefix}updatesrv
┣» ${prefix}suspend *id*
┣» ${prefix}unsuspend *id*
┣» ${prefix}createadmin
┣» ${prefix}listadmin
┃${petik}
┣━━━━『 *RESELLER MENU* 』━━━━◧
┃${petik}
┣» ${prefix}1gb,nama,nomer
┣» ${prefix}2gb,nama,nomer
┣» ${prefix}3gb,nama,nomer
┣» ${prefix}4gb,nama,nomer
┣» ${prefix}5gb,nama,nomer
┣» ${prefix}6gb,nama,nomer
┣» ${prefix}7gb,nama,nomer
┣» ${prefix}8gb,nama,nomer
┣» ${prefix}unli,nama,nomer
┃${petik}
┣━━━━『 *RPG MENU* 』━━━━◧
┃${petik}
┣» ${prefix}inventory
┣» ${prefix}mining
┣» ${prefix}buy
┣» ${prefix}sell
┣» ${prefix}heal
┣» ${prefix}hunt
┣» ${prefix}adventure
┣» ${prefix}luckyday
┣» ${prefix}killslime
┣» ${prefix}killgoblin
┣» ${prefix}killdevil
┣» ${prefix}killbehemoth
┣» ${prefix}killdemon
┣» ${prefix}killdemonking
┣» ${prefix}joinrpg
┣» ${prefix}sellikan
┣» ${prefix}sellbesi
┣» ${prefix}sellemas
┣» ${prefix}jelajah
┣» ${prefix}mancing
┣» ${prefix}jualikan
┣» ${prefix}jualcoal
┣» ${prefix}jualstone
┣» ${prefix}jualingot
┣» ${prefix}jualkayu
┣» ${prefix}jualbahankimia
┣» ${prefix}lebur
┣» ${prefix}nebang
┣» ${prefix}goplanet
┣» ${prefix}ngojek
┃${petik}
┣━━━━『 *GAME MENU* 』━━━━◧
┃${petik}
┣» ${prefix}caklontong
┣» ${prefix}tebakgambar
┣» ${prefix}tebakgame
┣» ${prefix}tebakkata
┣» ${prefix}tebakbendera
┣» ${prefix}tebakkalimat
┣» ${prefix}tebaksiapa
┣» ${prefix}tebakkimia
┣» ${prefix}tebaklirik
┣» ${prefix}tebaktebakan
┣» ${prefix}tekateki
┣» ${prefix}family100
┣» ${prefix}susunkata
┣» ${prefix}tictactoe
┣» ${prefix}delttt
┣» ${prefix}casino
┣» ${prefix}delcasino
┃${petik}
┣━━━━『 *GROUP MENU* 』━━━━◧
┃${petik}
┣» ${prefix}autoaigc
┣» ${prefix}afk
┣» ${prefix}fitnah
┣» ${prefix}intro
┣» ${prefix}listonline
┣» ${prefix}welcome
┣» ${prefix}left
┣» ${prefix}pppanjanggc
┣» ${prefix}opentime
┣» ${prefix}closetime
┣» ${prefix}setopen
┣» ${prefix}changesetopen
┣» ${prefix}delsetopen
┣» ${prefix}setclose
┣» ${prefix}changesetclose
┣» ${prefix}delsetclose
┣» ${prefix}setwelcome
┣» ${prefix}changewelcome
┣» ${prefix}delsetwelcome
┣» ${prefix}setleft
┣» ${prefix}changeleft
┣» ${prefix}delsetleft
┣» ${prefix}linkgc
┣» ${prefix}setppgc
┣» ${prefix}setppgc2
┣» ${prefix}setnamegc
┣» ${prefix}setdesc
┣» ${prefix}antilink
┣» ${prefix}antilinktt
┣» ${prefix}kickme
┣» ${prefix}mute
┣» ${prefix}open
┣» ${prefix}close
┣» ${prefix}add
┣» ${prefix}kick
┣» ${prefix}delete
┣» ${prefix}promote
┣» ${prefix}demote
┣» ${prefix}revoke
┣» ${prefix}hidetag
┣» ${prefix}checksewa
┃${petik}
┣━━━━『 *DOWNLOAD MENU* 』━━━━◧
┃${petik}
┣» ${prefix}play
┣» ${prefix}ytmp3
┣» ${prefix}ytmp4
┣» ${prefix}ytv
┣» ${prefix}ytv2
┣» ${prefix}instagram
┣» ${prefix}ig
┣» ${prefix}ig2
┣» ${prefix}ig3
┣» ${prefix}igphoto
┣» ${prefix}igvideo
┣» ${prefix}igreels
┣» ${prefix}twitter
┣» ${prefix}tiktok
┣» ${prefix}tiktoksearch
┣» ${prefix}tiktokaudio
┣» ${prefix}mediafire
┣» ${prefix}gitclone
┣» ${prefix}fbdl
┣» ${prefix}fb2
┣» ${prefix}fb3
┣» ${prefix}fb4
┣» ${prefix}gdrive
┃${petik}
┣━━━━『 *SEARCH MENU* 』━━━━◧
┃${petik}
┣» ${prefix}lk21
┣» ${prefix}jarak
┣» ${prefix}google
┣» ${prefix}googleimage
┣» ${prefix}ytsearch
┣» ${prefix}searchgrup
┣» ${prefix}pinterest
┣» ${prefix}lirik
┣» ${prefix}shazam
┣» ${prefix}carijudullagu
┣» ${prefix}infogempa
┣» ${prefix}infocuaca
┣» ${prefix}komikusearch
┃${petik}
┣━━━━『 *RANDOM MENU* 』━━━━◧
┃${petik}
┣» ${prefix}waifu
┣» ${prefix}ppcp
┣» ${prefix}cosplay
┣» ${prefix}cecan
┣» ${prefix}cogan
┣» ${prefix}meme
┣» ${prefix}memeindo
┣» ${prefix}darkjokes
┃${petik}
┣━━━━『 *RANDOM QUOTES* 』━━━━◧
┃${petik}
┣» ${prefix}quotesdilan
┣» ${prefix}quotesbucin
┣» ${prefix}quotesjawa
┣» ${prefix}quotesanime
┣» ${prefix}galau
┃${petik}
┣━━━━『 *CEWEK ASIA MENU* 』━━━━◧
┃${petik}
┣» ${prefix}lisa
┣» ${prefix}rose
┣» ${prefix}jiso
┣» ${prefix}jenny
┣» ${prefix}indonesia
┣» ${prefix}japan
┣» ${prefix}china
┣» ${prefix}malaysia
┣» ${prefix}vietnam
┣» ${prefix}korea
┣» ${prefix}thailand
┃${petik}
┣━━━━『 *COWOK ASIA MENU* 』━━━━◧
┃${petik}
┣» ${prefix}suga
┣» ${prefix}wuyifan
┣» ${prefix}parkchanyeol
┣» ${prefix}ohsehun
┣» ${prefix}luhan
┣» ${prefix}kimtaehyung
┣» ${prefix}kimsoek
┣» ${prefix}kimnanjoon
┣» ${prefix}kimjunmyeon
┣» ${prefix}kimjong
┣» ${prefix}kimjondae
┣» ${prefix}jungkook
┣» ${prefix}jimin
┣» ${prefix}jhope
┣» ${prefix}huangzitao
┣» ${prefix}dohkyungsoo
┣» ${prefix}baekhyung
┃${petik}
┣━━━━『 *BALANCE MENU* 』━━━━◧
┃${petik}
┣» ${prefix}balance
┣» ${prefix}limit
┣» ${prefix}buylimit
┣» ${prefix}buyglimit
┣» ${prefix}transfer
┣» ${prefix}toplocal
┣» ${prefix}topglobal
┃${petik}
┣━━━━『 *OWNER MENU* 』━━━━◧
┃${petik}
┣» ${prefix}restart
┣» ${prefix}shutdown
┣» ${prefix}pushkontak
┣» ${prefix}self
┣» ${prefix}public
┣» ${prefix}setppbot
┣» ${prefix}setppbot2
┣» ${prefix}listgc
┣» ${prefix}creategc
┣» ${prefix}joingc
┣» ${prefix}leavegc
┣» ${prefix}bcall
┣» ${prefix}broadcast
┣» ${prefix}bcimg
┣» ${prefix}bcstik
┣» ${prefix}bcvn
┣» ${prefix}bcvideo
┣» ${prefix}bcsewa
┣» ${prefix}getdb
┣» ${prefix}getcase
┣» ${prefix}ddos
┣» ${prefix}addowner
┣» ${prefix}delowner
┣» ${prefix}addpremium
┣» ${prefix}delpremium
┣» ${prefix}addsewa
┣» ${prefix}delsewa
┣» ${prefix}blok
┣» ${prefix}unblok
┣» ${prefix}listblok
┣» ${prefix}autoaipc
┣» ${prefix}autoread
┣» ${prefix}autobio
┣» ${prefix}antidelete
┣» ${prefix}antiviewonce
┣» ${prefix}autorespond
┣» ${prefix}anticall
┣» ${prefix}autoblok212
┣» ${prefix}resetlimit
┃${petik}
┣━━━━『 *STORAGE MENU* 』━━━━◧
┃${petik}
┣» ${prefix}addstik
┣» ${prefix}addvn
┣» ${prefix}addimg
┣» ${prefix}addvid
┣» ${prefix}liststik
┣» ${prefix}listvn
┣» ${prefix}listimg
┣» ${prefix}listvid
┣» ${prefix}sampah
┣» ${prefix}delsampah
┣» ${prefix}sampah2
┣» ${prefix}delsampah2
┃${petik}
┣━━━━『 *ASUPAN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}asupan
┣» ${prefix}bocil
┣» ${prefix}santuy
┣» ${prefix}ukhty
┣» ${prefix}chika
┣» ${prefix}delvira
┣» ${prefix}ayu
┣» ${prefix}bunga
┣» ${prefix}aura
┣» ${prefix}nisa
┣» ${prefix}ziva
┣» ${prefix}yana
┣» ${prefix}viona
┣» ${prefix}syania
┣» ${prefix}riri
┣» ${prefix}syifa
┣» ${prefix}mama_gina
┣» ${prefix}alcakenya
┣» ${prefix}mangayutri
┣» ${prefix}rikagusriani
┣» ${prefix}geayubi
┣» ${prefix}syifa
┃${petik}
┣━━━━『 *RANDOM STICKER* 』━━━━◧
┃${petik}
┣» ${prefix}patrick
┣» ${prefix}sponsbob
┣» ${prefix}kawan-sponsbob
┣» ${prefix}dino-kuning
┣» ${prefix}manusia-lidi
┣» ${prefix}popoci
┣» ${prefix}awoawo
┣» ${prefix}chat
┣» ${prefix}dbfly
┣» ${prefix}doge
┣» ${prefix}gojosatoru
┣» ${prefix}hope-boy
┣» ${prefix}jisoo
┣» ${prefix}kr-robot
┣» ${prefix}kucing
┣» ${prefix}lonte
┣» ${prefix}menjamet
┣» ${prefix}meow
┣» ${prefix}nicholas
┣» ${prefix}tyni
┃${petik}
┣━━━━『 *STALKING MENU* 』━━━━◧
┃${petik}
┣» ${prefix}igstalk
┣» ${prefix}mlstalk
┣» ${prefix}ffstalk
┣» ${prefix}wastalk
┃${petik}
┣━━━━『 *IMAGE EFFECT* 』━━━━◧
┃${petik}
┣» ${prefix}toanime
┣» ${prefix}tozombie
┣» ${prefix}differentme
┣» ${prefix}differentme2
┣» ${prefix}aiscene
┣» ${prefix}remini
┣» ${prefix}hdr
┣» ${prefix}wasted
┣» ${prefix}beautiful
┣» ${prefix}fire
┣» ${prefix}wanted
┣» ${prefix}rip
┣» ${prefix}jail
┣» ${prefix}triggered
┣» ${prefix}brazzers
┣» ${prefix}gay
┣» ${prefix}postig
┃${petik}
┣━━━━『 *FUN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}apakah
┣» ${prefix}kapankah
┣» ${prefix}bisakah
┣» ${prefix}bagaimanakah
┣» ${prefix}rate
┣» ${prefix}gantengcek
┣» ${prefix}cekganteng
┣» ${prefix}cantikcek
┣» ${prefix}cekcantik
┣» ${prefix}sangecek
┣» ${prefix}ceksange
┣» ${prefix}gaycek
┣» ${prefix}cekgay
┣» ${prefix}lesbicek
┣» ${prefix}ceklesbi
┣» ${prefix}wangy
┃${petik}
┣━━━━『 *ISLAM MENU* 』━━━━◧
┃${petik}
┣» ${prefix}kisahnabi
┣» ${prefix}asmaulhusna
┣» ${prefix}listsurah
┣» ${prefix}listsurah
┣» ${prefix}randomquran
┣» ${prefix}randomquran2
┣» ${prefix}quranaudio
┣» ${prefix}alquranaudio
┃${petik}
┣━━━━『 *BAN & UNBAN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}kenon
┣» ${prefix}out
┣» ${prefix}verif
┣» ${prefix}bannedv1
┣» ${prefix}bannedv2
┣» ${prefix}bannedv3
┣» ${prefix}bannedv4
┣» ${prefix}bannedv5
┣» ${prefix}bannedv6
┣» ${prefix}unbannedv1
┣» ${prefix}unbannedv2
┣» ${prefix}unbannedv3
┣» ${prefix}unbannedv4
┣» ${prefix}unbannedv5
┃${petik}
┣━━━━『 *BUG MENU* 』━━━━◧
┃${petik}
┣» ${prefix}aira
┣» ${prefix}santet
┣» ${prefix}bugs
┣» ${prefix}buglink
┣» ${prefix}spams
┃${petik}
┣━━━━『 *NSFW MENU* 』━━━━◧
┃${petik}
┣» ${prefix}baka
┣» ${prefix}smug
┣» ${prefix}neko_sfw
┣» ${prefix}hentai_gif
┣» ${prefix}spank
┣» ${prefix}blowjob
┣» ${prefix}cumarts
┣» ${prefix}eroyuri
┣» ${prefix}eroneko
┣» ${prefix}erokemonomimi
┣» ${prefix}erokitsune
┣» ${prefix}ero
┣» ${prefix}feet
┣» ${prefix}erofeet
┣» ${prefix}feetgif
┣» ${prefix}femdom
┣» ${prefix}futanari
┣» ${prefix}hentai
┣» ${prefix}holoero
┣» ${prefix}holo
┣» ${prefix}keta
┣» ${prefix}kitsune
┣» ${prefix}kemonomimi
┣» ${prefix}pussyart
┣» ${prefix}pussywankgif
┣» ${prefix}girl_solo
┣» ${prefix}girl_solo_gif
┣» ${prefix}tits
┣» ${prefix}trap
┣» ${prefix}yuri
┣» ${prefix}avatar2
┣» ${prefix}anal
┣» ${prefix}bj
┣» ${prefix}classic
┣» ${prefix}cumsluts
┣» ${prefix}kuni
┣» ${prefix}lesbian
┣» ${prefix}neko
┣» ${prefix}neko_gif
┣» ${prefix}ahegao
┣» ${prefix}bdsm
┣» ${prefix}cuckold
┣» ${prefix}cum
┣» ${prefix}foot
┣» ${prefix}gangbang
┣» ${prefix}glasses
┣» ${prefix}jahy
┣» ${prefix}masturbation
┣» ${prefix}nsfw_neko
┣» ${prefix}orgy
┣» ${prefix}panties
┣» ${prefix}tentacles
┣» ${prefix}thighs
┣» ${prefix}zettai
┃${petik}
┣━━━━『 *TEXTPRO MENU* 』━━━━◧
┃${petik}
┣» ${prefix}halloween2
┣» ${prefix}horror
┣» ${prefix}game8bit
┣» ${prefix}layered
┣» ${prefix}glitch2
┣» ${prefix}coolg
┣» ${prefix}coolwg
┣» ${prefix}realistic
┣» ${prefix}space3d
┣» ${prefix}gtiktok
┣» ${prefix}stone
┣» ${prefix}marvel
┣» ${prefix}pornhub
┣» ${prefix}avengers
┣» ${prefix}metalr
┣» ${prefix}metalg
┣» ${prefix}metalg2
┣» ${prefix}lion
┣» ${prefix}wolf_bw
┣» ${prefix}wolf_g
┣» ${prefix}ninja
┣» ${prefix}3dsteel
┣» ${prefix}horror2
┣» ${prefix}lava
┣» ${prefix}bagel
┣» ${prefix}blackpink
┣» ${prefix}rainbow2
┣» ${prefix}water_pipe
┣» ${prefix}halloween
┣» ${prefix}sketch
┣» ${prefix}sircuit
┣» ${prefix}discovery
┣» ${prefix}metallic2
┣» ${prefix}fiction
┣» ${prefix}demon
┣» ${prefix}transformer
┣» ${prefix}berry
┣» ${prefix}thunder
┣» ${prefix}3dstone
┣» ${prefix}magma
┣» ${prefix}neon
┣» ${prefix}glitch
┣» ${prefix}harry_potter
┣» ${prefix}embossed
┣» ${prefix}broken
┣» ${prefix}papercut
┣» ${prefix}gradient
┣» ${prefix}glossy
┣» ${prefix}watercolor
┣» ${prefix}multicolor
┣» ${prefix}neon_devil
┣» ${prefix}underwater
┣» ${prefix}bear
┣» ${prefix}wonderfulg
┣» ${prefix}christmas
┣» ${prefix}neon_light
┣» ${prefix}snow
┣» ${prefix}cloudsky
┣» ${prefix}luxury2
┣» ${prefix}gradient2
┣» ${prefix}summer
┣» ${prefix}writing
┣» ${prefix}engraved
┣» ${prefix}summery
┣» ${prefix}3dglue
┣» ${prefix}metaldark
┣» ${prefix}neonlight
┣» ${prefix}oscar
┣» ${prefix}minion
┣» ${prefix}holographic
┣» ${prefix}purple
┣» ${prefix}glossyb
┣» ${prefix}deluxe2
┣» ${prefix}glossyc
┣» ${prefix}fabric
┣» ${prefix}neonc
┣» ${prefix}newyear
┣» ${prefix}newyear2
┣» ${prefix}xmas
┣» ${prefix}metals
┣» ${prefix}blood
┣» ${prefix}darkg
┣» ${prefix}joker
┣» ${prefix}wicker
┣» ${prefix}natural
┣» ${prefix}firework
┣» ${prefix}skeleton
┣» ${prefix}balloon
┣» ${prefix}balloon2
┣» ${prefix}balloon3
┣» ${prefix}balloon4
┣» ${prefix}balloon5
┣» ${prefix}balloon6
┣» ${prefix}balloon7
┣» ${prefix}steel
┣» ${prefix}gloss
┣» ${prefix}denim
┣» ${prefix}decorate
┣» ${prefix}decorate2
┣» ${prefix}peridot
┣» ${prefix}rock
┣» ${prefix}glass
┣» ${prefix}glass2
┣» ${prefix}glass3
┣» ${prefix}glass4
┣» ${prefix}glass5
┣» ${prefix}glass6
┣» ${prefix}glass7
┣» ${prefix}glass8
┣» ${prefix}captain_as2
┣» ${prefix}robot
┣» ${prefix}equalizer
┣» ${prefix}toxic
┣» ${prefix}sparkling
┣» ${prefix}sparkling2
┣» ${prefix}sparkling3
┣» ${prefix}sparkling4
┣» ${prefix}sparkling5
┣» ${prefix}sparkling6
┣» ${prefix}sparkling7
┣» ${prefix}decorative
┣» ${prefix}chocolate
┣» ${prefix}strawberry
┣» ${prefix}koifish
┣» ${prefix}bread
┣» ${prefix}matrix
┣» ${prefix}blood2
┣» ${prefix}neonligth2
┣» ${prefix}thunder2
┣» ${prefix}3dbox
┣» ${prefix}neon2
┣» ${prefix}roadw
┣» ${prefix}bokeh
┣» ${prefix}gneon
┣» ${prefix}advanced
┣» ${prefix}dropwater
┣» ${prefix}wall
┣» ${prefix}chrismast
┣» ${prefix}honey
┣» ${prefix}drug
┣» ${prefix}marble
┣» ${prefix}marble2
┣» ${prefix}ice
┣» ${prefix}juice
┣» ${prefix}rusty
┣» ${prefix}abstra
┣» ${prefix}biscuit
┣» ${prefix}wood
┣» ${prefix}scifi
┣» ${prefix}metalr
┣» ${prefix}purpleg
┣» ${prefix}shiny
┣» ${prefix}jewelry
┣» ${prefix}jewelry2
┣» ${prefix}jewelry3
┣» ${prefix}jewelry4
┣» ${prefix}jewelry5
┣» ${prefix}jewelry6
┣» ${prefix}jewelry7
┣» ${prefix}jewelry8
┣» ${prefix}metalh
┣» ${prefix}golden
┣» ${prefix}glitter
┣» ${prefix}glitter2
┣» ${prefix}glitter3
┣» ${prefix}glitter4
┣» ${prefix}glitter5
┣» ${prefix}glitter6
┣» ${prefix}glitter7
┣» ${prefix}metale
┣» ${prefix}carbon
┣» ${prefix}candy
┣» ${prefix}metalb
┣» ${prefix}gemb
┣» ${prefix}3dchrome
┣» ${prefix}metalb2
┣» ${prefix}metalg
┃${petik}
┣━━━━『 *PHOTOOXY MENU* 』━━━━◧
┃${petik}
┣» ${prefix}typography-flower
┣» ${prefix}under-flower
┣» ${prefix}bevel-text
┣» ${prefix}silk-text
┣» ${prefix}smoke-typography
┣» ${prefix}carvedwood
┣» ${prefix}scary-cemetery
┣» ${prefix}royallook
┣» ${prefix}coffeecup2
┣» ${prefix}illuminated
┣» ${prefix}harry-potter2
┣» ${prefix}woodblack
┣» ${prefix}butterfly-reflection
┣» ${prefix}watermelon
┣» ${prefix}striking
┣» ${prefix}metallicglow
┣» ${prefix}rainbow-text
┣» ${prefix}birthday-cake
┣» ${prefix}embroidery
┣» ${prefix}crisp
┣» ${prefix}flaming
┣» ${prefix}furtext
┣» ${prefix}nightsky
┣» ${prefix}glow-rainbow
┣» ${prefix}gradient-avatar
┣» ${prefix}white-cube
┣» ${prefix}honey-text
┣» ${prefix}vintage-style
┣» ${prefix}glowing-3d
┣» ${prefix}army-camouflage
┣» ${prefix}graffiti-cover
┣» ${prefix}rainbow-shine
┣» ${prefix}smoky-neon
┣» ${prefix}quotes-underfall
┣» ${prefix}vector-nature
┣» ${prefix}yellow-rose
┣» ${prefix}love-text
┣» ${prefix}underwater-ocean
┣» ${prefix}nature-text
┣» ${prefix}wolf-metal
┣» ${prefix}summer-text
┣» ${prefix}wooden-board
┣» ${prefix}quote-wood
┣» ${prefix}quotes-undergrass
┣» ${prefix}naruto-banner
┣» ${prefix}love-message
┣» ${prefix}textoncup2
┣» ${prefix}burn-paper
┣» ${prefix}smoke
┣» ${prefix}romantic-messages
┣» ${prefix}shadow-sky
┣» ${prefix}text-cup
┣» ${prefix}coffecup
┣» ${prefix}battlegrounds-logo
┣» ${prefix}battlefield4
┣» ${prefix}text-8bit
┃${petik}
┣━━━━『 *EPHOTO 360 MENU* 』━━━━◧
┃${petik}
┣» ${prefix}1917text
┣» ${prefix}angelwing
┣» ${prefix}announofwin
┣» ${prefix}birthdaycake
┣» ${prefix}capercut
┣» ${prefix}cardhalloween
┣» ${prefix}christmascard
┣» ${prefix}christmasseason
┣» ${prefix}covergamepubg
┣» ${prefix}covergraffiti
┣» ${prefix}dragonfire
┣» ${prefix}embroider
┣» ${prefix}fabrictext
┣» ${prefix}facebookgold
┣» ${prefix}facebooksilver
┣» ${prefix}funnyanimations
┣» ${prefix}funnyhalloween
┣» ${prefix}galaxybat
┣» ${prefix}galaxywallpaper
┣» ${prefix}generalexam
┣» ${prefix}glowingtext
┣» ${prefix}graffiti3d
┣» ${prefix}graffititext
┣» ${prefix}graffititext2
┣» ${prefix}graffititext3
┣» ${prefix}greetingcardvideo
┣» ${prefix}halloweenbats
┣» ${prefix}heartcup
┣» ${prefix}heartflashlight
┣» ${prefix}horrorletter
┣» ${prefix}icetext
┣» ${prefix}instagramgold
┣» ${prefix}instagramsilver
┣» ${prefix}lightningpubg
┣» ${prefix}lovecard
┣» ${prefix}lovelycute
┣» ${prefix}masteryavatar
┣» ${prefix}merrycard
┣» ${prefix}messagecoffee
┣» ${prefix}metalstar
┣» ${prefix}milkcake
┣» ${prefix}moderngold
┣» ${prefix}moderngold2
┣» ${prefix}modengold3
┣» ${prefix}moderngoldsilver
┣» ${prefix}nameonheart
┣» ${prefix}noeltext
┣» ${prefix}projectyasuo
┣» ${prefix}pubgbirthday
┣» ${prefix}pubgglicthvideo
┣» ${prefix}pubgmascotlogo
┣» ${prefix}puppycute
┣» ${prefix}realembroidery
┣» ${prefix}retrotext
┣» ${prefix}rosebirthday
┣» ${prefix}snowontext
┣» ${prefix}starsnight
┣» ${prefix}summerbeach
┣» ${prefix}sunglightshadow
┣» ${prefix}textcakes
┣» ${prefix}texthalloween
┣» ${prefix}textonglass
┣» ${prefix}textsky
┣» ${prefix}thundertext
┣» ${prefix}twittergold
┣» ${prefix}twittersilver
┣» ${prefix}viettel
┣» ${prefix}vintagetelevision
┣» ${prefix}watercolor2
┣» ${prefix}womansday
┣» ${prefix}writeblood
┣» ${prefix}writegalaxy
┣» ${prefix}writehorror
┣» ${prefix}youtubegold
┣» ${prefix}youtubesilver
┣» ${prefix}zombie3d
┃${petik}
┣━━━━『 *LOGO MENU* 』━━━━◧
┃${petik}
┣» ${prefix}avataroverwatch
┣» ${prefix}logoaccording
┣» ${prefix}mascotstyle
┣» ${prefix}letterlogos
┣» ${prefix}bannerofpubg
┣» ${prefix}bannerofapex
┣» ${prefix}bannerofoverwatch
┣» ${prefix}banneroffreefire
┣» ${prefix}gunlogogaming
┣» ${prefix}pencilsketch
┣» ${prefix}companylogo
┣» ${prefix}companylogo2
┣» ${prefix}teamlogo
┣» ${prefix}bannerofaov
┣» ${prefix}fbgamepubgcover
┣» ${prefix}banneroflol
┣» ${prefix}anonymous
┣» ${prefix}metalmascot
┣» ${prefix}blueneon
┣» ${prefix}coverbannerlol
┣» ${prefix}pubglogomaker
┣» ${prefix}colorfulpubg
┣» ${prefix}astronotspace
┣» ${prefix}wallpaperaov
┣» ${prefix}maketeamlogo
┣» ${prefix}circlemascotteam
┣» ${prefix}wallpaperml
┣» ${prefix}dragonballfb
┣» ${prefix}effect3donbeach
┣» ${prefix}cutegirlgamer
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}

exports.simpleMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.mainMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┣━━━━『 *MAIN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}simplemenu
┣» ${prefix}infobot
┣» ${prefix}donate
┣» ${prefix}dashboard
┣» ${prefix}owner
┣» ${prefix}totalfitur
┣» ${prefix}cekdrive
┣» ${prefix}cekbandwidth
┣» ${prefix}cekpremium
┣» ${prefix}listpremium
┣» ${prefix}listsewa
┣» ${prefix}speed
┣» ${prefix}ping
┣» ${prefix}runtime
┣» ${prefix}listbahasa
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.convertMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┣━━━━『 *CONVERTER & Ai MENU* 』━━━━◧
┃${petik}
┣» ${prefix}toanime
┣» ${prefix}tozombie
┣» ${prefix}toqr
┣» ${prefix}differentme
┣» ${prefix}differentme2
┣» ${prefix}diffusion
┣» ${prefix}txt2img
┣» ${prefix}aiscene
┣» ${prefix}remini
┣» ${prefix}hdr
┣» ${prefix}nobg
┣» ${prefix}removebg
┣» ${prefix}resize
┣» ${prefix}setfps
┣» ${prefix}ssweb
┣» ${prefix}ssweb2
┣» ${prefix}gimage
┣» ${prefix}shortlink
┣» ${prefix}sticker
┣» ${prefix}stickerwm
┣» ${prefix}smeme
┣» ${prefix}toimg
┣» ${prefix}tourl
┣» ${prefix}tovideo
┣» ${prefix}tomp3
┣» ${prefix}toaudio
┣» ${prefix}tovn
┣» ${prefix}toptv
┣» ${prefix}readvo
┣» ${prefix}ttp
┣» ${prefix}attp
┣» ${prefix}qc
┣» ${prefix}emojimix
┣» ${prefix}ai
┣» ${prefix}aiimg
┣» ${prefix}aidraw
┣» ${prefix}simi
┣» ${prefix}scantext
┣» ${prefix}scanai
┣» ${prefix}shortlink
┣» ${prefix}ocr
┣» ${prefix}ocrai
┣» ${prefix}nuliskiri
┣» ${prefix}nuliskanan
┣» ${prefix}foliokiri
┣» ${prefix}foliokanan
┣» ${prefix}say
┣» ${prefix}translate
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.anonymousMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *ANONYMOUS MENU* 』━━━━◧
┃${petik}
┣» ${prefix}anonymouschat
┣» ${prefix}start
┣» ${prefix}next
┣» ${prefix}stop
┣» ${prefix}sendprofile
┣» ${prefix}menfess
┣» ${prefix}confess
┣» ${prefix}terimamenfess
┣» ${prefix}tolakmenfess
┣» ${prefix}stopmenfess
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.storeMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *STORE MENU* 』━━━━◧
┃${petik}
┣» ${prefix}list
┣» ${prefix}addlist
┣» ${prefix}dellist
┣» ${prefix}update
┣» ${prefix}jeda
┣» ${prefix}tambah
┣» ${prefix}kurang
┣» ${prefix}kali
┣» ${prefix}bagi
┣» ${prefix}delsetdone
┣» ${prefix}changedone
┣» ${prefix}setdone
┣» ${prefix}delsetproses
┣» ${prefix}changeproses
┣» ${prefix}setproses
┣» proses < reply chat >
┣» done < reply chat >
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}

exports.panelMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *PANEL MENU* 』━━━━◧
┃${petik}
┣» ${prefix}panel
┣» ${prefix}listusr
┣» ${prefix}listsrv
┣» ${prefix}addusr
┣» ${prefix}delusr
┣» ${prefix}addsrv
┣» ${prefix}delsrv
┣» ${prefix}updatesrv
┣» ${prefix}suspend *id*
┣» ${prefix}unsuspend *id*
┣» ${prefix}createadmin
┣» ${prefix}listadmin
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}

exports.resellerMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *RESELLER MENU* 』━━━━◧
┃${petik}
┣» ${prefix}1gb,nama,nomer
┣» ${prefix}2gb,nama,nomer
┣» ${prefix}3gb,nama,nomer
┣» ${prefix}4gb,nama,nomer
┣» ${prefix}5gb,nama,nomer
┣» ${prefix}6gb,nama,nomer
┣» ${prefix}7gb,nama,nomer
┣» ${prefix}8gb,nama,nomer
┣» ${prefix}unli,nama,nomer
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}



exports.rpgMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *RPG MENU* 』━━━━◧
┃${petik}
┣» ${prefix}inventory
┣» ${prefix}mining
┣» ${prefix}buy
┣» ${prefix}sell
┣» ${prefix}heal
┣» ${prefix}hunt
┣» ${prefix}adventure
┣» ${prefix}luckyday
┣» ${prefix}killslime
┣» ${prefix}killgoblin
┣» ${prefix}killdevil
┣» ${prefix}killbehemoth
┣» ${prefix}killdemon
┣» ${prefix}killdemonking
┣» ${prefix}joinrpg
┣» ${prefix}sellikan
┣» ${prefix}sellbesi
┣» ${prefix}sellemas
┣» ${prefix}jelajah
┣» ${prefix}mancing
┣» ${prefix}jualikan
┣» ${prefix}jualcoal
┣» ${prefix}jualstone
┣» ${prefix}jualingot
┣» ${prefix}jualkayu
┣» ${prefix}jualbahankimia
┣» ${prefix}lebur
┣» ${prefix}nebang
┣» ${prefix}goplanet
┣» ${prefix}ngojek
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.gameMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *GAME MENU* 』━━━━◧
┃${petik}
┣» ${prefix}caklontong
┣» ${prefix}tebakgambar
┣» ${prefix}tebakgame
┣» ${prefix}tebakkata
┣» ${prefix}tebakbendera
┣» ${prefix}tebakkalimat
┣» ${prefix}tebaksiapa
┣» ${prefix}tebakkimia
┣» ${prefix}tebaklirik
┣» ${prefix}tebaktebakan
┣» ${prefix}tekateki
┣» ${prefix}family100
┣» ${prefix}susunkata
┣» ${prefix}tictactoe
┣» ${prefix}delttt
┣» ${prefix}casino
┣» ${prefix}delcasino
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.groupMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *GROUP MENU* 』━━━━◧
┃${petik}
┣» ${prefix}autoaigc
┣» ${prefix}afk
┣» ${prefix}fitnah
┣» ${prefix}intro
┣» ${prefix}listonline
┣» ${prefix}welcome
┣» ${prefix}left
┣» ${prefix}pppanjanggc
┣» ${prefix}opentime
┣» ${prefix}closetime
┣» ${prefix}setopen
┣» ${prefix}changesetopen
┣» ${prefix}delsetopen
┣» ${prefix}setclose
┣» ${prefix}changesetclose
┣» ${prefix}delsetclose
┣» ${prefix}setwelcome
┣» ${prefix}changewelcome
┣» ${prefix}delsetwelcome
┣» ${prefix}setleft
┣» ${prefix}changeleft
┣» ${prefix}delsetleft
┣» ${prefix}linkgc
┣» ${prefix}setppgc
┣» ${prefix}setppgc2
┣» ${prefix}setnamegc
┣» ${prefix}setdesc
┣» ${prefix}antilink
┣» ${prefix}antilinktt
┣» ${prefix}kickme
┣» ${prefix}mute
┣» ${prefix}open
┣» ${prefix}close
┣» ${prefix}add
┣» ${prefix}kick
┣» ${prefix}delete
┣» ${prefix}promote
┣» ${prefix}demote
┣» ${prefix}revoke
┣» ${prefix}hidetag
┣» ${prefix}checksewa
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.downloadMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *DOWNLOAD MENU* 』━━━━◧
┃${petik}
┣» ${prefix}play
┣» ${prefix}ytmp3
┣» ${prefix}ytmp4
┣» ${prefix}ytv
┣» ${prefix}ytv2
┣» ${prefix}instagram
┣» ${prefix}ig
┣» ${prefix}ig2
┣» ${prefix}ig3
┣» ${prefix}igphoto
┣» ${prefix}igvideo
┣» ${prefix}igreels
┣» ${prefix}twitter
┣» ${prefix}tiktok
┣» ${prefix}tiktoksearch
┣» ${prefix}tiktokaudio
┣» ${prefix}mediafire
┣» ${prefix}gitclone
┣» ${prefix}fbdl
┣» ${prefix}fb2
┣» ${prefix}fb3
┣» ${prefix}fb4
┣» ${prefix}gdrive
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.searchMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *SEARCH MENU* 』━━━━◧
┃${petik}
┣» ${prefix}lk21
┣» ${prefix}jarak
┣» ${prefix}google
┣» ${prefix}googleimage
┣» ${prefix}ytsearch
┣» ${prefix}searchgrup
┣» ${prefix}pinterest
┣» ${prefix}lirik
┣» ${prefix}shazam
┣» ${prefix}carijudullagu
┣» ${prefix}infogempa
┣» ${prefix}infocuaca
┣» ${prefix}komikusearch
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.randomMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *RANDOM MENU* 』━━━━◧
┃${petik}
┣» ${prefix}waifu
┣» ${prefix}ppcp
┣» ${prefix}cosplay
┣» ${prefix}cecan
┣» ${prefix}cogan
┣» ${prefix}meme
┣» ${prefix}memeindo
┣» ${prefix}darkjokes
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.randomQuotes = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *RANDOM QUOTES* 』━━━━◧
┃${petik}
┣» ${prefix}quotesdilan
┣» ${prefix}quotesbucin
┣» ${prefix}quotesjawa
┣» ${prefix}quotesanime
┣» ${prefix}galau
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.cewekMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *CEWEK ASIA MENU* 』━━━━◧
┃${petik}
┣» ${prefix}lisa
┣» ${prefix}rose
┣» ${prefix}jiso
┣» ${prefix}jenny
┣» ${prefix}indonesia
┣» ${prefix}japan
┣» ${prefix}china
┣» ${prefix}malaysia
┣» ${prefix}vietnam
┣» ${prefix}korea
┣» ${prefix}thailand
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.cowokMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *COWOK ASIA MENU* 』━━━━◧
┃${petik}
┣» ${prefix}suga
┣» ${prefix}wuyifan
┣» ${prefix}parkchanyeol
┣» ${prefix}ohsehun
┣» ${prefix}luhan
┣» ${prefix}kimtaehyung
┣» ${prefix}kimsoek
┣» ${prefix}kimnanjoon
┣» ${prefix}kimjunmyeon
┣» ${prefix}kimjong
┣» ${prefix}kimjondae
┣» ${prefix}jungkook
┣» ${prefix}jimin
┣» ${prefix}jhope
┣» ${prefix}huangzitao
┣» ${prefix}dohkyungsoo
┣» ${prefix}baekhyung
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.balanceMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *BALANCE MENU* 』━━━━◧
┃${petik}
┣» ${prefix}balance
┣» ${prefix}limit
┣» ${prefix}buylimit
┣» ${prefix}buyglimit
┣» ${prefix}transfer
┣» ${prefix}toplocal
┣» ${prefix}topglobal
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.ownerMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *OWNER MENU* 』━━━━◧
┃${petik}
┣» ${prefix}restart
┣» ${prefix}shutdown
┣» ${prefix}pushkontak
┣» ${prefix}self
┣» ${prefix}public
┣» ${prefix}setppbot
┣» ${prefix}setppbot2
┣» ${prefix}listgc
┣» ${prefix}creategc
┣» ${prefix}joingc
┣» ${prefix}leavegc
┣» ${prefix}bcall
┣» ${prefix}broadcast
┣» ${prefix}bcimg
┣» ${prefix}bcstik
┣» ${prefix}bcvn
┣» ${prefix}bcvideo
┣» ${prefix}bcsewa
┣» ${prefix}getdb
┣» ${prefix}getcase
┣» ${prefix}ddos
┣» ${prefix}addowner
┣» ${prefix}delowner
┣» ${prefix}addpremium
┣» ${prefix}delpremium
┣» ${prefix}addsewa
┣» ${prefix}delsewa
┣» ${prefix}blok
┣» ${prefix}unblok
┣» ${prefix}listblok
┣» ${prefix}autoaipc
┣» ${prefix}autoread
┣» ${prefix}autobio
┣» ${prefix}antidelete
┣» ${prefix}antiviewonce
┣» ${prefix}autorespond
┣» ${prefix}anticall
┣» ${prefix}autoblok212
┣» ${prefix}resetlimit
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.storageMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *STORAGE MENU* 』━━━━◧
┃${petik}
┣» ${prefix}addstik
┣» ${prefix}addvn
┣» ${prefix}addimg
┣» ${prefix}addvid
┣» ${prefix}liststik
┣» ${prefix}listvn
┣» ${prefix}listimg
┣» ${prefix}listvid
┣» ${prefix}sampah
┣» ${prefix}delsampah
┣» ${prefix}sampah2
┣» ${prefix}delsampah2
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.asupanMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *ASUPAN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}asupan
┣» ${prefix}bocil
┣» ${prefix}santuy
┣» ${prefix}ukhty
┣» ${prefix}chika
┣» ${prefix}delvira
┣» ${prefix}ayu
┣» ${prefix}bunga
┣» ${prefix}aura
┣» ${prefix}nisa
┣» ${prefix}ziva
┣» ${prefix}yana
┣» ${prefix}viona
┣» ${prefix}syania
┣» ${prefix}riri
┣» ${prefix}syifa
┣» ${prefix}mama_gina
┣» ${prefix}alcakenya
┣» ${prefix}mangayutri
┣» ${prefix}rikagusriani
┣» ${prefix}geayubi
┣» ${prefix}syifa
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.randomSticker = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *RANDOM STICKER* 』━━━━◧
┃${petik}
┣» ${prefix}patrick
┣» ${prefix}sponsbob
┣» ${prefix}kawan-sponsbob
┣» ${prefix}dino-kuning
┣» ${prefix}manusia-lidi
┣» ${prefix}popoci
┣» ${prefix}awoawo
┣» ${prefix}chat
┣» ${prefix}dbfly
┣» ${prefix}doge
┣» ${prefix}gojosatoru
┣» ${prefix}hope-boy
┣» ${prefix}jisoo
┣» ${prefix}kr-robot
┣» ${prefix}kucing
┣» ${prefix}lonte
┣» ${prefix}menjamet
┣» ${prefix}meow
┣» ${prefix}nicholas
┣» ${prefix}tyni
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.stalkingMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *STALKING MENU* 』━━━━◧
┃${petik}
┣» ${prefix}igstalk
┣» ${prefix}mlstalk
┣» ${prefix}ffstalk
┣» ${prefix}wastalk
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.imageEffect = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *IMAGE EFFECT* 』━━━━◧
┃${petik}
┣» ${prefix}toanime
┣» ${prefix}differentme
┣» ${prefix}differentme2
┣» ${prefix}aiscene
┣» ${prefix}remini
┣» ${prefix}hdr
┣» ${prefix}wasted
┣» ${prefix}beautiful
┣» ${prefix}fire
┣» ${prefix}wanted
┣» ${prefix}rip
┣» ${prefix}jail
┣» ${prefix}triggered
┣» ${prefix}brazzers
┣» ${prefix}gay
┣» ${prefix}postig
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.funMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *FUN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}apakah
┣» ${prefix}kapankah
┣» ${prefix}bisakah
┣» ${prefix}bagaimanakah
┣» ${prefix}rate
┣» ${prefix}gantengcek
┣» ${prefix}cekganteng
┣» ${prefix}cantikcek
┣» ${prefix}cekcantik
┣» ${prefix}sangecek
┣» ${prefix}ceksange
┣» ${prefix}gaycek
┣» ${prefix}cekgay
┣» ${prefix}lesbicek
┣» ${prefix}ceklesbi
┣» ${prefix}wangy
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.islamMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *ISLAM MENU* 』━━━━◧
┃${petik}
┣» ${prefix}kisahnabi
┣» ${prefix}asmaulhusna
┣» ${prefix}listsurah
┣» ${prefix}listsurah
┣» ${prefix}randomquran
┣» ${prefix}randomquran2
┣» ${prefix}quranaudio
┣» ${prefix}alquranaudio
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.banMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *BAN & UNBAN MENU* 』━━━━◧
┃${petik}
┣» ${prefix}kenon
┣» ${prefix}out
┣» ${prefix}verif
┣» ${prefix}bannedv1
┣» ${prefix}bannedv2
┣» ${prefix}bannedv3
┣» ${prefix}bannedv4
┣» ${prefix}bannedv5
┣» ${prefix}bannedv6
┣» ${prefix}unbannedv1
┣» ${prefix}unbannedv2
┣» ${prefix}unbannedv3
┣» ${prefix}unbannedv4
┣» ${prefix}unbannedv5
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}

exports.bugMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *BUG MENU* 』━━━━◧
┃${petik}
┣» ${prefix}aira
┣» ${prefix}santet
┣» ${prefix}bugs
┣» ${prefix}buglink
┣» ${prefix}spams
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.nsfwMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *NSFW MENU* 』━━━━◧
┃${petik}
┣» ${prefix}baka
┣» ${prefix}smug
┣» ${prefix}neko_sfw
┣» ${prefix}hentai_gif
┣» ${prefix}spank
┣» ${prefix}blowjob
┣» ${prefix}cumarts
┣» ${prefix}eroyuri
┣» ${prefix}eroneko
┣» ${prefix}erokemonomimi
┣» ${prefix}erokitsune
┣» ${prefix}ero
┣» ${prefix}feet
┣» ${prefix}erofeet
┣» ${prefix}feetgif
┣» ${prefix}femdom
┣» ${prefix}futanari
┣» ${prefix}hentai
┣» ${prefix}holoero
┣» ${prefix}holo
┣» ${prefix}keta
┣» ${prefix}kitsune
┣» ${prefix}kemonomimi
┣» ${prefix}pussyart
┣» ${prefix}pussywankgif
┣» ${prefix}girl_solo
┣» ${prefix}girl_solo_gif
┣» ${prefix}tits
┣» ${prefix}trap
┣» ${prefix}yuri
┣» ${prefix}avatar2
┣» ${prefix}anal
┣» ${prefix}bj
┣» ${prefix}classic
┣» ${prefix}cumsluts
┣» ${prefix}kuni
┣» ${prefix}lesbian
┣» ${prefix}neko
┣» ${prefix}neko_gif
┣» ${prefix}ahegao
┣» ${prefix}bdsm
┣» ${prefix}cuckold
┣» ${prefix}cum
┣» ${prefix}foot
┣» ${prefix}gangbang
┣» ${prefix}glasses
┣» ${prefix}jahy
┣» ${prefix}masturbation
┣» ${prefix}nsfw_neko
┣» ${prefix}orgy
┣» ${prefix}panties
┣» ${prefix}tentacles
┣» ${prefix}thighs
┣» ${prefix}zettai
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.textproMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *TEXTPRO MENU* 』━━━━◧
┃${petik}
┣» ${prefix}halloween2
┣» ${prefix}horror
┣» ${prefix}game8bit
┣» ${prefix}layered
┣» ${prefix}glitch2
┣» ${prefix}coolg
┣» ${prefix}coolwg
┣» ${prefix}realistic
┣» ${prefix}space3d
┣» ${prefix}gtiktok
┣» ${prefix}stone
┣» ${prefix}marvel
┣» ${prefix}pornhub
┣» ${prefix}avengers
┣» ${prefix}metalr
┣» ${prefix}metalg
┣» ${prefix}metalg2
┣» ${prefix}lion
┣» ${prefix}wolf_bw
┣» ${prefix}wolf_g
┣» ${prefix}ninja
┣» ${prefix}3dsteel
┣» ${prefix}horror2
┣» ${prefix}lava
┣» ${prefix}bagel
┣» ${prefix}blackpink
┣» ${prefix}rainbow2
┣» ${prefix}water_pipe
┣» ${prefix}halloween
┣» ${prefix}sketch
┣» ${prefix}sircuit
┣» ${prefix}discovery
┣» ${prefix}metallic2
┣» ${prefix}fiction
┣» ${prefix}demon
┣» ${prefix}transformer
┣» ${prefix}berry
┣» ${prefix}thunder
┣» ${prefix}3dstone
┣» ${prefix}magma
┣» ${prefix}neon
┣» ${prefix}glitch
┣» ${prefix}harry_potter
┣» ${prefix}embossed
┣» ${prefix}broken
┣» ${prefix}papercut
┣» ${prefix}gradient
┣» ${prefix}glossy
┣» ${prefix}watercolor
┣» ${prefix}multicolor
┣» ${prefix}neon_devil
┣» ${prefix}underwater
┣» ${prefix}bear
┣» ${prefix}wonderfulg
┣» ${prefix}christmas
┣» ${prefix}neon_light
┣» ${prefix}snow
┣» ${prefix}cloudsky
┣» ${prefix}luxury2
┣» ${prefix}gradient2
┣» ${prefix}summer
┣» ${prefix}writing
┣» ${prefix}engraved
┣» ${prefix}summery
┣» ${prefix}3dglue
┣» ${prefix}metaldark
┣» ${prefix}neonlight
┣» ${prefix}oscar
┣» ${prefix}minion
┣» ${prefix}holographic
┣» ${prefix}purple
┣» ${prefix}glossyb
┣» ${prefix}deluxe2
┣» ${prefix}glossyc
┣» ${prefix}fabric
┣» ${prefix}neonc
┣» ${prefix}newyear
┣» ${prefix}newyear2
┣» ${prefix}xmas
┣» ${prefix}metals
┣» ${prefix}blood
┣» ${prefix}darkg
┣» ${prefix}joker
┣» ${prefix}wicker
┣» ${prefix}natural
┣» ${prefix}firework
┣» ${prefix}skeleton
┣» ${prefix}balloon
┣» ${prefix}balloon2
┣» ${prefix}balloon3
┣» ${prefix}balloon4
┣» ${prefix}balloon5
┣» ${prefix}balloon6
┣» ${prefix}balloon7
┣» ${prefix}steel
┣» ${prefix}gloss
┣» ${prefix}denim
┣» ${prefix}decorate
┣» ${prefix}decorate2
┣» ${prefix}peridot
┣» ${prefix}rock
┣» ${prefix}glass
┣» ${prefix}glass2
┣» ${prefix}glass3
┣» ${prefix}glass4
┣» ${prefix}glass5
┣» ${prefix}glass6
┣» ${prefix}glass7
┣» ${prefix}glass8
┣» ${prefix}captain_as2
┣» ${prefix}robot
┣» ${prefix}equalizer
┣» ${prefix}toxic
┣» ${prefix}sparkling
┣» ${prefix}sparkling2
┣» ${prefix}sparkling3
┣» ${prefix}sparkling4
┣» ${prefix}sparkling5
┣» ${prefix}sparkling6
┣» ${prefix}sparkling7
┣» ${prefix}decorative
┣» ${prefix}chocolate
┣» ${prefix}strawberry
┣» ${prefix}koifish
┣» ${prefix}bread
┣» ${prefix}matrix
┣» ${prefix}blood2
┣» ${prefix}neonligth2
┣» ${prefix}thunder2
┣» ${prefix}3dbox
┣» ${prefix}neon2
┣» ${prefix}roadw
┣» ${prefix}bokeh
┣» ${prefix}gneon
┣» ${prefix}advanced
┣» ${prefix}dropwater
┣» ${prefix}wall
┣» ${prefix}chrismast
┣» ${prefix}honey
┣» ${prefix}drug
┣» ${prefix}marble
┣» ${prefix}marble2
┣» ${prefix}ice
┣» ${prefix}juice
┣» ${prefix}rusty
┣» ${prefix}abstra
┣» ${prefix}biscuit
┣» ${prefix}wood
┣» ${prefix}scifi
┣» ${prefix}metalr
┣» ${prefix}purpleg
┣» ${prefix}shiny
┣» ${prefix}jewelry
┣» ${prefix}jewelry2
┣» ${prefix}jewelry3
┣» ${prefix}jewelry4
┣» ${prefix}jewelry5
┣» ${prefix}jewelry6
┣» ${prefix}jewelry7
┣» ${prefix}jewelry8
┣» ${prefix}metalh
┣» ${prefix}golden
┣» ${prefix}glitter
┣» ${prefix}glitter2
┣» ${prefix}glitter3
┣» ${prefix}glitter4
┣» ${prefix}glitter5
┣» ${prefix}glitter6
┣» ${prefix}glitter7
┣» ${prefix}metale
┣» ${prefix}carbon
┣» ${prefix}candy
┣» ${prefix}metalb
┣» ${prefix}gemb
┣» ${prefix}3dchrome
┣» ${prefix}metalb2
┣» ${prefix}metalg
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.photooxyMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *PHOTOOXY MENU* 』━━━━◧
┃${petik}
┣» ${prefix}typography-flower
┣» ${prefix}under-flower
┣» ${prefix}bevel-text
┣» ${prefix}silk-text
┣» ${prefix}smoke-typography
┣» ${prefix}carvedwood
┣» ${prefix}scary-cemetery
┣» ${prefix}royallook
┣» ${prefix}coffeecup2
┣» ${prefix}illuminated
┣» ${prefix}harry-potter2
┣» ${prefix}woodblack
┣» ${prefix}butterfly-reflection
┣» ${prefix}watermelon
┣» ${prefix}striking
┣» ${prefix}metallicglow
┣» ${prefix}rainbow-text
┣» ${prefix}birthday-cake
┣» ${prefix}embroidery
┣» ${prefix}crisp
┣» ${prefix}flaming
┣» ${prefix}furtext
┣» ${prefix}nightsky
┣» ${prefix}glow-rainbow
┣» ${prefix}gradient-avatar
┣» ${prefix}white-cube
┣» ${prefix}honey-text
┣» ${prefix}vintage-style
┣» ${prefix}glowing-3d
┣» ${prefix}army-camouflage
┣» ${prefix}graffiti-cover
┣» ${prefix}rainbow-shine
┣» ${prefix}smoky-neon
┣» ${prefix}quotes-underfall
┣» ${prefix}vector-nature
┣» ${prefix}yellow-rose
┣» ${prefix}love-text
┣» ${prefix}underwater-ocean
┣» ${prefix}nature-text
┣» ${prefix}wolf-metal
┣» ${prefix}summer-text
┣» ${prefix}wooden-board
┣» ${prefix}quote-wood
┣» ${prefix}quotes-undergrass
┣» ${prefix}naruto-banner
┣» ${prefix}love-message
┣» ${prefix}textoncup2
┣» ${prefix}burn-paper
┣» ${prefix}smoke
┣» ${prefix}romantic-messages
┣» ${prefix}shadow-sky
┣» ${prefix}text-cup
┣» ${prefix}coffecup
┣» ${prefix}battlegrounds-logo
┣» ${prefix}battlefield4
┣» ${prefix}text-8bit
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.ephotoMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *EPHOTO 360 MENU* 』━━━━◧
┃${petik}
┣» ${prefix}1917text
┣» ${prefix}angelwing
┣» ${prefix}announofwin
┣» ${prefix}birthdaycake
┣» ${prefix}capercut
┣» ${prefix}cardhalloween
┣» ${prefix}christmascard
┣» ${prefix}christmasseason
┣» ${prefix}covergamepubg
┣» ${prefix}covergraffiti
┣» ${prefix}dragonfire
┣» ${prefix}embroider
┣» ${prefix}fabrictext
┣» ${prefix}facebookgold
┣» ${prefix}facebooksilver
┣» ${prefix}funnyanimations
┣» ${prefix}funnyhalloween
┣» ${prefix}galaxybat
┣» ${prefix}galaxywallpaper
┣» ${prefix}generalexam
┣» ${prefix}glowingtext
┣» ${prefix}graffiti3d
┣» ${prefix}graffititext
┣» ${prefix}graffititext2
┣» ${prefix}graffititext3
┣» ${prefix}greetingcardvideo
┣» ${prefix}halloweenbats
┣» ${prefix}heartcup
┣» ${prefix}heartflashlight
┣» ${prefix}horrorletter
┣» ${prefix}icetext
┣» ${prefix}instagramgold
┣» ${prefix}instagramsilver
┣» ${prefix}lightningpubg
┣» ${prefix}lovecard
┣» ${prefix}lovelycute
┣» ${prefix}masteryavatar
┣» ${prefix}merrycard
┣» ${prefix}messagecoffee
┣» ${prefix}metalstar
┣» ${prefix}milkcake
┣» ${prefix}moderngold
┣» ${prefix}moderngold2
┣» ${prefix}modengold3
┣» ${prefix}moderngoldsilver
┣» ${prefix}nameonheart
┣» ${prefix}noeltext
┣» ${prefix}projectyasuo
┣» ${prefix}pubgbirthday
┣» ${prefix}pubgglicthvideo
┣» ${prefix}pubgmascotlogo
┣» ${prefix}puppycute
┣» ${prefix}realembroidery
┣» ${prefix}retrotext
┣» ${prefix}rosebirthday
┣» ${prefix}snowontext
┣» ${prefix}starsnight
┣» ${prefix}summerbeach
┣» ${prefix}sunglightshadow
┣» ${prefix}textcakes
┣» ${prefix}texthalloween
┣» ${prefix}textonglass
┣» ${prefix}textsky
┣» ${prefix}thundertext
┣» ${prefix}twittergold
┣» ${prefix}twittersilver
┣» ${prefix}viettel
┣» ${prefix}vintagetelevision
┣» ${prefix}watercolor2
┣» ${prefix}womansday
┣» ${prefix}writeblood
┣» ${prefix}writegalaxy
┣» ${prefix}writehorror
┣» ${prefix}youtubegold
┣» ${prefix}youtubesilver
┣» ${prefix}zombie3d
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}
exports.logoMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┏━━━━━━━━━━━━━━━━━━◧
┃Hai  ${pushname !== undefined ? pushname : 'Kak'}
┗━━━━━━━━━━━━━━━━━━◧
┏┃   Selamat ${ucapanWaktu}  
┃┗━━━━━━━━━━━━━━━━━━◧
┃   『 *USER INFO* 』
┃𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
┃𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┣━━━━━━━━━━━━━━━━━━◧
┃   『 *BOT INFO* 』
┃𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
┃𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━━━━◧
┃  『 *HITUNG MUNDUR* 』
┃⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
┃ ${lebaran}
┃⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
┃ ${mundur}
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『 *LOGO MENU* 』━━━━◧
┃${petik}
┣» ${prefix}avataroverwatch
┣» ${prefix}logoaccording
┣» ${prefix}mascotstyle
┣» ${prefix}letterlogos
┣» ${prefix}bannerofpubg
┣» ${prefix}bannerofapex
┣» ${prefix}bannerofoverwatch
┣» ${prefix}banneroffreefire
┣» ${prefix}gunlogogaming
┣» ${prefix}pencilsketch
┣» ${prefix}companylogo
┣» ${prefix}companylogo2
┣» ${prefix}teamlogo
┣» ${prefix}bannerofaov
┣» ${prefix}fbgamepubgcover
┣» ${prefix}banneroflol
┣» ${prefix}anonymous
┣» ${prefix}metalmascot
┣» ${prefix}blueneon
┣» ${prefix}coverbannerlol
┣» ${prefix}pubglogomaker
┣» ${prefix}colorfulpubg
┣» ${prefix}astronotspace
┣» ${prefix}wallpaperaov
┣» ${prefix}maketeamlogo
┣» ${prefix}circlemascotteam
┣» ${prefix}wallpaperml
┣» ${prefix}dragonballfb
┣» ${prefix}effect3donbeach
┣» ${prefix}cutegirlgamer
┃${petik}
┗━━━━━━━━━━━━━━━━━━◧
𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 © 2023 Aira.ai by Ryudev

`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `_*Promo Premium 30 Hari 5k.*_\n_*Promo Sewa Gc 30 Hari 10k*_\n𝙄𝙣𝙛𝙤 𝙎𝙚𝙡𝙚𝙣𝙜𝙠𝙖𝙥𝙣𝙮𝙖 𝘾𝙝𝙖𝙩 𝙊𝙬𝙣𝙚𝙧.`