import React, { FunctionComponent } from 'react'
import { Box, Button, Checkbox, FormControl, Text } from '@primer/react'
import { oneTimePadDecode } from '@alecap7/ciphers-js'
import { download } from '../utils'
import { CustomTextarea } from './CustomTextarea'

export const DecryptionForm: FunctionComponent<any> = () => {
  const initialValues = {
    encryptedText: '',
    secret: '',
    showEncryptedText: true,
    showSecret: true
  }

  const [values, setValues] = React.useReducer(
    (currentValues: any, nextValues: any) => ({ ...currentValues, ...nextValues }),
    initialValues
  )

  const { encryptedText, secret, showEncryptedText, showSecret } = values

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, type } = event.target

    if (type === 'textarea') {
      const { value } = event.target
      setValues({ [name]: value })
    }

    if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement
      setValues({ [name]: checked })
    }
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
    <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
      <FormControl>
        <FormControl.Label><Text color="fg.text">Cipher Text</Text></FormControl.Label>
        <CustomTextarea name="encryptedText" sx={{ width: '100%' }} value={encryptedText} onChange={handleChange} showContent={showEncryptedText}/>
      </FormControl>
      <Box display={'flex'} justifyContent='space-between' margin='10px'>
        <FormControl>
          <Checkbox name="showEncryptedText" checked={showEncryptedText} onChange={handleChange}/>
          <FormControl.Label>Show</FormControl.Label>
        </FormControl>
      </Box>
      <FormControl>
        <FormControl.Label><Text color="fg.text">Secret</Text></FormControl.Label>
        <CustomTextarea name="secret" sx={{ width: '100%' }} value={secret} onChange={handleChange} showContent={showSecret}/>
      </FormControl>
      <Box display={'flex'} justifyContent='space-between' margin='10px'>
        <FormControl>
          <Checkbox name="showSecret" checked={showSecret} onChange={handleChange}/>
          <FormControl.Label>Show</FormControl.Label>
        </FormControl>
      </Box>
      <Button onClick={submit}>Decrypt</Button>
    </Box>
  )
}
