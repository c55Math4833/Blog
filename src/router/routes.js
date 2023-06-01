const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      //{ path: "/NotePage", component: () => import("pages/NotePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: '/notes',
    component: () => import('layouts/NoteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/notes/NotePage.vue') }
    ]
  }
  ,
];

export default routes;
