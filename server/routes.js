const express = require('express')
const router = express.Router();
const { getMatches, postMatch, allMatches, deleteMatch, updateMatch } = require('./controllers/matches');
const { registerUser, loginUser, getMe } = require('./controllers/user')
const { protect } = require('./middleware/authMiddleware')

router.get('/allmatches', allMatches)

router.get('/matches', protect, getMatches);
router.post('/matches', protect, postMatch);
router.delete('/matches/:id', protect, deleteMatch);
router.put('/matches/:id', protect, updateMatch)

router.post('/user/register', registerUser)
router.post('/user/login', loginUser)
router.get('/user/me', protect, getMe)



module.exports = router;
