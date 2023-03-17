const mysqlx = require('@mysql/xdevapi');

const url = process.env.DATABASE_URL;

async function main(args) {
  let data;

  try {
    const session = await mysqlx.getSession(url);

    data = session.inspect();

    session.close();
  } catch (err) {
    //
  }

  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: `Hello, ${args?.name || "stranger"}! data: ${data}`
  }
}

module.exports = { main };
