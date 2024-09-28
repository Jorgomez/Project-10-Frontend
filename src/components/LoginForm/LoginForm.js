import { button } from '../Button/Button'
import { FieldForm } from '../FieldForm/FieldForm'

export const LoginForm = (form) => {
  form.className = 'loginForm'
  form.innerHTML = `<img class="logo" src="https://res.cloudinary.com/digcf0lad/image/upload/v1711666423/Portafolio/logo_1_bivhav.png"><h2 class="LoginFormTitle">Login Here!
  </h2>
  ${FieldForm({ labelText: 'Name', placeholder: 'Introduce User Name' })}
  ${FieldForm({
    labelText: 'Password',
    placeholder: 'Introduce password',
    InputType: 'password'
  })}
  `
  form.append(
    button({ text: 'Login', className: 'loginButton', fnc: () => {} })
  )
}

// form.append(
//   button({ text: 'Login', className: 'switchRegisterButton', fnc: () => {} })
// )
