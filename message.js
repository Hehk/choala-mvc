const twilio = require("twilio");
const { NUMBER, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const from = "+18592872026";

module.exports = (body, cb) =>
  client.messages
    .create({
      body,
      from,
      to: NUMBER
    })
    .then(cb);
