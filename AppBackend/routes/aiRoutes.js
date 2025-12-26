import express from 'express'
import { getReview, getHistory, clearHistory} from '../controllers/aiController.js';
const router = express.Router();

router.post('/getReview', getReview)
router.get('/history', getHistory)
router.delete('/history', clearHistory)

export default router
