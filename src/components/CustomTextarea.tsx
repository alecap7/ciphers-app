import React, { FunctionComponent } from 'react'
import { Textarea, TextareaProps } from '@primer/react'

export interface CustomTextareaProps {
  showContent?: boolean
}

export const CustomTextarea: FunctionComponent<CustomTextareaProps & TextareaProps> = ({ showContent = true, ...rest }: CustomTextareaProps & TextareaProps) => {
  const style: any = showContent ? {} : { color: 'transparent', textShadow: '0 0 8px rgba(0,0,0,0.5)' }

  return (
        <Textarea {...rest} style={style} />
  )
}
