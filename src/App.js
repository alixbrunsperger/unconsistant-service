import React, { Component } from 'react';
import './style.css';
import SuperButton from './SuperButton';
import { BackendService } from './BackendService';
import Popin from "./common/Popin";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        message: "",
        isValid: false
    };
  }
  backend = new BackendService();

  buttonClick = (e) => {
    this.backend.getData().then(
      success => {
        success.json().then(obj => {
            this.setState({
                message: obj.message,
                isValid: true
            });
        })
      },
      error => {
        error.text().then(text => {
            this.setState({
                message: `Error: ${error.status} - ${text}`,
                isValid: false
            });
        });
      }
    );
  }

  resetMessage = (e) => {
      this.setState({
          message: '',
      });
  }
  
  render() {

    return (
      <div className='main-container'>
        <header className='header'>
          <h1 className='title'>Welcome to Combination AB front end developer test</h1>
        </header>
        <div className='content'>
            {!this.state.isValid && <SuperButton content={'Start the service'} onButtonClick={this.buttonClick}></SuperButton>}
            {
                (this.state.isValid ?
                        <div className='success'>
                            <img src='/images/valid.png' /> <br/>
                            <span className="text-big">Success !</span><br/>
                            You can continue to use our service!
                        </div>
                        :
                        (this.state.message !== '' ?
                            <Popin
                                clickHandler={this.resetMessage}
                                buttonText='Back to the service'
                                content=''
                                customClass="error"
                            />
                            :'')
                )
            }
        </div>
          <footer className="footer">
              Need some technical help ? Feel free to drop an email to help@solution.com
          </footer>
      </div>
    );
  }
}

export default App;


// Style popin
//style button
// style success

