import React, { FunctionComponent } from 'react'
import { Box, Button, Checkbox, FormControl, Text } from '@primer/react'
import { formatText, oneTimePadEncode } from '@alecap7/ciphers-js'
import { download, randomString } from '../utils'
import { CustomTextarea } from './CustomTextarea'

export const EncryptionForm: FunctionComponent<any> = () => {
  const initialValues = {
    plainText: '',
    secret: '',
    showPlainText: true,
    showSecret: true,
    autogenerateSecret: false
  }

  const [values, setValues] = React.useReducer(
    (currentValues: any, nextValues: any) => ({ ...currentValues, ...nextValues }),
    initialValues
  )

  const { plainText, secret, showPlainText, showSecret, autogenerateSecret } = values

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, type } = event.target

    if (type === 'textarea') {
      const { value } = event.target
      const formattedValue = formatText(value)

      if (autogenerateSecret as boolean && name === 'plainText') {
        setValues({ secret: randomString(formattedValue.length) })
      }

      setValues({ [name]: formattedValue })
    }

    if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement
      setValues({ [name]: checked })
    }
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
    <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
      <FormControl>
        <FormControl.Label><Text color="fg.text">Plain Text</Text></FormControl.Label>
        <CustomTextarea name="plainText" sx={{ width: '100%' }} value={plainText} onChange={handleChange} showContent={showPlainText}/>
      </FormControl>
      <Box display={'flex'} justifyContent='space-between' margin='10px'>
        <FormControl>
          <Checkbox name="showPlainText" checked={showPlainText} onChange={handleChange}/>
          <FormControl.Label>Show</FormControl.Label>
        </FormControl>
      </Box>
      <FormControl>
        <FormControl.Label><Text color="fg.text">Secret</Text></FormControl.Label>
        <CustomTextarea name="secret" sx={{ width: '100%' }} value={secret} onChange={handleChange} showContent={showSecret} disabled={autogenerateSecret}/>
      </FormControl>
      <Box display={'flex'} justifyContent='space-between' margin='10px'>
        <FormControl>
          <Checkbox name="showSecret" checked={showSecret} onChange={handleChange}/>
          <FormControl.Label>Show</FormControl.Label>
        </FormControl>
        <FormControl>
          <Checkbox name="autogenerateSecret" checked={autogenerateSecret} onChange={handleChange}/>
          <FormControl.Label>Autogenerate</FormControl.Label>
        </FormControl>
      </Box>
      <Button onClick={submit}>Encrypt</Button>
    </Box>
  )
}
