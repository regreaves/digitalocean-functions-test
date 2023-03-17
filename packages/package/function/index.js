const mysqlx = require('@mysql/xdevapi');

async function main(args) {
  const config = "mysql://doadmin:AVNS_1OhWgGQoFCngSBucL6b@db-mysql-nyc1-37474-do-user-12845046-0.b.db.ondigitalocean.com:25064/defaultdb?ssl-mode=REQUIRED";

  const session = await mysqlx.getSession(config);

  const data = session.inspect();

  session.close();

  return { body: data };
}

module.exports = { main };
