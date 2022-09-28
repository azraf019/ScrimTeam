const asyncHandler = require('express-async-handler')
const MatchModel = require('../models/matches');
const userModel = require('../models/user');

const allMatches = asyncHandler(async (req, res) => {
    try {
        const result = await MatchModel.find()
        res.send(result);
        res.status(200);

    } catch (error) {
        res.status(500);
    }
})


const getMatches = asyncHandler(async (req, res) => {
    try {
        const result = await MatchModel.find({ user: req.user.id })
        res.send(result);
        res.status(200);

    } catch (error) {
        res.status(500);
    }
})

const postMatch = asyncHandler(async (req, res) => {
    try {
        const createdObject = await MatchModel.create({ ...req.body, user: req.user.id });
        res.json(createdObject);
        res.status(201);
    } catch (err) {
        res.status(400);
    }
})

const updateMatch = asyncHandler(async (req, res) => {
    const match = await MatchModel.findById(req.params.id)

    if (!match) {
        res.status(400)
        throw new Error('Match not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (match.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedMatch = await MatchModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedMatch)
})

const deleteMatch = asyncHandler(async (req, res) => {
    const match = await MatchModel.findById(req.params.id)

    if (!match) {
        res.status(400)
        throw new Error('match not found')
    }
    const user = await userModel.findById(req.user.id);
    // // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (match.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await match.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = { getMatches, postMatch, allMatches, deleteMatch, updateMatch };