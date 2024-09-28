import { showLoading } from '../../../components/ShowLoading/ShowLoading'
import { API } from '../../API/API'

export const getAllElementsCall = async (endpoint, elements) => {
  const main = document.querySelector('main')
  const removeLoading = showLoading(main, 'loading elements...')
  const response = await API({
    endpoint: endpoint
  })

  elements = response

  removeLoading()
  return elements
}
