export const getShortedURL = async (url) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': API_KEY
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        url: url,
        expiry: 'never'
      })
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error:', err.message);
  }
};



