import './Button.css'
export const button = ({ text, className, fnc }) => {
  const button = document.createElement('button')
  button.textContent = text
  button.classList.add(className)
  button.addEventListener('click', fnc)
  return button
}
