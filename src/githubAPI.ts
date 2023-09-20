import axios from 'axios'

async function fetchUser(username: string) {
  const response = await axios.get(`https://api.github.com/users/${username}`)
  return response.data
}

export default fetchUser;