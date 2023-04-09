import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7365a3215e1d4af4bd27173969c80c41',
  },
});
