import { matchRoutes, useLocation } from 'react-router-dom'
import routes from './config'
import { useAppSelector } from '@/store/hook'
import { RouteProps } from './routeType'

// 认证阶段
export const enum AUSH_STAGE_ENUM {
  authOk = 1,
  authFailed = 2
}

export const useRouteAuth = () => {
  const location = useLocation()
  const isLogin = useAppSelector((state) => state.user.isLogin)
  const mathchs = matchRoutes(routes, location)
  // 是否需要登录
  const isNeedLogin = mathchs?.some((item) => {
    const route: RouteProps = item.route

    // 没有配置字段的直接返回
    if (!route.meta) return false
    return route.meta.auth
  })

  let auth: AUSH_STAGE_ENUM = AUSH_STAGE_ENUM.authFailed

  if (!isNeedLogin) {
    auth = AUSH_STAGE_ENUM.authOk
  } else {
    if (isLogin) {
      auth = AUSH_STAGE_ENUM.authOk
    } else {
      auth = AUSH_STAGE_ENUM.authFailed
    }
  }

  return auth
}
