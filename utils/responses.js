exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    data: statusMessage,
  });
};

exports.error = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(statusCode).send({
    error: statusMessage,
    status: statusCode,
    data: false,
  });
};
