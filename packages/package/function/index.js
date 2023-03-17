const mysqlx = require('@mysql/xdevapi');

const config = {
  user: process.env.MYSQLX_USER,
  password: process.env.MYSQLX_PASSWORD,
  host: process.env.MYSQLX_HOST,
  port: Number.parseInt(process.env.MYSQLX_PORT),
  schema: process.env.MYSQLX_SCHEMA,
  tls: {
    enabled: true
  }
};

function main(args) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: `Hello, ${args?.name || "stranger"}!`
  }
}

module.exports = { main };
