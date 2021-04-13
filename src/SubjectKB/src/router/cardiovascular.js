const cardiovascular = [
  {
    path: '/',
    name: 'home',
    meta:{
      title: '首页'
    },
    component: resolve => require(['@/components/home'], resolve)
  },
  {
    path: '/resourceNavigation',
    name: 'resourceNavigation',
    component: resolve => require(['@/components/resourceNavigation'], resolve)
  },
];
export default cardiovascular
