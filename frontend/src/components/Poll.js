import "../styles/poll.css"
import {BiUpvote} from 'react-icons/bi'
import {useState} from 'react' 

const Poll = ({pollData, fetchData}) => {
        const [hidden, setHidden] = useState();

    const handleUpvote = async(id, vote) => 
    {
        const voteObject = {
            name: vote
        }
       const url = `https://roberts-voting-app.herokuapp.com/polls/${id}`
        const optionsObj = 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(voteObject)
                
            
        }
        await fetch(url, optionsObj);
        
        fetchData()
    }
   
    return (
        
        <div className="pollCard">
            <div className="title"><h3>{pollData.title}</h3></div>
            <div className="votes">
            {pollData.votes.map((currentVote) => (<div key={currentVote._id} className="vote"><div className="name">{currentVote.name}: <b>{currentVote.count}</b>{hidden !== pollData.title ? <BiUpvote onClick={(() => {handleUpvote(pollData._id, currentVote.name); setHidden(pollData.title)})} className="upvote"/> : null}</div></div>
            
            
            ))}
            </div>
        </div>
    )
}

export default Poll
