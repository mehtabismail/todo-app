import React,{Component} from 'react';
//import logo from './logo.svg';
import './App';
import TodoApp from './components/todo/TodoApp';

class App extends Component{
  render() {
    return (
      <div className="App">
        <TodoApp></TodoApp>
      </div>
    );
  }
}




export default App;
