import React, { FunctionComponent } from 'react'
import { Box, Button, FormControl, Text, Textarea } from '@primer/react'
import { formatText, oneTimePadEncode } from '@alecap7/ciphers-js'
import { download } from '../utils'

export const EncryptionForm: FunctionComponent<any> = () => {
  const initialValues = {
    plainText: '',
    secret: ''
  }

  const [values, setValues] = React.useReducer(
    (currentValues: any, nextValues: any) => ({ ...currentValues, ...nextValues }),
    initialValues
  )

  const { plainText, secret } = values

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues({ [name]: formatText(value) })
  }

  const submit = (): void => {
    try {
      const filename = 'encrypted-data'
      const content = oneTimePadEncode(plainText, secret, {})
      download(filename, content)
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
        <Box display="grid" gridGap={6}>
            <FormControl>
                <FormControl.Label><Text color="fg.text">Plain Text</Text></FormControl.Label>
                <Textarea name="plainText" sx={{ width: '100%' }} value={plainText} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormControl.Label><Text color="fg.text">Secret</Text></FormControl.Label>
                <Textarea name="secret" sx={{ width: '100%' }} value={secret} onChange={handleChange} />
            </FormControl>
            <Button onClick={submit}>Encrypt</Button>
        </Box>
  )
}
