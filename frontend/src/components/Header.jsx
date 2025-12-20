import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from "../utils/constants.js";
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
      <img src={LOGO} className="w-40 max-sm:w-30 my-0" alt="logo" />
      {user && (
        <>
          <div className="flex max-sm:hidden">
            <button
              className="bg-purple-800 text-white p-2 mr-4 rounded-md font-bold cursor-pointer"
              onClick={handleGptSearchClick}
            >
              GptSearch
            </button>
            <img
              src={user?.photoURL}
              alt="usericon"
              className="w-10 h-10 mx-2"
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white cursor-pointer text-shadow-md text-shadow-black"
            >
              (Sign Out)
            </button>
          </div>
          <div className="sm:hidden flex relative">
            <img src={user?.photoURL} alt="usericon" className="w-6 h-6 mx-2" />
            <button onClick={handleButtonClick}>
              {toggleInfo ? (
                <i className="fa-solid fa-xmark font-bold text-white cursor-pointer text-shadow-md text-shadow-black"></i>
              ) : (
                <i className="fa-solid fa-bars font-bold text-white cursor-pointer text-shadow-md text-shadow-black"></i>
              )}
            </button>
            <Activity mode={toggleInfo ? "visible" : "hidden"}>
              <div className="absolute bg-[#222]/90 p-1 top-7 left-0 rounded-md">
                <button
                  className="bg-purple-800 text-white p-1 text-sm rounded-sm font-bold cursor-pointer"
                  onClick={handleGptSearchClick}
                >
                  GptSearch
                </button>
                <button
                  onClick={handleSignOut}
                  className="font-bold text-white text-sm cursor-pointer text-shadow-md text-shadow-black px-1"
                >
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
