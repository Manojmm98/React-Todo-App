import React, { Component } from 'react'
export default class todo extends Component {
    // if we want to use javascript inside jsx then we will put it inide curly brackets {}
    constructor(props){
        super(props);
        this.state = {
    tasks:[{id:1,name: 'task 1'},{id:2,name: 'task 2'},{id:3,name: 'task 3'},{id:4,name: 'task 4'}],
        }
    }
    
    handleClick=(task)=>{
        //console.log(this.state.currentTask);
        let newTaskarray =[...this.state.tasks,{id:this.state.tasks.length+1,name:task}];
        this.setState({
            tasks:newTaskarray,
                      
                            })
    }
    onDelete=(id)=> {
        let narr=this.state.tasks.filter(obj=>{
            return obj.id!=id
        })
        this.setState({
            tasks:narr
        })
    }

    render() {
        return (
            <>
            <InputComponent  handleClick={this.handleClick} />
            <TasklistComponent tasks={this.state.tasks} onDelete={this.onDelete}/>        
            </>
        
        )
    }
}

//------------------------By creating Indivisually----------------------------------//

// we want to separate these into two components which one contain only input box 
//and add buttn and other will contain task lists and delete buttons...
// we separate it into two parts because we are using taskarray for addition and deletion..
// after making them two parts we just get their value from parent by props object(creating constructor)



// components for inputcontainer

// we are only using currentTask here so we declare it here so that we did not declare it 
//outside component because we using it after input box created if we creatwd it globally then when page will reload it will be render

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask:''
        }
    }
    handleChange=(e) => {
        this.setState({currentTask:e.target.value})
    }
    render() {
        return (
            <div className="input-container">
                    <input type="text" value={this.state.currentTask} 
                    onChange={this.handleChange}></input>
                    <button disabled={this.state.currentTask==''} onClick={()=>{
                        this.props.handleClick(this.state.currentTask);
                        this.setState({currentTask:''})
                     
                    }}>Add</button>
                </div>
        )
    }
}


// component for task list container


class TasklistComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="class-list">
            <ul>
                {
              this.props.tasks.map(task =>(
                  <li key={task.id}>
                      <h1>{task.name}</h1>
                      <button onClick={() =>this.props.onDelete(task.id)}>delete</button>
                  </li>

              ))
}
              
            </ul>
        </div>
        )
    }
}













