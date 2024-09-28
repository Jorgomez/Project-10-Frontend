const url = 'https://whats-going-on-backend.vercel.app'

export const API = async ({
  endpoint,
  method = 'GET',
  body,
  isJSON = true,
  token = null
}) => {
  const headers = { Authorization: `Bearer ${token}` }

  isJSON ? (headers['Content-Type'] = 'application/json') : null

  try {
    const res = await fetch(url + endpoint, {
      body: isJSON ? JSON.stringify(body) : body,
      method,
      headers
    })

    const response = await res.json()

    if (!res.ok) {
      throw new Error(response.error || `HTTP error! Status: ${res.status}`)
    }

    return response
  } catch (error) {
    console.error('Error in API function:', error)
    return { error: error.message }
  }
}
