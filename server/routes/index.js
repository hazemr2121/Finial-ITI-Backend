import express from 'express';
import auhRouter from './user.route.js';
import examRouter from './exam.route.js';
import studentRouter from './student.route.js'
// The prefix is /api
const router = express.Router();

router.use('/auth', auhRouter);
router.use('/exam', examRouter);
router.use('/student', studentRouter);

export default router;
