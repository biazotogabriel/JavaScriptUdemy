import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiaWF6b3RvZ2FicmllbEBnbWFpbC5jb20iLCJpYXQiOjE2NDQwMTQ5NzUsImV4cCI6MTY0NDYxOTc3NX0.yzgpblMf098f9C34RRyIC9xC1bGxVR2EQ8RSU4Q5VkA'

export default axios.create({
  baseURL: 'http://34.151.227.242/',
  headers: { Authorization: `Bearer ${token}` },
})
