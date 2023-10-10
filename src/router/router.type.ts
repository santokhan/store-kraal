export interface routes {
    path: string
    name: string
    component: any
    children?: routes[]
}

export interface ProtectedRoutes extends routes {
    meta: {
        requiresAuth: boolean
    }
}
