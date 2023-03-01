import React from 'react';
import Checkin from './Checkin'
import './styles/List.css'

const List = ({ checkins }) => {
  return (
    <>
      <span className='checkin-description'>Dias Anteriores</span>
      <div className='container-checkin'>
        {
          checkins.map((checkin) => {
            return <Checkin key={checkin.id} checkin={checkin} />
          })
        }
      </div>
    </>
  );
}

export default List;