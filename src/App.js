import './App.css';
import React from 'react';
import imageMe from '/Users/user/Desktop/GOMYCODE/React/checkpoint_state/src/moi.jpeg';
import EffetChrono from './effetChrono'

class App extends React.Component {

  state = {
    fullName: "",
    bio:"",
    imgSrc: "",
    profession:"",
    show: true
  };
  
  handleClick=()=>{(this.state.show===true)? 
  this.setState({ fullName:"FALL MAME BOU",
                  bio:" ETUDIANT EN MASTER MATHEMATIQUES",  
                  imgSrc: <img src={imageMe} className="App-logo" alt="imageInSrc" /> ,
                  profession:"DEVELOPPEUR WEB",
                  show: false  
                }) 
  : 
  this.setState({ fullName:"",
                  bio:"",  
                  imgSrc: "",
                  profession:"",
                  show: true 
                }) 
  };

  render() {
    return (
      <>
        <h3 style={{backgroundColor:"#dc143c",textAlign:"center"}}>
          <button onClick={this.handleClick}>CLICK ICI POUR VOIR MON PROFIL </button>
          <EffetChrono/>
          <p>{this.state.fullName}</p> 
          <p>{this.state.bio}</p> 
          <p>{this.state.imgSrc}</p> 
          <p>{this.state.profession}</p>
        </h3>
      </>
    );
  }
}

export default App;