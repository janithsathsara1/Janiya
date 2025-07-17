const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    alive_img:process.env.alive_img ||"IMG-20250717-WA0050.jpg",
    alive_msg:orocess.env.alive_msg ||"Hello,I am yourname i am alive now",
};
