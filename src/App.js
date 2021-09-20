import './App.css';
import React,{useState} from 'react';
import Todolist from './Todolist';
import Navbar from './Navbar';
function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([])

  const itemEvent = (event)=>{
    setInputList(event.target.value);
  }

  const listOfItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    })
    setInputList("")
  }
  const deleteItems = (id)=>{
    console.log("deleted")

    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
          return index !==id;
      })
    })
}


  return (
   
   <>
    <Navbar/>
    <div className="container">
    <div className = "main_div">
      <div className="center_div">
        <br/>
        <h1 className="text-center my-3">To-Do-List</h1>
        <br/>
        {/* <input type="text" placeholder = "Enter A Task" onChange={itemEvent} value={inputList} class="form-control w-50"/> */}
        {/* <button onClick={listOfItems}>Add</button> */}
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter a Task" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={itemEvent} value={inputList}/>
        <button class="btn btn-success" type="button" id="button-addon2" onClick={listOfItems}>Add Task</button>
        </div>
        <ol className="list-group list-group-flush">
         {Items.map((itemval, index)=>{
            return (
            <>     
              <Todolist text={itemval}key={index} id={index} onSelect={deleteItems}/>
            </>
         )})}
        </ol>
      </div>
    </div>
    </div>
   </>
  );
}

export default App;
