import axios from 'axios'

const API_URL = 'http://localhost:3030/matches'

// Create new matches
const createMatch = async (matchData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, matchData, config)

  return response.data
}

// Get user matchs
const getMatches = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user matches
const deleteMatch = async (matchId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + '/' + matchId, config)
  return response.data
}

const updateMatch = async (payload, token) => {
  const config = {

    headers: {
      Authorization: `Bearer ${token}`,
    },

  }
  console.log(config);
  const response = await axios.put(API_URL + '/' + payload.id, payload.body, config)
  console.log(response)


  return response.data
}

const matchService = {
  createMatch,
  getMatches,
  deleteMatch,
  updateMatch
}

export default matchService
