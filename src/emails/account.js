const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hello@alexyang.ca',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hello@alexyang.ca',
        subject: 'Sad to see you go~',
        text: `Bye bye, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail 
}

// sgMail.send({
//     to: 'hello@alexyang.ca',
//     from: 'hello@alexyang.ca',
//     subject: 'This is my first creation!',
//     text: 'I hope this one gets to you.'
// })
