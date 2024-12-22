import express from 'express';

const router = express.Router();

router.route('/').post(); //create todo
router.route('/').get(); //get todo
router.route('/:todoId').patch(); //update todo
router.route('/:todoId').delete(); //delete todo

export default router;
