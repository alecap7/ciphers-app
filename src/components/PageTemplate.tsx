import React, { FunctionComponent } from 'react'
import { Box } from '@primer/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Footer } from './Footer'
import { Header } from './Header'
import packageJson from '../../package.json'

export interface PageTemplateProps {
  children?: JSX.Element
}

export const PageTemplate: FunctionComponent<PageTemplateProps> = ({ children }: PageTemplateProps) => {
  return (
        <>
            <Header title={packageJson.name}>
                <ColorModeSwitcher />
            </Header>
            <Box
                bg="canvas.default"
                width="100%"
                minHeight="95vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={5}
            >
                <Box
                    maxWidth={1000}
                    width="100%"
                    borderRadius={2}
                    p={4}
                    my={6}
                >
                    <Box my={4}>
                        {children}
                    </Box>
                </Box>
                <Footer sourceUrl={packageJson.repository.url} releaseVersion={packageJson.version}/>
            </Box>
        </>
  )
}
