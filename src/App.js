import {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-bar/search-bar.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      'characters' : [],
      'searchField': ''
    }

  }

  handleChange = e => { 
    this.setState({searchField:e.target.value})
  }

  render() {
  const { characters, searchField} = this.state;
  const filteredCharacters = characters.filter(character=>character.name.toLowerCase().includes(searchField.toLowerCase()))
  return (    
    <div className="App">
      <h1> HP Rolodex </h1>
      <SearchBox placeholder = 'search HP characters' handleChange={this.handleChange}></SearchBox>
      <CardList characters = {filteredCharacters}/>       
    </div>
  );}

  componentDidMount(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(hpCharacters => this.setState({characters:hpCharacters}))
  }
}

export default App;
