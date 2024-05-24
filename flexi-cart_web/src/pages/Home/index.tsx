import Hero from "../../components/Home/Hero";
import Products from "../../components/Home/Products";
import Layout from "../../hoc/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Products />
    </Layout>
  );
};

export default Home;
