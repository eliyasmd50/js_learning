// Functions:

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf('@'));
}

console.log(getUserNameFromEmail("eliyas@gmail.com"));