import emailjs from '@emailjs/browser';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const length = 5;
const serviceID = "user_verification";
const templateID = "template_verification";
const publicKey = "vnBhtE5c_E6py2X3I";

function generateCode() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function sendCode(userName, code){
    emailjs.send(serviceID,templateID,{
        to_name: userName,
        message: code,
    }, publicKey).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

export { generateCode, sendCode }