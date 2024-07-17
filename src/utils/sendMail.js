import nodemailer from 'nodemailer';


function checkResponse(response) {
    const successMessagePattern = /\bOK\b/;
    if (successMessagePattern.test(response)) {
      return true;
    } else {
      return false;
    }
  }
  

export async function sendMail(email, subject, message) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.ACTIVUS_SITE_EMAIL,
                pass: process.env.APP_PASS_KEY,
            },
        });

        const info = await transporter.sendMail({
            from: {
                name: 'Activus',
                address: process.env.ACTIVUS_SITE_EMAIL
            }, 
            to: email, 
            subject: subject, 
            html: `<p>${message}</p>`, 
        });
        return {success: checkResponse(info?.response), data: info };
    } catch (error) {
        console.error(error)
    }
}

  