import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTable('classes', table => { 
        table.increments('id').primary();
        table.string('materia').notNullable();
        table.decimal('valor').notNullable();

        // fazendo relacionamento
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    })
}

export async function down(knex: knex) {
    return knex.schema.dropSchema('classes')
} 