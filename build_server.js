const LISTEN_PORT = parseInt(process.env.BUILD_SERVER_LISTEN_PORT) || 8080
const TRIGGER_URL = process.env.BUILD_SERVER_TRIGGER_URL || '/build'
const BUILD_COMMAND = process.env.BUILD_SERVER_BUILD_COMMAND || 'npm run build'

const http = require('http');
const child_process = require('child_process')

// create a server object:
http.createServer(async function (req, res) {
  if (req.method === "POST" && req.url === TRIGGER_URL) {
    try {
      await runGatsbyBuild()
      res.write(JSON.stringify({ message: "ok" }))
    } catch (err) {
      console.error('Build failed', err)
      res.writeHead(HTTP_STATUS_CODES.INTERNAL_ERROR)
    }
  } else {
    res.writeHead(HTTP_STATUS_CODES.BAD_REQUEST)
  }
  res.end(); //end the response
}).listen(LISTEN_PORT); //the server object listens on port 8080

console.log('Build server listening on:', LISTEN_PORT)

let buildPromise
const runGatsbyBuild = () => {
  if (buildPromise) return buildPromise
  return buildPromise = new Promise((resolve, reject) => {
    console.log(`Running '${BUILD_COMMAND}'`)
    const child = child_process.spawn(BUILD_COMMAND, [], { shell: true, stdio: 'inherit' })
    child.on('exit', (code, signal) => {
      buildPromise = null
      if (code !== 0) {
        reject({ code, signal })
      } else {
        resolve()
      }
    })
  })
}

const HTTP_STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_ERROR: 500
}
