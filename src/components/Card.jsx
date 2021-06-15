import React from 'react'


class Card extends React.Component {
  render () {
    return (
      <div className="card mx-auto" style={{width : '300px'}}>
      <img src={this.props.flag} class="card-img-top" alt="flag"/>
      <div className="card-body">
        <h2><span class="material-icons">public</span>  Country: {this.props.name}</h2>
        <h3>Capital: {this.props.capital}</h3>
        <p><span class="material-icons">people</span>   Population: {this.props.population}</p>
        <p>Region: {this.props.region}</p>
        
      </div>
    </div>

      )
  }
}

export default Card