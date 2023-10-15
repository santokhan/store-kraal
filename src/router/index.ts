import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";
import { ProtectedRoutes, routes } from "./router.type";

const financialRoutes: ProtectedRoutes[] = [
  {
    path: '/pl', name: "pl",
    component: () => import("../views/financial-statement/ProfitLossStatementView.vue"),
    meta: { requiresVerification: true }
  },
  {
    path: '/cf', name: "cf",
    component: () => import("../views/financial-statement/CFView.vue"),
    meta: { requiresVerification: true }
  },
  {
    path: '/cashflow', name: "cashflow",
    component: () => import("../views/financial-statement/CashFlowView.vue"),
    meta: { requiresVerification: true }
  },
  {
    path: '/due', name: "due",
    component: () => import("../views/financial-statement/DueView.vue"),
    meta: { requiresVerification: true }
  },
  {
    path: '/statement', name: "statement",
    component: () => import("../views/financial-statement/StatementView.vue"),
    meta: { requiresVerification: true }
  },
  {
    path: '/chart', name: "chart",
    component: () => import("../views/financial-statement/ChartView.vue"),
    meta: { requiresVerification: true }
  }
]

const protectedRoutes: ProtectedRoutes[] = [
  {
    path: "/kraalai",
    name: "kraalai",
    component: () => import("../components/kai/KraalAIStart.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/kraalai/:id",
    name: "kraalai-with-id",
    component: () => import("../components/kai/Kai.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/dxcx_individual",
    name: "dxcx_individual",
    component: () => import("../views/DXCX_Individual.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("../views/ReportsView.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/bills",
    name: "bills",
    component: () => import("../views/BillView.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/user-setting",
    name: "user-setting",
    component: () => import("../views/UserSettingView.vue"),
    meta: { requiresVerification: true },
  },
  {
    path: "/team-setting",
    name: "team-setting",
    component: () => import("../views/TeamSettingView.vue"),
    meta: { requiresVerification: true },
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
    meta: { requiresVerification: true },
  },
  {
    path: "/qb-redirect",
    name: "qb-redirect",
    component: () => import("../views/QuickbooksRedirect.vue"),
    meta: { requiresVerification: true },
  },
]

const publicRoutes: routes[] = [
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
    component: () => import("../views/ForgotPassword.vue"),
  },
]


const router: any = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...protectedRoutes, ...publicRoutes, ...financialRoutes],
})
router.beforeEach(async (to: any) => {
  // routes with `meta: { requiresAuth: true }` will check for the users, others won't
  if (to.meta.requiresAuth === true || to.meta.requiresVerification === true) {
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
    } 
    // else if (to.meta.requiresVerification === true && !currentUser.emailVerified) {
    //   return {
    //     path: "/email-verification",
    //   }
    // }
  } else if (to.meta.requiresAuth === false) {
    // Rare routes
    // on route enter > check auth > redirect
    if (to.path === '/signin') {
      const currentUser = await getCurrentUser();

      // if the user is not logged in, redirect to the login page
      if (currentUser) {
        return { path: "/" };
      }
    } else if (to.path === '/business-signup') {
      const currentUser = await getCurrentUser();

      // if the user is not logged in, redirect to the login page
      if (currentUser) {
        return { path: "/" };
      }
    }
  }
})

export default router;
