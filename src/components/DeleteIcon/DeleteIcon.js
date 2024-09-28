import { deleteElementCall } from '../../utils/Functions/Calls/deleteElementCall'
import { doubleCheck } from '../DoubleCheck/DoubleCheck'
import { Tooltip } from '../ToolTip/ToolTip'

export const DeleteIcon = (user, event, boxBgImg) => {
  if (user._id === event.creator || user.role === 'admin') {
    const deleteImg = document.createElement('img')
    deleteImg.className = 'deleteImg'
    deleteImg.src =
      'https://res.cloudinary.com/digcf0lad/image/upload/v1714671088/bin_beteux.png'
    Tooltip(deleteImg, 'Delete event')
    deleteImg.addEventListener('click', (e) => {
      doubleCheck({
        className: 'deleteEventConfirmation',
        message: 'Are you sure you want to delete this event',
        fnc: async () => {
          await deleteElementCall({
            e,
            path: '/events/',
            elementId: event._id,
            elementoToDelete: 'event'
          })
        }
      })
      e.preventDefault()
    })

    boxBgImg.append(deleteImg)
  }
}
