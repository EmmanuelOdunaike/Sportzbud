import { createBrowserRouter } from "react-router-dom";
import WelcomeLayout from "../Layout/WelcomeLayout";
import Welcome from "../Pages/Welcome/Welcome";

const router = createBrowserRouter(
   {
        path: "/",
        element: <Welcome></Welcome>,
      };
  
  export default router;
                                   
