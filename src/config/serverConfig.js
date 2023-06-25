const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL: process.env.EMAIL_ID,
    PASSWORD: process.env.EMAIL_PASS
}