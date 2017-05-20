'use strict'

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/bulletjournal_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/bulletjournal_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
