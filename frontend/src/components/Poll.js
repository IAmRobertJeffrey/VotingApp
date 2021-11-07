import "../styles/poll.css"
import {BiUpvote} from 'react-icons/bi'

const Poll = ({pollData}) => {
    console.log(pollData);
   
    return (
        
        <div className="pollCard">
            <div className="title"><h3>{pollData.title}</h3></div>
            <div className="votes">
            {pollData.votes.map((currentVote) => (<div key={currentVote._id} className="vote"><div className="name">{currentVote.name}: <b>{currentVote.count}</b><BiUpvote className="upvote"/></div></div>
            
            
            ))}
            </div>
        </div>
    )
}

export default Poll
