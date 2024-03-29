import React from 'react';
import axios from 'axios'

class Form extends React.Component{
	state = { userName: ''}
  
	handleSubmit = (event) => {
   	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then(resp => 
      {
      	this.setState({userName:''});
      	this.props.addCard(resp.data)
      });	
  }

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
        <input type="text" 
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value})}
          placeholder="Github username"
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}




export default Form;