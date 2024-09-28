import './toggleNoEvents.css'

export const toggleNoEventsMessage = (container, messageText) => {
  let noEventsMessage = container.querySelector('.noEventsMessage')

  if (!noEventsMessage) {
    noEventsMessage = document.createElement('p')
    noEventsMessage.classList.add('noEventsMessage')
  }

  noEventsMessage.textContent = messageText

  if (!container.hasChildNodes()) {
    container.append(noEventsMessage)
  } else {
    if (noEventsMessage) {
      noEventsMessage.remove()
    }
  }
}
