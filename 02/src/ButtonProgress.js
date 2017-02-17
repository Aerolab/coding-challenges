    // stroke-dashoffset: 846;
    // stroke-dasharray: 423;

// require('./Button.scss')
import React from 'react';
import ReactDOM from 'react-dom';

export default class ButtonProgress extends React.Component {
  render () {

    var percent = (this.props.percent * 423) / 100

    var progressStyle = {
      strokeDashoffset: percent + 423,
      strokeDasharray: 423,
      transition: 'all 400ms ease',
      stroke: 'rgba(255,255,255,1)',
      strokeWidth: '2px'
    }

    var backgroundStyle = {
      stroke: 'rgba(255,255,255,0.3)',
      strokeWidth: '2px'
    }

    var className = 'button-progress'
    if (this.props.percent === 100) {
      className += ' complete'
    }

    return (
      <a href="http://careers.aerolab.co/" target="_blank" className={className}>
        Join Us
        <svg xmlns="http://www.w3.org/2000/svg" width="184" height="54" viewBox="0 0 184 54">
          <path style={backgroundStyle} fill="none"  d="M98,229 L98,229 C98,214.641 109.641,203 124,203 L254,203 C268.359,203 280,214.641 280,229 C280,243.359 268.359,255 254,255 L124,255 C109.641,255 98,243.359 98,229" transform="translate(-97 -202)"/>
          <path style={progressStyle} fill="none" d="M98,229 L98,229 C98,214.641 109.641,203 124,203 L254,203 C268.359,203 280,214.641 280,229 C280,243.359 268.359,255 254,255 L124,255 C109.641,255 98,243.359 98,229" transform="translate(-97 -202)"/>
        </svg>
      </a>
    )

  }
}