import CategoriesSection from "./components/CategoriesGroup";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <BlogSection />
    </div>
  );
};

export default Home;
