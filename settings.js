//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"KJ29A/W2uHjG96h6JM1aEI/0VclMHlHAdyefF9xZsUg="},"public":{"type":"Buffer","data":"LNrERlp8lBrK2sybQMOkZ5vxK8ZXjxLC0UC9dKNCcVc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eBE9h2ko+mkHeSHNF+7giwWbR/mROb6JPdfSUG/BU3A="},"public":{"type":"Buffer","data":"PkADlWlGWbdJW9gRwEGxgBDm3gT+0ZKnWUddjbLVCn4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"qOs8p1+V2EFcwparzUyKdTzs9za6lje7+EPw6o6OcmI="},"public":{"type":"Buffer","data":"9lVM/Ugk4G0mYiI9nvJ4ybvJyWcaxECgsFtRskXh7To="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wHloIHY4WSHJtz+x7vmprYrcZRNtCGiYiP0AYI64/34="},"public":{"type":"Buffer","data":"T2UH89+rb4s2NDHXGMZLj0tBKd6ds1RV6ftvMuZxHkc="}},"signature":{"type":"Buffer","data":"t4yXhqWtwJj5PCyywD/Aco9Zccn9fLWb9vTLKH+oRl4g50oCOBqhsqzDs9CDmyZKHvY31SHlBsm5viDT4UF4gg=="},"keyId":1},"registrationId":49,"advSecretKey":"NoywAA/J23Ayce3h4EXKmbh1oOa6R9EPe39OwOoOZX8=","processedHistoryMessages":[{"key":{"remoteJid":"2348087915719@s.whatsapp.net","fromMe":true,"id":"A5C50953528DFEFC441A472DD028BB90"},"messageTimestamp":1722445074},{"key":{"remoteJid":"2348087915719@s.whatsapp.net","fromMe":true,"id":"DB2A00CE50A41D3FBBB03F6B3D87DD7A"},"messageTimestamp":1722445077}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"MCZApPteQEad5qquovQDjg","phoneId":"708d3ee0-1dab-4d2e-845e-363fa0bce7ea","identityId":{"type":"Buffer","data":"7e+dYVqo/Db0Fk0Ea3+xy5aEkgg="},"registered":true,"backupToken":{"type":"Buffer","data":"1Dt0u1cSTD9FKd6aC0MxX/eBYm0="},"registration":{},"pairingCode":"HNHWRKPE","me":{"id":"2348087915719:75@s.whatsapp.net","lid":"113692381311051:75@lid","name":"RIO 🏀"},"account":{"details":"COC6w5sFEIfaqbUGGAUgACgA","accountSignatureKey":"q70ADbt+J2h88tR1ki9tFPBNhaqSB4apxNc3Gt4F+lo=","accountSignature":"0BMvATdiySQrTAxRNpyAcvhYARIJ74i/GC4A6aqD6dozezbrSgaHlzniP5ckWeNgh85qEhmRWEm3sadfNuVxAQ==","deviceSignature":"9pPR1e9weXLlLPLljQhHQfJDTo18bq0AJw3kdQHDK/4xh0HgKFF502a59+McSw9rwlbEG7kpjFrqXr+1Rpvohg=="},"signalIdentities":[{"identifier":{"name":"2348087915719:75@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bau9AA27fidofPLUdZIvbRTwTYWqkgeGqcTXNxreBfpa"}}],"platform":"android","lastAccountSyncTimestamp":1722445067,"myAppStateKeyId":"AAAAALOz"}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '2348087915719' //ur owner number
global.ownername = 'RIO 🏀' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+2348087915719"
global.creator = "2348087915719@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348087915719"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
