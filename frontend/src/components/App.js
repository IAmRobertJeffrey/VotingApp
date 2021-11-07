import { useEffect } from "react"
import {useState} from "react"
import PollList from "../components/PollList"
import "../styles/app.css"

const App = () => {
  const [data, setData] = useState();
  useEffect(()=>
  {
    const fetchData = async() =>{
      const response = await fetch('https://roberts-voting-app.herokuapp.com/polls')
      const data = await response.json()
      setData(data)
      
    }
    fetchData();
  }, [])
  return (
    <div className="app">

     <header><h1>Public Polls!</h1></header>
      {data ? <PollList data={data}/> : null}
      
    </div>
  )
}

export default App
