import React from "react";
import ReactDOM from "react-dom";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  edit = () => {
    this.setState({ edit: true });
  };

  remove = () => {
    alert("Нажата кнопка удалить");
  };

  save = () => {
    this.setState({ edit: false });
  };

  rendNorm = () => {
    return (
      <div className="box">
        <div className="text">{this.props.children}</div>
        <button onClick={this.edit} className="btn light">
          Редактировать
        </button>
        <button onClick={this.remove} className="btn red">
          Удалить
        </button>
      </div>
    );
  };

  rendEdit = () => {
    return (
      <div className="box">
        <textarea defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className="btn success">
          Сохранить
        </button>
      </div>
    );
  };

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}

ReactDOM.render(
  <div className="field">
    <Task>Hey, it is me!</Task>
    <Task>Task number 2!</Task>
    <Task>Hello World!</Task>
  </div>,
  document.querySelector("#root")
);
