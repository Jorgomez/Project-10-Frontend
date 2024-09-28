import Swal from 'sweetalert2'
import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { RegisterLogin } from '../../../pages/RegisterLogin/RegisterLogin'
import { API } from '../../API/API'
import { CreatedEvents } from '../../../components/EventsJoined/EventsJoined'
import { updateCreatedEvents } from '../functions/updateFunctions'
import { Header } from '../../../components/Header/Header'

export const deleteElementCall = async ({
  path,
  elementId,
  elementoToDelete
}) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  const main = document.querySelector('main')
  const removeLoading = showLoading(main, 'Deleting event...')
  try {
    const response = await API({
      endpoint: path + elementId,
      method: 'DELETE',
      token
    })
    removeLoading()
    if (elementoToDelete === 'user') {
      if (response) {
        // alert(`User: ${response.userdeleted.userName} successfully deleted!!!`)
        Swal.fire({
          icon: 'success',
          title: 'User Delete Successful!',
          text: `User: ${response.userdeleted.userName}.successfully deleted!!!`,
          timer: 1500,
          showConfirmButton: false
        })

        if (elementId === user._id) {
          localStorage.clear(), Header(), RegisterLogin()
        } else {
          const profileCardToDelete = document.querySelector(
            `[data-user-id="${elementId}"]`
          )
          if (profileCardToDelete) {
            profileCardToDelete.remove()
          }
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Delete Failed',
          text: response.error,
          footer: 'Please try again'
        })
      }
    } else {
      if (response) {
        // alert(`Event: ${response.eventdeleted.title} successfully deleted!!!`)
        Swal.fire({
          icon: 'success',
          title: 'Event Delete Successful!',
          text: `Event: ${response.eventdeleted.title}.successfully deleted!!!`,
          timer: 1500,
          showConfirmButton: false
        })

        const createdEvents = document.querySelector('.createdEvents')
        if (createdEvents) {
          CreatedEvents(createdEvents)
          // const eventCardToAdd = document.querySelector(
          //   `[data-event-id="${eventID}"]`
          // )
          // if (eventCardToAdd) {
          //   const eventCardClone = eventCardToAdd.cloneNode(true)
          //   joinedEventsContainer.append(eventCardClone)
          // }
        }

        const eventCardsToDelete = document.querySelectorAll(
          `[data-event-id="${elementId}"]`
        )
        if (eventCardsToDelete.length > 0) {
          eventCardsToDelete.forEach((card) => card.remove())
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Event Delete Failed',
          text: response.error,
          footer: 'Please try again'
        })
      }
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Delete Error',
      text: error,
      footer: 'Something went wrong whit the Delete. Please try again.'
    })
    removeLoading()
  }
}
