/**
 * It checks if the api_key in the request header is valid, if it is, it calls the next function, if
 * not, it sends an error message
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - This is a function that is called when the middleware is complete.
 */
const customHeader = (req, res, next) => {
  try {
    const api_key = req.headers.api_key;
    if (api_key === "maopos-123") {
      next();
    } else {
      res.status(403);
      res.send({ error: "Invalid Api_key..." });
    }
  } catch (error) {
    res.status(403);
    res.send({ error: "Something goes wrong..." });
  }
};

module.exports = customHeader;
