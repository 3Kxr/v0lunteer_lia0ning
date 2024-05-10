import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/3KxrHomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/3KxrLoginView.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/3KxrprojectView.vue"),
      children: [
        {
          path: ":id",
          name: "projectdetail",
          component: () => import("../views/3KxrprojectDetail.vue"),
          props: true,
        },
      ],
    },
    {
      path: "/forgetpasswd",
      name: "forgetpasswd",
      component: () => import("../views/3KxrforgetPasswd.vue"),
    },
    {
      path: "/messagemore",
      name: "messagemore",
      component: () => import("../views/3KxrMessagesMoreView.vue"),
    },
    {
      path: "/infomore",
      name: "infomore",
      component: () => import("../views/3KxrinformationMoreView.vue"),
    },
    {
      path: "/messagedetail",
      name: "messagedetail",
      component: () => import("../views/3Kxrinfoview.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/3KxrNotFound.vue"),
    },
    {
      path: "/userregister",
      name: "userregister",
      component: () => import("../views/3KxrUserRegister.vue"),
    },
    {
      path: "/projectView",
      name: "projectView",
      component: () => import("../views/3KxrprojectView.vue"),
    },
  ],
});

export default router
