beforeAll(() => {
  jest.useFakeTimers({ advanceTimers: true })
})

afterAll(() => {
  jest.useRealTimers()
})
