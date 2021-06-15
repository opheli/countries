import React from 'react';
import Button from "./components/Button.jsx"
import Card from "./components/Card.jsx"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  async componentDidMount() {
    try {
      this.getCountry('france')
    } catch (error) {
      console.error(error)
    }
    // fetch('https://restcountries.eu/rest/v2/name/france')
    //   .then(result => result.json())
    //   .then(country => console.log('METHODE THEN', country))
    //   .catch(error => console.error(error))
  }

  getCountry = async (country) => {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      const countryResult = await result.json()
      this.setState({
        name: countryResult[0].name,
        capital: countryResult[0].capital,
        flag: countryResult[0].flag,
        population: countryResult[0].population,
        region: countryResult[0].region,
      })
    } catch (error) {
      console.error(error)
    }
  }


  render() {
    return (
      <div className="text-center">
        <h1>Country selector</h1>
        <Button onClick={() => this.getCountry('france')}>France</Button >
        <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>
        <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>
        <Button onClick={() => this.getCountry('spain')}>Spain</Button>
        {/* <Card
          flag = {this.state.flag}
          name = {this.state.name}
          capital = {this.state.capital}
          population = {this.state.population}
          region = {this.state.region} /> */}
        <Card {...this.state} />
      </div>
    );
  }
}

export default App
