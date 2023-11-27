"use client";
import { Empty } from "keep-react";
import errorImage from "../../../assets/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <img className="w-[100%] mx-auto" src={errorImage} alt="" />
        <Empty
          title="404 Not Found"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
          buttonText="Go To Home Page"
          redirectBtnSize="md"
          redirectUrl="/"
        />
        <div className="mx-auto w-fit">
        <Link to='/'>
        <button className="bg-blue-600 px-5 py-3 text-xl font-semibold text-white rounded-md">Go Back</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
