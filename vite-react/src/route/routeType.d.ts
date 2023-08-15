import type { NonIndexRouteObject } from 'react-router-dom'

export type TLogParams = {
  name: string
  pv: boolean
  duration: boolean
  async: boolean
}

export type RouteLogParams = {
  name: string
  pv: boolean
  duration: boolean
  async: boolean
}

// 扩展Route定义
export interface RouteProps extends NonIndexRouteObject {
  meta?: {
    onlyDev?: boolean // 是否是本地环境才有的路由
    auth?: boolean
    log?: RouteLogParams
  }
  children?: RouteProps[]
}
