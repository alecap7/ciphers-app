import React, { FunctionComponent } from 'react'
import { Box, Button, FormControl, Text, Textarea } from '@primer/react'
import { formatText, oneTimePadDecode } from '@alecap7/ciphers-js'
import { download } from '../utils'

export const DecryptionForm: FunctionComponent<any> = () => {
  const initialValues = {
    encryptedText: '',
    secret: ''
  }

  const [values, setValues] = React.useReducer(
    (currentValues: any, nextValues: any) => ({ ...currentValues, ...nextValues }),
    initialValues
  )

  const { encryptedText, secret } = values

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues({ [name]: name === 'secret' ? formatText(value) : value })
  }

  const submit = (): void => {
    try {
      const filename = 'decrypted-data'
      const content = oneTimePadDecode(encryptedText, secret, {})
      download(filename, content)
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
        <Box display="grid" gridGap={6}>
            <FormControl>
                <FormControl.Label><Text color="fg.text">Cipher Text</Text></FormControl.Label>
                <Textarea name="encryptedText" sx={{ width: '100%' }} value={encryptedText} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormControl.Label><Text color="fg.text">Secret</Text></FormControl.Label>
                <Textarea name="secret" sx={{ width: '100%' }} value={secret} onChange={handleChange} />
            </FormControl>
            <Button onClick={submit}>Decrypt</Button>
        </Box>
  )
}
