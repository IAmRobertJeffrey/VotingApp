import Poll from "./Poll"
import "../styles/pollList.css"

const PollList = ({data, fetchData}) => {
    return (
        <div className="pollList">
            {
                data.map((current) => <Poll key={current._id} pollData={current} fetchData={fetchData}/>)
            }
          
        </div>
    )
}

export default PollList
