
const routes = [
  {
    path: '/',
    component: () => import('layouts/emptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/general',
    component: () => import('layouts/headerLayout.vue'),
    children: [
      { path: '/general', component: () => import('pages/General.vue') },
      { path: '/validar', component: () => import('pages/Validar.vue') },
      { path: '/asignar', component: () => import('layouts/asignLayout.vue')},
      { path: '/upload', component: () => import('pages/Upload.vue') },
      { path: '/general/generalUsuario', component: () => import('pages/GeneralUsuario.vue') },
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
