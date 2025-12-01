import Header from "./Header.jsx";
import { Link } from "react-router-dom";

const Login = ({ active }) => {
  return (
    <div>
      <Header />
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
          className=""
        />
      </div>
      <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md bg-[#222]/90 p-8 rounded-md">
        <form>
          <h2 className="text-4xl mb-4 text-white font-bold">Sign In</h2>
          {active ? (
            <input
              type="text"
              placeholder="Name"
              className="w-full text-white p-2 mb-3 bg-transparent border border-neutral-600 rounded"
            />
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Email address"
            className="w-full text-white p-2 mb-3 bg-transparent border border-neutral-600 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-white p-2 mb-4 bg-transparent border border-neutral-600 rounded"
          />
          <button className="w-full py-2 rounded bg-red-600 text-white cursor-pointer">
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
