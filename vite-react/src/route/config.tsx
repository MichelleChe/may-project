import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { createLogParams, lazyLoad } from '.'
import { RouteProps } from './routeType'

const routeConfig: RouteProps[] = [{
  path: '/',
  element: lazyLoad(lazy(() => import('@/views/pages/index'))),
  children: [
    {
      path: '/',
      element: <Navigate to="/page1" />
    },
    {
      path: '/page1/:id',
      element: lazyLoad(lazy(() => import('@/views/pages/page1'))),
      loader:({ params }) => {
        console.log(params, '-----')
        return []
      },
      meta: {
        auth: true,
        log: createLogParams('page1')
      }
    },
    {
      path: '/page2',
      element: lazyLoad(lazy(() => import('@/views/pages/page2'))),
      meta: {
        log: createLogParams('page2')
      }
    }
  ]
}]


const commonRouteConfig:RouteProps[] = [
  {
    path: '/svg-view',
    element: lazyLoad(lazy(() => import('@/views/common/svgView'))),
    meta: {
      log: createLogParams('svgView')
    }
  },
]
const config: RouteProps[] = [
  ...routeConfig,
  ...commonRouteConfig,
  {
    path: '*',
    element: lazyLoad(lazy(() => import('@/views/pages/404'))),
  }
]

export default config