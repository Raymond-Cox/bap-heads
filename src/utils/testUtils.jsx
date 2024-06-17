import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, renderHook } from '@testing-library/react'

/**
 * Generic passthrough component for testing.
 * @param {import('react').PropsWithChildren} props - The children to render.
 */
export const Passthrough = ({ children }) => children

const defaultOptions = { wrapper: Passthrough }

/**
 * Wraps a component with a Router + React-Query client for testing.
 * @param {import('react').ReactElement} Component - The component to render.
 * @param {object} [options] - https://testing-library.com/docs/react-testing-library/api/#render-options
 */
export const renderWithRouter = (Component, options = defaultOptions) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    })

    const WrappedComponent = ({ children }) => {
        const Wrapper = options.wrapper

        return (
            <QueryClientProvider client={queryClient}>
                <Wrapper>{children}</Wrapper>
            </QueryClientProvider>
        )
    }

    return {
        ...render(<WrappedComponent>{Component}</WrappedComponent>),
        queryClient,
    }
}

/**
 * Wraps a hook in a new React-Query client for testing
 * @see https://tkdodo.eu/blog/testing-react-query for general react-query testing
 * @param {(initialProps: any) => any} hook https://react-hooks-testing-library.com/reference/api#callback
 * @param {import('@testing-library/react').RenderHookOptions} options https://react-hooks-testing-library.com/reference/api#renderhook-options
 */
export const renderHookWithQueryClient = (hook, options = {}) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    })

    const WrappedComponent = ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )

    return {
        ...renderHook(hook, { wrapper: WrappedComponent, ...options }),
        queryClient,
    }
}
