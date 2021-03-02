exports.success = (req, res, message, status) => {
  const statusCode = status || 200
  const statusMessage = message || ''
  res.status(statusCode).json({
    error: false,
    status: statusCode,
    data: statusMessage
  })
}

exports.error = (req, res, message, status) => {
  const statusCode = status || 200
  const statusMessage = message || ''
  res.status(statusCode).json({
    error: statusMessage,
    status: statusCode,
    data: false
  })
}
