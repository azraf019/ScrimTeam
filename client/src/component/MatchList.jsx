import React, { useContext } from 'react'
import { userContext } from "../App"
import { LatestMatch } from '../utils/serviceProvider';

import EachMatch from './EachMatch';

function MatchList() {

    const { matchData } = useContext(userContext);
    return (
        <div>
            {matchData.map(match => {
                console.log("this the match id", match._id)
                return <EachMatch key={match._id}
                    id={match._id}
                    date={match.date} teamName={match.teamName}
                    server={match.server}
                    rank={match.rank}
                    description={match.description} />
            })}
        </div>
    )
}

export default MatchList