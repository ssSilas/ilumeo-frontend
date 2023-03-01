import React from 'react';
import * as dayjs from 'dayjs'
import './styles/Checkin.css'

const Checkin = ({ checkin }) => {
  return (

    <div className='checkin-container'>
      <div className='item-checkin'>
        <span className='date-checkin' >{dayjs(checkin.date).format('DD/MM/YY')}</span>
        <span className='hour-checkin' >{checkin.time}</span>
      </div>
    </div>

  );
}

export default Checkin;