import { API } from '../../API/API'

export const getEventsByIdCall = async (eventID) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  try {
    const response = await API({
      endpoint: `/events/${eventID}`,
      token
    })

    // Si no existe un evento, asegúrate de retornar null o manejar la situación apropiadamente.
    if (!response) {
      // console.log(`Evento con ID ${eventID} no encontrado.`)
      return null // Devuelve null si no se encuentra el evento
    }
    const eventData = response
    return eventData // Si existe, retornas los datos del evento.
  } catch (error) {
    console.error(`Error al obtener el evento con ID: ${eventID}`, error)
    return null // Retorna null en caso de error
  }
}

// export const jointEvent = async (eventID, eventAssistants) => {
//   const user = JSON.parse(localStorage.getItem('user'))
//   const token = localStorage.getItem('token')

//   console.log('User ID:', user._id)
//   if (!user || !token) {
//     console.log('User or token not found')
//     return
//   }
//   const assistantIds = eventAssistants.map((assistant) => assistant._id)
//   console.log('Event Assistants:', assistantIds)
//   const updatedUserEvents = [...user.events, eventID]
//   const updatedEvents = [...assistantIds, user._id]
//   const bodyUser = { events: updatedUserEvents }
//   const bodyEvent = { assistants: updatedEvents }
//   try {
//     const response = await API({
//       endpoint: `/users/${user._id}`,
//       method: 'PUT',
//       body: bodyUser,
//       isJSON: true,
//       token
//     })
//     const userResponse = {
//       name: response.userName,
//       id: response._id,
//       events: response.events
//     }
//     console.log('Event added successfully', userResponse)
//     const response2 = await API({
//       endpoint: `/events/${eventID}`,
//       method: 'PUT',
//       body: bodyEvent,
//       isJSON: true,
//       token
//     })
//     const eventResponse = {
//       event: response2.title,
//       assistants: response2.assistants
//     }
//     console.log('Assistant added successfully', eventResponse)
//     localStorage.setItem('user', JSON.stringify(response))
//   } catch (error) {
//     console.log('Error adding event:', error)
//   }
// }
