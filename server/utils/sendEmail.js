import nodemailer from 'nodemailer.js';
import nodemailerConfig from './nodemailerConfig.js';


const sendEmail= async({to,subject,html})=>{
   const testAccount = await nodemailer.createTestAccount();
   const transpoter= nodemailer.createTransport(nodemailerConfig)
    return transpoter.sendEmail({
        from: '"Amir Ali Anwar" <amiralianwar611@gmail.com>',
        to,
        subject,
        html
    })
}

export default sendEmail