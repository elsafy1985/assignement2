import React, { Component } from 'react'

export default class UpdateComponent extends Component {
    constructor() {
        super()
        this.state = {
            text: 'Click me to view Component LifeCycle Update Methods'
        }
        this.changeText = this.changeText.bind(this);
    }
    changeText() {
        this.setState({
            text: 'Component LifeCycle Update Methods appeared in Console'
        })
    }
  static getDerivedStateFromProps(props, state) {
    console.log("Text From getDrivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(props, state) {
    console.log("Text From shouldComponentUpdate")
    return true;
  }
  render() {
    console.log("Text From Render");
    return (
      <div>
        <div className="card text-dark bg-warning mb-3">
            <div className="card-header">Update Component</div>
            <div className="card-body">
                <h5 className="card-title">{this.state.text}</h5>
                <button type="button" className="btn btn-dark" onClick={this.changeText}>Click Me</button>
            </div>
        </div>
      </div>
    )
  }
  getSnapshotBeforeUpdate(props,state) {
    console.log("Text From getSnapshotBeforeUpdate")
    return null;
  }
  componentDidUpdate() {
    console.log("Text From componentDidUpdate")
  }
}
