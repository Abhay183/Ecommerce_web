import React from 'react';

function LoginSignup() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100">
      <div className="max-w-md w-full px-6">
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">Sign up</h1>
          <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
          <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email Address" />
          <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
          <div className="mb-4">
            <input type="checkbox" id="agree" className="mr-2 leading-tight" />
            <label htmlFor="agree" className="text-sm text-gray-700">By continuing, I agree to the terms of use and privacy policy</label>
          </div>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105" type="button">Submit</button>
        </div>
        <p className="text-center text-gray-700 text-xs ">Already have an account? <span className="text-gray-900 cursor-pointer hover:underline ">Login here</span></p>
      </div>
    </div>
  );
}

export default LoginSignup;
