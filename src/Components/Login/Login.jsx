import React from 'react'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordCreate from './LoginPasswordCreate'
import LoginPasswordReset from './LoginPasswordReset'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import NotFound from '../NotFound'

const Login = () => {
  const {login} = React.useContext(UserContext)

  if(login === true) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="criar" element={<LoginPasswordCreate/>}/>
          <Route path="perdeu" element={<LoginPasswordLost/>}/>
          <Route path="resetar" element={<LoginPasswordReset/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      
    </section>
  )
}

export default Login