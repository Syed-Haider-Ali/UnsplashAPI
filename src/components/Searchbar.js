import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Searchbar extends React.Component{

  // onInputChange(event){
  //   console.log(event.target.value)
  // }  this is an uncontrolled way to handle events

  state = {term: ''}
  // this is an controlled way to handle events
  onFormSubmit = (e)=> {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
   // console.log(this.state.term) //but we dont need searchbar component to make API request! App.js will do this
  } // to get rid of this (Uncaught TypeError: Cannot read properties of undefined (reading 'state')) error
   // used arrow function above
  
  render(){
    return (
      <div>
        {/* // when Enter key is pressed by deafulat form reloaded  */}
      <form onSubmit={this.onFormSubmit}>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
      <input type="text" className="form-control" id="search" aria-describedby="emailHelp"
      // onChange={this.onInputChange}  it is an uncontrolled way
      value={this.state.term}
      onChange={(e)=> {this.setState({term: e.target.value})}}
      />
      {/* if use {this.onInputChange} function will call only when input will get changed --recommended  */}
      {/* if used {this.onInputChange()} function will call when the page will render  */}

    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
      </div>
    )
  }
}


export default Searchbar