import Poll from "./Poll"
import "../styles/pollList.css"
import {
    Link,
  } from "react-router-dom";

const PollList = ({data, fetchData, setVotingOn}) => {
    return (
        <div className="pollListContainer">
        <div className="pollList">        
            {data.map((current) =>  <Link key={current._id} to={`/polls/${current._id}`}> <Poll setVotingOn={setVotingOn} key={current._id} pollData={current} fetchData={fetchData}/> </Link>)}
        </div>
        </div>
    )
}

export default PollList
