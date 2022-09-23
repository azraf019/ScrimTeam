const Router = require('@koa/router');
const router = new Router();
const { getMatches, postMatch, deleteMatch } = require('./controllers/matches');


router.get('/matches', getMatches);
router.post('/matches', postMatch);
router.delete('/match/:id', deleteMatch);

module.exports = router;