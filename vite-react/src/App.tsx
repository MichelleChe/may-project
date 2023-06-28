import { useRoutes } from "react-router-dom";
import routeConfig from "@/route/config.ts";

function App() {
  const Element = useRoutes(routeConfig);
  return <>{Element}</>;
}

export default App;
