import Swal from 'sweetalert2'
import { EventCard } from '../../../components/EventCard/EventCard'
import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { API } from '../../API/API'
import { NewEvent } from '../../../components/NewEvent.js/NewEvent'

export const createEventCall = async (e) => {
  e.preventDefault()

  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  if (!user || !token) {
    console.log('User or token not found,')
    return
  }
  const [
    titleInput,
    dateInput,
    cityInput,
    countryInput,
    descriptionInput,
    posterInput
  ] = e.target

  const formData = new FormData()
  formData.append('title', titleInput.value)
  formData.append('date', dateInput.value)
  formData.append('location', `${cityInput.value}, ${countryInput.value}`)
  // formData.append(
  //   'location',
  //   `${streetInput.value}, ${cityInput.value},${countryInput.value}`
  // )
  formData.append('description', descriptionInput.value)
  formData.append('poster', posterInput.files[0])
  console.log('FormData:', formData)

  const removeLoading = showLoading(e.target, 'Creating event...')
  try {
    const res = await API({
      endpoint: '/events',
      method: 'POST',
      body: formData,
      isJSON: false,
      token
    })
    removeLoading()

    if (res.error) {
      Swal.fire({
        icon: 'error',
        title: 'Creating Event Error',
        text: res.error,
        footer: 'Something went wrong Creating this Event. Please try again.'
      })
      return
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Create Event Successful!',
        text: `Congratulation, event ${res.title}. successfully Created!`,
        timer: 3000,
        showConfirmButton: false
      })
      const CreateEventForm = document.querySelector('.CreateEventForm')
      const boxEventCreated = document.querySelector('.boxEventCreated')

      NewEvent(CreateEventForm, boxEventCreated, user, res)
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Creating Event Error',
      text: error,
      footer: 'Something went wrong Creating this Event. Please try again.'
    })
  }
}
