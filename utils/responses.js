exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(statusCode).json({
    error: false,
    status: statusCode,
    data: statusMessage,
  });
};

exports.error = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(statusCode).json({
    error: statusMessage,
    status: statusCode,
    data: false,
  });
};
