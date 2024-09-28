import { Header } from '../../../components/Header/Header'

export const showNavMovile = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('menuBar')) {
        document.querySelector('.mainNav').classList.toggle('navMovile')
        document.querySelector('.menuBar').classList.toggle('hide-showMenuBar')
        document.querySelector('.cross').classList.toggle('hide-showCross')
      }
    })

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('cross')) {
        document.querySelector('.mainNav').classList.toggle('navMovile')
        document.querySelector('.menuBar').classList.toggle('hide-showMenuBar')
        document.querySelector('.cross').classList.toggle('hide-showCross')
      }
    })

    document.addEventListener('click', (e) => {
      const mainNav = document.querySelector('.mainNav')
      const isMenuVisible = mainNav.classList.contains('navMovile')

      if (
        isMenuVisible &&
        !e.target.classList.contains('menuBar') &&
        !e.target.classList.contains('cross') &&
        !mainNav.contains(e.target)
      ) {
        mainNav.classList.remove('navMovile')
        document.querySelector('.menuBar').classList.remove('hide-showMenuBar')
        document.querySelector('.cross').classList.remove('hide-showCross')
      }
    })
    document.querySelectorAll('.mainNav a').forEach((link) => {
      link.addEventListener('click', () => {
        document.querySelector('.mainNav').classList.remove('navMovile')
        document.querySelector('.menuBar').classList.remove('hide-showMenuBar')
        document.querySelector('.cross').classList.remove('hide-showCross')
      })
    })
  })
}
