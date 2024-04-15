import { Component } from "react";
import { Todo } from "./Todo";


export class List extends Component {
  render() {
    const { list ,remove } = this.props;
    return (
      <div className="list">
        {list.map((item,index) => (
          <div key={index}>
            
          <Todo text= {item.text}
          remove={remove}/>
            </div>
        ))}
      </div>
    );
  }
}