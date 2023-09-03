import '@testing-library/jest-dom/vitest'

// Mock for theme.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Reset theme for each test.
beforeEach(() => {
  window.localStorage.clear()
  window.document.documentElement.setAttribute('data-theme', 'light')
})
