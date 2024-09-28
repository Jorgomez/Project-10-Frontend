import { button } from '../../components/Button/Button'

import { LoginForm } from '../../components/LoginForm/LoginForm'
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'
import {
  switcherArtLogin,
  switcherArtRegister
} from '../../components/SwitcherFormBox/SwitcherFormBox'

import { loginCall } from '../../utils/Functions/Calls/loginCall'
import { randerPage } from '../../utils/Functions/functions/randerPage'
import { registerCall } from '../../utils/Functions/Calls/registerCall'
import './RegisterLogin.css'
import { goToUrl } from '../../utils/Functions/functions/goToUrl'

export const RegisterLogin = async () => {
  let isLogin = false
  const section = randerPage('RegisterLogin')
  const form = document.createElement('form')
  form.className = 'registerLoginForm'
  const switcherFormBox = document.createElement('div')
  switcherFormBox.className = 'switcherFormBox'
  RegisterForm(form)

  const switchRegisterButton = button({
    text: isLogin ? 'Go to Register form' : 'Go to Login form',
    className: 'switchRegisterButton',
    fnc: () => {
      toggleForm()
    }
  })

  const switchRegisterButtonMovile = button({
    text: isLogin ? 'Go to Register form' : 'Go to Login form',
    className: 'switchRegisterButtonMovile',
    fnc: () => {
      toggleForm()
    }
  })

  const toggleForm = () => {
    isLogin = !isLogin
    if (isLogin) {
      LoginForm(form)
      switchRegisterButton.textContent = 'Go to Register form'
      switchRegisterButtonMovile.textContent = 'Go to Register form'
      switcherArtLogin(switcherFormBox)
    } else {
      RegisterForm(form)
      switchRegisterButton.textContent = 'Go to Login form'
      switchRegisterButtonMovile.textContent = 'Go to Login form'
      switcherArtRegister(switcherFormBox)
    }
  }
  switcherFormBox.append(switchRegisterButton)
  section.append(switchRegisterButtonMovile)
  section.append(form, switcherFormBox)

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      switcherFormBox.style.opacity = '0'
      switcherFormBox.style.pointerEvents = 'none'
    } else {
      switcherFormBox.style.opacity = '1'
      switcherFormBox.style.pointerEvents = 'all'
    }
  }

  window.addEventListener('resize', handleResize)
  handleResize()

  switcherArtRegister(switcherFormBox)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const submitButtonText = document.querySelector('form button').textContent
    if (submitButtonText === 'Register') {
      registerCall(e)
    } else {
      loginCall(e)
    }
  })
}
