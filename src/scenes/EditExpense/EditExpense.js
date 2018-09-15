import React from 'react'
import { Formik, Field } from 'formik'
import { TextArea, CenteredRow } from 'components'
import Expenses from 'containers/Expenses'
import * as yup from 'yup'

const validateSchema = yup.object().shape({
  comment: yup.string().required('You need to fill in a comment.')
})

const EditExpense = props => (
  <Expenses>
    { ({ addComment, allIds }) => (
      <CenteredRow>
        <Formik
          validateSchema={validateSchema}
          onSubmit={(values) => addComment(allIds[0], values.comment)}
          render={({ values, errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="comment"
                     component={TextArea} />

              <button type="submit">Save expense</button>
            </form>
          )}/>
      </CenteredRow>
    )}

  </Expenses>
)

export default EditExpense