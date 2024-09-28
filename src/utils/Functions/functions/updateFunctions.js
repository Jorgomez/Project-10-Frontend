import {
  CreatedEvents,
  EventsJoined
} from '../../../components/EventsJoined/EventsJoined'
import { Events } from '../../../pages/Events/Events'

// Para actualizar solo la lista de eventos a los que se ha unido el usuario
export const updateJoinedEvents = async () => {
  const joinedEventsContainer = document.querySelector('.joinedEventsContainer')
  joinedEventsContainer.innerHTML = '' // Limpiar el contenedor
  await EventsJoined() // Volver a llamar a la función que randeriza los eventos
}

export const updateCreatedEvents = async () => {
  const createdEvents = document.querySelector('.createdEvents')
  createdEvents.innerHTML = '' // Limpiar el contenedor
  await CreatedEvents() // Volver a llamar a la función que randeriza los eventos
}

// Para actualizar solo la lista de todos los eventos en la página de eventos
export const updateAllEvents = async () => {
  const section = document.querySelector('#event') // Añadir una clase a la sección de eventos
  section.innerHTML = '' // Limpiar el contenedor
  await Events() // Volver a renderizar los eventos
}
