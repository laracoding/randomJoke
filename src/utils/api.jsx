const BASE_API_URL = "https://official-joke-api.appspot.com";

export const getRandomJoke = async () => {
  const res = await fetch(`${BASE_API_URL}/random_joke`);

  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};
