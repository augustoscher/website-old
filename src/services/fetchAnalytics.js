import axios from 'axios';

const BASE_URL = 'https://uqofvhxtyj.execute-api.us-east-1.amazonaws.com/dev/analytics';

export default async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

