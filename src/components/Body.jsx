import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Browse from "./Browse.jsx";
import Login, { SignUp } from "./Login.jsx";
import ErrorPage from "./ErrorPage.jsx";

const Body = () => {
  const UserSignUp = SignUp(Login);
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="" element={<Login active={false} />} />
        <Route path="signup" element={<UserSignUp />} />
        <Route path="browse" element={<Browse />} />
        <Route path="error" element={<ErrorPage/>}/>
      </Route>
    )
  );

  return <RouterProvider router={appRouter} />;
};

export default Body;
