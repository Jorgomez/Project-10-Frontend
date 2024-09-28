import { Events } from '../../pages/Events/Events'
import { button } from '../Button/Button'
import { EventCard } from '../EventCard/EventCard'
import './NewEvent.css'

export const NewEvent = async (CreateEventForm, boxEventCreated, user, res) => {
  boxEventCreated.innerHTML = `<h2 class="titleEventcreated">${user.userName},   your event will look like this : </h2>`
  const eventCard = EventCard({ event: res, user, isArray: false })
  eventCard.classList.add('newEvent')
  boxEventCreated.classList.toggle('movileClass')
  CreateEventForm.classList.toggle('movileClass')
  const gotoEventsButton = button({
    text: 'Explore Events',
    className: 'gotoEvents',
    fnc: (e) => {
      Events()
    }
  })

  boxEventCreated.append(eventCard, gotoEventsButton)
}
