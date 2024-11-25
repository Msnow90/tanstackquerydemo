import axios from './base';

async function createUser({ user }: { user: any}) {
    try {
      const response = await axios.post('/users', { user });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export default createUser;