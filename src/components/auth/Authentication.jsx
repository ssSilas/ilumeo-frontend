import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signIn } from '../../api/user';
import ButtonSubmit from '../assets/ButtonSubmit';
import './styles/Authentication.css'

const Authentication = ({ setCodeUser }) => {
  const [error, setError] = useState("");
  const [login, setLogin] = useState("");

  const navigate = useNavigate()
  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const reqSignIn = await signIn(login);
      setCodeUser(reqSignIn.usercode)
      navigate("/register-point")
    } catch (error) {
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='container-auth' >
          <div className='container-title-auth'>
            <span type="text" className='title-auth' />
            Ponto <strong> Ilumeo</strong>
            <span />
          </div>

          <div className='container-user-code'>
            <label className='label-user-code-item'>
              Código de usuário
            </label>
            <input type="text" className='input-user-code-item' placeholder='Insira o código' onChange={changeLogin} />
          </div>

          <ButtonSubmit name={'Confirmar'} />
        </div>
      </form>
    </>
  );
}

export default Authentication;