// Format Reponse
exports.formatResponse = (status = true, message = "", data) => ({ status: status, message: message, data: data });

//Escape characters
exports.escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}