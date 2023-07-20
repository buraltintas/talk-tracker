import {
    AppRouterContext,
    AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context'

const createRouter = (params) => ({
    back: cy.spy().as('back'),
    forward: cy.spy().as('forward'),
    prefetch: cy.stub().as('prefetch').resolves(),
    push: cy.spy().as('push'),
    replace: cy.spy().as('replace'),
    refresh: cy.spy().as('refresh'),
    ...params,
})

const MockNextRouter = ({ children, ...props }) => {
    const router = createRouter(AppRouterInstance)

    return (
        <AppRouterContext.Provider value={router}>
            {children}
        </AppRouterContext.Provider>
    )
}

export default MockNextRouter;