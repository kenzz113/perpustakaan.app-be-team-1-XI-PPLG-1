const express = require('express')
const app = express()
const cors = require('cors')
const bukuRoutes = require('./routes/buku.routes')

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
app.use('/buku', bukuRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.get('/test', (req, res) => {
  res.send('TEST APP')
})

console.log(app._router?.stack)
module.exports = app