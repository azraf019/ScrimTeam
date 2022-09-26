const express = require('express')
const router = express.Router();
const { getMatches, postMatch, allMatches, deleteMatch } = require('./controllers/matches');
const { registerUser, loginUser, getMe } = require('./controllers/user')
const { protect } = require('./middleware/authMiddleware')

router.get('/allmatches', allMatches)

router.get('/matches', protect, getMatches);
router.post('/matches', protect, postMatch);
router.delete('/matches/:id', protect, deleteMatch);

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)



module.exports = router;
