import { getAllElementsCall } from '../../utils/Functions/Calls/getAllElementsCall'
import { ProfileCard } from '../ProfileCard/ProfileCard'

export const Users = async (members) => {
  const userStorage = JSON.parse(localStorage.getItem('user'))
  members.innerHTML = '<h2> Members</h2>'
  const usersContainer = document.createElement('div')
  usersContainer.className = 'usersContainer'
  const profiles = await getAllElementsCall('/users', 'users')
  const filteredProfiles = profiles.filter(
    (profile) => profile._id !== userStorage._id
  )
  for (const profile of filteredProfiles) {
    const profileCard = ProfileCard({
      user: profile,
      classNameCard: 'usersProfiles'
    })
    usersContainer.append(profileCard)
  }
  members.append(usersContainer)
}
