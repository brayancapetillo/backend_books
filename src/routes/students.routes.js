import { Router } from "express";


const router = Router();

const {
    getUsers,
    getUsers2,
    getUsers3
} = require('../controllers/students.controllers')

router.get('/base1',getUsers);
router.get('/base2',getUsers2);
router.get('/base3',getUsers3);


module.exports = router;