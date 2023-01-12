import React, { FunctionComponent } from 'react'
import { Header as PrimerHeader } from '@primer/react'

export interface HeaderProps {
  title: string
  children?: JSX.Element
}

export const Header: FunctionComponent<HeaderProps> = ({ title, children }: HeaderProps) => {
  return (
        <PrimerHeader style={{ height: '5vh' }}>
            <PrimerHeader.Item>
                <PrimerHeader.Link href="#">
                    {title}
                </PrimerHeader.Link>
            </PrimerHeader.Item>
            <PrimerHeader.Item full />
            <PrimerHeader.Item>
                {children}
            </PrimerHeader.Item>
        </PrimerHeader>
  )
}
