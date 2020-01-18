
/**
 * @file Node Mailer Helper
 * @author  CDAC QPoint <cdacqpoint@github.com> 
 */

const nodemailer = require('nodemailer');
const MailConfiguration = require('../config/mailer')

const transport = nodemailer.createTransport(MailConfiguration);

var mailOptions = {};

/**
 * Initialize Mailer by setting recipents and subject
 * @param {*} to
 * @param {*} subject
 * @returns this
 */
function init(to, subject) {
    let name = process.env.APP_NAME || "CDAC Qpoint";
    let email = process.env.APP_EMAIL || "cdacqpoint@gmail.com";
    let from = `"${name} ${email}"`;
    mailOptions = { ...mailOptions, from, to, subject };
    return this;
}

/**
 * Add Attachments (if any)
 * 
 * @param {*} [attachments=[]]
 * @returns this
 */
function setAttachments(attachments = []) {
    mailOptions = { ...mailOptions, attachments };
    return this;
}

/**
 * Add List (if any)
 *
 * @param {*} [list={}]
 * @returns this
 */
function setlist(list = {}) {
    mailOptions = { ...mailOptions, list };
    return this;
}

/**
 *
 * Set HTML Message
 * @param {string} [html=""]
 * @returns this
 */
function setHtml(html = "") {
    mailOptions = { ...mailOptions, html };
    return this;
}

/**
 *
 * Set Text Message
 * @param {string} [text=""]
 * @returns
 */
function setText(text = "") {
    mailOptions = { ...mailOptions, text };
    return this;
}

/**
 * Get Mail Options
 * @returns
 */
function getMailOptions() {
    return mailOptions;
}

/**
 *
 * Thanks for Reaching out Message
 * @param {string} name
 * @param {string} title
 * @returns
 */
async function sendReachingOutMessage(name, title) {
    let appName = process.env.APP_NAME || "CDAC Qpoint";
    let MessageHTML = `<h2>Hai ${name}!</h2>
    <p>Thanks for reaching out to ${appName}</p><p>We will make sure you recieve all the updates regarding your post "${title}", and wont missout anything</p><p>Thanks,</p><p>The ${appName} Team</p>`;
    let MessageText = `Hai ${name}! Thanks for reaching out to ${appName}. We will make sure you recieve all the updates regarding your post "${title}" and wont missout anything. Thanks,The ${appName} Team`;
    setHtml(MessageHTML);
    setText(MessageText)
    return await sendMail((error, info) => {
        if (error) {
            console.log("mail error", error)
            return false;
        }
        console.log("Mail status", info);
        return true;
    });
}

/**
 *
 * Your Query has received a response!
 * @author Saikrishnan <xicoder96@github.com>
 * @param {*} owner
 * @param {*} desc
 * @param {*} postid
 * @param {*} posttitle
 * @param {string} [commentName=""]
 * @returns Promise
 */
async function sendNewCommentMessage(owner, desc, postid, posttitle, commentName = "") {
    let appName = process.env.APP_NAME || "CDAC Qpoint";
    let baseurl = process.env.FRONTEND_URL || "http://localhost:3000/";
    let url = `${baseurl}question/${postid}`;
    commentName = commentName === "" ? "Anonymous user" : "";
    let MessageHTML = `<h2>Hello ${owner},</h2>
    <p style="font-size: 1.25em;">Your Query has received a response!</p>
    <div style="padding: 10px; margin: 5px; border: 1px solid;">
        <h4>${commentName} replied to your question.</h4>
        <div style="word-wrap: break-word;padding: 5px;">
            ${desc}
        </div>
    </div>
    <p>To get redirected to your query <a title="${posttitle}" href="${url}">click here</a>.</p>
    <p>Happy Learning!.</p>
    <p>Team ${appName}.</p>`;
    let MessageText = `Hello ${owner},Your Query has received a response! To get redirected to your query copy paste(${url})`;
    setHtml(MessageHTML);
    setText(MessageText)
    console.log('im here')
    return await sendMail((error, info) => {
        if (error) {
            console.log("mail error", error)
            return false;
        }
        console.log("Mail status", info);
        return true;
    });
}

/**
 * Send Mail
 * @param {*} cb
 * @returns
 */
async function sendMail(cb) {
    return await transport.sendMail(mailOptions, cb);
}


module.exports = {
    init,
    setAttachments,
    setlist,
    setHtml,
    setText,
    getMailOptions,
    sendMail,
    sendNewCommentMessage,
    sendReachingOutMessage
};