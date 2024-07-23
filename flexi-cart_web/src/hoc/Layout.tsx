import Footer from "../components/Footer";
import NavBar from "../components/NavBar/RootNavBar";
import { useVerifyUser } from "../hooks";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  useVerifyUser();

  return (
    <div className="content-normal px-10 bg-white dark:bg-gray-900">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
