import React from 'react';
import './styles/Button.css'

const ButtonSubmit = ({ name }) => {
  return (
    <>
      <button className='submit-button-auth'>
        {name}
      </button>
    </>
  );
}

export default ButtonSubmit;