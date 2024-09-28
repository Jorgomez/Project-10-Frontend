import { RegisterLogin } from '../../pages/RegisterLogin/RegisterLogin'
import { deleteElementCall } from '../../utils/Functions/Calls/deleteElementCall'
import { editProfile } from '../../utils/Functions/functions/editProfile'
import { editeProfileCall } from '../../utils/Functions/Calls/editProfileCall'
import { button } from '../Button/Button'
import { doubleCheck } from '../DoubleCheck/DoubleCheck'
let isEditing = false

export const ProfileCard = ({ user, classNameCard, isArray = true }) => {
  const userStorage = JSON.parse(localStorage.getItem('user'))
  const profileCard = document.createElement('article')
  const profileImgBox = document.createElement('div')
  const infoBoxUser = document.createElement('div')
  const buttons = document.createElement('div')
  profileCard.setAttribute('data-user-id', user._id)
  profileImgBox.className = 'profileImgBox'
  infoBoxUser.className = 'infoBoxUser'
  buttons.className = 'buttons'

  profileCard.className = classNameCard

  const joined = new Date(user.createdAt)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = joined.toLocaleDateString('en-GB', options)

  profileImgBox.innerHTML = `<img class="ProfileImage"src="${user.profileImg}" alt="Profile Picture">`
  infoBoxUser.innerHTML = `<h2><span class="userName">${user.userName}</span></h2><p><span class="email">${user.email}</span>
  </p>
  <div>Role : <p class="role">   ${user.role}</p></div>
  <p class="createdAt">Member since : ${formattedDate}</span></p>`

  const editButton = button({
    text: isEditing ? 'Save Info' : 'Edit Profile',
    className: 'editProfileButton',
    fnc: (e) => {
      if (isEditing) {
        editeProfileCall({ e, user, isArray })
      } else {
        editProfile(profileCard, user, isArray)
      }
      isEditing = !isEditing
      const editButton = profileCard.querySelector('.editProfileButton')
      editButton.textContent = isEditing ? 'Save Info' : 'Edit Profile'
    }
  })

  const deleteButton = button({
    text: 'Delete Profile',
    className: 'deleteProfile',
    fnc: (e) => {
      doubleCheck({
        className: 'deleteUserConfirmation',
        message: `Are you sure you want to delete ${user.userName} profile?`,
        fnc: async () => {
          await deleteElementCall({
            e,
            path: '/users/',
            elementId: user._id,
            elementoToDelete: 'user'
          })
        }
      })
    }
  })

  buttons.append(deleteButton, editButton)

  if (!isArray) {
    profileCard.append(profileImgBox, infoBoxUser, buttons)
  } else {
    {
      if (userStorage.role === 'admin') {
        profileCard.append(profileImgBox, infoBoxUser, buttons)
      } else {
        infoBoxUser.classList.add('rolUser')
        profileCard.append(profileImgBox, infoBoxUser)
      }
    }
  }

  return profileCard
}
