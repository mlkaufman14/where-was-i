import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: [
        {
          id: 1,
          name: 'Phoenix'
        },
        {
          id: 2,
          name: 'Tulum'
        },
        {
          id: 3,
          name: 'Punta Cana'
        }
      ]

    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.locations.map(location => <h1 key={location.id}> {location.name} </h1> )
        }
      </div>
    );
  }
}

export default App;
