import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // Safely extract error details
  const statusCode = error?.status || 500;
  const statusText = error?.statusText || "Something went wrong";
  const errorMessage = error?.data || "We couldn't load the scene you requested.";

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden font-sans text-white">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0">
        <img
          src="/Error-img.jpg"
          alt="Cinematic Background"
          className="h-full w-dvw object-fill opacity-75"
        />
        {/* Gradient Overlay for Readability - Makes it look like a premium movie app */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        {/* Main Heading */}
        <h1 className="text-7xl font-extrabold tracking-tighter text-red-600 sm:text-9xl drop-shadow-lg">
          {statusCode}
        </h1>

        <h2 className="mt-4 text-3xl font-bold tracking-wide sm:text-4xl">
          Scene Missing
        </h2>

        {/* Detailed Error Message */}
        <p className="mt-4 max-w-lg text-lg text-gray-300">
          {statusCode === 404
            ? "The page you are looking for has been cut from the final edit."
            : `${statusText}: ${errorMessage}`}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="rounded bg-white/10 px-6 cursor-pointer py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:scale-105 active:scale-95"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="rounded bg-red-600 px-6 py-3 cursor-pointer font-semibold text-white shadow-lg transition hover:bg-red-700 hover:scale-105 active:scale-95"
          >
            Back to Home
          </button>
        </div>
        
        {/* Technical details*/}
        <p className="absolute bottom-4 text-xs text-gray-600">
           Error Code: {statusCode}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;