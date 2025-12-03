import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Browse from "./Browse.jsx";
import Login, { SignUp } from "./Login.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";

const Body = () => {
  const dispatch = useDispatch();
  const UserSignUp = SignUp(Login);
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="" element={<Login active={false} />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="browse" element={<Browse />} />
      </Route>
    )
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid,email,displayName,photoURL} = user;
        console.log(user);
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
