import { useRef, useState } from "react";
import { validateData } from "../utils/validate.js";
import Header from "./Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.config.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { PHOTO_URL } from "../utils/constants.js";

const Login = ({ active }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    //form validation
    let message = validateData(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //SignIn and SignUp User
    if (name?.current?.value) {
      //SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMsg = error.message;
              setErrorMessage(`${errorCode} : ${errorMsg}`);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(`${errorCode} : ${errorMsg}`);
        });
    } else {
      //SignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(`${errorCode} : ${errorMsg}`);
        });
    }
  };

  return (
    <div>
      <Header active={active}/>
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
          className="h-dvh w-dvw"
        />
      </div>
      <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md bg-[#222]/90 p-8 rounded-md">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-4xl mb-4 text-white font-bold">Sign In</h2>
          {active ? (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full text-white p-2 mb-3 bg-transparent border border-neutral-600 rounded"
            />
          ) : (
            ""
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="w-full text-white p-2 mb-3 bg-transparent border border-neutral-600 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full text-white p-2 mb-4 bg-transparent border border-neutral-600 rounded"
          />
          <p className="text-xl text-red-500 mb-2">{errorMessage}</p>
          <button
            className="w-full py-2 rounded bg-red-600 text-white cursor-pointer"
            onClick={handleBtnClick}
          >
            {active ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {active ? (
          <p className="text-gray-400 my-4 mt-5">
            Already a user?{" "}
            <Link to="/" className="text-white hover:border-b-2 border-white">
              Sign in Now
            </Link>
          </p>
        ) : (
          <p className="text-gray-400 my-4 mt-5">
            New To Netflix?{" "}
            <Link
              to="/signup"
              className="text-white hover:border-b-2 border-white"
            >
              Sign up Now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export const SignUp = (Login) => {
  return () => {
    return <Login active={true} />;
  };
};

export default Login;
