import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { activateUser } from "../redux/features/userActions";
import { useNavigate } from "react-router-dom";

const Activate = () => {
  const { uid, token } = useParams<{ uid: string; token: string }>();

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  const activateAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const body = {
      uid,
      token,
    };

    dispatch(activateUser(body));
  };

  if (loading == "succeeded") navigate("/auth/login");

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 space-y-10">
        <h1 className="text-2xl font-semibold tracking-wide text-center text-gray-800 dark:text-white md:text-4xl">
          Activate Account
        </h1>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Account activation
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Please click on the button below to activate your account.
          </p>
          {loading == "pending" ? (
            <button
              onClick={activateAccount}
              disabled
              className="w-full px-4 py-2 my-2 text-sm cursor-wait font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Activate
            </button>
          ) : (
            <button
              onClick={activateAccount}
              className="w-full px-4 py-2 my-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Activate
            </button>
          )}
          {error && (
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Something went wrong,{" "}
              <Link
                to="/auth/resend-activation"
                className="font-medium text-purple-600 hover:underline dark:text-purple-500"
              >
                Resend Activation
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Activate;
