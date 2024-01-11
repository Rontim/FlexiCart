import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useVerifyUser } from "../hooks";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  useVerifyUser();

  return (
    <div className="content-normal bg-white dark:bg-gray-900">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
