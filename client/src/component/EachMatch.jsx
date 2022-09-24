import React, { useContext } from 'react'
import { userContext } from "../App"
import { deleteMatch } from '../utils/serviceProvider';
import moment from 'moment'



function EachMatch({ id, teamName, rank, server, date, description }) {
    const { matchData, setMatchData } = useContext(userContext);
    const deleteMatchHandler = () => {
        console.log('this id is being deleted:', matchData._id)
        deleteMatch(matchData._id)
            .then(
                setMatchData(prev => {
                    const filtered = prev.filter(top => top._id !== matchData._id);
                    return filtered
                })

            )
            .catch(console.log('error'));
        window.location.reload(false);
    }


    return (
        (<div >
            <div >
                <p>Id: {id}</p>
                <p>Match Id: {matchData.id}</p>
                <div>
                    {teamName}
                </div>
                <div>
                    {moment(date).format("Do MMM YY")}
                </div>
                <div>
                    {server}
                </div>
                <div>
                    {rank}
                </div>
                <div>
                    <button onClick={deleteMatchHandler}>delete</button>
                </div>
            </div>
        </div>)
    )
}

export default EachMatch