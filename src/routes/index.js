import { Router } from 'express';

const router = Router();

const studentsroutes = require ("./students.routes");

//students
router.use('/student',studentsroutes);

module.exports = router;