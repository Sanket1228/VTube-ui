import { RouterProvider } from "react-router-dom";
import { getAppRouter } from "./router";

export const App = () => {
  return (
    <div>
      <RouterProvider router={getAppRouter()} />
    </div>
  );
};
