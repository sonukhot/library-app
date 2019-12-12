const express = require('express')
let router = express.Router()
const model = require('../models')
//const items = require('../data/items.json')

router.use(express.static('public'))

router.get('/items', async (request, response) => {
    const items = await model.items.findAll({})
    response.render('items/show', {
        items
    })
})

router.get('/items/:identifier', async (request, response) => {
    const items = await model.items.findAll({
        where: {
            category: request.params.identifier
        },
    })
    response.render('items/show', {
        items
    })
})

router.get('/items/:identifier/:operation', async (request, response) => {
    const order = await model.items.findOne({
        where: {
            id: request.params.identifier
        }
    })

    if (request.params.operation === 'checkOut') {
        await order.update({
            availability: 'out'
        })
    } else {
        await order.update({
            availability: 'in'
        })
    }

    response.render('items/successfulOrder', {
        order
    })
})

module.exports =
    router