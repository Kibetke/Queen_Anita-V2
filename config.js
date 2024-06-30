//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBLTjc4WDlwUEhvZy9UNkhqeUtJMjRWb0pTZGxQWmZNVmFidi8xdkcwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjd4S1dwelJadWtKTEpyVkk3d2ovVS9IUnBjaHI3Z2xKVlR5ZERYUnBpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TWpHNjBVVEFKODVzSFE4TyswRHpZVnlRVjdyR3VTY1JwT28vbFpMOTJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJbGNLdjBjaHBCWmNMTzBUdHg0NjhvSDBNTU9FRitGZEdkQ2RXRWZobUEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPZ1hxRkpsT0V0dG1oN2w3WHdNdDI1VkVNcVoyaW5RVVZuR0g4aHhVa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDRkYvdVc5L01BQVBTdnJ4S29hQmx0bEdFdUZmM0tTeEpZTXYrVGNoM2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09Vd3phTGxMcmZaZHFHd1dWZ0cxMVZpNHN1U2FNdTRWLzgwbkFmU1Uxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xkWnpoR3ZZTVpZbXdYdGxwZXNtVEdrSlE0ODZjdFQydmw3ZGp1dnNEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ3YTVDbnFNbGlJbkE5SUx4Y1lCZElFeWoza2w5Ty8wMVhoM3FDRm1YcUtqRU45cXkraGhJekVBRE5pcHFhNXhOYkcvNG1RaG5IOEZzNEVyNFZiUGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6Ik1ZVVpKdTFCbEJiUnZueUg4N2xySVlUbEd6amNuOHpkcDJvOE5GczNVdFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVlMVBOZnNlVHVxWE5QUkxnNzNCTXciLCJwaG9uZUlkIjoiZWQyZWNjYjUtODk1MS00ZDhkLWEwZGQtMTZkMmZiMDEyMWE3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVBbUltOVJ6cjdzWnpFZnk3YUJva1IyK0ZlRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPY25wVFc5SmZUUjZnWU9lTzRGckVPeXlRRlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFdZREhEWFciLCJtZSI6eyJpZCI6IjI1NDc2OTc4NzUxNTo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUZWRkeSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTi9KeXBNQkVLcmhoclFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOU9zMGVmakU3aTBxQ3NGd0lTTjAxY1VSbDdEMU9QcVhpNjFzSk5SSXN3MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidEdubGlRUHFiWnRFTDQybldpdFNCNW5rWHBGVkJTU2FmenY5aENRR01ab1RZTjBUaVd5ZmhDenE4T0dMUFhjSDRoV1k2TnlaV0lsZkw1VmY2Mmh5QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBheGg0Zzh5REZrTjRkdms2aFhJN3pybFpYcEROd0VwMloyRXZqQ2Q2SDgzVGFnWitlUko0U3NzRGsySkZ6ZXRnVHVaOFMwZ3dUNEVWQkxWWXVxaGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY5Nzg3NTE1OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZUck5IbjR4TzR0S2dyQmNDRWpkTlhGRVpldzlUajZsNHV0YkNUVVNMTU4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3NzU0MTV9";
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
  "https://telegra.ph/file/caea8a822526df22b2262.jpg,https://telegra.ph/file/caea8a822526df22b2262.jpg,https://telegra.ph/file/caea8a822526df22b2262.jpg,https://telegra.ph/file/caea8a822526df22b2262.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
