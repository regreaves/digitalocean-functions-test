const mysqlx = require('@mysql/xdevapi');

const url = process.env.DATABASE_URL;

function main(args) {
  try {
    const session = await mysqlx.getSession(url);

    console.log(session.inspect());

    session.close();
  } catch (err) {
    //
  }

  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: `Hello, ${args?.name || "stranger"}!`
  }
}

module.exports = { main };
