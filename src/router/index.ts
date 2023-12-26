import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";

const financialRoutes: Array<RouteRecordRaw> = [
    {
        path: '/pl', name: "pl",
        component: () => import("../views/financial-statement/ProfitLossStatementView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: '/cf', name: "cf",
        component: () => import("../views/financial-statement/CFView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: '/cashflow', name: "cashflow",
        component: () => import("../views/financial-statement/CashFlowView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: '/due', name: "due",
        component: () => import("../views/financial-statement/DueView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: '/statement', name: "statement",
        component: () => import("../views/financial-statement/StatementView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: '/chart', name: "chart",
        component: () => import("../views/financial-statement/ChartView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    }
]

const protectedRoutes: Array<RouteRecordRaw> = [
    {
        path: "/kraalai",
        name: "kraalai",
        component: () => import("../views/kraal-ai/RootView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
        children: [
            {
                path: "",
                name: "kraal-ai-start",
                component: () => import("../components/kai/KraalAIStart.vue"),
            },
            {
                path: ":id",
                name: "kraal-ai-with-id",
                component: () => import("../components/kai/Kai.vue"),
            },
            {
                path: "rag",
                name: "rag",
                component: () => import("../views/kraal-ai/RAGView.vue"),
            },
            {
                path: "add-feature",
                name: "add-feature",
                component: () => import("../views/kraal-ai/AddFeatureView.vue"),
            },
        ]
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/DashboardView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/dxcx_individual",
        name: "dxcx_individual",
        component: () => import("../views/DXCX_Individual.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/reports",
        name: "reports",
        component: () => import("../views/ReportsView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/bills",
        name: "bills",
        component: () => import("../views/BillView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/user-setting",
        name: "user-setting",
        component: () => import("../views/UserSettingView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/team-setting",
        name: "team-setting",
        component: () => import("../views/TeamSettingView.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/qb-link",
        name: "qb-link",
        component: () => import("../views/QuickbooksConnect.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/qb-redirect",
        name: "qb-redirect",
        component: () => import("../views/QuickbooksRedirect.vue"),
        meta: {
            requiresAuth: true,
            requiresVerification: true
        },
    },
    {
        path: "/user",
        name: "user",
        component: () => import("../views/user/UserRootView.vue"),
        children: [
            {
                path: "sign-up",
                name: "sign-up",
                component: () => import("../views/user/SignUpView.vue"),
            },
            {
                path: "sign-in",
                name: "sign-in",
                component: () => import("../views/user/SignInView.vue"),
            },
            {
                path: "verify",
                name: "verify",
                component: () => import("../views/user/VerifyView.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "verified",
                name: "verified",
                component: () => import("../views/user/VerifiedView.vue"),
                meta: {
                    requiresAuth: true,
                    requiresVerification: true
                },
            },
            {
                path: "forgot",
                name: "forgot",
                component: () => import("../views/user/ForgotPasswordView.vue"),
            },
            {
                path: "sign-out",
                name: "sign-out",
                component: () => import("../views/user/SignOutView.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "profile",
                name: "profile",
                component: () => import("../views/user/ProfileView.vue"),
                meta: {
                    requiresAuth: true,
                    requiresVerification: true
                },
            },
        ]
    },
]

const publicRoutes: Array<RouteRecordRaw> = [
    {
        path: "",
        name: "home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/pricing",
        name: "pricing",
        component: () => import("../views/pricing/PricingView.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...protectedRoutes, ...publicRoutes, ...financialRoutes],
})

router.beforeEach(async (to: any) => {
    // 1. authenticated > 
    // 2. verify email
    if (to.meta.requiresAuth) {
        const currentUser = await getCurrentUser();

        // if the user is not logged in, redirect to the login page
        if (!currentUser) {
            return {
                path: "/user/sign-in",
                query: {
                    // we keep the current path in the query so we can redirect to it after login
                    // with `router.push(route.query.redirect || '/')`
                    redirect: to.fullPath,
                },
            };
        } else if (currentUser && to.meta.requiresVerification) {
            if (currentUser.emailVerified === false) {
                return {
                    path: "/user/verify",
                    redirect: to.fullPath,
                }
            }
        }
    } else {
        // Public route sign-up. But will redirect if user exist
        if (to.path === "/user/sign-up") {
            const currentUser = await getCurrentUser()
            if (currentUser) {
                return { path: "/" }
            }
        }
    }
})

export default router;
