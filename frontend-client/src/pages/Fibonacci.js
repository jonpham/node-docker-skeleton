import React, { Component } from 'react';
import axios from 'axios';

import { apiRoute} from '../constants';

class Fibonacci extends Component {
  state = {
    seenIndices: [],
    values: {},
    index: ''
  };

  componentDidMount () {
    this.fetchValues();
    this.fetchIndices();
  }

  async fetchValues() {
    const values = await axios.get(`${apiRoute}/values/current`);
    this.setState({
      values: values.data
    })
  }

  async fetchIndices() {
    const seenIndices = await axios.get(`${apiRoute}/values/all`);
    this.setState({
      seenIndices: seenIndices.data
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`${apiRoute}/values`, {
      index: this.state.index
    });

    this.setState({
      index: ''
    }, () => {
      this.fetchValues();
      this.fetchIndices();
    });
  };

  get renderSeenIndices () {
    return this.state.seenIndices.map(({ number }) => number).join(', ');
  }

  get renderCalculatedValues () {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}.
        </div>
      )
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input 
            value={this.state.index}
            onChange={ event => this.setState({index: event.target.value})}
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
          {this.renderSeenIndices}
        <h3>Calculated Values:</h3>
          {this.renderCalculatedValues}
      </div>
    );
  }
}

 export default Fibonacci;

