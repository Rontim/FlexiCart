import RegisterForm from "../components/RegisterForm/RegisterForm";
import Layout from "../hoc/Layout";

function SignUp() {
  return (
    <Layout>
      <section className="bg-gray-50 flex dark:bg-gray-900">
        <div className="w-full bg-white shadow  md:mt-0 sm:max-w-[50%] xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <RegisterForm />
          </div>
        </div>
        <div className="hidden w-1/2  px-28 md:block bg-white dark:bg-gray-950"></div>
      </section>
    </Layout>
  );
}

export default SignUp;
