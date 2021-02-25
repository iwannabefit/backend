const app = require('./app')
const DB = require('../lib/db')
const { PORT } = require('../config/')

DB.connect()

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`))
