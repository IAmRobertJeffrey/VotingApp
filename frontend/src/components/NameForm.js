import "../styles/nameForm.css"

const NameForm = ({name, setName, setNameActivated}) => {
    return (
        
            <div className="nameFormContainer">
                <h2>Create Name</h2>
                <form onSubmit={(e) => 
                {
                    e.preventDefault();
                    setNameActivated(name)
                }} className="nameForm">
                    <input onChange={(e) => setName(e.target.value)} autoFocus placeholder="Enter Name here" type="text"/>
                    <button type="submit">Submit Name</button>
                </form>
            </div>
       
    )
}

export default NameForm
