import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { resendActivationEmail } from "../redux/features/userActions";
import { useNavigate } from "react-router-dom";

const ResendActivation = () => {
  const [email, setEmail] = useState<string>("");

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    dispatch(resendActivationEmail(email));
  };

  const navigate = useNavigate();

  if (loading == "succeeded") navigate("/auth/check-email");

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 space-y-10">
        <h1 className="text-2xl font-semibold tracking-wide text-center text-gray-800 dark:text-white md:text-4xl">
          Resend Activation Email
        </h1>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Enter your email bellow to resend your activation email
          </h1>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
          >
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
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>

            {loading == "pending" ? (
              <button
                type="submit"
                disabled
                className="w-full text-white disabled:cursor-wait bg-purple-600 hover:bg-purple-700 focus:ring-0 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-purple-700"
              >
                Resend Activation Email
              </button>
            ) : (
              <button
                type="submit"
                className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 "
              >
                Resend Activation Email
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResendActivation;
