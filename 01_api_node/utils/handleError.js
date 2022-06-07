/**
 * It takes a response object, a message, and a code, and then sets the response status to the code and
 * sends the message as an error
 * @param res - the response object
 * @param message - The error message to send to the client.
 * @param code - The HTTP status code to send back to the client.
 */
const handleError = (res, message, code) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleError };
