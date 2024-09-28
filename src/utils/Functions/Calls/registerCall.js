import Swal from 'sweetalert2'
import { Header } from '../../../components/Header/Header'
import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { Events } from '../../../pages/Events/Events'

import { API } from '../../API/API'

export const registerCall = async (e) => {
  e.preventDefault()

  const [nameInput, passwordInput, emailInput, profileImgInput] = e.target

  const formDataRegister = new FormData()
  formDataRegister.append('email', emailInput.value)
  formDataRegister.append('userName', nameInput.value)
  formDataRegister.append('password', passwordInput.value)
  formDataRegister.append('profileImg', profileImgInput.files[0])

  const bodyLogin = {
    userName: nameInput.value,
    password: passwordInput.value
  }
  const main = document.querySelector('main')
  const removeLoading = showLoading(main, 'Registering user...')
  try {
    const res = await API({
      endpoint: '/users/register',
      method: 'POST',
      body: formDataRegister,
      isJSON: false
    })
    if (res.error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: res.error,
        footer: 'Please try again or use a different username.'
      })
      removeLoading()
      return
    } else {
      localStorage.setItem('user', JSON.stringify(res))
    }
    try {
      const resLogin = await API({
        endpoint: '/users/login',
        method: 'POST',
        body: bodyLogin
      })
      if (resLogin.error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: resLogin.error,
          footer: 'Please try again or use a different username or password.'
        })
        removeLoading()
        return
      }

      localStorage.setItem('token', resLogin.token)
      Swal.fire({
        icon: 'success',
        title: 'Registration and Login Successful!',
        text: `Welcome, ${resLogin.user.userName}. You have been successfully registered and logged in!`,
        timer: 3000,
        showConfirmButton: false
      })
      removeLoading()
      Header()
      Events()
    } catch (loginError) {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: loginError.message,
        footer: 'Please try again.'
      })
      removeLoading()
      return
    }
  } catch (registerError) {
    Swal.fire({
      icon: 'error',
      title: 'Registration Error',
      text: registerError.message,
      footer: 'Something went wrong whit Registration. Please try again.'
    })
    removeLoading()
  }
}
