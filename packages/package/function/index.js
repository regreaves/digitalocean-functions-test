const mysqlx = require('@mysql/xdevapi');

const url = process.env.DATABASE_URL;

async function main(args) {
  let data;

  try {
    const session = await mysqlx.getSession('mysql://doadmin:AVNS_1OhWgGQoFCngSBucL6b@db-mysql-nyc1-37474-do-user-12845046-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED');

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
