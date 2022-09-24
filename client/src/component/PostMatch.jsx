import React, { useContext } from 'react'
import { userContext } from '../App'
import { postMatch } from '../utils/serviceProvider'
import { filterAndSort } from '../utils/serviceProvider';


function PostMatch() {
    const { matchData, setMatchData } = useContext(userContext);

    async function addingMatch(match) {
        match.preventDefault();
        let matchArray = matchData.slice();
        const addText = { teamName: match.target.teamName.value, date: match.target.Date.value, server: match.target.server.value, rank: match.target.rank.value };

        match.target.teamName.value = "";
        match.target.Date.value = "";
        match.target.server.value = "";
        match.target.rank.value = "";

        matchArray.push(addText);
        const finalMatchList = await postMatch(addText);
        console.log({ finalMatchList });
        const newMatchData = ({ ...addText, id: finalMatchList._id })
        console.log({ newMatchData });
        setMatchData(filterAndSort(newMatchData));
        // await postMatch(addText);
        window.location.reload(false);

    }

    return (
        <div className='form'>
            <div className="formTitle">
                <h2>Create a new Match</h2>
            </div>
            <div className="contact">
                <form onSubmit={addingMatch} >
                    <div >
                        <label htmlFor="teamName" required>
                            Team Name
                        </label>
                        <input name='teamName' id="teamName" type="text" placeholder="insert a team name" />
                    </div>
                    <div >
                        <label htmlFor="Date">
                            DATE
                        </label>
                        <input name='Date' id="date" type="datetime-local" placeholder="date" required />
                    </div>
                    <div >
                        <label htmlFor="server">
                            SERVER
                        </label>
                        <input name='server' type="server" placeholder="select the prefered server" required />
                    </div>
                    <div >
                        <label htmlFor="rank">
                            AVG TEAM RANK
                        </label>
                        <input name='rank' type="rank" placeholder="select average team rank" required />
                    </div>
                    <div>
                        <button >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )

}

export default PostMatch