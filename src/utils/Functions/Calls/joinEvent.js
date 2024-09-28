import { EventsJoined } from '../../../components/EventsJoined/EventsJoined'
import { joinEventIcon } from '../../../components/JoinEvent/JoinEventIcon'
import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { API } from '../../API/API'
import { updateJoinedEvents } from '../functions/updateFunctions'

export const jointEvent = async (eventID, eventAssistants) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  console.log('User ID:', user._id)
  if (!user || !token) {
    console.log('User or token not found')
    return
  }
  const assistantIds = eventAssistants.map((assistant) => assistant._id)
  console.log('Event Assistants:', assistantIds)
  const updatedUserEvents = [...user.events, eventID]
  const updatedEvents = [...assistantIds, user._id]
  const bodyUser = { events: updatedUserEvents }
  const bodyEvent = { assistants: updatedEvents }

  // const main = document.querySelector('main')
  // const removeLoading = showLoading(main, 'getting assistants...')
  try {
    const response = await API({
      endpoint: `/users/${user._id}`,
      method: 'PUT',
      body: bodyUser,
      isJSON: true,
      token
    })
    // removeLoading()
    const response2 = await API({
      endpoint: `/events/${eventID}`,
      method: 'PUT',
      body: bodyEvent,
      isJSON: true,
      token
    })
    localStorage.setItem('user', JSON.stringify(response.user))

    const joinedEventsContainer = document.querySelector(
      '.joinedEventsContainer'
    )
    if (joinedEventsContainer) {
      EventsJoined(joinedEventsContainer)
      // const eventCardToAdd = document.querySelector(
      //   `[data-event-id="${eventID}"]`
      // )
      // if (eventCardToAdd) {
      //   const eventCardClone = eventCardToAdd.cloneNode(true)
      //   joinedEventsContainer.append(eventCardClone)
      // }
    }
  } catch (error) {
    console.log('Error adding event:', error)
    // removeLoading()
  }
}
