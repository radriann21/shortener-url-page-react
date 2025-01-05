export const getShortedURL = async (url) => {
  try {
    const API_URL = import.meta.env.VITE_API_URL

    const res = await fetch(API_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url
        })
      }
    )

    if (!res.ok) {
      return {
        error: true,
        message: res.statusText
      }
    }

    const data = await res.json()
    return data

  } catch (err) {
    return {
      error: true,
      message: err.message
    }
  }
}