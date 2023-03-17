const mysqlx = require('@mysql/xdevapi');

async function main(args) {
  const session = await mysqlx.getSession($DATABASE_URL);

  const data = session.inspect();

  session.close();

  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: `Hello, ${args?.name || "stranger"}! data: ${data}`
  }
}

module.exports = { main };
