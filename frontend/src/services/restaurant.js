// import http from '../http-common';

// class RestaurantDataService {
//   getAll(page = 0) {
//     return http.get(`restaurants?page=${page}`);
//   }

//   get(id) {
//     return http.get(`/restaurant?id=${id}`);
//   }

//   find(query, by = 'name', page = 0) {
//     return http.get(`restaurants?${by}=${query}&page=${page}`);
//   }

//   createReview(data) {
//     return http.post('/review-new', data);
//   }

//   updateReview(data) {
//     return http.put('/review-edit', data);
//   }

//   deleteReview(id, userId) {
//     return http.delete(`/review-delete?id=${id}`, {
//       data: { user_id: userId },
//     });
//   }

//   getCuisines(id) {
//     return http.get(`cuisines`);
//   }
// }

// export default new RestaurantDataService();

/*******************************************
 
  BENITO DEVELOPER EMPLOYED AS A DEVELOPER

********************************************/

////////////////////THE BELOW FUNCTIONS INTERACT WITH OUR LOCAL BACKEND//////////////////////////////

import http from '../http-common';

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    return http.get(`/id=${id}`);
  }

  find(query, by = 'name', page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post('/review', data);
  }

  updateReview(data) {
    return http.put('/review', data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review?id=${id}`, { data: { user_id: userId } });
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
