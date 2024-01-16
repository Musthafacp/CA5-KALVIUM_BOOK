import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    <div className="grid justify-center">
      <form className="grid justify-center border-2 border-black p-10 mt-20">
        <img
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt=""
        />
        <div className="mt-7">
          <input
            type="text"
            className="border w-96 h-12 pl-4 mt-5 transition duration-700 focus:outline-none focus:border-red-700"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="border w-96 h-12 pl-4 mt-5 transition duration-700 focus:outline-none focus:border-red-700"
            placeholder="Password"
          />
        </div>
        <Link to="/" className="">
          <button className="bg-red-500  h-10 w-96 mt-8 text-white px-4 py-2 rounded hover:shadow-lg transition duration-300">
            Login
          </button>
        </Link>
        <p className="text-center mt-4 flex justify-center">Not Registered ? <Link to="/form"><p className="text-blue-600 ml-2">Create an account</p></Link></p>
      </form>
    </div>
    </>
  );
}

export default Login;
