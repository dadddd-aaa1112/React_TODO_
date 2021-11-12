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
    this.props.deleteBlock(this.props.index);
  };

  save = () => {
    this.props.update(this.refs.newTxt.value, this.props.index);
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
        <textarea ref="newTxt" defaultValue={this.props.children}></textarea>
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

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  deleteElem = (i) => {
    let arr = this.state.tasks;
    arr.splice(i, 1);
    this.setState({
      tasks: arr
    });
  };

  updateElem = (text, i) => {
    let arr = this.state.tasks;
    arr[i] = text;
    this.setState({
      tasks: arr
    });
  };

  addElem = (elem) => {
    let arr = this.state.tasks;
    arr.push(elem);
    this.setState({
      tasks: arr
    });
  };

  eachElem = (elem, i) => {
    return (
      <Task
        key={i}
        index={i}
        update={this.updateElem}
        deleteBlock={this.deleteElem}
      >
        {elem}
      </Task>
    );
  };

  render() {
    return (
      <div className="Field">
        <button onClick={this.addElem.bind(null, "Simple task")}>
          Add task
        </button>
        {this.state.tasks.map(this.eachElem)}
      </div>
    );
  }
}

ReactDOM.render(<Field />, document.querySelector("#root"));
