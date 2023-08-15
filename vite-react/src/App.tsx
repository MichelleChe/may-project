import { useRoutes } from "react-router-dom";
import routeConfig from "@/route/config";
import { RouterAuth } from '@/route'

function App() {
  const Element = useRoutes(routeConfig);
  return <RouterAuth>{Element}</RouterAuth>;
}

export default App;
