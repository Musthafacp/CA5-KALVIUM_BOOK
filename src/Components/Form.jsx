import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = (data) => {
    if (!data.agreeToTerms) {
      alert("Please agree to the Terms of Service before submitting the form.");
      return;
    }
    setIsRegistered(true);

    console.log("Form data submitted:", data);
  };

  return (
    <>

    <div className="grid justify-center">
      {!isRegistered ? (
        <form
          className="grid justify-center border-2 border-black p-10 mt-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-3xl">CREATE ACCOUNT</h1>
          <div className="mt-4">
            <input
              type="text"
              className="border w-96 h-12 pl-4 mt-5 transition duration-700 focus:outline-none focus:border-red-700"
              {...register("YourName", {
                required: "Your Name is Required",
                minLength: {
                  value: 5,
                  message: "Minimum length is 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum length is 30 Characters",
                },
              })}
              placeholder="Your Name"
            />
            {errors.YourName && (
              <p className="text-red-500 text-sm mt-[-2px] ml-1">
                {errors.YourName.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              type="text"
              className="border w-96 h-12 pl-4 mt-5 transition duration-700 focus:outline-none focus:border-red-700"
              placeholder="Your Email"
              {...register("YourEmail", {
                required: "Email is required",
                pattern: {
                  value: /.*@.*/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.YourEmail && (
              <p className="text-red-500 text-sm mt-[-2px] ml-1">
                {errors.YourEmail.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              type="text"
              className="border w-96 h-12 pl-4 mt-5 transition duration-700 focus:outline-none focus:border-red-700"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 10,
                  message: "Password should be at least 10 characters long",
                },
                pattern: {
                  value: /^(?=.*[!@#$%^&*])/,
                  message:
                    "Password should contain at least one special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-[-2px] ml-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              type="text"
              className="border w-96 h-12 pl-4 mt-5 transition duration-700 focus:outline-none focus:border-red-700"
              placeholder="Repeat Your Password"
              {...register("RepeatPassword", {
                required: "Repeat Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.RepeatPassword && (
              <p className="text-red-500 text-sm mt-[-2px] ml-1">
                {errors.RepeatPassword.message}
              </p>
            )}
          </div>

          <div className="flex justify-start items-center mt-5 transition duration-700 focus:outline-none focus:border-red-700">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              className="h-4 w-4"
              {...register("agreeToTerms", { required: true })}
            />
            <label htmlFor="agreeToTerms" className="ml-3">
              I agree to all statements in
              <a href="" className="text-blue-800 ml-2">
                Terms of service
              </a>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm mt-[-2px] ml-1">
                {errors.agreeToTerms.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white mt-5 py-2 px-4 rounded hover:bg-red-700 transition duration-300 "
          >
            Sign In
          </button>
          <p className="text-center mt-4 flex justify-center">Have already an account? <Link to='/login'><p className="text-blue-800 ml-2">Login here</p></Link></p>
        </form>
      ) : (
        <div className="grid justify-center items-center text-center bg-white shadow-lg p-20 mt-24">
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          <p className="text-5xl mt-10">Registration Successful!</p>
          <Link to='/'><button className="bg-red-500  h-10 mt-8 text-white px-4 py-2 rounded hover:shadow-lg transition duration-300">
          Go Back
        </button></Link>
        </div>
      )}
      
    </div>
  </>
  );
}


export default Form;
