/**
 *
 * Download a txt file
 *
 * @param filename
 * @param content as string
 *
 */
export const download = (filename: string, content: string): void => {
  const element = document.createElement('a')
  const file = new Blob([content], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = filename
  document.body.appendChild(element)
  element.click()
}
