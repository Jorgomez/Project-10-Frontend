import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { API } from '../../API/API'

export const getAssistans = async (eventID) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  if (!user) {
    console.log('User or token not found')
    return
  }
  // const main = document.querySelector('main')
  // const removeLoading = showLoading(main, 'getting assistants...')
  try {
    const response = await API({
      endpoint: `/events/${eventID}`,
      token: token
    })

    // removeLoading()
    const assistantsData = response.assistants.map((assistant) => ({
      userName: assistant.userName,
      profileImg: assistant.profileImg
        ? assistant.profileImg
        : 'https://res.cloudinary.com/digcf0lad/image/upload/v1711571023/man_azkjut.png'
    }))
    console.log('Assistants user names received successfully', assistantsData)
    return assistantsData
  } catch (error) {
    console.log('Error adding event:', error)
    // removeLoading()
  }
}
