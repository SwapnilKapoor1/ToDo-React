import { Component } from "react";

export class Todo extends Component {
  render() {
    const remove=this.props.remove;
    return (
      <div className="todo">
        <p>{this.props.text}</p>
        <button onClick={()=>remove(this.props.text)}>x</button>
      </div>
    );
  }
}
