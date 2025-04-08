const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAVINDU-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURmd1dKVjgraU5pZFMwQTB4T1d5RHZ6V1lOLzN6WkpGdUp0R2dSWE4wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWZYclVhcUNneHJYbnJ4WUhacHcyZ3ZZWDRqWjdVS2JyTjFtRnd0eUVrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTTdkVTFSU3QrM0VUNC9GTkV4OEg5VzNpQ1gwbFZTSDZ1TzhDV2JzNzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuamVNZGNRKytGWW9Yd0tSMmJiYUk1eDJMWWlRZEphMjQzWEdDaU5nZ0Y4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHK1luajI2Sm9vMmp4NGpTMXlJQW94T1k4TnFnT0hFQzlJWEtlb2llMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVqT1pKWThZaG12bnhzT0V6ZFI2UFlUaC9HWlJibjk0d0pwUFFvWSs3SFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JRYnlOUjdlVHBjWWxaL3N1a09FTnJiVnozTUpFMEU2SlVkR3pkZ21GYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUswQkhJU3ZjaWdZSEF4QkFMWjZZZ2xZT1ppMm9YeWdoaENoN1h3U2RYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9XMmx0eWFrbmJ6Q2Q5dUp3TFlhOGFJdEpxWXJUcGlidTJuSUc2R1RwaERza2RIK0ZkY3dGdGZvR3hMdjVCUzZkQk5vc1pQZTlNeHl2K1FVVHdVRmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJzSndSVElFY3dEZE1ycFFhdTdwRUEwakFxd3kvR2VZVlRubHpET2FBemZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzWFl1cENvQVNHR1FicUxRcXZ3UExBIiwicGhvbmVJZCI6IjgzYzhiNmZmLTAyY2ItNDI1My1iMDEwLWIwOWRjZDU4NTllMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtbmg4blN4eis0TW5TMHNqVDZuL09yL3pvUjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJ3MmNQaytJRjJ4OXVRT0VqckkxMjNjY0tBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlMzRzdIQ0RQIiwibWUiOnsiaWQiOiI5NDc2Nzg0OTAyMzoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVbmtub3duIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOM3E4cHdHRU91RzBMOEdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXcmF5N20rUnhSbzV5UHBjVk1Ic29tb05oakpuQS91dE9qL2tqUlhRRFNRPSIsImFjY291bnRTaWduYXR1cmUiOiJ1N2RLa2ZzOEw1RzZNNWhMR1VTUC9jV0NOS0VHMHA2SHdqalhRcDJ0RUsyenkvVWhodWNQOTVqSEx2SzBNM09lY0NpcFpNbUJkM1BZMTZvQzhQWUpDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMUU2ck9Ma000b0hsQW9md2kwZVRLNmovQ2h6dngwM0VIdHlxK3JPTFZ2eWp5N1YvYmkyemt3ekIvVzVrR2FaTGRrdW05M2lXemVLU0ZoVXpUSFNHaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Nzg0OTAyMzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWcTJzdTV2a2NVYU9jajZYRlRCN0tKcURZWXlad1A3clRvLzVJMFYwQTBrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0MDQ0OTE5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9kUiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW 𝗥𝗔𝗩𝗜𝗡𝗗𝗨_MD 😎😎*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗥𝗔𝗩𝗜𝗡𝗗𝗨_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕄𝕣   𝕋   𝕠   𝕙   𝕚   𝕕",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94761180276",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗥𝗔𝗩𝗜𝗡𝗗𝗨",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ʀᴀᴠɪɴᴅᴜ_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/d0H07LTd/IMG-20250407-WA0035.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 I'M ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94761180276",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
