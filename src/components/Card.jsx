import React from 'react'


class Card extends React.Component {
  render () {
    return (
      <div className="card" style={{width : '250px'}}>
      <img src={this.props.flag} class="card-img-top" alt="..."/>
      <div className="card-body">
        <br />Name : {this.props.name}
        <br />Capital : {this.props.capital}
        <br />Population : {this.props.population}
        <br />Region : {this.props.region}
      </div>
    </div>

      )
  }
}

export default Card