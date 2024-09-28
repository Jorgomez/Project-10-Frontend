import { button } from '../Button/Button'
import './DoubleCheck.css'
export const doubleCheck = ({ className, message, fnc }) => {
  const containerMsg = document.createElement('div')
  const messageBox = document.createElement('p')
  const buttons = document.createElement('div')
  containerMsg.className = 'doubleCheck'
  containerMsg.classList.add(className)
  messageBox.textContent = message
  const yesButton = button({
    text: 'Yes',
    className: 'yesButton',
    fnc: (e) => {
      fnc()
      document.body.removeChild(containerMsg)
    }
  })
  const noButton = button({
    text: 'No',
    className: 'noButton',
    fnc: (e) => {
      document.body.removeChild(containerMsg)
    }
  })

  buttons.append(yesButton, noButton)
  containerMsg.append(messageBox, buttons)
  document.body.append(containerMsg)
}
