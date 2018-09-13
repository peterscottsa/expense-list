import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export const fetchExpenses = async () =>  await axios.get(`${baseUrl}/expenses`)

