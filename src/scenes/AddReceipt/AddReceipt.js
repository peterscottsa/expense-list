import React from 'react'
import { Formik, Field } from 'formik'
import {
  Button,
  FormRow,
  Subtitle
} from 'components'
import { withRouter } from 'react-router'
import Expenses from 'containers/Expenses'
import { FileUpload, ProgressBar } from 'components'
import { ButtonRow } from './styles'

const AddReceipt = ({ match }) => (
  <Expenses>
    { ({ addReceipt, expenses, isLoading, uploadProgress }) => (
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
            <FormRow>
              <Field
                name="receipt_upload"
                type="file"
                accept="image/*"
                fileName={values.receiptName}
                onChange={e => {
                  setFieldValue('receiptName', e.currentTarget.files[0].name)
                  setFieldValue('receiptBlob', e.currentTarget.files[0])
                }}
                component={FileUpload} />
            </FormRow>

            <ButtonRow>
              <Button
                type="submit"
                disabled={isLoading || !values.receiptBlob}>
                  { isLoading ? 'Saving...' : 'Save receipt' }
              </Button>
              <ProgressBar progress={uploadProgress} />
            </ButtonRow>
          </form>
        )}/>
    )}

  </Expenses>
)

export default withRouter(AddReceipt)