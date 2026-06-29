    const Peminjaman = require('../models/peminjaman.model')

    exports.pinjamBuku = async (req, res) => {
    try {
        const {
        judul_buku,
        tanggal_kembali
        } = req.body

        await Peminjaman.create({
        user_id: req.user.id,
        judul_buku,
        tanggal_pinjam: new Date(),
        tanggal_kembali,
        status: 'dipinjam'
        })

        res.status(201).json({
        message: 'Buku berhasil dipinjam'
        })
    } catch (error) {
        res.status(500).json({
        message: error.message
        })
    }
    }

    exports.getAllPeminjaman = async (req, res) => {
    try {
        const data = await Peminjaman.getAll()

        res.json(data)
    } catch (error) {
        res.status(500).json({
        message: error.message
        })
    }
    }

    exports.searchUser = async (req, res) => {
    try {
        const { username } = req.query

        const data = await Peminjaman.searchByUsername(username)

        res.json(data)
    } catch (error) {
        res.status(500).json({
        message: error.message
        })
    }
    }

    exports.searchUser = async (req, res) => {
  console.log('SEARCH TERPANGGIL')
  console.log(req.query)

  try {
    const { username } = req.query

    const data = await Peminjaman.searchByUsername(username)

    res.json(data)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}