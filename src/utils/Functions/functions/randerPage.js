export const randerPage = (id) => {
  const main = document.querySelector('main')
  const section = document.createElement('section')
  main.innerHTML = ''
  section.id = id
  window.history.pushState({}, '', `/${id}`)
  main.append(section)
  return section
}
