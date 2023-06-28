import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

const PcView = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // 处理路由重定向，
    // 如果对应双端都有的路有重定向到对应的端，如果没有则跳转404
    if (isMobile) {
      navigate({ pathname: pathname.replace("/pc", "/app") });
    }
  }, [pathname]);
  return !isMobile ? <Outlet /> : null;
};

export default PcView;
