import { createEventCall } from '../../utils/Functions/Calls/createEventCall'
import { button } from '../Button/Button'
import { FieldForm } from '../FieldForm/FieldForm'
import './CreateEventForm.css'

export const CreateEventForm = async (form) => {
  form.className = 'CreateEventForm'
  form.innerHTML = `<img class="logo" src="https://res.cloudinary.com/digcf0lad/image/upload/v1711666423/Portafolio/logo_1_bivhav.png"><h2 class="createEventTitle">What are you planning?
  </h2>`

  form.innerHTML += `
    ${FieldForm({
      labelText: 'Title',
      placeholder: 'Event Name'
    })}
    ${FieldForm({
      labelText: 'Date of Event',
      placeholder: '04/04/2024',
      InputType: 'date'
    })}
    <div class="Location"> ${FieldForm({
      labelText: 'City',
      placeholder: 'Cobano'
    })} ${FieldForm({
    labelText: 'Country',
    placeholder: 'Costa Rica'
  })}   </div> 
    ${FieldForm({
      labelText: 'Description',
      placeholder: 'Short description about it'
    })} 
    ${FieldForm({
      labelText: 'Poster',
      placeholder: 'attach a poster of your Event',
      InputType: 'file',
      required: 'false'
    })}
    `
  form.append(
    button({
      text: 'Create Event',
      className: 'createEventButton',
      fnc: (e) => {}
    })
  )
  // form.addEventListener('submit', (e) => createEventCall(e))
}

{
  /* <div class="location">${FieldForm({
      labelText: 'Street',
      placeholder: 'hasting street, 39'
    })} ${FieldForm({ labelText: 'ity', placeholder: 'Cobano' })} ${FieldForm({
    labelText: 'country',
    placeholder: 'Costa Rica'
  })}   </div>  */
}
