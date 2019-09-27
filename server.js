const http = require('http')
const port = process.env.PORT || 5000

const app = new http.Server()

app.on('request', (req, res) => {
  let method = req.method.toLowerCase()
  let ip = req.remoteAddress
  let url = req.url
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('ok')
  res.end('\n')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})