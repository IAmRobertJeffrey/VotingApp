import Poll from "./Poll"
import "../styles/pollList.css"

const PollList = ({data}) => {
    return (
        <div className="pollList">
            {
                data.map((current) => <Poll key={current._id} pollData={current}/>)
            }
          
        </div>
    )
}

export default PollList
