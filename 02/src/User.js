require('./User.scss')
import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {
  render () {
    const user = this.props.user
    var userClass = ['avatar'];
    if (user.fav) userClass += ' fav';
    var eventClass = ['event']
    if (user.nextEvent && user.nextEvent.near) eventClass += ' featured';

    if (!user.nextEvent) {
      user.nextEvent = {
        title: 'No hay próximo'
      }
    }

    return (
      <div className="user">
        <div className={userClass}>
          <img src={user.img} alt=""/>
        </div>
        <h3 className="name">{user.name}</h3>
        <div className={eventClass}>
          <h4 className="label"> {user.nextEvent.title} </h4>
          {
            user.nextEvent.date ? (
              <button className="assist">
                {
                  user.nextEvent.near ? (
                    <img className="icon" src="https://cdn.aerolab.co/coding-challenge/02/cal-grey.svg" alt="" />
                  ) : (
                    <img className="icon" src="https://cdn.aerolab.co/coding-challenge/02/cal-white.svg" alt="" />
                  )
                }
                <span> {user.nextEvent.date} </span>
              </button>
            ) : (
              <button className="assist"> (?) </button>
            )
          }
        </div>
      </div>
    )

  }
}