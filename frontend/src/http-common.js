import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api/v1/restaurants',
  // baseURL:
  //   'https://eu-central-1.aws.data.mongodb-api.com/app/restaurant-reviews-gdaog/endpoint/',

  headers: {
    'Content-type': 'application/json',
  },
});
