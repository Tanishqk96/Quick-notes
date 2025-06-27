const express = require('express');
const router = express.Router();
const {getnotes, createnotes,updatenotes,deletenotes} = require('../controllers/NotesController');
const authenticate = require('../middlewares/AuthMiddleware');
router.post('/notes', authenticate,createnotes);
router.get('/notes',authenticate, getnotes);
router.delete('/notes/:id',authenticate, deletenotes);
router.put('/notes/:id',authenticate, updatenotes);


module.exports = router;