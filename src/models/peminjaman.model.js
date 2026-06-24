const db = require('../config/db')

const create = async (data) => {
  const sql = `
    INSERT INTO peminjaman
    (user_id, judul_buku, tanggal_pinjam, tanggal_kembali, status)
    VALUES (?, ?, ?, ?, ?)
  `

  return db.execute(sql, [
    data.user_id,
    data.judul_buku,
    data.tanggal_pinjam,
    data.tanggal_kembali,
    data.status
  ])
}

const getAll = async () => {
  const [rows] = await db.execute(
    'SELECT * FROM peminjaman'
  )

  return rows
}

module.exports = {
  create,
  getAll
}