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
    component: () => import("../components/kai/KraalAIStart.vue"),
    meta: {
      requiresAuth: true,
      requiresVerification: true
    },
  },
  {
    path: "/kraalai/:id",
    name: "kraalai-with-id",
    component: () => import("../components/kai/Kai.vue"),
    meta: {
      requiresAuth: true,
      requiresVerification: true
    },
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
    path: "/logout",
    name: "logout",
    component: () => import("../views/Logout.vue"),
    meta: { requiresAuth: true },
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
    path: "/email-verification",
    name: "email-verification",
    component: () => import("../views/VerifyEmailView.vue"),
    // it require authentication not verifyfication. this component will verify
    meta: { requiresAuth: true },
  },
  {
    path: "/email-verified",
    name: "email-verified",
    component: () => import("../views/VerifiedEmailView.vue"),
    // it require authentication not verifyfication. this component will verify
    meta: {
      requiresAuth: true,
      requiresVerification: true
    },
  },
]

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/SignInView.vue"),
  },
  {
    path: "/business-signup",
    name: "business-signup",
    component: () => import("../views/BusinessSignup.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/VerifyEmailView.vue"),
  },
  {
    path: "/verify-email",
    name: "verify-email",
    component: () => import("../views/VerifyEmailView.vue"),
  },
]

const router: any = createRouter({
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
        path: "/signin",
        query: {
          // we keep the current path in the query so we can redirect to it after login
          // with `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      };
    } else if (currentUser && to.meta.requiresVerification) {
      if (currentUser.emailVerified === false) {
        return {
          path: "/email-verification",
          redirect: to.fullPath,
        }
      }
    }
  } else {
    // direct signup > check auth > redirect to home
    if (to.path === '/business-signup') {
      const currentUser = await getCurrentUser();

      // if the user is not logged in, redirect to the login page
      if (currentUser) {
        return { path: "/" };
      }
    }
  }
})

export default router;
