import React from 'react'

const Todolist = (props) => {

    

    return (
        <>
        
        <div className="container">
         <li className="list-group-item my-3"><i class="fas fa-times-circle"  onClick={()=>{
            props.onSelect(props.id)
        }}></i>{props.text}</li>
        </div>
       
        </>
    )
}

export default Todolist
