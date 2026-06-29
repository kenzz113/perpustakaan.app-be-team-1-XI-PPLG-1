/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

exports.up = function(knex) {
  return knex.schema.createTable('buku', table => {
    table.increments('id').primary()

    table.string('judul_buku').notNullable()
    table.string('penulis').notNullable()
    table.integer('tahun_terbit').notNullable()
    table.string('kategori').notNullable()
    table.string('isbn')
    table.string('penerbit')
    table.integer('jumlah_halaman')
    table.integer('stok').defaultTo(0)
    table.text('sinopsis')

    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('buku')
}
