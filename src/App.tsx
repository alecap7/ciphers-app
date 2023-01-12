import React, { FunctionComponent } from 'react'
import { ThemeProvider, BaseStyles, Box, FormControl, Select } from '@primer/react'
import { DecryptionForm, EncryptionForm, PageTemplate } from './components'

const App: FunctionComponent<any> = () => {
  return (
    <ThemeProvider colorMode="auto">
      <BaseStyles>
        <PageTemplate>
          <>
            <Box my={4}>
              <FormControl>
                <FormControl.Label>Algorithm</FormControl.Label>
                <Select size="large">
                  <Select.Option value="ONE_TIME_PAD">One Time Pad</Select.Option>
                </Select>
              </FormControl>
            </Box>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={3}>
              <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
                <EncryptionForm />
              </Box>
              <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
                <DecryptionForm />
              </Box>
            </Box>
          </>
        </PageTemplate>
      </BaseStyles>
    </ThemeProvider >
  )
}

export default App
