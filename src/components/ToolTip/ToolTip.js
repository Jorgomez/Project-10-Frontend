import { getAssistans } from '../../utils/Functions/Calls/getAssistans'
import { ShowAssistans } from '../Assistans/Assistans'
import './Tooltip.css'

export const Tooltip = (element, message, eventID = null) => {
  const tooltip = document.createElement('div')
  tooltip.className = 'tooltip'
  tooltip.innerText = message

  const assistantsContainer = document.createElement('ul')
  assistantsContainer.className = 'assistantsContainer'

  const arrow = document.createElement('div')
  arrow.className = 'tooltip-arrow'
  tooltip.appendChild(arrow)

  element.addEventListener('mouseenter', async (e) => {
    tooltip.style.visibility = 'visible'
    updateTooltipPosition(e)
    document.body.appendChild(tooltip)
    if (eventID) {
      tooltip.classList.add('asisstantTooltip')
      tooltip.innerText = 'Loading attendees...'
      try {
        const assistantsData = await getAssistans(eventID)
        tooltip.innerText = ''
        assistantsContainer.innerHTML = ''
        if (assistantsData && assistantsData.length > 0) {
          ShowAssistans(assistantsContainer, assistantsData)
          tooltip.appendChild(assistantsContainer)
        } else {
          tooltip.innerText = 'No attendees found.'
        }
      } catch (error) {
        tooltip.innerText = 'Failed to load attendees.'
        console.error('Error loading attendees:', error)
      }
    }
  })

  element.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e)
  })

  element.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden'
    tooltip.remove()
  })

  element.addEventListener('click', () => {
    tooltip.style.visibility = 'hidden'
    tooltip.remove()
  })

  const updateTooltipPosition = (e) => {
    const tooltipRect = tooltip.getBoundingClientRect()
    const arrowSize = 10
    const offsetX = 10

    let top = e.pageY - tooltipRect.height - arrowSize
    let left = e.pageX - tooltipRect.width / 2 + offsetX

    if (left < 0) {
      left = 10
    }
    if (left + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width - 10
    }

    tooltip.style.top = `${top}px`
    tooltip.style.left = `${left}px`

    arrow.style.left = `${tooltipRect.width / 2 - arrowSize}px`
  }
}
