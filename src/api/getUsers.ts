import axios from './base';

async function getUsers() {
    try {
      const response = await axios.get('/users');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export default getUsers;