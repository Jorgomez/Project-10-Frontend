import './showLoading.css'

export const showLoading = (element, message = 'Loading...') => {
  const loadingSpinner = document.createElement('div')
  loadingSpinner.className = 'loading-spinner'
  loadingSpinner.innerHTML = `
    <div class="spinner"></div>
    <p>${message}</p>
  `
  element.appendChild(loadingSpinner)

  return () => {
    element.removeChild(loadingSpinner)
  }
}
