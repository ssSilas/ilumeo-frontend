import React from 'react';
import ButtonSubmit from '../assets/ButtonSubmit'
import './styles/RegisterPoint.css'
import useFetchCheckin, { createCheckin } from '../../api/checkin.js'
import List from './List';
import getUsercode from '../../api/usercode';
import * as dayjs from 'dayjs'

const RegisterPoint = () => {
  const { data, isFetching } = useFetchCheckin()
  const user = getUsercode()
  const time = dayjs().format('H[h] mm[m]')
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      await createCheckin(user)
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className='register-point'>
      <div className='header-register-point'>
        <span className='title-header-register-point'>Relogio de ponto</span>
        <div className='user-header-register-point'>
          <span className='user-code-header'>{`# ${user}`}</span>
          <span>Usuario</span>
        </div>
      </div>

      <div className='container-hours-balance'>
        <span className='hours-balance'>{time}</span>
        <span className='hours-balance-description'>
          Horas de hoje
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <ButtonSubmit name={'Hora de entrada'} />
      </form>

      <div>
        {!isFetching ? <List checkins={data} /> : ''}
      </div>
    </div>
  );
}

export default RegisterPoint;