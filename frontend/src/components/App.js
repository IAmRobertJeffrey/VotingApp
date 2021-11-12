import { useEffect } from "react";
import { useState } from "react";
import PollList from "../components/PollList";
import "../styles/app.css";
import NameForm from "./NameForm";
import AddPoll from "./AddPoll";
import { FiPlusSquare } from "react-icons/fi";

const App = () => {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [nameActivated, setNameActivated] = useState();
  const [votingOn, setVotingOn] = useState("");
  const [addingPoll, setAddingPoll] = useState(false);
  const [values, setValues] = useState({ val: [] });
  const [newPollTitle, setNewPollTitle] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://roberts-voting-app.herokuapp.com/polls"
    );
    const data = await response.json();
    setData(data);
  };

  const sendData = async (pollObject) => {
    const postOpt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pollObject),
    };

    await fetch("https://roberts-voting-app.herokuapp.com/polls", postOpt);

    fetchData();
  };

  useEffect(() => {}, [votingOn]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://roberts-voting-app.herokuapp.com/polls"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleAddPoll = () => {
    if (addingPoll) {
      setAddingPoll(false);
    } else {
      setNewPollTitle("");
      setValues({ val: [] });
      setAddingPoll(true);
    }
  };

  return (
    <div className="app">
      {nameActivated ? (
        <header>
          <h1 onClick={(e) => setAddingPoll(false)} className="headerTitle">
            Public Polls
          </h1>{" "}
          <FiPlusSquare
            size="50px"
            onClick={handleAddPoll}
            className="addPollButton pollButton"
          />{" "}
        </header>
      ) : null}

      {!nameActivated && !addingPoll ? (
        <NameForm
          setNameActivated={setNameActivated}
          name={name}
          setName={setName}
        />
      ) : null}

      {data && nameActivated && !addingPoll ? (
        <PollList
          newPoll
          setVotingOn={setVotingOn}
          fetchData={fetchData}
          data={data}
        />
      ) : null}
      {addingPoll ? (
        <AddPoll
          setAddingPoll={setAddingPoll}
          sendData={sendData}
          newPollTitle={newPollTitle}
          setNewPollTitle={setNewPollTitle}
          setValues={setValues}
          values={values}
        />
      ) : null}
    </div>
  );
};

export default App;
