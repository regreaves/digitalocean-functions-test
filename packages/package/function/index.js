const mysqlx = require('@mysql/xdevapi');

async function main(args) {
  const session = await mysqlx.getSession("mysql://doadmin:AVNS_1OhWgGQoFCngSBucL6b@db-mysql-nyc1-37474-do-user-12845046-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED");

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
