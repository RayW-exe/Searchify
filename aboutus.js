function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }

    const atSymbol = email.indexOf('@');
    const dot = email.lastIndexOf('.');
    const noSpaces = email.indexOf(' ') === -1;

    return atSymbol > 0 && dot > atSymbol + 1 && dot < email.length - 1 && noSpaces;
}

module.exports = isValidEmail;

