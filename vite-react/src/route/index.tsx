import { ReactNode, Suspense } from "react";
import { TLogParams } from "./routeType";

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
