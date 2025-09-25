require('dotenv').config(); // Load environment variables
const twilio = require('twilio');

// Use credentials from .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Generate TURN credentials
async function getTurnCredentials() {
  try {
    const token = await client.tokens.create({
      ttl: 3600 // 1 hour expiry
    });
    
    console.log(token.iceServers);
    return token.iceServers;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getTurnCredentials();
