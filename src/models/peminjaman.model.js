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

const searchByUsername = async (username) => {
  const [rows] = await db.execute(
    `
    SELECT
      users.id,
      users.username,
      peminjaman.judul_buku,
      peminjaman.tanggal_pinjam,
      peminjaman.tanggal_kembali,
      peminjaman.status
    FROM peminjaman
    INNER JOIN users
      ON peminjaman.user_id = users.id
    WHERE users.username LIKE ?
    `,
    [`%${username}%`]
  )

  return rows
}

module.exports = {
  create,
  getAll,
  searchByUsername
}