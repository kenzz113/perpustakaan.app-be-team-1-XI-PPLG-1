const express = require('express')

const router = express.Router()

const authMiddleware = require('../middlewares/auth.middleware')

const bukuController = require('../controllers/buku.controller')

router.post(
    '/',
    authMiddleware,
    bukuController.tambahBuku
)

module.exports = router