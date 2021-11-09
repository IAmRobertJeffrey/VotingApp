import '../styles/addPoll.css'

const AddPoll = ({values, setValues, newPollTitle, setNewPollTitle, sendData, setAddingPoll}) => 
{
   
    function createInputs() 
    {
      return values.val.map((value, count) =>
        <div className="pollOption" key={count}>
          <input type="text" placeholder={`Enter poll choice ${count + 1}`} value={value||''} onChange={handleChange.bind(count)} />
          <input type='button' value='remove' onClick={removeClick.bind(count, value)} />
        </div>
      );
    }

  function handleChange(event) 
  {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
  }

  const addClick = () => 
  {
    setValues({ val: [...values.val, '']})
  }

  const removeClick = (i, value) => 
  {
    let vals = [...values.val];
    
    vals.splice(vals.indexOf(i),1);
    
    setValues({ val: vals });
  }

  const handleSubmit = event => 
  {
    event.preventDefault();
   
    if(newPollTitle)
    {
    if(values.val.length >= 2)
    {

    
    const kek = values.val.map((current) => 
    {
        return (Object.assign(
            {
            name: current,
            count: 0
        }
        ))
    })

      const newPollObject = {
          title: newPollTitle,
          votes: 
          kek
          
      }
      
      sendData(newPollObject)

      setNewPollTitle("")
      setValues({ val: []})
      setAddingPoll(false)
    }
    else
    {
      window.alert("Please provide at least 2 choices for your poll.")
    }
  }
  else
  {
    window.alert("Please provide a title for your poll.")
  }
  }

  


  return (
      <div className="addPollContainer">
        <form className="pollForm" onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter Poll Title" value={newPollTitle} onChange={(e) => setNewPollTitle(e.target.value)} />
            {createInputs()}
            <div className="pollButtons">
            <input className="addPollButton" type='button' value='Add Aditional Choice' onClick={addClick} />
            <input className="addPollButton" type="submit" value="Submit" />
            </div>
        </form>
    </div>
  );
}

export default AddPoll
