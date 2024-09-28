import { getEventsByIdCall } from '../../utils/Functions/Calls/getEventsByIdCall'
import { getAllElementsCall } from '../../utils/Functions/Calls/getAllElementsCall'
import { EventCard } from '../EventCard/EventCard'
import './EventsJoined.css'
import { toggleNoEventsMessage } from '../toggleNoEvents/toggleNoEvents'
import { showLoading } from '../ShowLoading/ShowLoading'

export const EventsJoined = async (joinedEventsContainer) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const ArrayIdElements = user.events || []
  joinedEventsContainer.innerHTML = ''
  if (ArrayIdElements.length === 0) {
    toggleNoEventsMessage(
      joinedEventsContainer,
      'You have not added any event yet'
    )

    return
  }
  // Realizar todas las solicitudes a la API de forma concurrente con Promise.all
  const removeLoading = showLoading(joinedEventsContainer, 'Loading event...')
  const eventPromises = ArrayIdElements.map((idElement) =>
    getEventsByIdCall(idElement)
  )

  // Esperar a que todas las promesas se resuelvan
  const eventsData = await Promise.all(eventPromises)

  // Filtrar los eventos no encontrados o con errores
  const validEvents = eventsData.filter((event) => event !== null)

  // Iterar sobre los eventos y crear las tarjetas
  removeLoading()
  validEvents.forEach((eventData) => {
    const eventCard = EventCard({ event: eventData, user, isArray: true })
    eventCard.className = 'EventCard-Home'
    joinedEventsContainer.append(eventCard)
  })

  // for (const idElement of ArrayIdElements) {
  //   const eventData = await getEventsByIdCall(idElement)
  //   if (!eventData) {
  //     continue
  //   }
  //   const eventCard = EventCard({ event: eventData, user, isArray: true })
  //   eventCard.className = 'EventCard-Home'
  //   joinedEventsContainer.append(eventCard)
  // }

  toggleNoEventsMessage(
    joinedEventsContainer,
    'You have not added any event yet'
  )
}

export const CreatedEvents = async (createdEvents) => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user._id)
  const events = await getAllElementsCall('/events', 'events')
  const eventsCreatedByUser = events.filter((event) => {
    return event.creator === user._id
  })

  if (eventsCreatedByUser.length === 0) {
    toggleNoEventsMessage(createdEvents, 'You have not created any event yet')
    return
  }

  for (const eventData of eventsCreatedByUser) {
    const eventCard = EventCard({ event: eventData, user, isArray: true })
    eventCard.className = 'EventCard-Home'
    const createdEvents = document.querySelector('.createdEvents')
    createdEvents.append(eventCard)
  }

  toggleNoEventsMessage(createdEvents, 'You have not created any event yet')
}
