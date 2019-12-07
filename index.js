const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routers/index')
const itemsRouter = require('./routers/items')
//const Items = require('./models').Items
//const items = require('./data/items.json')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', indexRouter)
app.use('/items', itemsRouter)

app.all('*', (request, response) => {
    response.sendStatus(404)
})

const server = app.listen(1337, () => {
    console.log('Listening on port 1337')
})

module.exports = server