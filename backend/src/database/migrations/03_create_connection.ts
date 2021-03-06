import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTable('connections', table => { 
        table.increments('id').primary();
        // fazendo relacionamento
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        table.timestamp('created_at')
        .defaultTo('now(')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropSchema('connections')
} 