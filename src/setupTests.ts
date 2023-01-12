/*
 * Jest-dom adds custom jest matchers for asserting on DOM nodes.
 * allows you to do things like:
 * expect(element).toHaveTextContent(/react/i)
 * learn more: https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom'
  
global.CSS = {
    // @ts-ignore
    supports: (property: string, value: string) => false,
}

global.ResizeObserver = require('resize-observer-polyfill')