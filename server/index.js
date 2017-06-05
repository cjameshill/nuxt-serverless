'use strict'
import Nuxt from 'nuxt'
import express from 'express'

import api from './api'

const app = express()
const compression = require('compression')

// app.get('/', (req, res) => {
//   res.json({title: 'Hello', message: 'Hello World'})
// })

app.disable('x-powered-by')

app.use(compression())

const dev = false

// Import API Routes
app.use('/api', api)
//
// // Start nuxt.js
async function start () {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Build in development
  // if (config.dev) {
  // try {
  //   await nuxt.build()
  // } catch (error) {
  //   console.error(error) // eslint-disable-line no-console
  //   process.exit(1)
  // }
  // }
  // Listen the server
  if (dev) {
    const host = process.env.HOST || '127.0.0.1'
    const port = process.env.PORT || 3000
    app.set('port', port)
    app.listen(port, host)
    console.log(`Server is listening on ${host} at ${port}`)
  } else console.log(`Server is listening on Lambda`)
}

start()

module.exports = app
