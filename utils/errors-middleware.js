module.exports = function errorMiddleware (err, req, res, next) {
  res.status(500).json({ error: err.message })
}
