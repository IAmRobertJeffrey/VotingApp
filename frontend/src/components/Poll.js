import "../styles/poll.css"
import {BiUpvote} from 'react-icons/bi'

const Poll = ({pollData}) => {

    const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
        try {
            const response = await fetch(url, optionsObj);
            if (!response.ok) {
            throw Error("Reload the app");
            }
        } catch (err) {
        } finally {
        }
        };
        

    const handleUpvote = async(id, vote) => 
    {
        console.log(vote);
       const url = `https://roberts-voting-app.herokuapp.com/polls/${id}`
        const optionsObj = 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: {'"name"': vote}
            
        }
        console.log(optionsObj, id);
        const response = await fetch(url, optionsObj);
        
    }

    console.log(pollData);
   
    return (
        
        <div className="pollCard">
            <div className="title"><h3>{pollData.title}</h3></div>
            <div className="votes">
            {pollData.votes.map((currentVote) => (<div key={currentVote._id} className="vote"><div className="name">{currentVote.name}: <b>{currentVote.count}</b><BiUpvote onClick={(() => handleUpvote(pollData._id, currentVote.name))} className="upvote"/></div></div>
            
            
            ))}
            </div>
        </div>
    )
}

export default Poll
