import { CreateEventForm } from '../../components/CreatEventForm/CreateEventForm'
import { createEventCall } from '../../utils/Functions/Calls/createEventCall'
import { randerPage } from '../../utils/Functions/functions/randerPage'
import './CreateEvents.css'

export const CreateEvents = async () => {
  const section = randerPage('createEvent')
  const form = document.createElement('form')
  const boxEventCreated = document.createElement('div')

  boxEventCreated.innerHTML = `<article class="artBoxEvent">
<h2>Create your Event</h2>
<p>Create memories for you and your community to enjoy moments</p></article>`
  boxEventCreated.className = 'boxEventCreated'
  boxEventCreated.classList.add('movileClass')
  CreateEventForm(form)
  form.addEventListener('submit', (e) => createEventCall(e))
  section.append(form, boxEventCreated)
}
