import { DynamicButton } from '../../components/DinamicButton/DynamicButton'
import { HeroHome } from '../../components/HeroHome.js/HeroHome'
import { UserHome } from '../../components/HomeUser/HomeUser'
import { randerPage } from '../../utils/Functions/functions/randerPage'
import { Events } from '../Events/Events'
import './Home.css'

export const Home = () => {
  const section = randerPage('home')
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    section.className = 'homeWelcome'
    const heroHome = HeroHome()
    const dynamicButton = DynamicButton({
      className: 'buttonContainer',
      label: 'Find Upcoming Events',
      fnc: () => Events()
    })
    section.append(dynamicButton, heroHome)
  }

  if (user) {
    section.className = 'homeUser'
    UserHome(user, section)
  }
}
