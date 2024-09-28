import { RegisterLogin } from '../../pages/RegisterLogin/RegisterLogin'
import { jointEvent } from '../../utils/Functions/Calls/joinEvent'
import { leaveEvent } from '../../utils/Functions/Calls/leaveEvent'
import { Tooltip } from '../ToolTip/ToolTip'

export const joinEventIcon = (boxBgImg, eventId, eventAssistants) => {
  const joinImg = document.createElement('img')
  joinImg.className = 'joinEvent'
  const updateIcon = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      joinImg.src =
        'https://res.cloudinary.com/digcf0lad/image/upload/v1724761326/add-friend_ejyysv.png'
      joinImg.addEventListener('click', RegisterLogin)
      Tooltip(joinImg, 'Go to  Reg/Login to join the event.')

      return
    }

    if (user.events.includes(eventId)) {
      joinImg.src =
        'https://res.cloudinary.com/digcf0lad/image/upload/v1725023210/add-friend_2_tbqpsu.png'

      Tooltip(joinImg, 'Leave this event')
    } else {
      joinImg.src =
        'https://res.cloudinary.com/digcf0lad/image/upload/v1724761326/add-friend_ejyysv.png'
      Tooltip(joinImg, 'Join event')
    }
  }

  const handleClick = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) return

    if (user.events.includes(eventId)) {
      await leaveEvent(eventId)
    } else {
      await jointEvent(eventId, eventAssistants)
    }

    updateIcon()
  }

  updateIcon()
  joinImg.addEventListener('click', handleClick)
  boxBgImg.append(joinImg)
}
