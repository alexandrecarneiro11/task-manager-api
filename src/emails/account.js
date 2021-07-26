const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alexandre@gmail.com',
        subject:'thans for joining in!',
        text: `Welcome to the app, ${name}. Let me know hou you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alexandre@gmail.com',
        subject: 'Account Cancelation',
        text: `Hi there ${name}, this is your account cancelation confirmation.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}