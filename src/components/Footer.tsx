import React, { FunctionComponent } from 'react'
import { Box, Link, StyledOcticon, Text } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'

export interface FooterProps {
  sourceUrl: string
  releaseVersion: string
}

export const Footer: FunctionComponent<FooterProps> = ({ sourceUrl, releaseVersion }: FooterProps) => {
  return (
        <Box textAlign="center" marginTop="auto">
            <StyledOcticon icon={MarkGithubIcon} size={24} sx={{ mr: 2 }} />
            <Box>
                <Link href={sourceUrl}>
                    <Text>
                        source code
                    </Text>
                </Link>
                {' / '}
                <Link href={`${sourceUrl.split('.git')[0]}/releases/tag/v${releaseVersion}`}>
                    <Text>
                        release_{releaseVersion}
                    </Text>
                </Link>
            </Box>
        </Box>
  )
}
