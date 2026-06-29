const express = require('express')
const router = express.Router()
console.log('Peminjaman Routes Loaded')

const authMiddleware = require('../middlewares/auth.middleware')
const peminjamanController = require('../controllers/peminjaman.controller')

router.post(
  '/',
  authMiddleware,
  peminjamanController.pinjamBuku
)

router.get(
  '/',
  authMiddleware,
  peminjamanController.getAllPeminjaman
)

router.get(
  '/search',
  authMiddleware,
  peminjamanController.searchUser
)

module.exports = router

router.get('/test', (req, res) => {
  res.send('TEST BERHASIL')
})

console.log('Peminjaman Routes Loaded')