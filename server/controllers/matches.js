const MatchModel = require('../models/matches');


async function getMatches(ctx) {
    try {
        ctx.body = await MatchModel.find();
        ctx.response.status = 200;
    } catch (err) {
        ctx.status = 500;
    }
}

async function postMatch(ctx) {
    try {
        const createdObject = await MatchModel.create(ctx.request.body);
        ctx.body = createdObject;
        ctx.status = 201;
    } catch (err) {
        ctx.status = 500;
    }
}

async function deleteMatch(ctx) {
    try {
        const { id } = ctx.params;
        await MatchModel.deleteOne({ where: { id: id } })

        ctx.body = 'match deleted';
    } catch (err) {
        ctx.status = 500;
    }
}

module.exports = { getMatches, postMatch, deleteMatch };