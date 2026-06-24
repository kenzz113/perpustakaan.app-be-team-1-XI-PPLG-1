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
  return knex.schema.createTable('peminjaman', (table) => {
    table.increments('id').primary()

    table.uuid('user_id').notNullable()

    table.string('judul_buku').notNullable()

    table.date('tanggal_pinjam').notNullable()

    table.date('tanggal_kembali').notNullable()

    table.string('status').defaultTo('dipinjam')

    table.timestamps(true, true)

    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
  })
}