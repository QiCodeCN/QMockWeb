export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'project',
    icon: 'GroupOutlined',
    path: '/project',
    component: './Project',
  },
  {
    path: '/template',
    name: 'template',
    icon: 'ShoppingOutlined',
    component: './Template',
  },
  {
    path: '/Exercise',
    name: 'exercise',
    icon: 'AppstoreAddOutlined',
    routes: [
      {
        path: '/Exercise/ModalDemo',
        name: 'ModalDemo',
        component: './Exercise/ModalDemo'
      },
      {
        path: '/Exercise/FormDemo',
        name: 'FormDemo',
        component: './Exercise/FormDemo'
      },
    ]
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
