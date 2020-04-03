import React, {Component} from 'react'

class TodosComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            todos : [
                        { id : 1, description : 'expert in react', done: false, date: new Date()},
                        { id : 2, description : 'expert in java', done: false, date: new Date()},
                        { id : 3, description : 'expert in C++', done: false, date: new Date()}
                    ]
            
           
        }

    }
    render() {
        return(
            <div>
                <div className="container">
                    <span>
                        <h1><strong>List Todos</strong></h1>
                    </span>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>is completed</th>
                                <th>target date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.date.toString()}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

export default TodosComponent;