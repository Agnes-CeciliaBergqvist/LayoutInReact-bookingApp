import React, { useState, useEffect } from "react";
import axios from "axios";
import login from "./images/login.png";
import { Link, useHistory } from "react-router-dom";


function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState("");
  const [username, setUsername] = useState("");
  const [, setJwt] = useState("");
  const history = useHistory();


  // FB.getLoginStatus(function(response) {
  //   statusChangeCallback(response);
  // });

  function handleOnChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    // axios request till login sidan
    axios
      .post("https://speedo-booking.herokuapp.com/auth/local", {
        identifier: formValues.username,
        password: formValues.password,
      })
      .then((response) => {
        // Handle success.
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        //Här sparar vi token i localStorage
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("role", response.data.user.role.type);

        //pushar användaren till card sidan när man lyckas logga in
        history.push("/");
        window.location.reload(); //reloadar så att logout kanppen syns istället för login när man loggat in

        //setJwt(response.data.jwt)

        console.log("user data ", response.data);
        setUsername(response.data.user.username);
        setAuthenticated(true);
        // ändra state som kommer att rendera nån component vid inloggning
      })
      .catch((err) => {
        console.log(err);
        // if user is not registered show that he needs to be registered
        setError(err.response.data.message[0].messages[0].message);
      });
  }

  return (
    <>
      {authenticated ? (
        <div> Welcome, we missed you! {username} </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-black-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-24 w-auto rounded-full"
                src={login}
                alt="login-avatar"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login below
              </h2>
            </div>
            <h1 className="text-red-900 font-extrabold m-6">{error}</h1>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleOnSubmit}
              method="POST"
            >
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    autoComplete="username"
                    type="username"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="username"
                    value={formValues.username}
                    onChange={handleOnChange}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Link to="./forgotpassword">
                  <div className="text-sm">
                    <p className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <button
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
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Login
                </button>
                
              </div>
              <div className="font-extrabold">
                Not a member?
                <Link className="underline" to="./registration">
                  Registrate here
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
