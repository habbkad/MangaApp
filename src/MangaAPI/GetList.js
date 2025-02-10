import React from 'react';
import axios from 'axios';

export const GetList = async (url, params) => {
  try {
    const {data} = await axios.get(url, {params});
    return data;
  } catch (e) {
    if (e) {
      return [];
    }
  }
};
