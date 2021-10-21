import axios from 'axios'
// import router from '@/router'

const http = axios.create({
  //baseURL: 'http://localhost:3000/'
  baseURL: 'https://my-json-server.typicode.com/betogroo/json-server/'
})

/* http.interceptors.response.use(
    response =>{
      return response
    },
    error => {
      if (error.response.status === 401 ) {
        console.log('response.error')
        router
          .push({name: 'auth_Restrict'})
          .catch(()=>{})
    }
      return Promise.reject(error)
    }
) */

/* const setBearerToken = token => {
    http.defaults.headers.common['authorization'] = `Bearer ${token}`
    
} */

export default http
