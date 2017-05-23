import React from 'react';
import Form  from './form'
import CardList from './cardList'

class App extends React.Component{
	state = { cards: [] };
    
  appendCard = (cardInfo) => {
    this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  }
  
  render() {
    return (
    	<div>
        <Form addCard={this.appendCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
