import { button } from '../Button/Button'
import { FieldForm } from '../FieldForm/FieldForm'
import './RegisterForm.css'

export const RegisterForm = (form) => {
  form.className = 'registerForm'
  form.innerHTML = `<img class="logo" src="https://res.cloudinary.com/digcf0lad/image/upload/v1711666423/Portafolio/logo_1_bivhav.png"><h2 class="RegisterFormTitle">Register Here !
  </h2>
  ${FieldForm({ labelText: 'Name', placeholder: 'Jhon Cardiel' })}
  ${FieldForm({
    labelText: 'password',
    placeholder: 'choose a secure password',
    InputType: 'password'
  })}
  ${FieldForm({
    labelText: 'Email',
    placeholder: 'jhon@gmail.com',
    InputType: 'email'
  })}
  ${FieldForm({
    labelText: 'Profile Picture',
    placeholder: 'attach a picture of you',
    InputType: 'file',
    required: 'false'
  })}
  `
  form.append(
    button({ text: 'Register', className: 'registerButton', fnc: () => {} })
  )
}
