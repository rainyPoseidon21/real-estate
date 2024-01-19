import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <div className="flex flex-col max-w-lg mx-auto">
        <form className="flex flex-col gap-4 p-3">
          <input
            type="text"
            placeholder="username"
            id="username"
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="email"
            id="email"
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="password"
            id="password"
            className="border p-3 rounded-lg"
          />
          <button
            className="bg-slate-700 text-white p-3
         rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            SIGN UP
          </button>
        </form>
        <div className="flex gap-2 mt-5 px-3">
          <p>Have an account?</p>
          <Link to={"/signin"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
