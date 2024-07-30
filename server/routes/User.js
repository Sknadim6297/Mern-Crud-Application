const express = require('express');
const { getAllUsers, createUser, deleteUser, updateUser, singlUser } = require('../Controllers/User');
const verifyToken = require('../middleware/verifyToken');

const router= express.Router();

router.get('/',getAllUsers);
router.post('/',createUser);
router.delete('/:id',verifyToken,deleteUser);
router.post('/update',updateUser)

//Update User
router.put('/:id',updateUser);
router.put('/:id',singlUser);


module.exports = router;