import {
  CreatedEvents,
  EventsJoined
} from '../../../components/EventsJoined/EventsJoined'
import { CreateEvents } from '../../../pages/CreateEvents/CreateEvents'
import { API } from '../../API/API'
import { updateCreatedEvents } from '../functions/updateFunctions'

export const leaveEvent = async (eventID) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  if (!user || !token) {
    console.log('User or token not found')
    return
  }

  try {
    await API({
      endpoint: `/users/removeEvent/${user._id}`,
      method: 'PUT',
      body: { events: eventID },
      isJSON: true,
      token
    })

    const responseEvent = await API({
      endpoint: `/events/removeAssistance/${eventID}`,
      method: 'PUT',
      body: { assistants: user._id },
      isJSON: true,
      token
    })
    const updatedUser = {
      ...user,
      events: user.events.filter((e) => e !== eventID)
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    const joinedEventsContainer = document.querySelector(
      '.joinedEventsContainer'
    )
    if (joinedEventsContainer) {
      EventsJoined(joinedEventsContainer)
      const eventToLeave = document.querySelector(
        `[data-event-id="${eventID}"]`
      )
      if (eventToLeave) {
        eventToLeave.remove()
      }
    }

    const createdEvents = document.querySelector('.createdEvents')
    if (createdEvents) {
      // if (eventCardsToDelete.length > 0) {
      //   eventCardsToDelete.forEach((card) => card.remove())
      // }
      // if (eventCardsToDelete.length > 0) {
      //   eventCardsToDelete.forEach((card) => card.remove())
      // }
      createdEvents.innerHTML = ''
      CreatedEvents(createdEvents)
    }

    console.log('Event removed successfully from user and event')
  } catch (error) {
    console.error('Error removing event or user:', error)
  }
}

// export const leaveEvent = async (eventID) => {
//   const user = JSON.parse(localStorage.getItem('user'))
//   const token = localStorage.getItem('token')

//   if (!user || !token) {
//     console.log('User or token not found')
//     return
//   }
//   try {
//     const userResponse = await API({
//       endpoint: `/users/removeEvent/${user._id}`,
//       method: 'PUT',
//       body: { events: eventID },
//       isJSON: true,
//       token
//     })
//     localStorage.setItem('user', JSON.stringify(userResponse))

//     console.log('Event removed successfully from user', userResponse)
//   } catch (error) {
//     console.error('Error removing event from user:', error)
//     return
//   }

//   try {
//     const eventResponse = await API({
//       endpoint: `/events/removeAssistance/${eventID}`,
//       method: 'PUT',
//       body: { assistants: user._id },
//       isJSON: true,
//       token
//     })

//     console.log('User removed successfully from event', eventResponse)
//   } catch (error) {
//     console.error('Error removing assistance from event:', error)
//     return
//   }
// }
