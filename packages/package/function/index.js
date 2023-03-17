async function main(args) {
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

  const session = await mysqlx.getSession(config);

  const data = JSON.stringify(session.inspect());

  session.close();

  return { body: data };
}

module.exports = { main };
