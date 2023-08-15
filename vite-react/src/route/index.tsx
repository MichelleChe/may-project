import { ReactNode, Suspense, PropsWithChildren, FC } from "react";
import { TLogParams, RouteProps } from "./routeType";
import { isDev } from "@/utils/common";
import { AUSH_STAGE_ENUM, useRouteAuth } from "./useRouteAuth";
import { useAppDispatch } from "@/store/hook";
import { login } from "@/store/user";

export function lazyLoad(Comp: React.LazyExoticComponent<React.FC>): ReactNode {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Comp />
    </Suspense>
  );
}

export function createLogParams(name = '', pv = true, duration= true, async = false): TLogParams {
  return {
    name,
    pv,
    duration,
    async
  }
}

// 筛选开发环境路由
export function filterDevRoutes(routes: RouteProps[]) {
  if (isDev) return routes
  return routes
    .map((route) => {
      if (route.meta) {
        const { onlyDev } = route.meta

        if (onlyDev) return null
      }

      if (!route.children) return route
      route.children = filterDevRoutes(route.children)
      return route
    })
    .filter((i) => i !== null) as RouteProps[]
}

// 路由登录权限组件
export const RouterAuth: FC<PropsWithChildren> = ({ children }) => {
  const auth = useRouteAuth()
  const dispatch = useAppDispatch()

  if (auth === AUSH_STAGE_ENUM.authOk) {
    return <>{children}</>
  } else {
    dispatch(login())
    return null
  }
}