import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import {addGuest, removeGuest} from './ducks/guestList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text);
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button onClick={() => this.props.removeGuest(i)} type="" className="">Remove</button>
              </div>
            )
          })}
        </ul>
        <form onSubmit={this.handleSubmit} className="add-guest">
          Add guest: <input type="" className="" value={this.state.text} onChange={this.handleInputChange}/>
          <button type="" className="">Add</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps, {addGuest, removeGuest})(App);
