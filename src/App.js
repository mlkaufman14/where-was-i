import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => this.setState({locations: albums})
    )
  }

  render() {
    return (
      <div className="App">
        {
          this.state.locations.map(location => <h1 key={location.id}> {location.title} </h1> )
        }
      </div>
    );
  }
}

export default App;
