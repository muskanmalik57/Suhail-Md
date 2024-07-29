const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923160783251";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+923160783251,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia2hwVnlnb0tMa2pNSXlGYTE2d2h3cDhKRXNlSzBMZ1JOU2FnMEthSDNwWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwialJqS0pvMW9RLU94UmtkUGR4aEtaQVwiLFxuICBcInBob25lSWRcIjogXCIzZjkxYWQ5Ny04MTMzLTQwZmYtYTJkMC0zMTQ5ZjBlZDEyYzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDIyMCxcbiAgICAgIDI2LFxuICAgICAgMTQ5LFxuICAgICAgMTkyLFxuICAgICAgMTgzLFxuICAgICAgMTM1LFxuICAgICAgMTMzLFxuICAgICAgMjAsXG4gICAgICA0NSxcbiAgICAgIDIyMSxcbiAgICAgIDM4LFxuICAgICAgMjIsXG4gICAgICAxMDMsXG4gICAgICAyMzMsXG4gICAgICAxMTIsXG4gICAgICA2NSxcbiAgICAgIDEzLFxuICAgICAgMjMzLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDYsXG4gICAgICA3OCxcbiAgICAgIDQxLFxuICAgICAgNjIsXG4gICAgICAxMTgsXG4gICAgICAxODAsXG4gICAgICAyMzQsXG4gICAgICAyMTcsXG4gICAgICA3NSxcbiAgICAgIDE5LFxuICAgICAgNzYsXG4gICAgICAyMCxcbiAgICAgIDIwNSxcbiAgICAgIDc0LFxuICAgICAgMTI3LFxuICAgICAgMTIsXG4gICAgICAyNDksXG4gICAgICAyNDEsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUVhCV1Y1NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTYwNzgzMjUxOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqfCdka7wnZG88J2RufCdkbDwnZKA8J2RqOOAhs2O8JOGqiDLkM2iwrsgICDiirkg4oq5IOKKuSDiirkg4oq5IOKKuSDiirkg4oq5IOKKuSDiirkg4oq5IOKKuVwiLFxuICAgIFwibGlkXCI6IFwiMjg2MDg4MTA3MzM2NDc6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hPNmRzRkVMZlBuclVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJieTRWZjgwS01NMVVLQVFjYlJqZno5TWFwU2JLUU5nSWcza3VzSkZzR1dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBvMzdIOU5nRC9OckpNMnl0bERqUDhUUDhVU0pUOUl6akFaV1JydWErdVVQaGhSaytvSCtrZyszbndwLzNNQ3JYTmFVYTUyekRwaDRSbkNxd1ByZUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlTUUovbjY5U2dsQjhuWnRxaTdYenh6SHo3a21DdnZyUks3NEhjUTdtS1k4QTFEQWpZK3FoVkQ4Rlh0RXdqeElUZU54Zm5VWFAzSzFzV2x4eXBpV0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2MDc4MzI1MTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI2MzQ4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU2R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHdWWGVPaXp4UHFHSzFvcitEa2tsV1Nzc2xEYkorY0Z2RkM1ZDRNZkswST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTM0NzQ4NTE1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
