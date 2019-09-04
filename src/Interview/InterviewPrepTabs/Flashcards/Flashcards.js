import React from 'react'
import ReactDOM from 'react-dom'
import { Map, List, fromJS } from 'immutable';
import {times} from 'lodash.times'
import './flashcards.css'
import flashdata from './flashcardsData.json'
import { element } from 'prop-types';
import { Fraction, toTex } from 'algebra.js';
import { Node, Context, Provider } from 'react-mathjax';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Ohms_law,Equations_nzero,Equations_nlin,Equations_nsat,Equations_pzero,Equations_plin,Equations_psat} from './Equations/EasyEquations'
import data from './flashcardsData.json'
import { fadeIn } from 'react-animations'

class CreateCard extends React.Component {
    constructor() {
      super();
      this.state = {
        word: '',
        description: '',
        showError: false
      }
    }
      
    hideError() {
      this.setState({showError: !this.state.showError});
    }
    
    render() {
      const errorMessage = this.state.showError ? 'Please fill in the word and description!' : '';
      return (
        <div className='create-card'>
          <div 
            className='create-card__shadow'
            onClick={() => {
              this.props.onShadowClick();
            }}
          >
          </div>
          <div className='create-card__body'>
            <h1>Create New Card</h1>
            <div className='create-card__input-wrapper'>
              <input 
                id='word' 
                placeholder="Word i.e. 'React'"
                value = {this.state.word}
                onChange = {(e) => this.setState({word: e.target.value})}
              />
              <input 
                id='description' 
                placeholder="Description i.e. 'A front end js framework.'"
                value = {this.state.description}
                onChange = {(e) => this.setState({description: e.target.value})}
              />
              <br/>
              <button 
                id='create-card__button'
                onClick={() => {
                 
                  if (this.state.word.length === 0 || this.state.description.length === 0) {
                    this.setState({showError: !this.state.showError});
                    setTimeout(() => this.hideError(), 2000);
                  } else {
                    this.props.onShadowClick();
                    const word = new Map({word: this.state.word, description: this.state.description});
                    this.props.onCreateCard(word);  
                  }
                }}
              >
                  Create!
              </button>
              <div className='create-card__error'>
                {errorMessage}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
 
  class Card extends React.Component {
    
    constructor() {
      super();
      this.state = {
        showAnswer: false
      }
    }
   
    render() {
      const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
      const iconClass = this.state.showAnswer ? 'reply' : 'share';
      const cardClass = this.state.showAnswer ? 'back' : '';
      const contentClass = this.state.showAnswer ? 'back' : 'front';
      const actionClass = this.state.showAnswer ? 'active' : '';
  
      return (
        <div 
          className={`card ${cardClass}`}
          onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
        >
        {/* <span className='card__counter'>{this.props.cardNumber + 1}</span> */}
          <div 
            className='card__flip-card'
            onClick={ () => {
              this.setState({showAnswer: !this.state.showAnswer});
            }}
          >
  
            <span className={`fa fa-${iconClass}`}/>
          </div>
          <div className={`card__content--${contentClass}`}>
            {content}
          </div>
          {/* <div className={`card__actions ${actionClass}`}> */}
            <div 
              className='card__prev-button'
              onClick={() => {
                this.props.showPrevCard();
                this.setState({showAnswer: false});
              }}
            >
              Prev
            </div>
            <div 
               className='card__next-button'
              onClick={() => {
                this.props.showNextCard();
                this.setState({showAnswer: false});
              }}
            >
              Next
            </div>
          {/* </div> */}
        </div>
      );
    }
  }
  
  class CardContainer extends React.Component {
    constructor() {
      super();
      this.state = {
         cards: 
         fromJS([
        {
          word: <div>
            <p>Ohm’s Law</p>
            <p>The resistor's current I in amps (A) is equal to the resistor's voltage V in volts (V) divided by the resistance R in ohms (Ω)</p>
            </div>,
          description:<Ohms_law />,
        }, {
          word: 'Reggae',
          description: 'Music like Bob Marley, man.',
        }, {
          word: 'Folk',
          description: 'Music like Bob Dylan, man.',
        },
        {
            word:"First Flashcard",
            description: "First!"
        },
        {
            word:"Second Flashcard",
            description:"second description"
        },
        {
            word:"Third Flashcard",
            description:"third description"
        },
        {
            word:"Fourth Flashcard",
            description:<Equations_nsat />
        },
        {
            word:"Fifth Flashcard",
            description:<Equations_nzero />
        },
        {
            word:"Sixth Flashcard",
            description:<Equations_nlin />

        },


      ]),
        //cardNumber: 0
        cardNumber: Math.floor(Math.random() * (8 - 1 + 1)) + 1
      };
      this.boundCallback = this.hideCreateCard.bind(this);
      this.boundCreateCard = this.setCard.bind(this);
      this.boundShowPrevCard = this.showPrevCard.bind(this)
      this.boundShowNextCard = this.showNextCard.bind(this);
    }
    
    hideCreateCard() {
      this.setState({showModal: false});
    }
    
    showNextCard() {
      if ((this.state.cardNumber + 1) !== this.state.cards.size) {
        this.setState({cardNumber: this.state.cardNumber += 1});
      }
    }
    
    showPrevCard() {
      if (this.state.cardNumber !== 0) {
        this.setState({cardNumber: this.state.cardNumber -= 1});
      }
    }
    
    setCard(card) {
      const newCards = this.state.cards.push(card);
      this.setState({cards: newCards});
    }
    
    generateDots() {
      const times = this.state.cards.size;
      let arr = [];
      [...Array(times)].map((e, num) => {
        arr.push(
        )
      });
      return arr;
    }
    
    generateCards() {
      const cards = this.state.cards;
       const cardsList = cards.map((card) => {
          return (
            <Card 
              frontContent={card.get('word')}
              backContent={card.get('description')}
              showNextCard={this.boundShowNextCard}
              showPrevCard = {this.boundShowPrevCard}
              //cardNumber={this.state.cardNumber}
            />
            );
        })
       return(cardsList.toJS()[this.state.cardNumber]); 
    }
    render() {
      return (
        <div>
          <span 
              className='card-container__icon  fa fa-plus' 
              onClick={() => {
                this.setState({showModal: !this.state.showModal});
              }}
            />
          {this.state.showModal 
            ? <CreateCard 
                onShadowClick={this.boundCallback}
                onCreateCard={this.boundCreateCard}
              /> 
            : ''}
          {this.generateCards()}
        </div>
     );
    }
  }
  
  class Main extends React.Component {
    render() {
      return (
        <div className='wrapper'>
          <h2 id="heading">Flahscards</h2>
          <div className='content-wrapper'>
            <CardContainer />
          </div>
        </div>
      );
    }
  }
  
  function Flashcards(){
      return(<div> 
                <Main />               
            </div>)
  }
export default Flashcards