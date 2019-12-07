const express = require('express')
let router = express.Router()
//const Items = require('../models').Items
const items = require('../data/items.json')

router.use(express.static('public'))

router.get('/items', async (request, response) => {
    response.render('items/show', {
        items
    })
})

module.exports =
    router