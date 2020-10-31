import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [clock, setClock] = useState(new Date());
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      timeClick();
      console.log('This will run every minute!');
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const timeClick = () => {
    setClock(new Date());
    console.log(clock);
  };
  const clockTime = () => {
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let day = clock.getDay() - 1;
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let clockTime = `${days[day]}, ${hours}:${minutes}`;
    console.log(clockTime);
    setTime(clockTime);
  };
  useEffect(() => {
    clockTime();
    console.log('shiats');
  }, [clock]);

  const linkStyle = {
    color: 'white',
    listStyle: 'none',
    marginRight: '35px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div className="content">
      <div className="header">
        <h1>Do you know what really grinds my gears?</h1>
        <div className="text">
          <p>It's</p>
          <p className="clock">{time}</p>
          <p>and noone is buying in our shop!</p>
          <Link style={linkStyle} to="/shop">
            <button className="shop-button">
              <h1>Shop now!</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
