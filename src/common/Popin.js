import React, {Component} from 'react';

export default class Popin extends Component{
    render() {
        const {buttonText, content, subContent, customClass} = this.props;
        return(
          <div className={'popin-container ' + customClass}>
              <div className='popin-content'>
                {content}<br/>
                <button className={'button ' + customClass} onClick={this.props.clickHandler}>{buttonText}</button>
              </div>
          </div>
        );
    }
}