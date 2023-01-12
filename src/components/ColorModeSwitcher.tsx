import { useTheme, ActionMenu, ActionList, Box } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'
import React, { FunctionComponent } from 'react'
import { AnchorAlignment } from '@primer/behaviors'

export const ColorModeSwitcher: FunctionComponent<any> = () => {
  const { setDayScheme, setNightScheme, colorScheme } = useTheme()

  const setScheme = (schemeValue: React.SetStateAction<string>): void => {
    setDayScheme(schemeValue)
    setNightScheme(schemeValue)
  }

  const schemes = [
    {
      name: 'Light',
      value: 'light',
      icon: SunIcon
    },
    {
      name: 'Light colorblind',
      value: 'light_colorblind',
      icon: SunIcon
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: MoonIcon
    },
    {
      name: 'Dark colorblind',
      value: 'dark_colorblind',
      icon: MoonIcon
    },
    {
      name: 'Dark high contrast',
      value: 'dark_high_contrast',
      icon: MoonIcon
    },
    {
      name: 'Dark Dimmed',
      value: 'dark_dimmed',
      icon: MoonIcon
    }
  ]

  const current = schemes.find((scheme) => scheme.value === colorScheme)

  return (
        <Box position="relative" display="flex" justifyContent="flex-end">
            <ActionMenu>
                <ActionMenu.Button size="small">
                    {
                        (current != null) && (
                            <>
                                <current.icon />
                                <Box display="inline-block" ml={2}>
                                    {' '}
                                    {current.name}
                                </Box>
                            </>
                        )
                    }
                </ActionMenu.Button>
                <ActionMenu.Overlay align={'right' as AnchorAlignment}>
                    <ActionList showDividers>
                        <ActionList.Group selectionVariant="single">
                            {schemes.map((scheme) => (
                                <ActionList.Item
                                    key={scheme.value}
                                    // TODO: remove this line --> href="#"
                                    selected={scheme.value === colorScheme}
                                    onSelect={() => { setScheme(scheme.value) }}
                                >
                                    {scheme.name}
                                </ActionList.Item>
                            ))}
                        </ActionList.Group>
                    </ActionList>
                </ActionMenu.Overlay>
            </ActionMenu>
        </Box>
  )
}
