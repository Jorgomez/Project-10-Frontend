import './DynamicButton.css'

export const DynamicButton = ({ className, label, fnc }) => {
  const buttonContainer = document.createElement('div')
  buttonContainer.className = className
  const curvedLabel = `
  <svg class="curvedLabel" width="250" height="100" viewBox="0 0 150 80">
    <defs>
      <path id="text-curve" d="M 10,70 A 70,60 0 0,1 140,70" />
    </defs>
    <text>
      <textPath href="#text-curve">
        ${label}
      </textPath>
    </text>
  </svg>
`
  buttonContainer.innerHTML = curvedLabel
  const buttonFront = document.createElement('button')
  buttonFront.classList.add('buttonFront')

  buttonContainer.addEventListener('click', fnc)
  buttonContainer.append(buttonFront)
  return buttonContainer
}
