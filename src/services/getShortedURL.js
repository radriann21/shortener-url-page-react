export const getShortedURL = async (url) => {
  const API_URL = import.meta.env.VITE_API_URL
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'url': url
      })
    });

    if (!res.ok) {
      return {
        error: true,
        message: res.statusText
      };
    }

    const data = await res.json();
    return data;

  } catch (err) {
    return {
      error: true,
      message: err.message
    };
  }
};
