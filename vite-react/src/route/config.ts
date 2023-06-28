import { lazy } from 'react'
import { createLogParams, lazyLoad } from '.'
import { TRoute } from './routeType'

// 如果双端都有的页面路由名称尽量一致，两端会判断进行重定向

const appRouteConfig: TRoute[] = [{
  path: 'app',
  element: lazyLoad(lazy(() => import('@/views/app'))),
  children: [
    {
      index: true,
      path: 'page1',
      element: lazyLoad(lazy(() => import('@/views/app/page2'))),
      meta: {
        log: createLogParams('page2')
      }
    },
    {
      path: '*',
      element: lazyLoad(lazy(() => import('@/views/app/404'))),
    }
  ]
}]

const pcRouteConfig: TRoute[] =  [{
  path: 'pc',
  element: lazyLoad(lazy(() => import('@/views/pc'))),
  children: [
    {
      path: 'page1',
      element: lazyLoad(lazy(() => import('@/views/pc/page1'))),
      meta: {
        auth: true,
        log: createLogParams('page1')
      }
    },
    {
      path: '*',
      element: lazyLoad(lazy(() => import('@/views/pc/404'))),
    }
  ]
}]


const config: TRoute[] = [
  {
    path: '/',
    element: lazyLoad(lazy(() => import('@/views/pc/page1'))),
  },
  ...appRouteConfig,
  ...pcRouteConfig
]

export default config