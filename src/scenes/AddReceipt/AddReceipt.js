import React from 'react'
import { Formik, Field } from 'formik'
import {
  Button,
  FormRow,
  Subtitle
} from 'components'
import { withRouter } from 'react-router'
import Expenses from 'containers/Expenses'
import { FileUpload } from 'components'
import { LastReceipt } from './styles'

const AddReceipt = ({ match }) => (
  <Expenses>
    { ({ addReceipt, expenses, isLoading }) => (
      <Formik
        initialValues={{
          receipt: '',
          receiptName: '',
          receiptBlob: undefined
        }}
        enableReinitialize
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={ values => addReceipt(match.params.id, values.receiptBlob)}
        render={({ values, errors, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Subtitle>Add receipt</Subtitle>

            { expenses[match.params.id] ?
              <LastReceipt
                src={`http://localhost:3000${expenses[match.params.id].lastReceipt}`} alt="" /> : null
            }

            <FormRow>
              <Field name="receipt_upload"
                     type="file"
                     accept="image/*"
                     fileName={values.receiptName}
                     onChange={e => {
                       setFieldValue('receiptName', e.currentTarget.files[0].name)
                       setFieldValue('receiptBlob', e.currentTarget.files[0])
                     }}
                     component={FileUpload} />
            </FormRow>

            <FormRow>
              <Button
                type="submit"
                disabled={isLoading || !values.receiptBlob}>
                  { isLoading ? 'Saving...' : 'Save receipt' }
              </Button>
            </FormRow>
          </form>
        )}/>
    )}

  </Expenses>
)

export default withRouter(AddReceipt)