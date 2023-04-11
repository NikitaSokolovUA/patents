import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getInfo = async num => {
  try {
    const { data } = await axios.get(`/api/info/${num}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
