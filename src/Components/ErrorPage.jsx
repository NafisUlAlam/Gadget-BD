//import { Link } from "react-router-dom";

import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { data } = useRouteError();
  //console.log(data);
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <figure className="flex justify-center">
          <img src="https://i.ibb.co.com/1Gpjc9M/6478111.png" alt="" />
        </figure>
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mt-4 text-center">
          404 Page Not Found!!!!
        </h2>
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mt-4 text-center">
          {data}
        </h2>
        <div className="text-center">
          <button
            className="btn py-4 px-6 h-auto rounded-full font-bold mt-8 bg-[#9538E2] hover:bg-[#7a21c3] text-white min-h-0"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
