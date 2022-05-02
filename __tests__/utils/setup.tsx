const setup = () => {
  beforeAll(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    /* vi.mock("next/link", () => ({ default: ({ children }) => <>{children}</> }))
    vi.mock("next/dist/client/link", () => ({
      default: ({ children }) => <>{children}</>,
    })) */
  })

  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })
}

export default setup