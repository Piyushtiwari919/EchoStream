import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { removeNowPlayingMovies } from "../utils/moviesSlice.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { Activity } from "react";

const Header = ({ active }) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user);
  useEffect(() => {
    //Called when auth state cahnged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        console.log(user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(removeNowPlayingMovies());
        if (!active) {
          navigate("/");
        } else {
          navigate("/signup");
        }
      }
    });
    //Unsubscribe when compenent unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleButtonClick = () => {
    setToggleInfo(!toggleInfo);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-linear-to-b from-black px-6 max-sm:py-1 py-2 z-40 w-full flex justify-between items-center">
      <img src="/logo.png" className="w-60 max-sm:w-30 my-0" alt="logo" />
      {user && (
        <>
          <div className="flex items-center gap-4 max-sm:hidden">
            {/* 1. GPT Search Button (Primary Action - larger) */}
            <button
              onClick={handleGptSearchClick}
              className="
                group
                relative
                flex items-center gap-2
                px-5 py-2.5
                cursor-pointer
                bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600
                bg-size-[200%_auto]
                text-white font-bold text-sm uppercase tracking-wide
                rounded-full
                shadow-lg shadow-purple-500/40
                transition-all duration-500 ease-in-out
                hover:bg-position-[right_center]
                hover:scale-105 hover:shadow-purple-500/60
                active:scale-95
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 transition-transform group-hover:rotate-12"
              >
                <path d="M9 9l1.5-4 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" />
                <path d="M19 9l1-2.5 2.5-1-2.5-1-1-2.5-1 2.5-2.5 1 2.5 1 1 2.5z" />
              </svg>
              <span>GPT Search</span>
            </button>

            {/* 2. User Profile Image (Circular & Bordered) */}
            <img
              src={user?.photoURL}
              alt="user profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-sm"
            />

            {/* 3. Sign Out Button (Secondary Action - Subtle) */}
            <button
              onClick={handleSignOut}
              className="
                px-4 py-2 
                cursor-pointer
                bg-red-50 text-red-600 
                text-sm font-semibold 
                rounded-lg border border-red-200
                hover:bg-red-600 hover:text-white hover:border-transparent
                transition-all duration-200
              "
            >
              Sign Out
            </button>
          </div>
          <div className="sm:hidden flex items-center gap-3 relative z-50">
            {/* 1. User Avatar - Increased size for modern standards */}
            <img
              src={user?.photoURL}
              alt="usericon"
              className="w-8 h-8 rounded-full object-cover border border-gray-400 shadow-sm"
            />

            {/* 2. Toggle Button - Larger touch area */}
            <button
              onClick={handleButtonClick}
              className="p-2 text-white focus:outline-none transition-transform active:scale-95"
            >
              {toggleInfo ? (
                <i className="fa-solid fa-xmark text-xl drop-shadow-md cursor-pointer"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl drop-shadow-md cursor-pointer"></i>
              )}
            </button>

            {/* 3. The Dropdown Menu */}
            <Activity mode={toggleInfo ? "visible" : "hidden"}>
              <div
                className="
                  absolute 
                  top-full right-0 mt-2 
                  w-48 
                  bg-gray-900/95 backdrop-blur-md 
                  border border-gray-700 
                  rounded-xl 
                  shadow-2xl 
                  p-2 
                  flex flex-col gap-2
                "
              >
                {/* GPT Search (Highlight Action) */}
                <button
                  onClick={handleGptSearchClick}
                  className="
                    flex items-center justify-center gap-2
                    cursor-pointer
                    w-full py-2.5
                    bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600
                    bg-size-[200%_auto]
                    text-white font-bold text-sm
                    rounded-lg
                    shadow-lg shadow-purple-500/30
                    animate-pulse-slow
                  "
                >
                  <i className="fa-solid fa-sparkles text-xs"></i>
                  GPT Search
                </button>

                {/* Divider */}
                <div className="h-px bg-gray-700 mx-1"></div>

                {/* Sign Out (Standard Action) */}
                <button
                  onClick={handleSignOut}
                  className="
                    w-full py-2 
                    cursor-pointer
                    text-gray-300 text-sm font-medium 
                    hover:bg-white/10 hover:text-white 
                    rounded-lg 
                    transition-colors
                    flex items-center justify-center gap-2
                  "
                >
                  <i className="fa-solid fa-right-from-bracket text-xs"></i>
                  Sign Out
                </button>
              </div>
            </Activity>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
