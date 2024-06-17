/**
 * Add any generic/global testing setup here.
 * Create individual directory/files instead for package mocks.
 */

jest.mock('axios', () => {
    const mocked = jest.genMockFromModule('axios')

    return {
        __esModule: true,
        ...mocked,
    }
})
