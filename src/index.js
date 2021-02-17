const app = require('./app')
const { PORT } = process.env

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`))
