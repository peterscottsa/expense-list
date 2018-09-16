import React from 'react'
import { Formik, Field } from 'formik'
import { TextArea, Button, FormRow, Subtitle } from 'components'
import { withRouter } from 'react-router'
import Expenses from 'containers/Expenses'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  comment: yup.string().required('You need to fill in a comment.')
})

const AddComment = ({ match }) => (
  <Expenses>
    { ({ addComment, expenses, isLoading }) => (
      <Formik
        initialValues={{
          comment: expenses.hasOwnProperty(match.params.id) ?
            expenses[match.params.id].comment : ''
        }}
        enableReinitialize
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={(values) => addComment(match.params.id, values.comment)}
        render={({ values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Subtitle>Add comment</Subtitle>
            <FormRow>
              <Field name="comment"
                     placeholder="Don't be shy, leave a comment"
                     component={TextArea} />
            </FormRow>

            <FormRow>
              <Button type="submit" disabled={isLoading}>{ isLoading ? 'Saving...' : 'Save comment' }</Button>
            </FormRow>
          </form>
        )}/>
    )}

  </Expenses>
)

export default withRouter(AddComment)