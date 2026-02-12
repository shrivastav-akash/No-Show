require('dotenv').config();
console.log('Loaded Google Client ID:', process.env.GOOGLE_CLIENT_ID);
console.log('Length:', process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID.length : 0);
