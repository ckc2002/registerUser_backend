const express = require('express');
const { allCountry, createCountry, singleCountry, updateCountry, deleteCountry } = require('../controller/countryCtrl')
const router = express.Router();

router.get('/', allCountry)
router.post('/add', createCountry)
router.get('/:id', singleCountry)
router.put('/edit/:id', updateCountry)
router.delete('/delete/:id', deleteCountry)

module.exports = router;