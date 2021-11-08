import { useEffect } from "react"
import {useState} from "react"
import PollList from "../components/PollList"
import "../styles/app.css"
import NameForm from "./NameForm"

const App = () => {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [nameActivated, setNameActivated] = useState();
  const [votingOn, setVotingOn] = useState('');

  const fetchData = async() =>{
    const response = await fetch('https://roberts-voting-app.herokuapp.com/polls')
    const data = await response.json()
    setData(data)
    
  }

  useEffect(()=>{
    console.log(votingOn);
  },[votingOn])

  

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

     {nameActivated ? <header><h1>Public Polls</h1></header> : null}
     {!nameActivated ? (<NameForm setNameActivated={setNameActivated} name={name} setName={setName}/>) : null}
      {data && nameActivated ? <PollList setVotingOn={setVotingOn} fetchData={fetchData} data={data}/> : null}
      
    </div>
  )
}

export default App
