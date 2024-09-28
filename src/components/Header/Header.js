import { goToUrl } from '../../utils/Functions/functions/goToUrl'
import { showNavMovile } from '../../utils/Functions/functions/menuBar'

import { elementsToCreate } from '../../utils/arrayElements/arrayElements'
import { Nav } from '../Nav/Nav'
import './Header.css'
export const Header = () => {
  const registerHeader = document.querySelector('header')
  if (registerHeader) {
    registerHeader.remove()
  }
  const createdElements = {}
  for (const element of elementsToCreate) {
    createdElements[element.domName] = document.createElement(element.element)
  }
  createdElements.nav.className = 'mainNav'
  createdElements.logo.src =
    'https://res.cloudinary.com/digcf0lad/image/upload/v1711761580/Portafolio/logo_1_1_kczsvy.png'
  createdElements.logo.id = 'logo'
  createdElements.menuBar.className = 'menuBar'
  createdElements.cross.className = 'cross'
  createdElements.menuBar.src =
    'https://res.cloudinary.com/digcf0lad/image/upload/v1711759520/Portafolio/Group_8_hfldi5.png'
  createdElements.cross.src =
    'https://res.cloudinary.com/digcf0lad/image/upload/v1711830955/Portafolio/Group_bkvy8i.png'
  Nav(createdElements.ul)

  createdElements.nav.append(createdElements.ul)
  createdElements.header.append(
    createdElements.logo,
    createdElements.nav,
    createdElements.menuBar,
    createdElements.cross
  )

  document.body.prepend(createdElements.header)
  showNavMovile()
}
