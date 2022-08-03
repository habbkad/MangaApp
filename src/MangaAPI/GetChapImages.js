import axios from 'axios';

export const GetChapImages = async (url, params) => {
  try {
    const {data} = await axios.get(url, {params});
    const {chapter} = data;

    return chapter;
  } catch (e) {
    console.log(e);
  }
};
