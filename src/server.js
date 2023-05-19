import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'
    this.server = createServer(this.app)
    this.io = new SocketServer(this.server)

    this.paths = {}

    this.middlewares()
    this.routes()

    this.socketsEvents()
  }

  middlewares() {
    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

  routes() {
    // this.app.use(this.apiPaths.api, apiRoutes)
  }

  socketsEvents() {
    this.io.on('connection', (socket) => {

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })

      socket.on('send-message', (payload) => {
        this.io.emit('send-message', payload)
      })
    })
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`)
    })
  }
}

export default Server
