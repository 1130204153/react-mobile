import { IRouteProps } from 'umi';

const routes: IRouteProps = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: 'index',
      },
      { component: '@/pages/404' },
    ],
  },
];

export default routes;
