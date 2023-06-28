export type TRoute = RouteObject & {
  meta?: {
    onlyDev: boolean
    auth: boolean
    log: TLogParams
  }
}

export type TLogParams = {
  name: string
  pv: boolean
  duration: boolean
  async: boolean
}