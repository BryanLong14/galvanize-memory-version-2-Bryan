// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///memory_v2'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
