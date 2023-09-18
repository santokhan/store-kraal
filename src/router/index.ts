import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";

export interface ProtectedRoutes {
  path: string
  name: string
  component: any
  meta: {
    requiresAuth: boolean
  }
}
export interface routes {
  path: string
  name: string
  component: any
}

export interface Protected extends routes {
  meta: {
    requiresAuth: boolean
  }
}


const financialRoutes: ProtectedRoutes[] = [
  {
    path: '/pl', name: "pl",
    component: () => import("../views/financial-statement/ProfitLossStatementView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/bs', name: "bs",
    component: () => import("../views/financial-statement/BalanceSheetView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/cf', name: "cf",
    component: () => import("../views/financial-statement/CFView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/cashflow', name: "cashflow",
    component: () => import("../views/financial-statement/CashFlowView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/due', name: "due",
    component: () => import("../views/financial-statement/DueView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/statement', name: "statement",
    component: () => import("../views/financial-statement/StatementView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/chart', name: "chart",
    component: () => import("../views/financial-statement/ChartView.vue"),
    meta: { requiresAuth: true }
  }
]


const reportsRoutes: ProtectedRoutes[] = [
  {
    path: '/report/pl', name: "report/pl",
    component: () => import("../views/reports/ProfitAndLossView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/bl', name: "report/bl",
    component: () => import("../views/reports/BalanceSheetsView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/cf', name: "report/cf",
    component: () => import("../views/reports/CashFlowView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/wcf', name: "report/wcf",
    component: () => import("../views/reports/WeekCFView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/kpi', name: "report/kpi",
    component: () => import("../views/reports/KPIView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/br', name: "report/br",
    component: () => import("../views/reports/BaselineView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/rp', name: "report/rp",
    component: () => import("../views/reports/ReportingPackView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/report/ar', name: "report/ar",
    component: () => import("../views/reports/AdhocView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/download-only-report', name: "download-only-report",
    component: () => import("../views/reports/DownloadOnlyPDFView.vue"),
    meta: { requiresAuth: true }
  },
]


const protectedRoutes: ProtectedRoutes[] = [
  {
    path: "/kraalai",
    name: "kraalai",
    component: () => import("../components/kai/Kai.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/kraalai/:id",
    name: "kraalai-with-id", 
    component: () => import("../components/kai/Kai.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/dxcx_individual",
    name: "dxcx_individual",
    component: () => import("../views/DXCX_Individual.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("../views/ReportsView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/bills",
    name: "bills",
    component: () => import("../views/BillView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/user-setting",
    name: "user-setting",
    component: () => import("../views/UserSettingView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/team-setting",
    name: "team-setting",
    component: () => import("../views/TeamSettingView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../views/Logout.vue"),
    meta: { requiresAuth: true },
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
  routes: [...protectedRoutes, ...publicRoutes, ...financialRoutes, ...reportsRoutes],
})
router.beforeEach(async (to: any) => {
  // routes with `meta: { requiresAuth: true }` will check for the users, others won't
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
    }
  } else if (to.meta.requiresAuth === false) {
    const currentUser = await getCurrentUser();
    // if the user is logged in, redirect to `path: '/dashboard'`
    if (currentUser) {
      return {
        path: "/dashboard",
        query: {
          // we keep the current path in the query so we can redirect to it after login
          // with `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      };
    }
  }
})

export default router;
