import { Spinner } from "flowbite-react";
import Hero from "../../components/Home/Hero";
import Products from "../../components/Home/Products";
import Layout from "../../hoc/Layout";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();

  if (navigation.state == "loading") {
    return (
      <div className="w-full flex p-4 justify-center">
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <Layout>
      <Hero />
      <Products />
    </Layout>
  );
};

export default Home;
