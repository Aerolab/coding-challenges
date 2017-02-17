require('./index.scss') // root stylesheeet - .css, .scss or .sass

import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import resemble from 'resemblejs';

import domtoimage from 'dom-to-image';
import { team } from './team.json'




class Grid extends React.Component {
  render () {
    return (
      <div id="user-code" className="app">
        <div className="user-grid">
          {
            team.map(function(user) {
              return <User key={user.id} user={user} />
            })
          }
        </div>
      </div>
    )

  }
}

class Design extends React.Component {
  render () {
    return (
      <figure id="original" className="design">
        <a href="https://cdn.aerolab.co/coding-challenge/02/Design/" target="_blank">
          <img src="https://cdn.aerolab.co/coding-challenge/02/Design.png" />
        </a>
      </figure>
    )

  }
}

class Button extends React.Component {
  render () {
    var btnClass = 'button';
    if (this.props.active) btnClass += ' active';
    return (
      <button className={btnClass} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )

  }
}

import ButtonProgress from './ButtonProgress';
class Challenge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compare: false,
      misMatchPercentage: 100,
      runningTest: false
    }
  }

  componentDidMount() {
    this.testInterval = setInterval(this.runTest, 5 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.testInterval);
  }

  onCompare = () => {
    this.setState({compare: !this.state.compare})
  };

  runTest = () => {
    // Don't run test while using compare function
    // This breaks canvas
    if (this.state.compare) {
      return;
    }
    // Check for other test running
    if (this.state.runningTest) {
      return;
    }
    this.testDiff();
  };

  testDiff = () => {
    var _this = this
    this.setState({runningTest: true});
    domtoimage.toBlob(document.getElementById('original'))
      .then(function (blobOriginal) {
        domtoimage.toBlob(document.getElementById('user-code'))
          .then(function (blobDev) {
              var diff = resemble(blobDev)
                .compareTo(blobOriginal)
                .scaleToSameSize()
                .ignoreAntialiasing()
                .onComplete(function(data){
                  _this.setState({runningTest: false})
                  var misMatchPercentage = Number(data.misMatchPercentage)
                  if (misMatchPercentage < _this.state.misMatchPercentage) {
                    _this.setState({misMatchPercentage: misMatchPercentage})
                  }
                });
            });
        });
  };

  render () {
    var classNames = 'container'
    if (this.state.compare) classNames += ' compare'
    var showHiringClass = 'button'

    var misMatchPercentage = (100 - this.state.misMatchPercentage)
    // if (misMatchPercentage > 16) showHiringClass += ' tryharder'
    console.log(misMatchPercentage)
    if (misMatchPercentage >= 50) {
      misMatchPercentage = (misMatchPercentage - 50) * 2
      if (misMatchPercentage > 84) {
        misMatchPercentage = 100
      }
    } else {
      misMatchPercentage = 0
    }


    return (
      <div>
        <div className={classNames}>
          <Design />
          <Grid />

        </div>
        <div className="button-container">
          <Button active={this.state.compare} onClick={this.onCompare}>Compare</Button>
          <ButtonProgress percent={misMatchPercentage} />


        </div>
      </div>
    )

  }
}

ReactDOM.render(<Challenge/>, document.getElementById('app'));