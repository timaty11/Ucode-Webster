import nodemailer from 'nodemailer';

import getHtml from '../utils/get-html.js';


class SendMail {
  constructor() {
    // this.from = 'usof.test1@gmail.com';
    this.from = 'maxine.hudson@ethereal.email';
    this.password = 'ypYxQqFGRMZZp2PUSK';
  }
  async send(to, data, type) {
    const { subject, html }  = getHtml[type](data);

    const mail = nodemailer.createTransport({
      // host: 'smtp.gmail.com',
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: this.from,
        pass: this.password,
      },
    });
    const mailOptions = {
      from: this.from,
      to,
      subject: subject,
      text: '',
      html: html,
    };
    const isReject = (await mail.sendMail(mailOptions)).rejected
    return isReject.length !== 0 ? isReject : 'Success';
  }
}

export default SendMail;
