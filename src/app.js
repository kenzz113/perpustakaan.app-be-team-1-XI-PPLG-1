const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// ROUTER
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const peminjamanRoutes = require('./routes/peminjaman.routes')

// PREFIX
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/peminjaman', peminjamanRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

module.exports = app