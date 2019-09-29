const http = require('http')
const port = process.env.PORT || 5000

const app = new http.Server()
var random = Math.random()
var count = 0

app.on('request', (req, res) => {
  count++
  let method = req.method.toLowerCase()
  let ip = req.remoteAddress
  let url = req.url
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(`
    diana.social
    <hr>
    Method: ${method}<br>
    URL: ${req.url}<br>
    Random: ${Math.random()}<br>
    Persistent: ${random}<br>
    Count: ${count}<br>
    <hr>
    ${+ new Date()}
  `)
  res.end('\n')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})