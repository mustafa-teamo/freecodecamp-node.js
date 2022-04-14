const express = require('express')
const router = express.Router()
const {getPeople, postPeople, updatePeople} = require('./...')

router.route('/')
.get(getPeople)
.post(postPeople)
.put(updatePeople)

router.route('/:id')
.put()
.delete()

module.exports = router