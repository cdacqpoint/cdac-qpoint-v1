const host = process.env.MAILER_HOST || "smtp.mailtrap.io";
const port = process.env.MAILER_PORT || 2525;
const authUser = process.env.MAILER_AUTH_USER || "b4162284d7efbd";
const authPass = process.env.MAILER_AUTH_PASS || "7fd26e18f865c6";
const debug = process.env.NODE_ENV === "test"
const logger = process.env.NODE_ENV === "test"
module.exports = {
    host: host,
    port: port,
    auth: {
        user: authUser,
        pass: authPass
    },
    debug: debug, // show debug output
    logger: logger, // log information in console
}