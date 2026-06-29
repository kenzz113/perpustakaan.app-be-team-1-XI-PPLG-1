const db = require('../config/db')

const create = async (data) => {

    const sql = `
    INSERT INTO buku
    (
        judul_buku,
        penulis,
        tahun_terbit,
        kategori,
        isbn,
        penerbit,
        jumlah_halaman,
        stok,
        sinopsis
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    return db.execute(sql,[
        data.judul_buku,
        data.penulis,
        data.tahun_terbit,
        data.kategori,
        data.isbn,
        data.penerbit,
        data.jumlah_halaman,
        data.stok,
        data.sinopsis
    ])
}

module.exports = {
    create
}