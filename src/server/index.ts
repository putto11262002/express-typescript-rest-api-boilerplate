import http from 'http'
import { createTerminus } from '@godaddy/terminus'
import config from '../config/config'
import app from './app'

/**
 * Clear up resources when server shutting down
 */
function onSignal() {
  console.log('server shutting down gracefully')
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(true)
    }
    reject()
  })
}

/**
 * check recourse status
 * this is called when the /healthcheck route is hit
 */
async function onHealthCheck() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(true)
    }
    reject()
  })
}

const server = http.createServer(app)

createTerminus(server, {
  signal: 'SIGINT',
  healthChecks: { '/healthcheck': onHealthCheck },
  onSignal,
})

server.on('listening', () => {
  console.log(`server running on port ${config.PORT}`)
})

export default server
