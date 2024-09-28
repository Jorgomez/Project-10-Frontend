import { assistansIcon } from '../Assistans/Assistans'
import { DeleteIcon } from '../DeleteIcon/DeleteIcon'

import { joinEventIcon } from '../JoinEvent/JoinEventIcon'

export const EventCard = ({ event, user, isArray = true, isHome = true }) => {
  const eventCard = document.createElement('article')
  const boxBgImg = document.createElement('div')
  const infoBox = document.createElement('div')
  eventCard.setAttribute('data-event-id', event._id)
  boxBgImg.className = 'boxBgImg'
  eventCard.className = 'eventCard'
  infoBox.className = 'infoBox'
  boxBgImg.style.backgroundImage = event.poster
    ? `url(${event.poster})`
    : 'https://res.cloudinary.com/digcf0lad/image/upload/v1726054850/65b157c74e6fb6c92b778c37_eventos-inovacao-tecnologia_2024_numerik_jeo5aq.jpg'

  const eventDate = new Date(event.date)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = eventDate.toLocaleDateString('en-GB', options)

  boxBgImg.innerHTML = `<h3 class="">${event.title}</h3>`

  infoBox.innerHTML = `<p class="date">${formattedDate}</p> <div class="desContainer"><p class="description">${event.description}</p><p class="Location"><img  class="imgLocation"src="https://res.cloudinary.com/digcf0lad/image/upload/v1726851719/placeholder_girozv.png">     ${event.location}</p></div> `

  isArray && joinEventIcon(boxBgImg, event._id, event.assistants)
  isArray && assistansIcon(event, user, infoBox)

  user && DeleteIcon(user, event, boxBgImg)
  eventCard.append(boxBgImg, infoBox)

  return eventCard
}
