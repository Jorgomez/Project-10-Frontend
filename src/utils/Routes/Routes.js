import { CreateEvents } from '../../pages/CreateEvents/CreateEvents'
import { Events } from '../../pages/Events/Events'
import { Home } from '../../pages/Home/Home'
import { Profile } from '../../pages/Profile/Profile'
import { RegisterLogin } from '../../pages/RegisterLogin/RegisterLogin'
import { logout } from '../Functions/functions/logout'

export const Routes = () => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const routes = [
    {
      path: '/home',
      text: 'Home',
      page: Home
    },
    {
      path: '/events',
      text: 'Events',
      page: Events
    },
    ...(token || user
      ? [
          {
            path: '/create-project',
            text: 'Create an Event',
            page: CreateEvents
          }
        ]
      : []),
    ...(token || user
      ? [
          {
            path: '/profile',
            text: `${user.userName}`,
            page: Profile
          }
        ]
      : []),
    {
      path: '/registerLogin',
      text: token || user ? 'Logout' : 'Register',
      page: token || user ? logout : RegisterLogin
    }
  ]
  return routes
}
