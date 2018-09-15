import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export const fetchExpenses = async () => await axios.get(`${baseUrl}/expenses`, {
  params: {
    limit: 500, // Remove this later
    offset: 0
  }
})

export const addCommentToExpense = async (id, comment) =>
  await axios(`${baseUrl}/expenses/${id}`, {
    method: 'POST',
    data: { comment }
})

