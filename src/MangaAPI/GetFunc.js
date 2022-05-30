import React from 'react';
import axios from 'axios';

export const GetFunc = async (url, params) => {
  try {
    const {data} = await axios.get(url, {params});

    return data;
  } catch (e) {
    console.log(e);
  }
  // let result;
  // axios
  //   .get(url)
  //   .then(function (response) {
  //     // handle success
  //     console.log(response.data.data);
  //     result = response.data;
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  // return result;
};
