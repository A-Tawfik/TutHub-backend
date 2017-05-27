// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'tuthub'
    },
    seeds: {
    directory: './seeds/dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'tut_hub'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'tuthub'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
