import { ProfileCard } from '../../../components/ProfileCard/ProfileCard'
import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { API } from '../../API/API'
import Swal from 'sweetalert2'
export const editeProfileCall = async ({ e, user, isArray }) => {
  e.preventDefault()
  const userEditing = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  if (!userEditing || !token) {
    console.log('User or token not found')
    return
  }
  const profileCard = e.target.closest('article')
  const inputs = profileCard.querySelectorAll('input[type="text"]')
  const profileImgInput = profileCard.querySelector('input[type="file"]')
  const formData = new FormData()
  let hasChanges = false

  inputs.forEach((input) => {
    const inputName = input.className
    const originalValue = isArray ? user[inputName] : userEditing[inputName]
    const inputValues = input.value.trim()
    if (inputValues !== originalValue) {
      formData.append(inputName, inputValues)
      hasChanges = true
      console.log(`Added ${inputName}: ${inputValues} to FormData`)
    }
  })
  if (profileImgInput) {
    if (profileImgInput.files.length > 0) {
      formData.append('profileImg', profileImgInput.files[0])
      hasChanges = true
    }
  }

  const removeLoading = showLoading(profileCard, 'Editing profile...')

  try {
    const response = await API({
      endpoint: `/users/${user._id}`,
      method: 'PUT',
      body: formData,
      isJSON: false,
      token
    })
    removeLoading()
    if (response.error) {
      if (response.error === 'you are not admin') {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: response.message,
          footer: 'To Update role you have to be admin.'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: response.error,
          footer: 'you are not authorized'
        })
        // alert(`you are not authorized: ${response.error}`)
      }
      return
    }
    Swal.fire({
      icon: 'success',
      title: 'Successful update',
      text: `User: ${response.user.userName} successfully updated`,
      timer: 1500,
      showConfirmButton: false
    })

    // alert(`User:${response.user.userName} successfully updated!!!`)
    if (!isArray) {
      localStorage.setItem('user', JSON.stringify(response.user))
    }
    const newProfileCard = ProfileCard({
      user: response.user,
      classNameCard: isArray ? 'usersProfiles' : 'userProfile',
      isArray
    })
    profileCard.replaceWith(newProfileCard)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Update Failed',
      text: error,
      footer: 'Update Failed, try again'
    })

    removeLoading()
  }
}
