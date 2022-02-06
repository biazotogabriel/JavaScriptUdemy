import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiaWF6b3RvZ2FicmllbEBnbWFpbC5jb20iLCJpYXQiOjE2NDQwOTYwNzEsImV4cCI6MTY0NDcwMDg3MX0.tKt99r-jvXXiH8b6kd8qSxPri5yepU_k37WHCSo4qSU'

export default axios.create({
  baseURL: 'http://34.151.227.242/', // COLOQUE_SUA_URL_AQUI
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
