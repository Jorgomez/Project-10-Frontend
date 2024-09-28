import { ShowAssistans } from '../../components/Assistans/Assistans'
import { EventCard } from '../../components/EventCard/EventCard'

import { getAllElementsCall } from '../../utils/Functions/Calls/getAllElementsCall'
import { randerPage } from '../../utils/Functions/functions/randerPage'
import './Events.css'

export const Events = async () => {
  window.history.pushState({}, '', '/events')
  const user = JSON.parse(localStorage.getItem('user'))
  const section = randerPage('event')
  const events = await getAllElementsCall('/events', 'events')
  const eventsContainer = document.createElement('div')
  eventsContainer.className = 'eventsContainer'

  section.innerHTML = `<h2 class="eventTitle">What's going on :
  </h2>`
  for (const event of events) {
    const eventCard = EventCard({
      events,
      event,
      user,
      isHome: false
    })
    eventsContainer.append(eventCard)
  }
  section.append(eventsContainer)
}
