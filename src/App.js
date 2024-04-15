import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text }],
  }));
  
  };

  handleRemove = (text) => {
    const arr = this.state.todos;
    const ind = arr.findIndex(ele=>ele.text==text);
    console.log(ind,text);
    arr.splice(ind,1);

    this.setState({
      todos:arr
    })
    // complete the function to remove the Todo from the list
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        
        <Form handleAdd={this.handleAdd} />
        <List list = {this.state.todos}
        remove = {this.handleRemove} />
      </div>
    );
  }
}
