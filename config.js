//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1jQ0I2UWRYY0x4RzVOeUhmZkExWXNvRlQ4dnE3d29PMUpKK0JlWXBXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZm91c3JJTFJwSVg0eHpXRytsd3pCNVZiVTFaRmphSXc4R3NVMFErWFh3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSGxYeUtZT1RvSnR4dlFyVGY2dUE1TTVWc0JMQ05KSkt0UGxWSkF2U1VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5OHhJYzZZeDYxc3JwOUNORFJiLzg4Y1lneDhLd0JSOUFraDZUTEN5dzJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFQa2pQQ1UvM1FvSE4zTVAwOTd4VVc3NTZ6dXNMNUx5Y1UvNVFOWlhaMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVYOFlZZzRZRmh0dVlRSzRzb3pncTllcUUxejQySEw0OWZRekJUY1Axek09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVAwQjg0Z2ZwTVNPUStXcEhXV2NFdUlNTXByTDl3bTVXZ2ZacVZOMHpHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjBEZndhWDRuN2FWLzB3Smc3MlRXVnA2Z29jMFBtQXBCems5L05hVkFFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5URHp6RmxUUlJTeTFTWFF3cEJVbFpFNk03K1pjcXA3U05jWGdTbE1kMUt4V2hLbUhRdFJSR2hsMmRWdFA3RGJZSFdkMGNDOWxabDNWQkg5WnlMOUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiK2U3TjlBb09ZV25uUU0vc2YwSnpKQm1Ccm55QUFjeFQ3U2pPczgxU1Zaaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidjhaTTZTcXBTY3VWVVZvdk9ITmV6QSIsInBob25lSWQiOiI5Y2Q3ZWM0MC03ZmQ3LTQ5ZDEtYWJkNS01YjM4NjNiYWQ0ZGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib21lN1ZSTFFVSkpQM3FNdEIyU0FYKy9IWDlRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4SUFUS2sxaEZhVkRMMTV6b0syMjM4TjNPRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5QUpRWTk1WiIsIm1lIjp7ImlkIjoiMjU0NzY5Nzg3NTE1OjUxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRlZGR5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL0p5cE1CRVBtamhyUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5T3MwZWZqRTdpMHFDc0Z3SVNOMDFjVVJsN0QxT1BxWGk2MXNKTlJJc3cwPSIsImFjY291bnRTaWduYXR1cmUiOiJRV2JMNjNzRlkyZ2RVRDlhZEc3MjFuelhuMC9KakZFUTYyNUltYkx6bXFMTkp0Zzl2dTJkaUNJUUhZaDB2TG81MzdtMDQyYzhnM0QrbTl6MHR3dWxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTkxpaWI3M2hQYkVEVjlSNjFuVG1UMWxGcVExa29EYXNnc280SEdCRFFOa0gyWkFDRmZZL0Jyc0NpbWdQMTlrMUw2czR2bW02dGdxbW9Na01Ma0RtQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3Njk3ODc1MTU6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlRyTkhuNHhPNHRLZ3JCY0NFamROWEZFWmV3OVRqNmw0dXRiQ1RVU0xNTiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc2NzU1N30=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "254769787515";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "all",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©𝑇𝑒𝑑𝑑𝑦🛠️🚫_MD-V2`",
  author: process.env.PACK_AUTHER || "𝑇𝑒𝑑𝑑𝑦🛠️🚫_MD-V2",
  packname: process.env.PACK_NAME || "T E D D Y",
  botname: process.env.BOT_NAME || "𝑇𝑒𝑑𝑑𝑦🛠️🚫_MD-V2",
  ownername: process.env.OWNER_NAME || "MR 𝑇𝑒𝑑𝑑𝑦🛠️🚫",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
