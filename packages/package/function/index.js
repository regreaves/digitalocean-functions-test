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
