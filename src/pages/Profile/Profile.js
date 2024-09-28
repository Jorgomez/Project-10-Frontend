import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import { Users } from '../../components/Users/Users'
import { randerPage } from '../../utils/Functions/functions/randerPage'
import './Profile.css'

export const Profile = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const section = randerPage('profile')
  const members = document.createElement('section')
  members.className = 'membersSection'
  const profileCard = ProfileCard({
    user,
    classNameCard: 'userProfile',
    isArray: false
  })

  // if (user.role === 'admin') {
  //   Users(section)
  // }
  Users(members)

  section.append(profileCard, members)
}
