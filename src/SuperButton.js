import React, { Component } from 'react';

class SuperButton extends Component {
  render() {
    const {content, onButtonClick} = this.props;
    return (
      <div>
        <button className="button" onClick={onButtonClick}>{content}</button>
      </div>
    );
  }
}
export default SuperButton;
