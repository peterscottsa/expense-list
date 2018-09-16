import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export const fetchExpenses = async () => await axios.get(`${baseUrl}/expenses`, {
  params: {
    limit: 5, // Remove this later
    offset: 0
  }
})

export const addCommentToExpense = async (id, comment) =>
  await axios(`${baseUrl}/expenses/${id}`, {
    method: 'POST',
    data: { comment }
})

export const addReceiptToExpense = async (id, receipt) =>{
  let formData = new FormData()
  formData.append('receipt', receipt)

  return await axios(`${baseUrl}/expenses/${id}/receipts`, {
    method: 'POST',
    data: formData
  })
}
