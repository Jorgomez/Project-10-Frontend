import Swal from 'sweetalert2'
import { Header } from '../../../components/Header/Header'
import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { Events } from '../../../pages/Events/Events'
import { API } from '../../API/API'

export const loginCall = async (e) => {
  e.preventDefault()
  const [nameInput, passwordInput] = e.target
  const body = {
    userName: nameInput.value,
    password: passwordInput.value
  }
  const main = document.querySelector('main')
  const removeLoading = showLoading(main, 'Login User...')
  try {
    const res = await API({
      endpoint: '/users/login',
      method: 'POST',
      body
    })
    if (res.error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: res.error,
        footer: 'Please use a different username or password'
      })
      removeLoading()
      return
    }

    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res.user))
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: `Welcome, ${res.user.userName}. You have been successfully logged in!`,
      timer: 3000,
      showConfirmButton: false
    })
    Header()
    Events()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Login Error',
      text: error,
      footer: 'Something went wrong whit the Login. Please try again.'
    })
  }
}
