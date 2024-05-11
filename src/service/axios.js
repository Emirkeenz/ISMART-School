import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const client = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// client.interceptors.request.use((config) => {
//   const access = localStorage.getItem('access') || null;
//   if (access) {
//     config.headers.Authorization = `Bearer ${access}`;
//   }
//   return config;
// });
//
// client.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     const store = require('Redux/store').default;
//     if (error.response.status === 401 && !error.request?.responseURL?.includes('refresh')) {
//       const refreshToken = localStorage.getItem('refresh') || null;
//       if (!refreshToken || refreshToken === 'null' || refreshToken === 'undefined') {
//         // store.dispatch(logout());
//       } else {
//         try {
//           const response = await client.post('accounts/token/refresh/', {
//             refresh: refreshToken
//           });
//           const newAccessToken = response?.data.access;
//           // store.dispatch(
//           //   setToken({
//           //     access: newAccessToken
//           //   })
//           // );
//
//           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//           // Retry the original request
//           return client(originalRequest);
//         } catch (refreshError) {
//           // store.dispatch(logout());
//           return Promise.reject(refreshError);
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );
