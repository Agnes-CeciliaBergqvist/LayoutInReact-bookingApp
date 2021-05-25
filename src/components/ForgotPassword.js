import React, { useState, useEffect } from "react";
import login from "./images/login.png";
import axios from "axios";

function ForgotPassword() {
  function resetRequest() {
    // Request API.
    axios
      .post("http://localhost:1337/auth/reset-password", {
        code: "privateCode",
        password: "myNewPassword",
        passwordConfirmation: "myNewPassword",
      })
      .then((response) => {
        // Handle success.
        console.log("Your user's password has been changed.");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }

  const newInitialValue = {
    email: "",
  };

  const [newPassword, setNewPassword] = useState(newInitialValue);

  function handleOnchange(e) {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/forgot-password", {
        email: newPassword.email,
        url: "http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password",
      })
      .then((response) => {
        console.log("You have received an email");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-full"
              src={login}
              alt="login-avatar"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset password
            </h2>
          </div>

          <form
            className="mt-8 space-y-6"
            onSubmit={handleOnSubmit}
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="username" className="sr-only">
                  Username
                </label>
                <input
                  id="email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                  onChange={handleOnchange}
                  value={newPassword.email}
                />
              </div>
            </div>

            <div>
              <button
                onClick={resetRequest}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
