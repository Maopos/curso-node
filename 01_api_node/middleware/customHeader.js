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
