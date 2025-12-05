import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from "../utils/constants.js";

const Header = ({active}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);
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
        if(!active){
        navigate("/");
        }
        else{
          navigate("/signup");
        }
      }
    });
    //Unsubscribe when compenent unmount
    return () => unsubscribe();
  }, []);
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
    <div className="absolute bg-linear-to-b from-black px-6 py-2 z-40 w-full flex justify-between items-center">
      <img
        src={LOGO}
        className="w-40"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img src={user?.photoURL} alt="usericon" className="w-10 h-10 mx-2" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
