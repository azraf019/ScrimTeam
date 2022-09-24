const matchlistUrl = "http://localhost:3030/matches"

export const fetchMatches = async () => {
    try {
        const response = await fetch(matchlistUrl);
        const jsonData = await response.json();
        return jsonData
    } catch (err) {
        console.log(err);
    }
}

export const postMatch = async (matchData) => {
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(matchData)
    }

    return fetch(matchlistUrl, options)
        .then(response => response.json())
        .catch(console.log('error'))
}

export const deleteMatch = (id) => {
    const options = { method: 'DELETE' }
    return fetch(`${matchlistUrl}/${id}`, options)
        .then(response => response.json())
        .catch(console.log('error'));
}

export const filterAndSort = (matches) => {
    const matchList = matches.slice().filter(match => new Date(match.date) >= Date.now())
    return matchList.sort((a, b) => new Date(b.date) - new Date(a.date));
}
