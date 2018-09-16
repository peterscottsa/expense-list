import axios from 'axios'
import { buffers, eventChannel, END } from 'redux-saga'
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

const addReceiptToExpense = async (id, receipt, emitter) =>{
  let formData = new FormData()
  formData.append('receipt', receipt)

  let response = await axios(`${baseUrl}/expenses/${id}/receipts`, {
    method: 'POST',
    data: formData,
    onUploadProgress: progressEvent => emitter({progressEvent}),
  })

  emitter({ response })
  emitter(END)
}

export const uploadReceiptChannel = (id, receipt) =>
  eventChannel( emitter => {
    addReceiptToExpense(id, receipt, emitter)
    return () => {}
}, buffers.sliding(2))
