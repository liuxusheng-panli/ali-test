import React, { useState, useEffect } from 'react';
import './index.less'
const CountdownTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [remainingTime, setRemainingTime] = useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0) {
        clearTimeout(timer);
      } else if (remainingTime.minutes === 0 && remainingTime.seconds === 0) {
        setRemainingTime({
          hours: remainingTime.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (remainingTime.seconds === 0) {
        setRemainingTime({
          hours: remainingTime.hours,
          minutes: remainingTime.minutes - 1,
          seconds: 59,
        });
      } else {
        setRemainingTime({
          hours: remainingTime.hours,
          minutes: remainingTime.minutes,
          seconds: remainingTime.seconds - 1,
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime]);

  return (
    <div className='time-rate'>
      <span className='bgc'>{remainingTime.hours.toString().padStart(2, '0')}h</span>
      <span>{remainingTime.minutes.toString().padStart(2, '0')}m</span>
      <span>{remainingTime.seconds.toString().padStart(2, '0')}s</span>
    </div>
  );
};

export default CountdownTimer;
