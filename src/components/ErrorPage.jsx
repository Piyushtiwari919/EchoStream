import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-[#333]/90 h-dvh w-dvw flex flex-col justify-center items-center text-white relative">
      <img src="../../public/Error-img.jpg" className="w-dvw h-dvh absolute" />
      <div className="absolute font-bold bg-cyan-300/70 flex flex-col items-center p-4 rounded-2xl top-25">
        <h1 className="text-4xl font-bold p-2">OOPS!</h1>
        <h2 className="text-2xl p-2">Sorry, an unexpected error occured</h2>
        <h3 className="text-2xl p-2">
          {error.status} : {error.statusText}
        </h3>
      </div>
    </div>
  );
};

export default ErrorPage;
