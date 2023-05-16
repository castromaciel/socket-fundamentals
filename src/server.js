import cors from 'cors'
import express from 'express'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'
    this.paths = {}

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

  routes() {
    // this.app.use(this.apiPaths.api, apiRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`)
    })
  }
}

export default Server
