import { getAssistans } from '../../utils/Functions/Calls/getAssistans'
import { Tooltip } from '../ToolTip/ToolTip'
import './Assistans.css'

export const assistansIcon = (event, user, infoBox) => {
  const assistantsImg = document.createElement('img')
  assistantsImg.src =
    'https://res.cloudinary.com/digcf0lad/image/upload/v1724929598/group_4_wjpaoy.png'
  assistantsImg.className = 'assistantsImg'

  if (!user) {
    infoBox.append(assistantsImg)
    Tooltip(assistantsImg, 'To check attendees, go Reg/login')
    return
  }

  Tooltip(assistantsImg, 'Loading attendees...', event._id)

  infoBox.append(assistantsImg)
}
export const ShowAssistans = (container, assistantsData) => {
  const user = JSON.parse(localStorage.getItem('user'))
  let sameUser = false
  container.innerHTML = ''
  assistantsData.forEach((assistant) => {
    if (user.userName === assistant.userName) {
      sameUser = true
    } else {
      sameUser = false
    }
    const assistantItem = document.createElement('li')
    assistantItem.className = 'userInfo'
    assistantItem.innerHTML = `
      <img src="${assistant.profileImg}" alt="${
      assistant.userName
    }" class="profileImg"/>
      <span class="userNameTooltip">${
        sameUser ? 'You' : assistant.userName
      }</span>
    `
    container.appendChild(assistantItem)
  })
}
