import axios from './base';

async function getUserById(userId: string) {
    try {
      const response = await axios.get(`/users/${userId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export default getUserById;