const express = require('express');
const { registerUser, allUser, UserById, deleteUser, updateUser } = require('../controller/userCtrl');
const router = express.Router()

router.get('/', allUser)
router.post('/register', registerUser)
router.get('/:id', UserById)
router.delete('/:id', deleteUser)
router.put('/edit/:id', updateUser)

module.exports = router;
