function main(args) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    body: `Hello, ${args?.name || "stranger"}!`
  }
}

module.exports = { main };
