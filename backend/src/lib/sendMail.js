const nodemailer = require('nodemailer');

const sendMail = async (email, subject, text) => {
  try {
    const user = process.env.EMAIL_USER || process.env.BOT_MAIL;
    const pass = process.env.EMAIL_PASS || process.env.BOT_PASS;

    if (!user || !pass) {
      console.log('Skipping email send: SMTP credentials not configured in .env');
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Pehchaan Ek Safar" <${user}>`,
      to: email,
      subject,
      text,
    });
    console.log(`Email sent successfully to ${email}`);
  } catch (err) {
    console.error('sendMail Error:', err.message);
  }
};

module.exports = sendMail;