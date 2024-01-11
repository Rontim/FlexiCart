import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { registerUser } from "../../redux/features/userActions";
import { user } from "../../redux/features/userActions";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [re_passwordVisibility, setRePasswordVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const changeRePasswordVisibility = () => {
    setRePasswordVisibility(!re_passwordVisibility);
  };

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  const { email, username, first_name, last_name, password, re_password } =
    formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: user = {
      email,
      username,
      first_name,
      last_name,
      password,
      re_password,
    };
    dispatch(registerUser(newUser));
  };

  if (loading == "succeeded") {
    navigate("/auth/check-email");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label
          htmlFor="first-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>

        <input
          type="text"
          name="first_name"
          value={first_name}
          id="first-name"
          onChange={handleChange}
          placeholder="John"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last name
        </label>
        <input
          type="text"
          name="last_name"
          value={last_name}
          id="last-name"
          onChange={handleChange}
          placeholder="Doe"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <div className="flex">
          <input
            type={passwordVisibility ? "text" : "password"}
            name="password"
            value={password}
            id="password"
            onChange={handleChange}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-s-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <span
            onClick={changePasswordVisibility}
            className="inline-flex items-center cursor-pointer rounded-none rounded-e-lg px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            {passwordVisibility ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 14"
              >
                <g
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                </g>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <div className="flex">
          <input
            type={re_passwordVisibility ? "text" : "password"}
            name="re_password"
            value={re_password}
            id="confirm_password"
            onChange={handleChange}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-s-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <span
            onClick={changeRePasswordVisibility}
            className="inline-flex items-center cursor-pointer rounded-none rounded-e-lg px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            {re_passwordVisibility ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 14"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                </g>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          value={username}
          id="username"
          onChange={handleChange}
          placeholder="your_username"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      {loading == "pending" ? (
        <button
          type="submit"
          disabled
          className="w-full text-white bg-purple-600  focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600   disabled:opacity-50 disabled:cursor-wait"
        >
          Create an account
        </button>
      ) : (
        <button
          type="submit"
          className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 "
        >
          Create an account
        </button>
      )}

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="font-medium text-purple-600 hover:underline dark:text-purple-500"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
