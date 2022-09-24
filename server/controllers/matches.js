const MatchModel = require('../models/matches');

async function allMatches(req, res) {
    try {
        const result = await MatchModel.find()
        res.send(result);
        res.status(200);

    } catch (error) {
        res.status(500);
    }
}


async function getMatches(req, res) {
    try {
        const result = await MatchModel.find({ user: req.user.id })
        res.send(result);
        res.status(200);

    } catch (error) {
        res.status(500);
    }
}

async function postMatch(req, res) {
    try {
        const createdObject = await MatchModel.create({ ...req.body, user: req.user.id });
        res.json(createdObject);
        res.status(201);
    } catch (err) {
        res.status(400);
    }
}

// async function deleteMatch(ctx) {
//     try {
//         const { id } = ctx.params;
//         await MatchModel.deleteOne({ where: { id: id } })

//         ctx.body = 'match deleted';
//     } catch (err) {
//         ctx.status = 500;
//     }
// }

module.exports = { getMatches, postMatch, allMatches };