import { goToUrl } from '../../utils/Functions/functions/goToUrl'
import { Routes } from '../../utils/Routes/Routes'

export const Nav = (ul) => {
  const routes = Routes()
  for (const route of routes) {
    const li = document.createElement('li')

    const a = document.createElement('a')

    a.addEventListener('click', (e) => goToUrl(e, route))
    a.textContent = route.text
    a.href = route.path
    li.append(a)
    ul.append(li)
  }
}
