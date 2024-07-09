import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { getAppRouter } from "./router";

export const App = () => {
  return (
    <div>
      <RouterProvider router={getAppRouter()} />
    </div>
  );
};
