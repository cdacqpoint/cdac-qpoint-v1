// Format Reponse
exports.formatResponse = (status = true, message = "", data) => ({ status: status, message: message, data: data }); 