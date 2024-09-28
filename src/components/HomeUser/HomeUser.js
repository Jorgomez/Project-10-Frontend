import { CreatedEvents, EventsJoined } from '../EventsJoined/EventsJoined'

export const UserHome = async (user, section) => {
  const boxjoinedEvents = document.createElement('div')
  const h2 = document.createElement('h2')
  const h3Joined = document.createElement('h3')
  const h3Created = document.createElement('h3')
  const boxCreatedEvents = document.createElement('div')

  const joinedEventsContainer = document.createElement('article')
  const createdEvents = document.createElement('article')

  boxjoinedEvents.className = 'boxjoinedEvents'
  boxCreatedEvents.className = 'boxCreatedEvents'

  joinedEventsContainer.className = 'joinedEventsContainer'
  createdEvents.className = 'createdEvents'
  EventsJoined(joinedEventsContainer)
  CreatedEvents(createdEvents)

  h2.innerHTML = `Hi ${user.userName}, `
  h2.className = 'welcome'
  h3Joined.innerHTML = 'Events you will attend:'
  h3Created.innerHTML = 'Events you created:'

  boxjoinedEvents.append(h2, h3Joined, joinedEventsContainer)
  boxCreatedEvents.append(h3Created, createdEvents)

  section.append(boxjoinedEvents, boxCreatedEvents)
}

// export const UserHome = async (user, section) => {
//   const boxJoinedEvents = await EventsJoined(user)
//   const boxCreatedEvents = await CreatedEvents(user)

//   section.append(boxJoinedEvents, boxCreatedEvents)
// }
