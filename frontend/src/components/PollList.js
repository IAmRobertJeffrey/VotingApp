import Poll from "./Poll"
import "../styles/pollList.css"

const PollList = ({data, fetchData, setVotingOn}) => {
    return (
        <div className="pollList">
            {
                data.map((current) => <Poll setVotingOn={setVotingOn} key={current._id} pollData={current} fetchData={fetchData}/>)
            }
          
        </div>
    )
}

export default PollList
