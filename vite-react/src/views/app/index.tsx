import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { FC, useEffect } from "react";

const AppView: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // 处理路由重定向，
    // 如果对应双端都有的路有重定向到对应的端，如果没有则跳转404
    if (!isMobile) {
      navigate({ pathname: pathname.replace("/app", "/pc") });
    }
  }, [pathname]);
  return isMobile ? <Outlet /> : null;
};

export default AppView;
