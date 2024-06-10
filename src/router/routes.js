const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/member',
    component: () => import('../views/home/home.vue'),
  },
  {
    path: '/memberwide',
    name: 'MemberWide',
    component: () => import('../views/member/member-wide.vue'),
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/member/member.vue'),
  },
  {
    path: '/jiuyechuanye',
    name: 'jiuyechuanye',
    component: () => import('../views/jiuyechuanye/jiuyechuanye.vue'),
  },
  {
    path: '/quanyiweihu',
    name: 'quanyiweihu',
    component: () => import('../views/quanyiweihu/quanyiweihu.vue'),
  },
  {
    path: '/yijiaoanzhi',
    name: 'yijiaoanzhi',
    component: () => import('../views/yijiaoanzhi/yijiaoanzhi.vue'),
  },
  {
    path: '/youfu',
    name: 'youfu',
    component: () => import('../views/youfu/youfu.vue'),
  },
  {
    path: '/gerenhuaxiang',
    name: 'gerenhuaxiang',
    component: () => import('../views/gerenhuaxiang/gerenhuaxiang.vue'),
  },
  {
    path: '/junxiuanzhi',
    name: 'junxiuanzhi',
    component: () => import('../views/junxiuanzhi/junxiuanzhi.vue'),
  },
  {
    path: '/baoyangjinian',
    name: 'baoyangjinian',
    component: () => import('../views/baoyangjinian/baoyangjinian.vue'),
  },
  {
    path: '/shuangyongjianshe',
    name: 'shuangyongjianshe',
    component: () => import('../views/shuangyongjianshe/shuangyongjianshe.vue'),
  },
  {
    path: '/yijianshi',
    name: 'yijianshi',
    component: () => import('../views/yijianshi/yijianshi.vue'),
  },
  {
    path: '/jigouqingkuang',
    name: 'jigouqingkuang',
    component: () => import('../views/jigouqingkuang/jigouqingkuang.vue'),
  },
  {
    path: '/xinfangzoufang',
    name: 'xinfangzoufang',
    meta: { title: '信访走访' },
    component: () => import('../views/xinfangzoufang/xinfangzoufang.vue'),
  },
]

export default routes
